import { effect } from '@preact/signals';
import { IDBFactory } from 'fake-indexeddb';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { OAuthClient, SCOPES } from '../auth/oauth';
import { MessageCache } from '../cache/messageCache';
import { MemoryArea } from '../platform/storage';
import type { FakeSender } from '../testing/fakeGmail';
import { FakeGmail } from '../testing/fakeGmail';
import { accountOfToken, FakeIdentity, grant, tokenFor } from '../testing/fakeIdentity';
import { AppController } from './controller';
import type { Answers, DialogKind, DialogRequest } from './dialogs';
import { DISMISSED } from './dialogs';
import { Persistence } from './persistence';

const SENDERS: FakeSender[] = [
  { name: 'Shop', email: 'deals@shop.com', count: 20, unsubscribe: { oneClick: 'https://shop.com/u' } },
  {
    name: 'Shop News',
    email: 'news@mail.shop.com',
    count: 6,
    unsubscribe: { website: 'https://shop.com/prefs' },
  },
  { name: 'Letters', email: 'hi@letters.com', count: 5, unsubscribe: { mailto: 'mailto:leave@letters.com' } },
  { name: 'Mom', email: 'mom@gmail.com', count: 8, readEvery: 0, starred: 2 },
  { name: 'Bank', email: 'alerts@bank.com', count: 4 },
];

type Script = {
  [K in DialogKind]?: Answers[K] | ((request: Extract<DialogRequest, { kind: K }>) => Answers[K]);
};

interface Setup {
  controller: AppController;
  /** me@gmail.com's mailbox. */
  gmail: FakeGmail;
  accounts: Map<string, FakeGmail>;
  identity: FakeIdentity;
  local: MemoryArea;
  session: MemoryArea;
  asked: DialogRequest[];
  post: ReturnType<typeof vi.fn<(url: string) => Promise<void>>>;
  /** Answer dialogs from this script (unscripted dialogs are dismissed). */
  script: Script;
}

async function setup(
  options: { signedIn?: boolean; local?: MemoryArea; session?: MemoryArea } = {},
): Promise<Setup> {
  const accounts = new Map([
    ['me@gmail.com', new FakeGmail('me@gmail.com', SENDERS)],
    [
      'second@gmail.com',
      new FakeGmail('second@gmail.com', [{ name: 'Pal', email: 'pal@gmail.com', count: 3 }], {
        idPrefix: 'x',
      }),
    ],
  ]);
  const gmail = accounts.get('me@gmail.com')!;
  const identity = new FakeIdentity();
  const local = options.local ?? new MemoryArea();
  const session = options.session ?? new MemoryArea();
  const auth = new OAuthClient({
    identity,
    local,
    session,
    whoAmI: accountOfToken,
    revoke: () => Promise.resolve(),
  });
  const factory = new IDBFactory();
  const post = vi.fn<(url: string) => Promise<void>>(() => Promise.resolve());
  const controller = new AppController({
    auth,
    gmailFor: (account) => accounts.get(account)!,
    persistence: new Persistence(local),
    openCache: (account) => MessageCache.open(account, factory),
    postOneClick: post,
  });
  const asked: DialogRequest[] = [];
  const state: Setup = { controller, gmail, accounts, identity, local, session, asked, post, script: {} };
  effect(() => {
    const open = controller.dialogs.current.value;
    if (!open) return;
    asked.push(open.request);
    const scripted = state.script[open.request.kind] as unknown;
    const value: unknown =
      typeof scripted === 'function' ? (scripted as (r: DialogRequest) => unknown)(open.request) : scripted;
    queueMicrotask(() => (open.answer as (v: unknown) => void)(value ?? DISMISSED[open.request.kind]));
  });
  if (options.signedIn ?? true) {
    await auth.setClientId('123-abc.apps.googleusercontent.com');
    await controller.init();
    await controller.signIn();
  }
  return state;
}

const lastToast = (c: AppController): string | undefined => c.toasts.toasts.value.at(-1)?.message;
const keys = (c: AppController): string[] => c.filteredGroups.value.map((g) => g.key);

describe('AppController', () => {
  beforeEach(() => vi.spyOn(console, 'error').mockImplementation(() => undefined));
  afterEach(() => vi.useRealTimers());

  describe('setup and sign-in', () => {
    it('starts in setup, validates the client ID, then signs in', async () => {
      const { controller } = await setup({ signedIn: false });
      await controller.init();
      expect(controller.view.value).toBe('setup');
      expect(await controller.saveClientId('nope')).toBe(false);
      expect(controller.toasts.toasts.value[0]?.tone).toBe('error');
      expect(await controller.saveClientId('123-abc.apps.googleusercontent.com')).toBe(true);
      expect(controller.view.value).toBe('signin');
      expect(controller.signInError.value).toBeNull();
      await controller.signIn();
      expect(controller.view.value).toBe('app');
      expect(controller.account.value).toBe('me@gmail.com');
    });

    it('resumes silently when a token is already stored', async () => {
      const first = await setup();
      const { controller } = await setup({ signedIn: false, local: first.local, session: first.session });
      await controller.init();
      expect(controller.view.value).toBe('app');
    });

    it('explains sign-in failures', async () => {
      const { controller, identity } = await setup({ signedIn: false });
      await controller.saveClientId('123-abc.apps.googleusercontent.com');
      identity.respond = () => {
        throw new Error('The user did not approve access.');
      };
      await controller.signIn();
      expect(controller.view.value).toBe('signin');
      expect(controller.signInError.value).toBe('Sign-in was cancelled.');
    });

    it('keeps the current account when switching is cancelled', async () => {
      const { controller, identity } = await setup();
      identity.respond = () => {
        throw new Error('The user did not approve access.');
      };
      await controller.signIn({ selectAccount: true });
      expect(controller.view.value).toBe('app');
    });

    it('signs out and can reset the client', async () => {
      const { controller } = await setup();
      await controller.signOut();
      expect(controller.view.value).toBe('signin');
      expect(controller.account.value).toBeNull();
      await controller.resetClient();
      expect(controller.view.value).toBe('setup');
    });
  });

  describe('scanning and the sender list', () => {
    it('scans, groups and filters senders', async () => {
      const { controller } = await setup();
      await controller.startScan();
      expect(lastToast(controller)).toBe('Scan complete: 41 emails'); // 43 minus Mom's 2 starred
      expect(controller.stats.value).toMatchObject({ messages: 41, senders: 5 });
      expect(keys(controller)[0]).toBe('deals@shop.com');
      expect(controller.snapshot.value).toMatchObject({ complete: true, scope: 'all' });

      controller.toggleFilter('hasUnsubscribe');
      expect(keys(controller)).toEqual(['deals@shop.com', 'news@mail.shop.com', 'hi@letters.com']);
      controller.toggleFilter('hasUnsubscribe');
      controller.setSearch('BANK');
      expect(keys(controller)).toEqual(['alerts@bank.com']);
      controller.setSearch('');
      controller.setSort('name');
      expect(keys(controller)[0]).toBe('alerts@bank.com');

      controller.setGroupBy('domain');
      expect(keys(controller)).toContain('@shop.com');
      expect(controller.groupIndex.value.get('@shop.com')?.count).toBe(26);
      controller.setGroupBy('domain'); // no-op
    });

    it('persists settings and reloads them', async () => {
      const { controller, local } = await setup();
      controller.updateSettings((s) => ({ ...s, scan: { ...s.scan, scope: 'promotions' } }));
      await vi.waitFor(async () =>
        expect(await new Persistence(local).settings.get()).toMatchObject({ scan: { scope: 'promotions' } }),
      );
    });

    it('can be stopped and resumed', async () => {
      const { controller, gmail } = await setup();
      const read = gmail.getMessageMetadata.bind(gmail);
      let calls = 0;
      gmail.getMessageMetadata = (id, signal) => {
        if (++calls === 5) controller.stopScan();
        return read(id, signal);
      };
      await controller.startScan();
      expect(lastToast(controller)).toMatch(/Scan stopped/);
      expect(controller.snapshot.value?.complete).toBe(false);
      expect(controller.coverage.value.read).toBeLessThan(controller.coverage.value.listed);
      expect(controller.busy.value).toBe(false);
    });

    it('selects, keeps and expands senders', async () => {
      const { controller } = await setup();
      await controller.startScan();
      const mom = controller.groupIndex.value.get('mom@gmail.com')!;
      await controller.toggleKeep(mom);
      expect(controller.isKept(mom)).toBe(true);
      controller.setSelected('mom@gmail.com', true);
      expect(controller.selected.value.size).toBe(0);

      controller.setAllSelected(true);
      expect(controller.selectedGroups.value.map((g) => g.key)).not.toContain('mom@gmail.com');
      expect(controller.selectedGroups.value).toHaveLength(4);
      controller.setAllSelected(false);
      expect(controller.selected.value.size).toBe(0);

      controller.toggleExpanded('deals@shop.com');
      expect(controller.expanded.value.has('deals@shop.com')).toBe(true);
      controller.toggleExpanded('deals@shop.com');
      expect(controller.expanded.value.size).toBe(0);

      await controller.toggleKeep(mom);
      expect(controller.isKept(mom)).toBe(false);
      controller.showMore();
      expect(controller.visibleCount.value).toBe(200);
    });

    it('focuses insights', async () => {
      const { controller } = await setup();
      await controller.startScan();
      controller.focusInsight('mailingLists');
      expect(controller.settings.value.view.filters.hasUnsubscribe).toBe(true);
      controller.focusInsight('heavy');
      expect(controller.settings.value.view).toMatchObject({
        sort: 'size',
        filters: { hasUnsubscribe: false },
      });
      controller.focusInsight('top10'); // fewer than 11 senders: nothing to select
      expect(controller.selected.value.size).toBe(0);
    });

    it('exports CSV', async () => {
      const { controller } = await setup();
      await controller.startScan();
      expect(controller.exportCsv().split('\r\n')[1]).toMatch(/^deals@shop.com,Shop,20,/);
    });
  });

  describe('bulk actions', () => {
    it('trashes after confirming the exact count, and undoes', async () => {
      const s = await setup();
      const { controller, gmail } = s;
      await controller.startScan();
      controller.setSelected('deals@shop.com', true);
      s.script.confirmAction = true;
      await controller.runBulkAction('trash');
      expect(s.asked.at(-1)).toMatchObject({
        kind: 'confirmAction',
        action: 'trash',
        count: 20,
        senders: ['Shop'],
      });
      expect(gmail.labelsOf(gmail.idsFrom('deals@shop.com')[0]!)).toContain('TRASH');
      expect(controller.stats.value.messages).toBe(21);
      expect(controller.selected.value.size).toBe(0);

      const toast = controller.toasts.toasts.value.at(-1)!;
      expect(toast.message).toBe('Moved 20 emails to Trash');
      toast.action!.run();
      await vi.waitFor(() => expect(lastToast(controller)).toBe('Undone'));
      expect(gmail.labelsOf(gmail.idsFrom('deals@shop.com')[0]!)).not.toContain('TRASH');
      expect(controller.stats.value.messages).toBe(41);
    });

    it('does nothing when the confirmation is declined', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      await s.controller.runBulkAction('archive');
      expect(s.gmail.labelsOf(s.gmail.idsFrom('alerts@bank.com')[0]!)).toContain('INBOX');
    });

    it('says when there is nothing to do', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('mom@gmail.com', true);
      await s.controller.runBulkAction('markRead');
      expect(s.asked.at(-1)).toEqual({ kind: 'nothingToDo', action: 'markRead' });
    });

    it('archives: kept in an "all mail" view, removed from an inbox-only view', async () => {
      const s = await setup();
      s.script.confirmAction = true;
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      await s.controller.runBulkAction('archive');
      expect(s.controller.groupIndex.value.get('alerts@bank.com')?.inInbox).toBe(0);

      s.controller.updateSettings((st) => ({ ...st, scan: { ...st.scan, scope: 'inbox' } }));
      await s.controller.startScan();
      s.controller.setSelected('hi@letters.com', true);
      await s.controller.runBulkAction('archive');
      expect(s.controller.groupIndex.value.has('hi@letters.com')).toBe(false);
    });

    it('asks for full access before deleting forever', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      await s.controller.runBulkAction('delete');
      expect(s.asked.at(-1)?.kind).toBe('grantFullAccess');
      expect(s.gmail.idsFrom('alerts@bank.com')).toHaveLength(4);

      s.script.grantFullAccess = true;
      s.script.confirmAction = true;
      await s.controller.runBulkAction('delete');
      expect(s.identity.last.url.searchParams.get('scope')).toContain(SCOPES.full);
      expect(s.gmail.idsFrom('alerts@bank.com')).toHaveLength(0);
      expect(lastToast(s.controller)).toBe('Permanently deleted 4 emails');
      expect(s.controller.toasts.toasts.value.at(-1)?.action).toBeUndefined();
    });

    it('reports errors without leaving the app busy', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      s.gmail.listMessageIds = () => Promise.reject(new Error('offline'));
      await s.controller.runBulkAction('trash');
      expect(lastToast(s.controller)).toBe('offline');
      expect(s.controller.busy.value).toBe(false);
      expect(s.controller.dialogs.progress.value).toBeNull();
    });
  });

  describe('unsubscribe and block', () => {
    it('unsubscribes, trashes existing mail and lists website links', async () => {
      const s = await setup();
      await s.controller.startScan();
      for (const key of ['deals@shop.com', 'news@mail.shop.com', 'hi@letters.com'])
        s.controller.setSelected(key, true);
      s.script.unsubscribe = { trashExisting: true, blockFuture: true };
      s.script.confirmAction = true;
      await s.controller.unsubscribe();
      expect(s.asked.find((r) => r.kind === 'confirmAction')).toMatchObject({ action: 'trash', count: 31 });

      expect(s.post).toHaveBeenCalledWith('https://shop.com/u');
      expect(s.gmail.sent).toHaveLength(1);
      expect(s.gmail.filters.map((f) => f.criteria.from).sort()).toEqual([
        'deals@shop.com',
        'hi@letters.com',
        'news@mail.shop.com',
      ]);
      expect(s.asked.at(-1)).toMatchObject({
        kind: 'websiteLinks',
        done: 2,
        links: [{ address: 'news@mail.shop.com' }],
      });
      expect([...s.controller.unsubscribed.value.keys()].sort()).toEqual([
        'deals@shop.com',
        'hi@letters.com',
      ]);
      expect(s.controller.stats.value.messages).toBe(41 - 31);
    });

    it('does nothing if unsubscribe is cancelled', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('deals@shop.com', true);
      await s.controller.unsubscribe();
      expect(s.post).not.toHaveBeenCalled();
    });

    it('reports one-click failures via a toast when there is no website fallback', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('hi@letters.com', true);
      s.gmail.sendMessage = () => Promise.reject(new Error('quota'));
      s.script.unsubscribe = { trashExisting: false, blockFuture: false };
      await s.controller.unsubscribe();
      expect(lastToast(s.controller)).toBe('Unsubscribed from 0 senders; 1 failed');
    });

    it('blocks a whole domain with one filter and applies it now', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setGroupBy('domain');
      s.controller.setSelected('@shop.com', true);
      s.script.block = { mode: 'archiveRead', applyNow: true };
      s.script.confirmAction = true;
      await s.controller.blockFuture();
      expect(s.asked.find((r) => r.kind === 'block')).toMatchObject({ criteria: ['@shop.com'] });
      expect(s.asked.find((r) => r.kind === 'confirmAction')).toMatchObject({
        action: 'archiveRead',
        count: 26,
      });
      expect(s.gmail.filters).toEqual([
        { criteria: { from: '@shop.com' }, action: { removeLabelIds: ['INBOX', 'UNREAD'] } },
      ]);
      const labels = s.gmail.labelsOf(s.gmail.idsFrom('news@mail.shop.com')[1]!);
      expect(labels).not.toContain('INBOX');
      expect(labels).not.toContain('UNREAD');
      expect(s.controller.groupIndex.value.get('@shop.com')?.unread).toBe(0);
    });
  });

  describe('audit regressions', () => {
    it('keeps each account on its own tokens and mailbox', async () => {
      const s = await setup();
      s.identity.picked = 'second@gmail.com';
      await s.controller.signIn({ selectAccount: true });
      expect(s.controller.account.value).toBe('second@gmail.com');
      await s.controller.startScan();
      expect(s.controller.stats.value.messages).toBe(3);
      expect(s.accounts.get('second@gmail.com')!.calls).toContain('getProfile');
      expect(s.gmail.calls).not.toContain('list -in:drafts -in:chats');
    });

    it('refuses a full-access token for the wrong account', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      s.script.grantFullAccess = true;
      s.script.confirmAction = true;
      s.identity.respond = (call) => grant(call, { access_token: tokenFor('other@gmail.com') });
      await s.controller.runBulkAction('delete');
      expect(lastToast(s.controller)).toMatch(/signed you in as other@gmail.com/);
      expect(s.gmail.idsFrom('alerts@bank.com')).toHaveLength(4);
      expect(s.asked.map((r) => r.kind)).not.toContain('confirmAction');
    });

    it('blocks other work while Google’s popup is open', async () => {
      const s = await setup();
      let release = (): void => undefined;
      const real = s.identity.launchWebAuthFlow;
      s.identity.launchWebAuthFlow = (url, interactive) =>
        new Promise((resolve) => (release = () => void real(url, interactive).then(resolve)));
      const switching = s.controller.signIn({ selectAccount: true });
      await vi.waitFor(() => expect(s.controller.busy.value).toBe(true));
      await s.controller.startScan(); // ignored: busy
      expect(s.controller.snapshot.value).toBeNull();
      release();
      await switching;
      expect(s.controller.busy.value).toBe(false);
    });

    it('shows the account in every confirmation', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      await s.controller.runBulkAction('archive');
      expect(s.asked.at(-1)).toMatchObject({ kind: 'confirmAction', account: 'me@gmail.com' });
    });

    it('does not block a whole domain when a kept address in it was not scanned', async () => {
      const s = await setup();
      await s.controller.startScan();
      await s.controller.toggleKeep({
        ...s.controller.groupIndex.value.get('deals@shop.com')!,
        key: 'boss@shop.com',
      });
      s.controller.setGroupBy('domain');
      s.controller.setSelected('@shop.com', true);
      s.script.block = { mode: 'trash', applyNow: false };
      await s.controller.blockFuture();
      expect(s.gmail.filters.map((f) => f.criteria.from).sort()).toEqual([
        'deals@shop.com',
        'news@mail.shop.com',
      ]);
    });

    it('offers Undo for the part of an action that succeeded before a failure', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('deals@shop.com', true);
      s.script.confirmAction = true;
      const real = s.gmail.batchModify.bind(s.gmail);
      s.gmail.batchModify = async (ids, change, progress) => {
        if (!change.add?.includes('TRASH')) return real(ids, change, progress);
        await real(ids.slice(0, 5), change);
        progress?.onProgress?.(5);
        throw new Error('Backend Error');
      };
      await s.controller.runBulkAction('trash');
      const toast = s.controller.toasts.toasts.value.at(-1)!;
      expect(toast.tone).toBe('error');
      expect(toast.message).toBe('Moved 5 of 20 emails to Trash, then Gmail failed: Backend Error');
      expect(s.controller.stats.value.messages).toBe(41 - 5);
      s.gmail.batchModify = real;
      toast.action!.run();
      await vi.waitFor(() => expect(lastToast(s.controller)).toBe('Undone'));
      expect(s.controller.stats.value.messages).toBe(41);
    });

    it('undo does not add messages into a newer scan', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.setSelected('alerts@bank.com', true);
      s.script.confirmAction = true;
      await s.controller.runBulkAction('trash');
      const undo = s.controller.toasts.toasts.value.at(-1)!.action!;
      s.controller.updateSettings((st) => ({ ...st, scan: { ...st.scan, scope: 'unread' } }));
      await s.controller.startScan();
      const before = s.controller.snapshot.value!.ids.length;
      undo.run();
      await vi.waitFor(() => expect(lastToast(s.controller)).toBe('Undone'));
      expect(s.controller.snapshot.value!.ids.length).toBe(before);
      expect(s.gmail.labelsOf(s.gmail.idsFrom('alerts@bank.com')[0]!)).not.toContain('TRASH');
    });

    it('reverts a keep toggle that could not be saved', async () => {
      const s = await setup();
      await s.controller.startScan();
      const set = s.local.set.bind(s.local);
      s.local.set = (key, value) =>
        key === 'keep' ? Promise.reject(new Error('quota exceeded')) : set(key, value);
      await s.controller.toggleKeep(s.controller.groupIndex.value.get('mom@gmail.com')!);
      expect(s.controller.keep.value.size).toBe(0);
      expect(lastToast(s.controller)).toBe('quota exceeded');
    });
  });

  describe('tools', () => {
    it('empties Trash', async () => {
      const s = await setup();
      s.script.grantFullAccess = true;
      await s.controller.emptyFolder('TRASH');
      expect(s.asked.at(-1)).toEqual({ kind: 'folderAlreadyEmpty', folder: 'Trash' });

      s.gmail.relabel(s.gmail.idsFrom('alerts@bank.com'), { add: ['TRASH'] });
      s.script.emptyFolder = true;
      await s.controller.emptyFolder('TRASH');
      expect(s.gmail.idsFrom('alerts@bank.com')).toEqual([]);
      expect(lastToast(s.controller)).toBe('Emptied Trash: 4 emails deleted');
    });

    it('clears the cache and the kept list after confirming', async () => {
      const s = await setup();
      await s.controller.startScan();
      await s.controller.clearKept();
      expect(lastToast(s.controller)).toBe('No senders are kept.');
      await s.controller.toggleKeep(s.controller.groupIndex.value.get('mom@gmail.com')!);
      s.script.clearKept = true;
      await s.controller.clearKept();
      expect(s.controller.keep.value.size).toBe(0);

      await s.controller.clearCache();
      expect(s.controller.stats.value.messages).toBe(41);
      s.script.clearCache = true;
      await s.controller.clearCache();
      expect(s.controller.snapshot.value).toBeNull();
      expect(s.controller.records.value).toEqual([]);
    });

    it('refuses to switch accounts mid-action', async () => {
      const s = await setup();
      await s.controller.startScan();
      s.controller.busy.value = true;
      await s.controller.signOut();
      expect(s.controller.view.value).toBe('app');
      expect(lastToast(s.controller)).toMatch(/Wait for the current action/);
    });
  });
});
