import { IDBFactory } from 'fake-indexeddb';
import { beforeEach, describe, expect, it } from 'vitest';
import { message } from '../testing/fixtures';
import { MessageCache } from './messageCache';

describe('MessageCache', () => {
  let factory: IDBFactory;
  beforeEach(() => {
    factory = new IDBFactory();
  });

  it('stores, reads and deletes records', async () => {
    const cache = await MessageCache.open('me@gmail.com', factory);
    await cache.putMany([message({ id: 'a' }), message({ id: 'b', subject: 'B' })]);
    await cache.putMany([message({ id: 'b', subject: 'B2' })]);
    expect((await cache.getAll()).map((r) => [r.id, r.subject])).toEqual([
      ['a', 'Subject'],
      ['b', 'B2'],
    ]);
    await cache.deleteMany(['a', 'missing']);
    expect((await cache.getAll()).map((r) => r.id)).toEqual(['b']);
    cache.close();
  });

  it('keeps each account separate', async () => {
    const first = await MessageCache.open('a@gmail.com', factory);
    const second = await MessageCache.open('b@gmail.com', factory);
    await first.putMany([message({ id: 'x' })]);
    expect(await second.getAll()).toEqual([]);
    expect(first.account).toBe('a@gmail.com');
  });

  it('tracks the history checkpoint and clears everything', async () => {
    const cache = await MessageCache.open('me@gmail.com', factory);
    expect(await cache.getMeta()).toEqual({ historyId: null });
    await cache.setMeta({ historyId: '123' });
    await cache.putMany([message({ id: 'a' })]);
    expect(await cache.getMeta()).toEqual({ historyId: '123' });
    await cache.clear();
    expect(await cache.getMeta()).toEqual({ historyId: null });
    expect(await cache.getAll()).toEqual([]);
  });

  it('persists across reopen', async () => {
    const cache = await MessageCache.open('me@gmail.com', factory);
    await cache.putMany([message({ id: 'a' })]);
    cache.close();
    const reopened = await MessageCache.open('me@gmail.com', factory);
    expect((await reopened.getAll()).map((r) => r.id)).toEqual(['a']);
  });

  it('rejects writes of uncloneable data with the real error', async () => {
    const cache = await MessageCache.open('me@gmail.com', factory);
    const bad = { ...message({ id: 'fn' }), extra: () => 1 };
    await expect(cache.putMany([bad])).rejects.toThrow();
    expect(await cache.getAll()).toEqual([]);
  });
});
