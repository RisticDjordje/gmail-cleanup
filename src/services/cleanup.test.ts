import { beforeEach, describe, expect, it } from 'vitest';
import { FakeGmail } from '../testing/fakeGmail';
import { CleanupService } from './cleanup';

describe('CleanupService', () => {
  let gmail: FakeGmail;
  let cleanup: CleanupService;

  beforeEach(() => {
    gmail = new FakeGmail('me@gmail.com', [
      { name: 'Shop', email: 'deals@shop.com', count: 10, starred: 2 },
      { name: 'Shop News', email: 'news@mail.shop.com', count: 4 },
      { name: 'Pal', email: 'pal@gmail.com', count: 3 },
    ]);
    cleanup = new CleanupService(gmail);
  });

  it('finds messages from several senders within the scan query', async () => {
    const ids = await cleanup.findMessages(['deals@shop.com', 'news@mail.shop.com'], '-is:starred', 'trash');
    expect(ids).toHaveLength(12);
    expect(gmail.calls.at(-1)).toBe('list from:(deals@shop.com OR news@mail.shop.com) -is:starred');
  });

  it('narrows to messages the action would change', async () => {
    expect(await cleanup.findMessages(['deals@shop.com'], '', 'markRead')).toHaveLength(8);
    expect(gmail.calls.at(-1)).toBe('list from:deals@shop.com is:unread');
    gmail.relabel(gmail.idsFrom('pal@gmail.com').slice(0, 1), { remove: ['INBOX'] });
    expect(await cleanup.findMessages(['pal@gmail.com'], '', 'archive')).toHaveLength(2);
  });

  it('reports progress across chunked queries', async () => {
    const seen: number[] = [];
    const addresses = Array.from({ length: 25 }, (_, i) => `x${i}@none.com`).concat('pal@gmail.com');
    await cleanup.findMessages(addresses, '', 'trash', { onProgress: (n) => seen.push(n) });
    expect(seen).toEqual([0, 3]);
  });

  it.each([
    ['trash', ['TRASH']],
    ['spam', ['SPAM']],
    ['archive', []],
    ['markRead', ['INBOX']],
  ] as const)('%s is undoable and restores the inbox', async (action, labelsAfter) => {
    const ids = gmail.idsFrom('pal@gmail.com');
    const token = await cleanup.run(action, ids, { wasInInbox: ids });
    expect(gmail.labelsOf(ids[1]!)).toEqual(expect.arrayContaining([...labelsAfter]));
    await cleanup.undo(token!);
    expect(gmail.labelsOf(ids[1]!)).toEqual(['INBOX', 'UNREAD']);
  });

  it('deletes permanently without an undo token', async () => {
    const ids = gmail.idsFrom('pal@gmail.com');
    expect(await cleanup.run('delete', ids)).toBeNull();
    expect(gmail.idsFrom('pal@gmail.com')).toEqual([]);
  });

  it('falls back to per-message trash if the TRASH label is rejected', async () => {
    gmail.rejectTrashLabel = true;
    const ids = gmail.idsFrom('pal@gmail.com');
    const progress: number[] = [];
    await cleanup.run('trash', ids, { onProgress: (n) => progress.push(n) });
    expect(gmail.calls.filter((c) => c.startsWith('trash '))).toHaveLength(3);
    expect(progress.at(-1)).toBe(3);
    expect(gmail.labelsOf(ids[0]!)).toContain('TRASH');
  });

  it('propagates other errors', async () => {
    await expect(cleanup.run('archive', ['missing'])).rejects.toMatchObject({ kind: 'invalid_request' });
    gmail.batchModify = () => Promise.reject(new Error('offline'));
    await expect(cleanup.run('trash', ['m1'])).rejects.toThrow('offline');
  });
});
