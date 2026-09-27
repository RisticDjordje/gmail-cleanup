import { batch, computed, signal } from '@preact/signals';
import type { OAuthClient, TokenProvider } from '../auth/oauth';
import { AuthError, isValidClientId, SCOPES } from '../auth/oauth';
import { sendersToCsv } from '../core/csv';
import { domainKey } from '../core/domains';
import { formatNumber, pluralize } from '../core/format';
import type { Insight, InsightId } from '../core/grouping';
import {
  actionableAddresses,
  filterGroups,
  findInsights,
  groupMessages,
  isKept,
  SORT_COMPARATORS,
} from '../core/grouping';
import { buildScanQuery, protectionTerms } from '../core/query';
import type { GroupBy, ListFilters, MessageRecord, SenderGroup, SortKey } from '../core/types';
import type { GmailClient } from '../gmail/client';
import type { BulkAction, Search, UndoToken } from '../services/cleanup';
import { ACTION_SPECS, CleanupService, PartialActionError } from '../services/cleanup';
import type { BlockMode } from '../services/filters';
import { createBlockFilters, isSafeFilterSender } from '../services/filters';
import type { PersistentCache } from '../services/messageStore';
import { MessageStore } from '../services/messageStore';
import type { ScanProgress } from '../services/scanner';
import { Scanner } from '../services/scanner';
import { planUnsubscribe, postOneClick, UnsubscribeService } from '../services/unsubscribe';
import { DialogService } from './dialogs';
import { describeError } from './errors';
import type { Persistence, ScanSnapshot, Settings } from './persistence';
import { DEFAULT_SETTINGS } from './persistence';
import { ToastService } from './toasts';

export type GmailApi = Pick<
  GmailClient,
  | 'getProfile'
  | 'listMessageIds'
  | 'getMessageMetadata'
  | 'listHistory'
  | 'batchModify'
  | 'batchDelete'
  | 'trashMessage'
  | 'sendMessage'
  | 'createFilter'
>;

export type AuthApi = Pick<
  OAuthClient,
  | 'getConfig'
  | 'setClientId'
  | 'signIn'
  | 'resume'
  | 'forAccount'
  | 'hasFullAccess'
  | 'signOut'
  | 'redirectUri'
>;

export type CacheHandle = PersistentCache & { close(): void };

export interface ControllerDeps {
  readonly auth: AuthApi;
  /** A Gmail client for one account, using that account's tokens. */
  readonly gmailFor: (account: string, tokens: TokenProvider) => GmailApi;
  readonly persistence: Persistence;
  readonly openCache: (account: string) => Promise<CacheHandle>;
  readonly postOneClick?: (url: string) => Promise<void>;
  readonly now?: () => number;
}

export type View = 'loading' | 'setup' | 'signin' | 'app';

export type ScanState =
  { readonly status: 'idle' } | { readonly status: 'running'; readonly progress: ScanProgress };

export interface MailboxStats {
  readonly messages: number;
  readonly senders: number;
  readonly bytes: number;
  readonly unread: number;
  readonly unsubscribable: number;
}

export const PAGE_SIZE = 100;

const ACTION_COPY: Readonly<
  Record<BulkAction, { title: string; verb: string; done: (n: string) => string }>
> = {
  trash: { title: 'Move to Trash', verb: 'Moving to Trash', done: (n) => `Moved ${n} to Trash` },
  archive: { title: 'Archive', verb: 'Archiving', done: (n) => `Archived ${n}` },
  markRead: { title: 'Mark as read', verb: 'Marking as read', done: (n) => `Marked ${n} as read` },
  archiveRead: {
    title: 'Archive and mark read',
    verb: 'Archiving',
    done: (n) => `Archived and marked read ${n}`,
  },
  spam: { title: 'Report spam', verb: 'Reporting spam', done: (n) => `Reported ${n} as spam` },
  delete: { title: 'Delete forever', verb: 'Deleting', done: (n) => `Permanently deleted ${n}` },
};

const BLOCK_APPLY_ACTION: Readonly<Record<BlockMode, BulkAction>> = {
  trash: 'trash',
  archive: 'archive',
  archiveRead: 'archiveRead',
};

const emails = (n: number): string => pluralize(n, 'email');

/** Everything bound to the signed-in account. Replaced as a whole when the account changes. */
interface AccountSession {
  readonly account: string;
  readonly gmail: GmailApi;
  readonly tokens: TokenProvider;
  readonly cache: CacheHandle;
  readonly store: MessageStore;
  readonly scanner: Scanner;
  readonly cleanup: CleanupService;
  readonly unsubscriber: UnsubscribeService;
}

/**
 * Application state (as signals) and every user-facing operation. UI components only read
 * signals and call methods here; all Gmail/storage work happens in services behind it.
 */
export class AppController {
  readonly dialogs = new DialogService();
  readonly toasts = new ToastService();

  readonly view = signal<View>('loading');
  readonly signInError = signal<string | null>(null);
  readonly account = signal<string | null>(null);
  readonly settings = signal<Settings>(DEFAULT_SETTINGS);
  readonly keep = signal<ReadonlySet<string>>(new Set());
  readonly unsubscribed = signal<ReadonlyMap<string, number>>(new Map());
  readonly snapshot = signal<ScanSnapshot | null>(null);
  readonly scanState = signal<ScanState>({ status: 'idle' });
  /** A scan, bulk action or sign-in is running; nothing else may start. */
  readonly busy = signal(false);
  readonly search = signal('');
  readonly selected = signal<ReadonlySet<string>>(new Set());
  readonly expanded = signal<ReadonlySet<string>>(new Set());
  readonly visibleCount = signal(PAGE_SIZE);

  /** The account session. Its store isn't reactive, so store changes bump `version`. */
  readonly #state = signal<{ readonly session: AccountSession | null; readonly version: number }>({
    session: null,
    version: 0,
  });
  #scanAbort: AbortController | null = null;
  #scanFinished: Promise<void> = Promise.resolve();

  readonly #auth: AuthApi;
  readonly #gmailFor: ControllerDeps['gmailFor'];
  readonly #persistence: Persistence;
  readonly #openCache: ControllerDeps['openCache'];
  readonly #postOneClick: (url: string) => Promise<void>;
  readonly #now: () => number;

  constructor(deps: ControllerDeps) {
    this.#auth = deps.auth;
    this.#gmailFor = deps.gmailFor;
    this.#persistence = deps.persistence;
    this.#openCache = deps.openCache;
    this.#postOneClick = deps.postOneClick ?? postOneClick;
    this.#now = deps.now ?? Date.now;
  }

  // --- Derived state -----------------------------------------------------------

  /** Cached records for the messages in the current scan. */
  readonly records = computed<readonly MessageRecord[]>(() => {
    const { session } = this.#state.value;
    const snapshot = this.snapshot.value;
    return session && snapshot ? session.store.pick(snapshot.ids) : [];
  });

  readonly groups = computed(() => groupMessages(this.records.value, this.settings.value.view.groupBy));

  readonly groupIndex = computed(() => new Map(this.groups.value.map((g) => [g.key, g])));

  readonly filteredGroups = computed(() => {
    const { filters, sort } = this.settings.value.view;
    return filterGroups(this.groups.value, {
      search: this.search.value,
      filters,
      keep: this.keep.value,
    }).sort(SORT_COMPARATORS[sort]);
  });

  readonly insights = computed<readonly Insight[]>(() => findInsights(this.groups.value, this.keep.value));

  readonly stats = computed<MailboxStats>(() => {
    const records = this.records.value;
    let bytes = 0;
    let unread = 0;
    const senders = new Set<string>();
    for (const r of records) {
      bytes += r.size;
      if (r.unread) unread++;
      senders.add(r.email);
    }
    return {
      messages: records.length,
      senders: senders.size,
      bytes,
      unread,
      unsubscribable: this.groups.value.filter((g) => g.hasUnsubscribe).length,
    };
  });

  /** Selected groups that actions may touch (kept groups are never included). */
  readonly selectedGroups = computed(() => {
    const index = this.groupIndex.value;
    const keep = this.keep.value;
    return [...this.selected.value].flatMap((key) => {
      const group = index.get(key);
      return group && !isKept(group, keep) ? [group] : [];
    });
  });

  /** How many of the scan's messages have been read into the cache. */
  readonly coverage = computed(() => ({
    listed: this.snapshot.value?.ids.length ?? 0,
    read: this.records.value.length,
  }));

  isKept(group: SenderGroup): boolean {
    return isKept(group, this.keep.value);
  }

  redirectUri(): string {
    return this.#auth.redirectUri();
  }

  // --- Lifecycle & account ---------------------------------------------------------

  async init(): Promise<void> {
    try {
      const [settings, keep, unsubscribed, config] = await Promise.all([
        this.#persistence.settings.get(),
        this.#persistence.keep.get(),
        this.#persistence.unsubscribed.get(),
        this.#auth.getConfig(),
      ]);
      batch(() => {
        this.settings.value = settings;
        this.keep.value = new Set(keep);
        this.unsubscribed.value = new Map(Object.entries(unsubscribed));
      });
      if (!config.clientId) {
        this.view.value = 'setup';
        return;
      }
      await this.#enterAccount(await this.#auth.resume());
    } catch (error) {
      this.#showSignIn(error instanceof AuthError && error.code === 'interaction_required' ? null : error);
    }
  }

  async saveClientId(clientId: string): Promise<boolean> {
    if (!isValidClientId(clientId)) {
      this.toasts.error(
        'That doesn’t look like an OAuth client ID. It should end in .apps.googleusercontent.com',
      );
      return false;
    }
    try {
      await this.#auth.setClientId(clientId);
      this.#showSignIn(null);
      return true;
    } catch (error) {
      this.#report(error);
      return false;
    }
  }

  async signIn(options: { selectAccount?: boolean } = {}): Promise<void> {
    if (!(await this.#stopWork())) return;
    const wasSignedIn = this.view.peek() === 'app';
    this.signInError.value = null;
    // Busy while Google's popup is open, so nothing can start against the old account meanwhile.
    this.busy.value = true;
    try {
      const account = await this.#auth.signIn({ selectAccount: options.selectAccount ?? false });
      await this.#enterAccount(account);
    } catch (error) {
      // Cancelling "switch account" leaves the current account signed in.
      if (wasSignedIn && error instanceof AuthError && error.code === 'cancelled') return;
      this.#showSignIn(error);
    } finally {
      this.busy.value = false;
    }
  }

  async signOut(): Promise<void> {
    if (!(await this.#stopWork())) return;
    try {
      const account = this.account.peek();
      if (account) await this.#auth.signOut(account);
      this.#leaveAccount();
      this.#showSignIn(null);
    } catch (error) {
      this.#report(error);
    }
  }

  async resetClient(): Promise<void> {
    if (!(await this.#stopWork())) return;
    try {
      const account = this.account.peek();
      if (account) await this.#auth.signOut(account);
      await this.#auth.setClientId('');
      this.#leaveAccount();
      this.view.value = 'setup';
    } catch (error) {
      this.#report(error);
    }
  }

  async #enterAccount(account: string): Promise<void> {
    const tokens = this.#auth.forAccount(account);
    const gmail = this.#gmailFor(account, tokens);
    const cache = await this.#openCache(account);
    const [store, snapshot] = await Promise.all([
      MessageStore.load(cache),
      this.#persistence.snapshot(account).get(),
    ]);
    this.#session()?.cache.close();
    const session: AccountSession = {
      account,
      gmail,
      tokens,
      cache,
      store,
      scanner: new Scanner(gmail),
      cleanup: new CleanupService(gmail),
      unsubscriber: new UnsubscribeService(gmail, this.#postOneClick),
    };
    batch(() => {
      this.#setSession(session);
      this.account.value = account;
      this.snapshot.value = snapshot;
      this.#resetListState();
      this.signInError.value = null;
      this.view.value = 'app';
    });
  }

  #leaveAccount(): void {
    this.#session()?.cache.close();
    batch(() => {
      this.#setSession(null);
      this.account.value = null;
      this.snapshot.value = null;
      this.#resetListState();
    });
  }

  #session(): AccountSession | null {
    return this.#state.peek().session;
  }

  #setSession(session: AccountSession | null): void {
    this.#state.value = { session, version: this.#state.peek().version + 1 };
  }

  #storeChanged(): void {
    this.#setSession(this.#session());
  }

  #resetListState(): void {
    this.selected.value = new Set();
    this.expanded.value = new Set();
    this.search.value = '';
    this.visibleCount.value = PAGE_SIZE;
  }

  #showSignIn(error: unknown): void {
    batch(() => {
      this.signInError.value = error === null ? null : describeError(error, this.#auth.redirectUri());
      this.view.value = 'signin';
    });
  }

  /** Stop a running scan before the account changes. Returns false if an action is still running. */
  async #stopWork(): Promise<boolean> {
    if (this.#scanAbort) {
      this.#scanAbort.abort();
      await this.#scanFinished;
    } else if (this.busy.peek()) {
      this.toasts.show('Wait for the current action to finish first.');
      return false;
    }
    this.dialogs.closeAll();
    this.toasts.clear(); // Undo buttons belong to the account they were created in
    return true;
  }

  // --- Settings & list state ---------------------------------------------------------

  updateSettings(update: (current: Settings) => Settings): void {
    const next = update(this.settings.peek());
    this.settings.value = next;
    this.#persistence.settings.set(next).catch((error: unknown) => this.#report(error));
  }

  setGroupBy(groupBy: GroupBy): void {
    if (groupBy === this.settings.peek().view.groupBy) return;
    batch(() => {
      this.updateSettings((s) => ({ ...s, view: { ...s.view, groupBy } }));
      this.selected.value = new Set();
      this.expanded.value = new Set();
      this.visibleCount.value = PAGE_SIZE;
    });
  }

  setSort(sort: SortKey): void {
    this.updateSettings((s) => ({ ...s, view: { ...s.view, sort } }));
  }

  toggleFilter(name: keyof ListFilters): void {
    batch(() => {
      this.updateSettings((s) => ({
        ...s,
        view: { ...s.view, filters: { ...s.view.filters, [name]: !s.view.filters[name] } },
      }));
      this.visibleCount.value = PAGE_SIZE;
    });
  }

  setSearch(search: string): void {
    batch(() => {
      this.search.value = search;
      this.visibleCount.value = PAGE_SIZE;
    });
  }

  showMore(): void {
    this.visibleCount.value += PAGE_SIZE;
  }

  toggleExpanded(key: string): void {
    this.expanded.value = toggled(this.expanded.peek(), key, !this.expanded.peek().has(key));
  }

  setSelected(key: string, selected: boolean): void {
    const group = this.groupIndex.peek().get(key);
    if (selected && (!group || this.isKept(group))) return;
    this.selected.value = toggled(this.selected.peek(), key, selected);
  }

  /** Select or deselect every group matching the current filters (kept groups excluded). */
  setAllSelected(selected: boolean): void {
    const next = new Set(this.selected.peek());
    for (const g of this.filteredGroups.peek()) {
      if (this.isKept(g)) continue;
      if (selected) next.add(g.key);
      else next.delete(g.key);
    }
    this.selected.value = next;
  }

  clearSelection(): void {
    this.selected.value = new Set();
  }

  /** Apply the filter/sort that best shows an insight (and select the top senders for `top10`). */
  focusInsight(id: InsightId): void {
    batch(() => {
      this.search.value = '';
      this.visibleCount.value = PAGE_SIZE;
      this.updateSettings((s) => ({
        ...s,
        view: {
          ...s.view,
          sort: id === 'heavy' ? 'size' : 'count',
          filters: {
            ...s.view.filters,
            hasUnsubscribe: id === 'mailingLists',
            mostlyUnread: id === 'neverRead',
          },
        },
      }));
      if (id === 'top10') {
        const insight = this.insights.peek().find((i) => i.id === 'top10');
        this.selected.value = new Set(insight?.groups.map((g) => g.key));
      }
    });
  }

  async toggleKeep(group: SenderGroup): Promise<void> {
    const keep = new Set(this.keep.peek());
    if (this.isKept(group)) {
      keep.delete(group.key);
      if (group.groupBy === 'sender') keep.delete(domainKey(group.key));
    } else {
      keep.add(group.key);
      this.selected.value = toggled(this.selected.peek(), group.key, false);
    }
    await this.#saveKeep(keep);
  }

  async clearKept(): Promise<void> {
    const count = this.keep.peek().size;
    if (!count) {
      this.toasts.show('No senders are kept.');
      return;
    }
    if (await this.dialogs.ask({ kind: 'clearKept', count })) await this.#saveKeep(new Set());
  }

  async #saveKeep(keep: ReadonlySet<string>): Promise<void> {
    const previous = this.keep.peek();
    this.keep.value = keep;
    try {
      await this.#persistence.keep.set([...keep]);
    } catch (error) {
      this.keep.value = previous; // don't show a protection that wasn't saved
      this.#report(error);
    }
  }

  exportCsv(): string {
    return sendersToCsv(this.filteredGroups.peek());
  }

  // --- Scanning --------------------------------------------------------------------------

  async startScan(): Promise<void> {
    const session = this.#session();
    if (!session || this.busy.peek()) return;

    const { scan, protection } = this.settings.peek();
    const query = buildScanQuery(scan, protection);
    const snapshotStore = this.#persistence.snapshot(session.account);
    const abort = new AbortController();
    let finish = (): void => undefined;
    this.#scanFinished = new Promise((resolve) => (finish = resolve));
    this.#scanAbort = abort;
    batch(() => {
      this.busy.value = true;
      this.scanState.value = { status: 'running', progress: { phase: 'syncing' } };
    });

    const saveSnapshot = async (ids: readonly string[], complete: boolean): Promise<void> => {
      const snapshot: ScanSnapshot = { query, scope: scan.scope, ids, scannedAt: this.#now(), complete };
      this.snapshot.value = snapshot;
      await snapshotStore.set(snapshot);
    };

    try {
      const outcome = await session.scanner.scan(session.store, {
        query,
        max: scan.maxMessages,
        signal: abort.signal,
        onProgress: (progress) => (this.scanState.value = { status: 'running', progress }),
        onListed: (ids) => {
          this.selected.value = new Set();
          saveSnapshot(ids, false).catch((error: unknown) => this.#report(error));
        },
        onRecords: () => this.#storeChanged(),
      });
      if (outcome.status === 'complete') {
        await saveSnapshot(outcome.ids, true);
        this.toasts.show(`Scan complete: ${emails(outcome.ids.length)}`);
      } else {
        this.toasts.show(
          'Scan stopped. Scan again to continue where you left off; already-read emails are kept.',
        );
      }
    } catch (error) {
      this.#report(error);
    } finally {
      this.#scanAbort = null;
      batch(() => {
        this.busy.value = false;
        this.scanState.value = { status: 'idle' };
        this.#storeChanged();
      });
      finish();
    }
  }

  stopScan(): void {
    this.#scanAbort?.abort();
  }

  // --- Bulk actions ----------------------------------------------------------------------

  /** Find the selected senders' messages, confirm with the exact count, then apply `action`. */
  async runBulkAction(action: BulkAction): Promise<void> {
    const groups = this.selectedGroups.peek();
    if (!groups.length) return;
    await this.#exclusive(async (session) => {
      if (action === 'delete' && !(await this.#ensureFullAccess(session))) return;
      await this.#findConfirmAndRun(session, action, groups);
    });
  }

  async unsubscribe(): Promise<void> {
    const groups = this.selectedGroups.peek();
    if (!groups.length || this.busy.peek()) return;
    const keep = this.keep.peek();
    const plan = planUnsubscribe(
      groups.flatMap((g) =>
        actionableAddresses(g, keep).map((address) => ({
          address,
          info: g.addresses.get(address)?.unsubscribe ?? null,
        })),
      ),
    );
    const choice = await this.dialogs.ask({ kind: 'unsubscribe', plan });
    if (!choice) return;

    await this.#exclusive(async (session) => {
      const results = await session.unsubscriber.execute(plan.targets, (n) =>
        this.dialogs.showProgress('Unsubscribing', `${n} of ${plan.targets.length}`, n / plan.targets.length),
      );
      const done = results.filter((r) => r.status === 'done');
      if (done.length) {
        const unsubscribed = new Map(this.unsubscribed.peek());
        for (const r of done) unsubscribed.set(r.address, this.#now());
        this.unsubscribed.value = unsubscribed;
        await this.#persistence.unsubscribed.set(Object.fromEntries(unsubscribed));
      }
      if (choice.blockFuture) await this.#createFilters(session, this.#filterSenders(groups), 'trash');
      if (choice.trashExisting) await this.#findConfirmAndRun(session, 'trash', groups);
      this.dialogs.hideProgress();

      const links = results.flatMap((r) =>
        r.status === 'needsWebsite' ? [{ address: r.address, url: r.url }] : [],
      );
      const failed = results.filter((r) => r.status === 'failed').length;
      if (links.length) await this.dialogs.ask({ kind: 'websiteLinks', done: done.length, links });
      else if (done.length || failed) {
        this.toasts.show(
          `Unsubscribed from ${pluralize(done.length, 'sender')}${failed ? `; ${formatNumber(failed)} failed` : ''}`,
          failed && !done.length ? { tone: 'error' } : {},
        );
      }
    });
  }

  async blockFuture(): Promise<void> {
    const groups = this.selectedGroups.peek();
    if (!groups.length || this.busy.peek()) return;
    const criteria = this.#filterSenders(groups);
    if (!criteria.length) {
      await this.dialogs.ask({ kind: 'nothingToDo', action: 'trash' });
      return;
    }
    const choice = await this.dialogs.ask({
      kind: 'block',
      senders: groups.map((g) => g.displayName),
      criteria,
    });
    if (!choice) return;

    await this.#exclusive(async (session) => {
      const created = await this.#createFilters(session, criteria, choice.mode);
      this.toasts.show(`Created ${pluralize(created, 'filter')}`);
      if (choice.applyNow) await this.#findConfirmAndRun(session, BLOCK_APPLY_ACTION[choice.mode], groups);
    });
  }

  async emptyFolder(label: 'TRASH' | 'SPAM'): Promise<void> {
    const folder = label === 'TRASH' ? 'Trash' : 'Spam';
    await this.#exclusive(async (session) => {
      if (!(await this.#ensureFullAccess(session))) return;
      this.dialogs.showProgress(`Empty ${folder}`, 'Counting…');
      const ids = await session.gmail.listMessageIds('', { labelIds: [label], includeSpamTrash: true });
      if (!ids.length) {
        await this.dialogs.ask({ kind: 'folderAlreadyEmpty', folder });
        return;
      }
      if (!(await this.dialogs.ask({ kind: 'emptyFolder', folder, count: ids.length }))) return;
      try {
        await session.cleanup.run('delete', ids, {
          onProgress: (n) =>
            this.dialogs.showProgress(
              `Emptying ${folder}`,
              `${formatNumber(n)} of ${formatNumber(ids.length)}`,
              n / ids.length,
            ),
        });
      } catch (error) {
        if (error instanceof PartialActionError) await session.store.remove(error.succeeded);
        throw error;
      } finally {
        this.#storeChanged();
      }
      await session.store.remove(ids);
      this.toasts.show(`Emptied ${folder}: ${emails(ids.length)} deleted`);
    });
  }

  async clearCache(): Promise<void> {
    await this.#exclusive(async (session) => {
      if (!(await this.dialogs.ask({ kind: 'clearCache' }))) return;
      await session.store.clear();
      await this.#persistence.snapshot(session.account).remove();
      batch(() => {
        this.snapshot.value = null;
        this.selected.value = new Set();
        this.#storeChanged();
      });
    });
  }

  /** Run a long operation for the current account: one at a time, errors reported, progress cleared. */
  async #exclusive(work: (session: AccountSession) => Promise<void>): Promise<void> {
    const session = this.#session();
    if (!session) return;
    if (this.busy.peek()) {
      this.toasts.show('Wait for the current action to finish first.');
      return;
    }
    this.busy.value = true;
    try {
      await work(session);
    } catch (error) {
      this.#report(error);
    } finally {
      this.dialogs.hideProgress();
      this.busy.value = false;
    }
  }

  /** Search for the groups' messages, show the exact count, and run the action if confirmed. */
  async #findConfirmAndRun(
    session: AccountSession,
    action: BulkAction,
    groups: readonly SenderGroup[],
  ): Promise<void> {
    const search = this.#search(groups);
    const title = ACTION_COPY[action].title;
    this.dialogs.showProgress(title, 'Finding emails…');
    const ids = await session.cleanup.findMessages(search, action, {
      onProgress: (n) => this.dialogs.showProgress(title, `Finding emails… ${formatNumber(n)}`),
    });
    this.dialogs.hideProgress();
    if (!ids.length) {
      await this.dialogs.ask({ kind: 'nothingToDo', action });
      return;
    }
    const confirmed = await this.dialogs.ask({
      kind: 'confirmAction',
      action,
      account: session.account,
      count: ids.length,
      senders: groups.map((g) => g.displayName),
      scanQuery: this.snapshot.peek()?.query ?? '',
      protection: this.settings.peek().protection,
    });
    if (confirmed) await this.#execute(session, action, search, ids, groups);
  }

  /** The groups' actionable addresses, restricted to the last scan's search and current protections. */
  #search(groups: readonly SenderGroup[]): Search {
    const keep = this.keep.peek();
    return {
      addresses: [...new Set(groups.flatMap((g) => actionableAddresses(g, keep)))],
      baseQuery: [this.snapshot.peek()?.query ?? '', ...protectionTerms(this.settings.peek().protection)]
        .join(' ')
        .trim(),
    };
  }

  async #execute(
    session: AccountSession,
    action: BulkAction,
    search: Search,
    ids: readonly string[],
    groups: readonly SenderGroup[],
  ): Promise<void> {
    const copy = ACTION_COPY[action];
    const progress = (n: number): void =>
      this.dialogs.showProgress(
        copy.title,
        `${copy.verb}… ${formatNumber(n)} of ${formatNumber(ids.length)}`,
        n / ids.length,
      );
    progress(0);
    const restore = action === 'delete' ? {} : await session.cleanup.captureRestore(search, action, ids);
    const viewAtStart = this.snapshot.peek();

    let token: UndoToken | null;
    let changed = ids;
    let failure: PartialActionError | null = null;
    try {
      token = await session.cleanup.run(action, ids, { restore, onProgress: progress });
    } catch (error) {
      if (!(error instanceof PartialActionError)) throw error;
      failure = error;
      token = error.token;
      changed = error.succeeded;
    }

    const removedFromView = await this.#applyLocally(session, action, changed);
    this.selected.value = new Set([...this.selected.peek()].filter((k) => !groups.some((g) => g.key === k)));
    this.dialogs.hideProgress();
    const undo = token
      ? { label: 'Undo', run: () => void this.#undo(session, token, removedFromView, viewAtStart) }
      : undefined;
    if (failure) {
      const reason = describeError(failure.cause, this.#auth.redirectUri());
      this.toasts.show(
        `${copy.done(`${formatNumber(changed.length)} of ${emails(ids.length)}`)}, then Gmail failed: ${reason}`,
        {
          tone: 'error',
          ...(undo ? { action: undo } : {}),
        },
      );
    } else {
      this.toasts.show(copy.done(emails(ids.length)), undo ? { action: undo } : {});
    }
  }

  /** Mirror an action in the cache and the scan's view. Returns IDs removed from the view. */
  async #applyLocally(
    session: AccountSession,
    action: BulkAction,
    ids: readonly string[],
  ): Promise<string[]> {
    const spec = ACTION_SPECS[action];
    if (action === 'delete') await session.store.remove(ids);
    else if (spec.labels) {
      const { add, remove } = spec.labels;
      await session.store.applyLabelChanges(ids.map((id) => ({ id, added: add, removed: remove })));
    }
    const scope = this.snapshot.peek()?.scope;
    const leavesView =
      spec.leavesMailbox ||
      (scope === 'inbox' && spec.labels?.remove.includes('INBOX') === true) ||
      (scope === 'unread' && spec.labels?.remove.includes('UNREAD') === true);
    const removed = leavesView ? await this.#removeFromView(session.account, ids) : [];
    this.#storeChanged();
    return removed;
  }

  async #undo(
    session: AccountSession,
    token: UndoToken,
    removedFromView: readonly string[],
    viewAtStart: ScanSnapshot | null,
  ): Promise<void> {
    if (session !== this.#session()) return; // the account changed since
    await this.#exclusive(async () => {
      this.dialogs.showProgress('Undo', 'Restoring…');
      await session.cleanup.undo(token, (n) =>
        this.dialogs.showProgress(
          'Undo',
          `Restoring… ${formatNumber(n)} of ${formatNumber(token.ids.length)}`,
        ),
      );
      const labels = ACTION_SPECS[token.action].labels;
      await session.store.applyLabelChanges([
        ...(labels?.add.length ? token.ids.map((id) => ({ id, added: [], removed: labels.add })) : []),
        ...Object.entries(token.restore).flatMap(([label, ids]) =>
          ids.map((id) => ({ id, added: [label], removed: [] })),
        ),
      ]);
      // Only put messages back into the scan they were removed from, not a newer one.
      const current = this.snapshot.peek();
      if (current && current.scannedAt === viewAtStart?.scannedAt && current.query === viewAtStart.query) {
        await this.#restoreToView(session.account, removedFromView);
      }
      this.#storeChanged();
      this.toasts.show('Undone');
    });
  }

  async #removeFromView(account: string, ids: readonly string[]): Promise<string[]> {
    const snapshot = this.snapshot.peek();
    if (!snapshot) return [];
    const gone = new Set(ids);
    const removed = snapshot.ids.filter((id) => gone.has(id));
    if (!removed.length) return [];
    await this.#saveSnapshot(account, { ...snapshot, ids: snapshot.ids.filter((id) => !gone.has(id)) });
    return removed;
  }

  async #restoreToView(account: string, ids: readonly string[]): Promise<void> {
    const snapshot = this.snapshot.peek();
    if (!snapshot || !ids.length) return;
    const present = new Set(snapshot.ids);
    await this.#saveSnapshot(account, {
      ...snapshot,
      ids: [...snapshot.ids, ...ids.filter((id) => !present.has(id))],
    });
  }

  async #saveSnapshot(account: string, snapshot: ScanSnapshot): Promise<void> {
    this.snapshot.value = snapshot;
    await this.#persistence.snapshot(account).set(snapshot);
  }

  /**
   * Filter criteria for blocking the groups. A whole domain gets one domain-wide filter only if
   * nothing in that domain is kept (including kept addresses the current scan didn't see).
   */
  #filterSenders(groups: readonly SenderGroup[]): string[] {
    const keep = this.keep.peek();
    const keptInDomain = (domain: string): boolean =>
      [...keep].some((k) => !k.startsWith('@') && domainKey(k) === domain);
    const senders = groups.flatMap((g) => {
      const addresses = actionableAddresses(g, keep);
      const wholeDomain =
        g.groupBy === 'domain' && addresses.length === g.addresses.size && !keptInDomain(g.key);
      return wholeDomain ? [g.key] : addresses;
    });
    return [...new Set(senders)].filter(isSafeFilterSender);
  }

  async #createFilters(
    session: AccountSession,
    senders: readonly string[],
    mode: BlockMode,
  ): Promise<number> {
    return createBlockFilters(session.gmail, senders, mode, (n) =>
      this.dialogs.showProgress('Creating filters', `${n} of ${senders.length}`, n / senders.length),
    );
  }

  /** Permanent deletion needs full access, in its own token. Ask only the first time. */
  async #ensureFullAccess(session: AccountSession): Promise<boolean> {
    if (!(await this.#auth.hasFullAccess(session.account))) {
      if (!(await this.dialogs.ask({ kind: 'grantFullAccess' }))) return false;
    }
    try {
      await session.tokens.getToken({ interactive: true, scopes: [SCOPES.full] });
      return true;
    } catch (error) {
      // Still signed in with the base permissions; just report why.
      this.toasts.error(describeError(error, this.#auth.redirectUri()));
      return false;
    }
  }

  #report(error: unknown): void {
    console.error(error);
    if (
      error instanceof AuthError &&
      (error.code === 'interaction_required' || error.code === 'not_configured')
    ) {
      this.#showSignIn(error);
      return;
    }
    this.toasts.error(describeError(error, this.#auth.redirectUri()));
  }
}

function toggled(set: ReadonlySet<string>, key: string, on: boolean): ReadonlySet<string> {
  if (set.has(key) === on) return set;
  const next = new Set(set);
  if (on) next.add(key);
  else next.delete(key);
  return next;
}
