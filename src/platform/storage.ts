import type * as z from 'zod/mini';

/** Minimal key-value storage (a chrome.storage area, or an in-memory fake in tests). */
export interface KeyValueArea {
  get(key: string): Promise<unknown>;
  set(key: string, value: unknown): Promise<void>;
  remove(key: string): Promise<void>;
}

export function chromeStorageArea(area: chrome.storage.StorageArea): KeyValueArea {
  return {
    get: async (key) => (await area.get(key))[key],
    set: (key, value) => area.set({ [key]: value }),
    remove: (key) => area.remove(key),
  };
}

export class MemoryArea implements KeyValueArea {
  readonly data = new Map<string, unknown>();
  get(key: string): Promise<unknown> {
    // Round-trip through JSON like chrome.storage does, so tests catch non-serializable values.
    const value = this.data.get(key);
    return Promise.resolve(value === undefined ? undefined : JSON.parse(JSON.stringify(value)));
  }
  set(key: string, value: unknown): Promise<void> {
    this.data.set(key, JSON.parse(JSON.stringify(value)));
    return Promise.resolve();
  }
  remove(key: string): Promise<void> {
    this.data.delete(key);
    return Promise.resolve();
  }
}

/**
 * One typed value in a storage area. Reads are validated against `schema`; anything missing or
 * invalid (e.g. written by an older version) falls back to `fallback` instead of crashing the UI.
 */
export class StoredValue<T> {
  constructor(
    private readonly area: KeyValueArea,
    readonly key: string,
    private readonly schema: z.ZodMiniType<T>,
    private readonly fallback: T,
  ) {}

  async get(): Promise<T> {
    const raw = await this.area.get(this.key);
    if (raw === undefined) return this.fallback;
    const parsed = this.schema.safeParse(raw);
    if (parsed.success) return parsed.data;
    console.warn(`Ignoring invalid stored value for "${this.key}"`, parsed.error.issues);
    return this.fallback;
  }

  async set(value: T): Promise<void> {
    await this.area.set(this.key, this.schema.parse(value));
  }

  remove(): Promise<void> {
    return this.area.remove(this.key);
  }
}
