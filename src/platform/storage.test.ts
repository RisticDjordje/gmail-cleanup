import { describe, expect, it, vi } from 'vitest';
import * as z from 'zod/mini';
import { chromeStorageArea, MemoryArea, StoredValue } from './storage';

describe('StoredValue', () => {
  const schema = z.object({ n: z.number() });

  it('round-trips valid values and falls back when missing', async () => {
    const value = new StoredValue(new MemoryArea(), 'k', schema, { n: 0 });
    expect(await value.get()).toEqual({ n: 0 });
    await value.set({ n: 5 });
    expect(await value.get()).toEqual({ n: 5 });
    await value.remove();
    expect(await value.get()).toEqual({ n: 0 });
  });

  it('ignores invalid stored data instead of crashing', async () => {
    const area = new MemoryArea();
    await area.set('k', { n: 'not a number' });
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(await new StoredValue(area, 'k', schema, { n: 1 }).get()).toEqual({ n: 1 });
    expect(warn).toHaveBeenCalledOnce();
  });

  it('refuses to write invalid data', async () => {
    const value = new StoredValue(new MemoryArea(), 'k', schema, { n: 0 });
    await expect(value.set({ n: 'x' } as unknown as { n: number })).rejects.toThrow();
  });
});

describe('chromeStorageArea', () => {
  it('adapts a chrome.storage area', async () => {
    const data = new Map<string, unknown>();
    const area = chromeStorageArea({
      get: async (key: string) => ({ [key]: data.get(key) }),
      set: async (items: Record<string, unknown>) => {
        for (const [k, v] of Object.entries(items)) data.set(k, v);
      },
      remove: async (key: string) => {
        data.delete(key);
      },
    } as unknown as chrome.storage.StorageArea);
    await area.set('a', 1);
    expect(await area.get('a')).toBe(1);
    await area.remove('a');
    expect(await area.get('a')).toBeUndefined();
  });
});
