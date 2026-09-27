import { IDBFactory } from 'fake-indexeddb';
import { beforeEach, describe, expect, it } from 'vitest';
import { MessageCache } from '../cache/messageCache';
import { GmailApiError } from '../gmail/errors';
import { FakeGmail } from '../testing/fakeGmail';
import { MessageStore } from './messageStore';
import type { ScanProgress } from './scanner';
import { Scanner } from './scanner';

async function newStore(factory = new IDBFactory()): Promise<{ store: MessageStore; cache: MessageCache }> {
  const cache = await MessageCache.open('me@gmail.com', factory);
  return { store: await MessageStore.load(cache), cache };
}

describe('Scanner', () => {
  let gmail: FakeGmail;
  let fetched: string[];

  beforeEach(() => {
    gmail = new FakeGmail('me@gmail.com', [
      { name: 'Shop', email: 'deals@shop.com', count: 30 },
      { name: 'Pal', email: 'pal@gmail.com', count: 5, readEvery: 0 },
    ]);
    fetched = [];
    const original = gmail.getMessageMetadata.bind(gmail);
    gmail.getMessageMetadata = (id, signal) => {
      fetched.push(id);
      return original(id, signal);
    };
  });

  it('reads every message on the first scan and reports progress', async () => {
    const { store } = await newStore();
    const progress: ScanProgress[] = [];
    let listed: readonly string[] = [];
    const outcome = await new Scanner(gmail).scan(store, {
      query: '',
      onProgress: (p) => progress.push(p),
      onListed: (ids) => (listed = ids),
    });
    expect(listed).toHaveLength(35);
    expect(outcome.status).toBe('complete');
    expect(outcome.ids).toHaveLength(35);
    expect(store.size).toBe(35);
    expect(fetched).toHaveLength(35);
    expect(store.historyId).toBe(gmail.historyId);
    expect(progress[0]).toEqual({ phase: 'syncing' });
    expect(progress).toContainEqual({ phase: 'listing', listed: 35 });
    expect(progress.at(-1)).toMatchObject({ phase: 'reading', done: 35, total: 35, cached: 0 });
  });

  it('only reads new messages on a rescan, and survives reopening', async () => {
    const factory = new IDBFactory();
    await new Scanner(gmail).scan((await newStore(factory)).store, { query: '' });
    fetched.length = 0;
    const { store } = await newStore(factory);
    const outcome = await new Scanner(gmail).scan(store, { query: '' });
    expect(fetched).toEqual([]);
    expect(outcome.ids).toHaveLength(35);
  });

  it('keeps cached labels current through Gmail history', async () => {
    const { store } = await newStore();
    const scanner = new Scanner(gmail);
    await scanner.scan(store, { query: '' });
    const [first, second] = gmail.idsFrom('deals@shop.com');
    gmail.relabel([first!], { remove: ['UNREAD', 'INBOX'] });
    gmail.relabel([first!], { add: ['UNREAD'] });
    gmail.deleteMessages([second!]);
    fetched.length = 0;

    const outcome = await scanner.scan(store, { query: '' });
    expect(fetched).toEqual([]);
    expect(store.get(first!)).toMatchObject({ unread: true, inInbox: false });
    expect(store.has(second!)).toBe(false);
    expect(outcome.ids).not.toContain(second);
  });

  it('starts over when history has expired', async () => {
    const { store } = await newStore();
    const scanner = new Scanner(gmail);
    await scanner.scan(store, { query: '' });
    gmail.expireHistory();
    fetched.length = 0;
    await scanner.scan(store, { query: '' });
    expect(fetched).toHaveLength(35);
  });

  it('never loses records while concurrent reads and flushes interleave', async () => {
    const big = new FakeGmail('me@gmail.com', [{ name: 'Bulk', email: 'bulk@x.com', count: 900 }]);
    const read = big.getMessageMetadata.bind(big);
    // Resolve out of order so flushes happen while other reads are still pending.
    big.getMessageMetadata = (id, signal) =>
      new Promise((resolve, reject) =>
        setTimeout(() => read(id, signal).then(resolve, reject), Math.random() * 3),
      );
    const factory = new IDBFactory();
    const { store } = await newStore(factory);
    const outcome = await new Scanner(big).scan(store, { query: '' });
    expect(outcome.ids).toHaveLength(900);
    expect(store.size).toBe(900);
    expect((await newStore(factory)).store.size).toBe(900); // and all of them persisted
  });

  it('respects the query and limit', async () => {
    const { store } = await newStore();
    const outcome = await new Scanner(gmail).scan(store, { query: 'from:pal@gmail.com', max: 3 });
    expect(outcome.ids).toHaveLength(3);
    expect(store.size).toBe(3);
  });

  it('drops messages deleted between listing and reading', async () => {
    const { store } = await newStore();
    const doomed = gmail.idsFrom('pal@gmail.com')[0]!;
    const list = gmail.listMessageIds.bind(gmail);
    gmail.listMessageIds = async (q, o) => {
      const ids = await list(q, o);
      gmail.deleteMessages([doomed]);
      return ids;
    };
    const outcome = await new Scanner(gmail).scan(store, { query: '' });
    expect(outcome.status).toBe('complete');
    expect(outcome.ids).toHaveLength(34);
    expect(outcome.ids).not.toContain(doomed);
  });

  it('keeps what it read when stopped, and resumes next time', async () => {
    const { store } = await newStore();
    const controller = new AbortController();
    const original = gmail.getMessageMetadata.bind(gmail);
    gmail.getMessageMetadata = (id, signal) => {
      if (fetched.length === 12) controller.abort();
      return original(id, signal);
    };
    const outcome = await new Scanner(gmail).scan(store, { query: '', signal: controller.signal });
    expect(outcome.status).toBe('aborted');
    expect(outcome.ids).toHaveLength(35);
    const readBeforeStop = store.size;
    expect(readBeforeStop).toBeGreaterThan(0);
    expect(readBeforeStop).toBeLessThan(35);

    gmail.getMessageMetadata = original;
    fetched.length = 0;
    await new Scanner(gmail).scan(store, { query: '' });
    expect(fetched).toHaveLength(35 - readBeforeStop);
  });

  it('reports an abort during listing without IDs', async () => {
    const { store } = await newStore();
    const controller = new AbortController();
    controller.abort();
    expect(await new Scanner(gmail).scan(store, { query: '', signal: controller.signal })).toEqual({
      status: 'aborted',
      ids: null,
    });
  });

  it('propagates real errors after saving progress', async () => {
    const { store } = await newStore();
    let calls = 0;
    const original = gmail.getMessageMetadata.bind(gmail);
    gmail.getMessageMetadata = (id, signal) =>
      ++calls === 20
        ? Promise.reject(new GmailApiError('server', 'Backend Error', 500))
        : original(id, signal);
    await expect(new Scanner(gmail).scan(store, { query: '' })).rejects.toMatchObject({ kind: 'server' });
    expect(store.size).toBeGreaterThan(0);
  });

  it('estimates time left once enough messages are read', async () => {
    const { store } = await newStore();
    let t = 0;
    const progress: ScanProgress[] = [];
    await new Scanner(gmail, () => (t += 100)).scan(store, {
      query: '',
      onProgress: (p) => progress.push(p),
    });
    const last = progress.at(-1);
    expect(last?.phase === 'reading' && last.etaMs).toBe(0);
  });
});
