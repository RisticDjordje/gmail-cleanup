import { IDBFactory } from 'fake-indexeddb';
import { describe, expect, it } from 'vitest';
import { MessageCache } from '../cache/messageCache';
import { message } from '../testing/fixtures';
import { MessageStore } from './messageStore';

describe('MessageStore', () => {
  it('writes through to the persistent cache', async () => {
    const factory = new IDBFactory();
    const store = await MessageStore.load(await MessageCache.open('me', factory));
    await store.upsert([message({ id: 'a' }), message({ id: 'b' })]);
    await store.applyLabelChanges([
      { id: 'a', added: ['STARRED'], removed: ['INBOX'] },
      { id: 'a', added: [], removed: ['STARRED'] },
      { id: 'missing', added: ['UNREAD'], removed: [] },
      { id: 'b', added: ['CATEGORY_SOCIAL'], removed: [] },
    ]);
    await store.remove(['b', 'nope']);
    await store.setHistoryId('77');

    const reloaded = await MessageStore.load(await MessageCache.open('me', factory));
    expect(reloaded.size).toBe(1);
    expect(reloaded.get('a')).toMatchObject({ starred: false, inInbox: false });
    expect(reloaded.historyId).toBe('77');
    expect(reloaded.pick(['b', 'a']).map((r) => r.id)).toEqual(['a']);

    await reloaded.clear();
    expect(reloaded.size).toBe(0);
    expect(reloaded.historyId).toBeNull();
    expect((await MessageStore.load(await MessageCache.open('me', factory))).size).toBe(0);
  });

  it('skips empty writes', async () => {
    const store = await MessageStore.load(await MessageCache.open('me', new IDBFactory()));
    await expect(store.upsert([])).resolves.toBeUndefined();
    await expect(store.remove([])).resolves.toBeUndefined();
  });
});
