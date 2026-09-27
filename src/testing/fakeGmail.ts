import type { RawMessage } from '../core/record';
import type { FilterAction, FilterCriteria, HistoryChanges, LabelChange, Progress } from '../gmail/client';
import { GmailApiError } from '../gmail/errors';
import type { Profile } from '../gmail/schemas';

export interface FakeSender {
  readonly name: string;
  readonly email: string;
  readonly count: number;
  /** Every n-th message is read; 0 = all read. Default 5 (80% unread). */
  readonly readEvery?: number;
  /** The first n messages are starred. */
  readonly starred?: number;
  readonly unsubscribe?: { readonly oneClick?: string; readonly mailto?: string; readonly website?: string };
  readonly subjects?: readonly string[];
  readonly size?: (index: number) => number;
}

interface FakeMessage {
  readonly id: string;
  readonly from: string;
  readonly internalDate: number;
  readonly sizeEstimate: number;
  readonly labels: Set<string>;
  readonly headers: { name: string; value: string }[];
}

type HistoryEntry =
  | { readonly id: number; readonly kind: 'deleted'; readonly messageId: string }
  | {
      readonly id: number;
      readonly kind: 'added' | 'removed';
      readonly messageId: string;
      readonly labels: string[];
    };

const DAY = 86_400_000;

/**
 * In-memory Gmail backend implementing the same surface as GmailClient.
 * Supports the subset of search syntax the extension generates.
 */
export class FakeGmail {
  readonly messages = new Map<string, FakeMessage>();
  readonly filters: { criteria: FilterCriteria; action: FilterAction }[] = [];
  readonly sent: string[] = [];
  readonly calls: string[] = [];
  #history: HistoryEntry[] = [];
  #historyId = 1000;
  /** History before this ID has been "expired" (simulates Gmail's retention window). */
  #historyFloor = 0;
  /** Reject label-based trashing, to exercise the fallback path. */
  rejectTrashLabel = false;

  constructor(
    readonly emailAddress: string,
    senders: readonly FakeSender[] = [],
    { idPrefix = 'm', now = Date.UTC(2026, 8, 1), spreadDays = 700 } = {},
  ) {
    let n = 0;
    for (const s of senders) {
      for (let i = 0; i < s.count; i++) {
        const id = `${idPrefix}${++n}`;
        const headers = [
          { name: 'From', value: `"${s.name}" <${s.email}>` },
          { name: 'Subject', value: s.subjects?.[i % s.subjects.length] ?? `${s.name} message #${i + 1}` },
        ];
        if (s.unsubscribe?.oneClick) {
          headers.push({ name: 'List-Unsubscribe', value: `<${s.unsubscribe.oneClick}>` });
          headers.push({ name: 'List-Unsubscribe-Post', value: 'List-Unsubscribe=One-Click' });
        } else if (s.unsubscribe?.mailto || s.unsubscribe?.website) {
          const parts = [s.unsubscribe.mailto, s.unsubscribe.website]
            .filter(Boolean)
            .map((u) => `<${u ?? ''}>`);
          headers.push({ name: 'List-Unsubscribe', value: parts.join(', ') });
        }
        const labels = new Set(['INBOX']);
        const readEvery = s.readEvery ?? 5;
        if (!(readEvery === 0 || i % readEvery === 0)) labels.add('UNREAD');
        if (s.starred !== undefined && i < s.starred) labels.add('STARRED');
        this.messages.set(id, {
          id,
          from: s.email,
          internalDate: now - Math.floor(((i + 0.5) / s.count) * spreadDays * DAY) - (n % 97) * 60_000,
          sizeEstimate: s.size?.(i) ?? 20_000 + (n % 7) * 15_000,
          labels,
          headers,
        });
      }
    }
  }

  get historyId(): string {
    return String(this.#historyId);
  }

  /** Forget history before now, as if it aged out of Gmail's retention. */
  expireHistory(): void {
    this.#historyFloor = ++this.#historyId;
    this.#history = [];
  }

  /** Change labels as if the user did it in Gmail (recorded in history). */
  relabel(ids: readonly string[], change: LabelChange): void {
    for (const id of ids) {
      const m = this.messages.get(id);
      if (!m) continue;
      const added = (change.add ?? []).filter((l) => !m.labels.has(l));
      const removed = (change.remove ?? []).filter((l) => m.labels.has(l));
      for (const l of added) m.labels.add(l);
      for (const l of removed) m.labels.delete(l);
      if (added.length)
        this.#history.push({ id: ++this.#historyId, kind: 'added', messageId: id, labels: added });
      if (removed.length)
        this.#history.push({ id: ++this.#historyId, kind: 'removed', messageId: id, labels: removed });
    }
  }

  deleteMessages(ids: readonly string[]): void {
    for (const id of ids) {
      if (this.messages.delete(id))
        this.#history.push({ id: ++this.#historyId, kind: 'deleted', messageId: id });
    }
  }

  labelsOf(id: string): string[] {
    return [...(this.messages.get(id)?.labels ?? [])].sort();
  }

  idsFrom(email: string): string[] {
    return [...this.messages.values()].filter((m) => m.from === email).map((m) => m.id);
  }

  // --- GmailClient surface -------------------------------------------------

  getProfile(signal?: AbortSignal): Promise<Profile> {
    signal?.throwIfAborted();
    this.calls.push('getProfile');
    return Promise.resolve({
      emailAddress: this.emailAddress,
      messagesTotal: this.messages.size,
      historyId: this.historyId,
    });
  }

  listMessageIds(
    query: string,
    options: Progress & { max?: number; labelIds?: readonly string[]; includeSpamTrash?: boolean } = {},
  ): Promise<string[]> {
    options.signal?.throwIfAborted();
    this.calls.push(`list ${query}`);
    const ids = [...this.messages.values()]
      .filter((m) => matches(m, query, options.includeSpamTrash ?? false, options.labelIds ?? []))
      .sort((a, b) => b.internalDate - a.internalDate)
      .map((m) => m.id)
      .slice(0, options.max ?? Infinity);
    options.onProgress?.(ids.length);
    return Promise.resolve(ids);
  }

  getMessageMetadata(id: string, signal?: AbortSignal): Promise<RawMessage> {
    signal?.throwIfAborted();
    const m = this.messages.get(id);
    if (!m) return Promise.reject(new GmailApiError('not_found', 'Not Found', 404));
    return Promise.resolve({
      id: m.id,
      internalDate: String(m.internalDate),
      sizeEstimate: m.sizeEstimate,
      labelIds: [...m.labels],
      payload: { headers: m.headers },
    });
  }

  listHistory(startHistoryId: string, signal?: AbortSignal): Promise<HistoryChanges> {
    signal?.throwIfAborted();
    const start = Number(startHistoryId);
    if (start < this.#historyFloor) {
      return Promise.reject(new GmailApiError('not_found', 'Requested entity was not found.', 404));
    }
    const deleted = new Set<string>();
    const labelChanges: { id: string; added: string[]; removed: string[] }[] = [];
    for (const entry of this.#history) {
      if (entry.id <= start) continue;
      if (entry.kind === 'deleted') deleted.add(entry.messageId);
      else if (entry.kind === 'added')
        labelChanges.push({ id: entry.messageId, added: entry.labels, removed: [] });
      else labelChanges.push({ id: entry.messageId, added: [], removed: entry.labels });
    }
    return Promise.resolve({ deleted, labelChanges, historyId: this.historyId });
  }

  batchModify(ids: readonly string[], change: LabelChange, progress: Progress = {}): Promise<void> {
    this.calls.push(
      `batchModify +${(change.add ?? []).join(',')} -${(change.remove ?? []).join(',')} ${ids.length}`,
    );
    if (this.rejectTrashLabel && change.add?.includes('TRASH')) {
      return Promise.reject(new GmailApiError('invalid_request', 'Invalid label: TRASH', 400));
    }
    for (const id of ids) {
      if (!this.messages.has(id))
        return Promise.reject(new GmailApiError('invalid_request', `Invalid id: ${id}`, 400));
    }
    this.relabel(ids, change);
    progress.onProgress?.(ids.length);
    return Promise.resolve();
  }

  batchDelete(ids: readonly string[], progress: Progress = {}): Promise<void> {
    this.calls.push(`batchDelete ${ids.length}`);
    this.deleteMessages(ids);
    progress.onProgress?.(ids.length);
    return Promise.resolve();
  }

  trashMessage(id: string): Promise<void> {
    this.calls.push(`trash ${id}`);
    this.relabel([id], { add: ['TRASH'] });
    return Promise.resolve();
  }

  sendMessage(raw: string): Promise<void> {
    this.sent.push(raw);
    return Promise.resolve();
  }

  createFilter(criteria: FilterCriteria, action: FilterAction): Promise<void> {
    if (this.filters.some((f) => f.criteria.from === criteria.from)) {
      return Promise.reject(new GmailApiError('invalid_request', 'Filter already exists', 400));
    }
    this.filters.push({ criteria, action });
    return Promise.resolve();
  }
}

function matches(
  m: FakeMessage,
  query: string,
  includeSpamTrash: boolean,
  labelIds: readonly string[],
): boolean {
  if (!includeSpamTrash && (m.labels.has('TRASH') || m.labels.has('SPAM'))) return false;
  if (labelIds.some((l) => !m.labels.has(l))) return false;
  const from = /from:\(([^)]*)\)|from:(\S+)/.exec(query);
  if (from) {
    const senders = (from[1] ?? from[2] ?? '').split(/\s+OR\s+/).map((s) => s.trim().replace(/^"|"$/g, ''));
    if (
      !senders.some((f) =>
        f.startsWith('@') ? m.from.endsWith(f) || m.from.endsWith(`.${f.slice(1)}`) : m.from === f,
      )
    ) {
      return false;
    }
  }
  if (query.includes('-is:starred') && m.labels.has('STARRED')) return false;
  if (query.includes('-is:important') && m.labels.has('IMPORTANT')) return false;
  if (/(^|\s)is:unread/.test(query) && !m.labels.has('UNREAD')) return false;
  if (/(^|\s)in:inbox/.test(query) && !m.labels.has('INBOX')) return false;
  return true;
}
