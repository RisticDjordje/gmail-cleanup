import type * as z from 'zod/mini';
import { BASE_SCOPES, SCOPES } from '../auth/oauth';
import type { RawMessage } from '../core/record';
import { METADATA_HEADERS } from '../core/record';
import { chunk, isAbortError } from '../shared/async';
import { GmailApiError } from './errors';
import type { Clock } from './rateLimiter';
import { QuotaLimiter, realClock } from './rateLimiter';
import type { Profile } from './schemas';
import {
  errorBodySchema,
  filterSchema,
  historyListSchema,
  messageListSchema,
  messageMetadataSchema,
  profileSchema,
} from './schemas';

export interface TokenProvider {
  getToken(options: { interactive: boolean; scopes: readonly string[] }): Promise<string>;
  invalidate(accessToken: string): Promise<void>;
}

/** Gmail quota units per method (https://developers.google.com/gmail/api/reference/quota). */
const COST = {
  profile: 1,
  list: 5,
  get: 5,
  history: 2,
  batchModify: 50,
  batchDelete: 50,
  trash: 5,
  send: 100,
  filter: 5,
} as const;

/** Gmail allows 250 units/user/second; stay comfortably below it. */
export const DEFAULT_UNITS_PER_SECOND = 200;
const BATCH_LIMIT = 1000;
const PAGE_SIZE = 500;
const MAX_ATTEMPTS = 7;
const MAX_BACKOFF_MS = 32_000;
const MAX_RETRY_AFTER_MS = 60_000;

type ParamValue = string | number | boolean | readonly string[] | undefined;

interface RequestOptions {
  readonly method?: 'GET' | 'POST';
  readonly params?: Readonly<Record<string, ParamValue>>;
  readonly body?: unknown;
  readonly cost: number;
  readonly scopes?: readonly string[];
  readonly signal?: AbortSignal | undefined;
}

export interface GmailClientOptions {
  readonly tokens: TokenProvider;
  readonly fetch?: typeof fetch;
  readonly limiter?: QuotaLimiter;
  readonly clock?: Clock;
  readonly random?: () => number;
  readonly baseUrl?: string;
}

export interface Progress {
  readonly signal?: AbortSignal | undefined;
  readonly onProgress?: ((done: number) => void) | undefined;
}

export interface LabelChange {
  readonly add?: readonly string[];
  readonly remove?: readonly string[];
}

export interface HistoryChanges {
  readonly deleted: ReadonlySet<string>;
  /** Label changes in the order they happened. */
  readonly labelChanges: readonly {
    readonly id: string;
    readonly added: readonly string[];
    readonly removed: readonly string[];
  }[];
  readonly historyId: string | null;
}

export interface FilterCriteria {
  readonly from: string;
}
export interface FilterAction {
  readonly addLabelIds?: readonly string[];
  readonly removeLabelIds?: readonly string[];
}

export class GmailClient {
  readonly #tokens: TokenProvider;
  readonly #fetch: typeof fetch;
  readonly #limiter: QuotaLimiter;
  readonly #clock: Clock;
  readonly #random: () => number;
  readonly #baseUrl: string;

  constructor(options: GmailClientOptions) {
    this.#tokens = options.tokens;
    this.#fetch = options.fetch ?? ((input, init) => fetch(input, init));
    this.#clock = options.clock ?? realClock;
    this.#limiter = options.limiter ?? new QuotaLimiter(DEFAULT_UNITS_PER_SECOND, this.#clock);
    this.#random = options.random ?? Math.random;
    this.#baseUrl = options.baseUrl ?? 'https://gmail.googleapis.com/gmail/v1/users/me';
  }

  getProfile(signal?: AbortSignal): Promise<Profile> {
    return this.#request('/profile', profileSchema, { cost: COST.profile, signal });
  }

  /** IDs of all messages matching a Gmail search, newest first, up to `max`. */
  async listMessageIds(
    query: string,
    options: Progress & { max?: number; labelIds?: readonly string[]; includeSpamTrash?: boolean } = {},
  ): Promise<string[]> {
    const max = options.max ?? Infinity;
    const ids: string[] = [];
    let pageToken: string | undefined;
    do {
      const page = await this.#request('/messages', messageListSchema, {
        cost: COST.list,
        signal: options.signal,
        params: {
          q: query || undefined,
          labelIds: options.labelIds,
          includeSpamTrash: options.includeSpamTrash,
          pageToken,
          maxResults: Math.min(PAGE_SIZE, max - ids.length),
          fields: 'messages/id,nextPageToken',
        },
      });
      for (const m of page.messages ?? []) ids.push(m.id);
      options.onProgress?.(ids.length);
      pageToken = page.nextPageToken;
    } while (pageToken && ids.length < max);
    return ids.slice(0, max);
  }

  getMessageMetadata(id: string, signal?: AbortSignal): Promise<RawMessage> {
    return this.#request(`/messages/${encodeURIComponent(id)}`, messageMetadataSchema, {
      cost: COST.get,
      signal,
      params: {
        format: 'metadata',
        metadataHeaders: METADATA_HEADERS,
        fields: 'id,labelIds,sizeEstimate,internalDate,payload/headers',
      },
    });
  }

  /** Add/remove labels on any number of messages, 1000 per request. */
  async batchModify(ids: readonly string[], change: LabelChange, progress: Progress = {}): Promise<void> {
    let done = 0;
    for (const batch of chunk(ids, BATCH_LIMIT)) {
      await this.#request('/messages/batchModify', null, {
        method: 'POST',
        cost: COST.batchModify,
        signal: progress.signal,
        body: { ids: batch, addLabelIds: change.add ?? [], removeLabelIds: change.remove ?? [] },
      });
      done += batch.length;
      progress.onProgress?.(done);
    }
  }

  /** Permanently delete messages (requires the full mail scope), 1000 per request. */
  async batchDelete(ids: readonly string[], progress: Progress = {}): Promise<void> {
    let done = 0;
    for (const batch of chunk(ids, BATCH_LIMIT)) {
      await this.#request('/messages/batchDelete', null, {
        method: 'POST',
        cost: COST.batchDelete,
        scopes: [...BASE_SCOPES, SCOPES.full],
        signal: progress.signal,
        body: { ids: batch },
      });
      done += batch.length;
      progress.onProgress?.(done);
    }
  }

  async trashMessage(id: string, signal?: AbortSignal): Promise<void> {
    await this.#request(`/messages/${encodeURIComponent(id)}/trash`, null, {
      method: 'POST',
      cost: COST.trash,
      signal,
      params: { fields: 'id' },
    });
  }

  async sendMessage(raw: string): Promise<void> {
    await this.#request('/messages/send', null, {
      method: 'POST',
      cost: COST.send,
      body: { raw },
      params: { fields: 'id' },
    });
  }

  async createFilter(criteria: FilterCriteria, action: FilterAction): Promise<void> {
    await this.#request('/settings/filters', filterSchema, {
      method: 'POST',
      cost: COST.filter,
      body: { criteria, action },
    });
  }

  /**
   * Changes since `startHistoryId`. Throws GmailApiError('not_found') if that point is too old
   * for Gmail to replay, in which case the caller must resynchronize from scratch.
   */
  async listHistory(startHistoryId: string, signal?: AbortSignal): Promise<HistoryChanges> {
    const deleted = new Set<string>();
    const labelChanges: { id: string; added: string[]; removed: string[] }[] = [];
    let historyId: string | null = null;
    let pageToken: string | undefined;
    do {
      const page = await this.#request('/history', historyListSchema, {
        cost: COST.history,
        signal,
        params: {
          startHistoryId,
          historyTypes: ['labelAdded', 'labelRemoved', 'messageDeleted'],
          maxResults: PAGE_SIZE,
          pageToken,
        },
      });
      for (const record of page.history ?? []) {
        for (const d of record.messagesDeleted ?? []) deleted.add(d.message.id);
        for (const c of record.labelsAdded ?? [])
          labelChanges.push({ id: c.message.id, added: c.labelIds ?? [], removed: [] });
        for (const c of record.labelsRemoved ?? [])
          labelChanges.push({ id: c.message.id, added: [], removed: c.labelIds ?? [] });
      }
      historyId = page.historyId ?? historyId;
      pageToken = page.nextPageToken;
    } while (pageToken);
    return { deleted, labelChanges, historyId };
  }

  async #request<T>(path: string, schema: z.ZodMiniType<T>, options: RequestOptions): Promise<T>;
  async #request(path: string, schema: null, options: RequestOptions): Promise<void>;
  async #request<T>(
    path: string,
    schema: z.ZodMiniType<T> | null,
    options: RequestOptions,
  ): Promise<T | undefined> {
    const url = this.#url(path, options.params);
    const scopes = options.scopes ?? BASE_SCOPES;
    let refreshedToken = false;

    for (let attempt = 1; ; attempt++) {
      options.signal?.throwIfAborted();
      await this.#limiter.acquire(options.cost, options.signal);
      const token = await this.#tokens.getToken({ interactive: true, scopes });

      let response: Response;
      try {
        response = await this.#fetch(url, {
          method: options.method ?? 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            ...(options.body === undefined ? {} : { 'Content-Type': 'application/json' }),
          },
          body: options.body === undefined ? null : JSON.stringify(options.body),
          signal: options.signal ?? null,
          cache: 'no-store',
        });
      } catch (error) {
        if (isAbortError(error) || options.signal?.aborted) throw error;
        if (attempt >= MAX_ATTEMPTS)
          throw new GmailApiError('network', 'Could not reach Gmail. Check your connection.');
        await this.#backoff(attempt, null, options.signal);
        continue;
      }

      if (response.ok) {
        const text = await response.text();
        if (schema === null) return undefined;
        return parseBody(text, schema);
      }

      const error = await toApiError(response);
      if (error.kind === 'unauthorized' && !refreshedToken) {
        refreshedToken = true;
        await this.#tokens.invalidate(token);
        continue;
      }
      const retriable = error.kind === 'rate_limited' || error.kind === 'server';
      if (retriable && attempt < MAX_ATTEMPTS) {
        await this.#backoff(
          attempt,
          retryAfterMs(response.headers.get('Retry-After'), Date.now()),
          options.signal,
        );
        continue;
      }
      throw error;
    }
  }

  #url(path: string, params: RequestOptions['params'] = {}): string {
    const url = new URL(this.#baseUrl + path);
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === '') continue;
      if (Array.isArray(value))
        for (const item of value as readonly string[]) url.searchParams.append(key, item);
      else url.searchParams.set(key, String(value));
    }
    return url.toString();
  }

  #backoff(attempt: number, retryAfter: number | null, signal: AbortSignal | undefined): Promise<void> {
    const exponential = Math.min(MAX_BACKOFF_MS, 1000 * 2 ** (attempt - 1));
    const delay =
      Math.max(Math.min(retryAfter ?? 0, MAX_RETRY_AFTER_MS), exponential) + this.#random() * 1000;
    return this.#clock.sleep(delay, signal);
  }
}

function parseBody<T>(text: string, schema: z.ZodMiniType<T>): T {
  let json: unknown;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    throw new GmailApiError('invalid_response', 'Gmail returned a malformed response');
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) throw new GmailApiError('invalid_response', 'Gmail returned an unexpected response');
  return parsed.data;
}

const RATE_LIMIT_REASONS = new Set([
  'rateLimitExceeded',
  'userRateLimitExceeded',
  'quotaExceeded',
  'dailyLimitExceeded',
]);

async function toApiError(response: Response): Promise<GmailApiError> {
  let message = `${response.status} ${response.statusText}`.trim();
  let reason: string | null = null;
  try {
    const body = errorBodySchema.safeParse(await response.json());
    if (body.success) {
      message = body.data.error.message ?? message;
      reason = body.data.error.errors?.[0]?.reason ?? body.data.error.status ?? null;
    }
  } catch {
    // Non-JSON error body: keep the status line.
  }
  const status = response.status;
  const kind = ((): GmailApiError['kind'] => {
    if (status === 401) return 'unauthorized';
    if (status === 429 || (status === 403 && reason !== null && RATE_LIMIT_REASONS.has(reason)))
      return 'rate_limited';
    if (status === 403 && /insufficient/i.test(`${reason ?? ''} ${message}`)) return 'insufficient_scope';
    if (status === 404) return 'not_found';
    if (status >= 500) return 'server';
    return 'invalid_request';
  })();
  return new GmailApiError(kind, message, status, reason);
}

/** Parse a Retry-After header (seconds or HTTP date) into milliseconds. */
export function retryAfterMs(header: string | null, now: number): number | null {
  if (!header) return null;
  const seconds = Number(header);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(header);
  return Number.isNaN(date) ? null : Math.max(0, date - now);
}
