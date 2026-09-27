import { toRecord } from '../core/record';
import type { MessageRecord } from '../core/types';
import type { GmailClient } from '../gmail/client';
import { GmailApiError } from '../gmail/errors';
import { forEachConcurrent, isAbortError } from '../shared/async';
import type { MessageStore } from './messageStore';

export type ScanApi = Pick<
  GmailClient,
  'getProfile' | 'listMessageIds' | 'getMessageMetadata' | 'listHistory'
>;

export type ScanProgress =
  | { readonly phase: 'syncing' }
  | { readonly phase: 'listing'; readonly listed: number }
  | {
      readonly phase: 'reading';
      readonly done: number;
      readonly total: number;
      readonly cached: number;
      /** Estimated time left, once there is enough data to estimate. */
      readonly etaMs: number | null;
    };

export interface ScanRequest {
  readonly query: string;
  /** 0 or undefined means no limit. */
  readonly max?: number;
  readonly signal?: AbortSignal;
  readonly onProgress?: (progress: ScanProgress) => void;
  /** Called once the matching IDs are known, before their headers are read. */
  readonly onListed?: (ids: readonly string[]) => void;
  /** Called periodically after newly read records are stored, so the UI can update live. */
  readonly onRecords?: () => void;
}

export type ScanOutcome =
  /** `ids`: every message matching the query that still exists, newest first. */
  | { readonly status: 'complete'; readonly ids: string[] }
  /** Stopped by the user. `ids` is null if listing hadn't finished. */
  | { readonly status: 'aborted'; readonly ids: string[] | null };

const CONCURRENCY = 10;
const FLUSH_EVERY = 250;
const LIVE_UPDATE_MS = 1500;

export class Scanner {
  constructor(
    private readonly gmail: ScanApi,
    private readonly now: () => number = () => performance.now(),
  ) {}

  /**
   * Bring `store` up to date for `query`:
   * 1. replay Gmail history since the last checkpoint, so cached unread/inbox flags stay correct;
   * 2. list matching message IDs;
   * 3. read headers only for messages not already cached.
   */
  async scan(store: MessageStore, request: ScanRequest): Promise<ScanOutcome> {
    const { signal, onProgress } = request;
    let ids: string[] | null = null;
    try {
      onProgress?.({ phase: 'syncing' });
      const { historyId } = await this.gmail.getProfile(signal);
      await this.#syncHistory(store, signal);
      // Everything cached now reflects at least `historyId`; records read below are newer still.
      await store.setHistoryId(historyId);

      ids = await this.gmail.listMessageIds(request.query, {
        max: request.max !== undefined && request.max > 0 ? request.max : Infinity,
        signal,
        onProgress: (listed) => onProgress?.({ phase: 'listing', listed }),
      });
      request.onListed?.(ids);
      const gone = await this.#readMissing(store, ids, request);
      return { status: 'complete', ids: gone.size ? ids.filter((id) => !gone.has(id)) : ids };
    } catch (error) {
      if (signal?.aborted && isAbortError(signal.reason)) return { status: 'aborted', ids };
      throw error;
    }
  }

  async #syncHistory(store: MessageStore, signal: AbortSignal | undefined): Promise<void> {
    const since = store.historyId;
    if (!since || store.size === 0) return;
    try {
      const changes = await this.gmail.listHistory(since, signal);
      await store.remove(changes.deleted);
      await store.applyLabelChanges(changes.labelChanges);
    } catch (error) {
      // History older than Gmail keeps (about a week): cached labels can't be trusted, start over.
      if (error instanceof GmailApiError && error.kind === 'not_found') await store.clear();
      else throw error;
    }
  }

  /** Read headers for uncached IDs. Returns IDs that no longer exist. */
  async #readMissing(
    store: MessageStore,
    ids: readonly string[],
    request: ScanRequest,
  ): Promise<Set<string>> {
    const { signal, onProgress, onRecords } = request;
    const missing = ids.filter((id) => !store.has(id));
    const gone = new Set<string>();
    const started = this.now();
    let pending: MessageRecord[] = [];
    let done = 0;
    let lastUpdate = started;

    const report = (): void => {
      const elapsed = this.now() - started;
      onProgress?.({
        phase: 'reading',
        done,
        total: missing.length,
        cached: ids.length - missing.length,
        etaMs: done >= 20 ? (elapsed / done) * (missing.length - done) : null,
      });
    };
    const flush = async (): Promise<void> => {
      const batch = pending;
      pending = [];
      await store.upsert(batch);
    };

    report();
    try {
      await forEachConcurrent(
        missing,
        CONCURRENCY,
        async (id) => {
          try {
            // Await first: `pending.push(await …)` would bind the array before a concurrent flush swaps it.
            const message = await this.gmail.getMessageMetadata(id, signal);
            pending.push(toRecord(message));
          } catch (error) {
            if (!(error instanceof GmailApiError && error.kind === 'not_found')) throw error;
            gone.add(id); // deleted between listing and reading
          }
          done++;
          if (pending.length >= FLUSH_EVERY) await flush();
          if (this.now() - lastUpdate >= LIVE_UPDATE_MS) {
            lastUpdate = this.now();
            report();
            onRecords?.();
          }
        },
        signal,
      );
      report();
    } finally {
      // Keep what was read even if the scan stops early, so the next scan resumes from here.
      await flush();
      onRecords?.();
    }
    return gone;
  }
}
