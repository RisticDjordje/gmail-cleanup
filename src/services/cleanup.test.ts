import { beforeEach, describe, expect, it } from 'vitest';
import { FakeGmail } from '../testing/fakeGmail';
import type { Search } from './cleanup';
import { CleanupService, PartialActionError } from './cleanup';

async function expectPartial(promise: Promise<unknown>): Promise<PartialActionError> {
  const error = await promise.then(
    () => null,
    (e: unknown) => e,
  );
  if (!(error instanceof PartialActionError))
    throw new Error(`expected a PartialActionError, got ${String(error)}`);
  return error;
}

describe('CleanupService', () => {
  let gmail: FakeGmail;
  let cleanup: CleanupService;
  const from = (...addresses: string[]): Search => ({ addresses, baseQuery: '' });

  beforeEach(() => {
    gmail = new FakeGmail('me@gmail.com', [
      { name: 'Shop', email: 'deals@shop.com', count: 10, starred: 2 },
      { name: 'Shop News', email: 'news@mail.shop.com', count: 4 },
      { name: 'Pal', email: 'pal@gmail.com', count: 5 }, // messages 0 read, 1–4 unread
    ]);
    cleanup = new CleanupService(gmail);
  });

  it('finds messages from several senders within the scan query', async () => {
    const ids = await cleanup.findMessages(
      { addresses: ['deals@shop.com', 'news@mail.shop.com'], baseQuery: '-is:starred' },
      'trash',
    );
    expect(ids).toHaveLength(12);
    expect(gmail.calls.at(-1)).toBe('list from:(deals@shop.com OR news@mail.shop.com) -is:starred');
  });

  it('narrows to messages the action would change', async () => {
    expect(await cleanup.findMessages(from('deals@shop.com'), 'markRead')).toHaveLength(8);
    expect(gmail.calls.at(-1)).toBe('list from:deals@shop.com is:unread');
    gmail.relabel(gmail.idsFrom('pal@gmail.com').slice(0, 1), { remove: ['INBOX'] });
    expect(await cleanup.findMessages(from('pal@gmail.com'), 'archive')).toHaveLength(4);
  });

  it('reports progress across chunked queries', async () => {
    const seen: number[] = [];
    const addresses = Array.from({ length: 25 }, (_, i) => `x${i}@none.com`).concat('pal@gmail.com');
    await cleanup.findMessages(from(...addresses), 'trash', { onProgress: (n) => seen.push(n) });
    expect(seen).toEqual([0, 5]);
  });

  describe('undo restores exactly the previous state', () => {
    it.each(['trash', 'spam', 'archive', 'markRead', 'archiveRead'] as const)('%s', async (action) => {
      const ids = gmail.idsFrom('pal@gmail.com');
      gmail.relabel([ids[2]!], { remove: ['INBOX'] }); // one message was already archived
      const before = ids.map((id) => gmail.labelsOf(id));

      const targets = await cleanup.findMessages(from('pal@gmail.com'), action);
      const restore = await cleanup.captureRestore(from('pal@gmail.com'), action, targets);
      const token = await cleanup.run(action, targets, { restore });
      expect(ids.map((id) => gmail.labelsOf(id))).not.toEqual(before);

      await cleanup.undo(token!);
      expect(ids.map((id) => gmail.labelsOf(id))).toEqual(before);
    });
  });

  it('captures prior labels from Gmail, not assumptions', async () => {
    const ids = gmail.idsFrom('pal@gmail.com');
    gmail.relabel([ids[1]!], { remove: ['INBOX'] });
    const restore = await cleanup.captureRestore(from('pal@gmail.com'), 'spam', ids);
    expect(restore.INBOX).toEqual(ids.filter((id) => id !== ids[1]));
    const all = await cleanup.captureRestore(from('pal@gmail.com'), 'archive', ids.slice(0, 2));
    expect(all.INBOX).toEqual(ids.slice(0, 2)); // implied by the archive search itself
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
    expect(gmail.calls.filter((c) => c.startsWith('trash '))).toHaveLength(5);
    expect(progress.at(-1)).toBe(5);
    expect(gmail.labelsOf(ids[0]!)).toContain('TRASH');
  });

  it('reports what already changed when a batch fails part-way', async () => {
    const ids = gmail.idsFrom('deals@shop.com');
    const real = gmail.batchModify.bind(gmail);
    gmail.batchModify = async (batchIds, change, progress) => {
      await real(batchIds.slice(0, 4), change); // first "chunk" lands
      progress?.onProgress?.(4);
      throw new Error('Backend Error');
    };
    const error = await expectPartial(cleanup.run('trash', ids, { restore: { INBOX: ids } }));
    expect(error.succeeded).toEqual(ids.slice(0, 4));
    expect(error.token).toEqual({
      action: 'trash',
      ids: ids.slice(0, 4),
      restore: { INBOX: ids.slice(0, 4) },
    });
    expect(error.message).toBe('Backend Error');
  });

  it('tracks exactly which messages the per-message fallback trashed before failing', async () => {
    gmail.rejectTrashLabel = true;
    const ids = gmail.idsFrom('pal@gmail.com');
    const trash = gmail.trashMessage.bind(gmail);
    gmail.trashMessage = (id) => (id === ids[3] ? Promise.reject(new Error('offline')) : trash(id));
    const error = await expectPartial(cleanup.run('trash', ids));
    // Requests already in flight when one fails still complete, and are counted.
    expect([...error.succeeded].sort()).toEqual(ids.filter((id) => id !== ids[3]).sort());
  });

  it('propagates failures that changed nothing', async () => {
    await expect(cleanup.run('archive', ['missing'])).rejects.toMatchObject({ kind: 'invalid_request' });
    gmail.batchDelete = () => Promise.reject(new Error('offline'));
    await expect(cleanup.run('delete', ['m1'])).rejects.toThrow('offline');
  });
});
