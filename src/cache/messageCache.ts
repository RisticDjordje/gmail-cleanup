import type { MessageRecord } from '../core/types';

const DB_PREFIX = 'gmail-cleanup:';
const DB_VERSION = 1;
const MESSAGES = 'messages';
const META = 'meta';

export interface CacheMeta {
  /** Gmail history ID up to which cached label state is current. */
  readonly historyId: string | null;
}

function promisify<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error ?? new Error('IndexedDB request failed'));
    };
  });
}

/**
 * Per-account IndexedDB cache of message headers, so rescans only fetch what's new.
 * Each account gets its own database, which makes switching accounts cheap and isolates data.
 */
export class MessageCache {
  private constructor(
    private readonly db: IDBDatabase,
    readonly account: string,
  ) {
    // Another tab upgrading the schema: step aside rather than block it.
    db.onversionchange = () => {
      db.close();
    };
  }

  static open(account: string, factory: IDBFactory = indexedDB): Promise<MessageCache> {
    return new Promise((resolve, reject) => {
      const request = factory.open(DB_PREFIX + account, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(MESSAGES)) db.createObjectStore(MESSAGES, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
      };
      request.onsuccess = () => {
        resolve(new MessageCache(request.result, account));
      };
      request.onerror = () => {
        reject(request.error ?? new Error('Could not open the local cache'));
      };
      request.onblocked = () => {
        reject(
          new Error('The local cache is locked by another Gmail Cleanup tab. Close other tabs and reload.'),
        );
      };
    });
  }

  close(): void {
    this.db.close();
  }

  async getAll(): Promise<MessageRecord[]> {
    return promisify(this.db.transaction(MESSAGES, 'readonly').objectStore(MESSAGES).getAll()) as Promise<
      MessageRecord[]
    >;
  }

  putMany(records: readonly MessageRecord[]): Promise<void> {
    return this.#write([MESSAGES], (tx) => {
      const store = tx.objectStore(MESSAGES);
      for (const record of records) store.put(record);
    });
  }

  deleteMany(ids: Iterable<string>): Promise<void> {
    return this.#write([MESSAGES], (tx) => {
      const store = tx.objectStore(MESSAGES);
      for (const id of ids) store.delete(id);
    });
  }

  async getMeta(): Promise<CacheMeta> {
    const historyId = (await promisify(
      this.db.transaction(META, 'readonly').objectStore(META).get('historyId'),
    )) as unknown;
    return { historyId: typeof historyId === 'string' ? historyId : null };
  }

  setMeta(meta: CacheMeta): Promise<void> {
    return this.#write([META], (tx) => {
      tx.objectStore(META).put(meta.historyId, 'historyId');
    });
  }

  clear(): Promise<void> {
    return this.#write([MESSAGES, META], (tx) => {
      tx.objectStore(MESSAGES).clear();
      tx.objectStore(META).clear();
    });
  }

  /** Run writes in one transaction; resolves when it commits, rejects with the real cause. */
  #write(stores: string[], fn: (tx: IDBTransaction) => void): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(stores, 'readwrite');
      tx.oncomplete = () => {
        resolve();
      };
      // tx.error is only populated after the error event, so read it from the failing request.
      tx.onerror = (event) => {
        reject((event.target as IDBRequest | null)?.error ?? tx.error ?? new Error('Cache write failed'));
      };
      tx.onabort = () => {
        reject(tx.error ?? new Error('Cache write was aborted'));
      };
      try {
        fn(tx);
      } catch (error) {
        tx.abort();
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }
}
