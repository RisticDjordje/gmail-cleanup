import type { MessageCache } from '../cache/messageCache';
import { withLabelChanges } from '../core/record';
import type { MessageRecord } from '../core/types';

export interface PersistentCache {
  getAll(): Promise<MessageRecord[]>;
  putMany(records: readonly MessageRecord[]): Promise<void>;
  deleteMany(ids: Iterable<string>): Promise<void>;
  getMeta(): Promise<{ historyId: string | null }>;
  setMeta(meta: { historyId: string | null }): Promise<void>;
  clear(): Promise<void>;
}

/**
 * In-memory index of one account's cached messages, written through to IndexedDB.
 * All mutations go through here so memory and disk never disagree.
 */
export class MessageStore {
  readonly #records: Map<string, MessageRecord>;
  #historyId: string | null;

  private constructor(
    private readonly cache: PersistentCache,
    records: MessageRecord[],
    historyId: string | null,
  ) {
    this.#records = new Map(records.map((r) => [r.id, r]));
    this.#historyId = historyId;
  }

  static async load(cache: PersistentCache | MessageCache): Promise<MessageStore> {
    const [records, meta] = await Promise.all([cache.getAll(), cache.getMeta()]);
    return new MessageStore(cache, records, meta.historyId);
  }

  get size(): number {
    return this.#records.size;
  }

  /** Gmail history ID up to which cached label state is known to be current. */
  get historyId(): string | null {
    return this.#historyId;
  }

  has(id: string): boolean {
    return this.#records.has(id);
  }

  get(id: string): MessageRecord | undefined {
    return this.#records.get(id);
  }

  /** Records for `ids` that are cached, in order. */
  pick(ids: Iterable<string>): MessageRecord[] {
    const out: MessageRecord[] = [];
    for (const id of ids) {
      const record = this.#records.get(id);
      if (record) out.push(record);
    }
    return out;
  }

  async upsert(records: readonly MessageRecord[]): Promise<void> {
    if (!records.length) return;
    await this.cache.putMany(records);
    for (const r of records) this.#records.set(r.id, r);
  }

  async remove(ids: Iterable<string>): Promise<void> {
    const present = [...ids].filter((id) => this.#records.has(id));
    if (!present.length) return;
    await this.cache.deleteMany(present);
    for (const id of present) this.#records.delete(id);
  }

  /** Apply label changes in order; uncached messages are ignored. */
  async applyLabelChanges(
    changes: Iterable<{
      readonly id: string;
      readonly added: readonly string[];
      readonly removed: readonly string[];
    }>,
  ): Promise<void> {
    const updated = new Map<string, MessageRecord>();
    for (const change of changes) {
      const current = updated.get(change.id) ?? this.#records.get(change.id);
      if (!current) continue;
      const next = withLabelChanges(current, change.added, change.removed);
      if (next !== current) updated.set(change.id, next);
    }
    await this.upsert([...updated.values()]);
  }

  async setHistoryId(historyId: string | null): Promise<void> {
    await this.cache.setMeta({ historyId });
    this.#historyId = historyId;
  }

  async clear(): Promise<void> {
    await this.cache.clear();
    this.#records.clear();
    this.#historyId = null;
  }
}
