import { batch, computed, signal } from '@preact/signals';
import type { OAuthClient } from '../auth/oauth';
import { AuthError, BASE_SCOPES, isValidClientId, SCOPES } from '../auth/oauth';
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
import type { BulkAction, UndoToken } from '../services/cleanup';
import { ACTION_SPECS, CleanupService } from '../services/cleanup';
import { createBlockFilters } from '../services/filters';
import type { PersistentCache } from '../services/messageStore';
import { MessageStore } from '../services/messageStore';
import type { ScanProgress } from '../services/scanner';
import { Scanner } from '../services/scanner';
import { planUnsubscribe, UnsubscribeService } from '../services/unsubscribe';
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
  'getConfig' | 'setClientId' | 'setLoginHint' | 'getToken' | 'hasScope' | 'signOut' | 'redirectUri'
>;

export interface ControllerDeps {
  readonly auth: AuthApi;
  readonly gmail: GmailApi;
  readonly persistence: Persistence;
  readonly openCache: (account: string) => Promise<PersistentCache & { close(): void }>;
  readonly unsubscribe?: UnsubscribeService;
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
  spam: { title: 'Report spam', verb: 'Reporting spam', done: (n) => `Reported ${n} as spam` },
  delete: { title: 'Delete forever', verb: 'Deleting', done: (n) => `Permanently deleted ${n}` },
};

const emails = (n: number): string => pluralize(n, 'email');

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
  /** A scan or bulk action is running; other long operations must wait. */
  readonly busy = signal(false);
  readonly search = signal('');
  readonly selected = signal<ReadonlySet<string>>(new Set());
  readonly expanded = signal<ReadonlySet<string>>(new Set());
  readonly visibleCount = signal(PAGE_SIZE);

  /** The current account's message store. It isn't reactive itself, so changes bump `version`. */
  readonly #storeState = signal<{ readonly store: MessageStore | null; readonly version: number }>({
    store: null,
    version: 0,
  });
  #cache: (PersistentCache & { close(): void }) | null = null;
  #scanAbort: AbortController | null = null;
  #scanFinished: Promise<void> = Promise.resolve();

  readonly #auth: AuthApi;
  readonly #gmail: GmailApi;
  readonly #persistence: Persistence;
  readonly #openCache: ControllerDeps['openCache'];
  readonly #scanner: Scanner;
  readonly #cleanup: CleanupService;
  readonly #unsubscriber: UnsubscribeService;
  readonly #now: () => number;

  constructor(deps: ControllerDeps) {
    this.#auth = deps.auth;
    this.#gmail = deps.gmail;
    this.#persistence = deps.persistence;
    this.#openCache = deps.openCache;
    this.#scanner = new Scanner(deps.gmail);
    this.#cleanup = new CleanupService(deps.gmail);
    this.#unsubscriber = deps.unsubscribe ?? new UnsubscribeService(deps.gmail);
    this.#now = deps.now ?? Date.now;
  }

  // --- Derived state -----------------------------------------------------------

  /** Cached records for the messages in the current scan. */
  readonly records = computed<readonly MessageRecord[]>(() => {
    const { store } = this.#storeState.value;
    const snapshot = this.snapshot.value;
    return store && snapshot ? store.pick(snapshot.ids) : [];
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
    try {
      await this.#auth.getToken({ interactive: false });
      await this.#enterAccount();
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
    await this.#auth.setClientId(clientId);
    this.#showSignIn(null);
    return true;
  }

  async signIn(options: { selectAccount?: boolean } = {}): Promise<void> {
    if (!(await this.#stopWork())) return;
    this.signInError.value = null;
    const wasSignedIn = this.view.peek() === 'app';
    try {
      await this.#auth.getToken({ interactive: true, selectAccount: options.selectAccount ?? false });
      await this.#enterAccount();
    } catch (error) {
      // Cancelling "switch account" leaves the current account signed in.
      if (wasSignedIn && error instanceof AuthError && error.code === 'cancelled') return;
      this.#showSignIn(error);
    }
  }

  async signOut(): Promise<void> {
    if (!(await this.#stopWork())) return;
    await this.#auth.signOut();
    this.#leaveAccount();
    this.#showSignIn(null);
  }

  async resetClient(): Promise<void> {
    if (!(await this.#stopWork())) return;
    await this.#auth.signOut();
    await this.#auth.setClientId('');
    this.#leaveAccount();
    this.view.value = 'setup';
  }

  async #enterAccount(): Promise<void> {
    const profile = await this.#gmail.getProfile();
    const account = profile.emailAddress;
    await this.#auth.setLoginHint(account);
    const cache = await this.#openCache(account);
    const [store, snapshot] = await Promise.all([
      MessageStore.load(cache),
      this.#persistence.snapshot(account).get(),
    ]);
    this.#cache?.close();
    this.#cache = cache;
    batch(() => {
      this.#setStore(store);
      this.account.value = account;
      this.snapshot.value = snapshot;
      this.#resetListState();
      this.signInError.value = null;
      this.view.value = 'app';
    });
  }

  #leaveAccount(): void {
    this.#cache?.close();
    this.#cache = null;
    batch(() => {
      this.#setStore(null);
      this.account.value = null;
      this.snapshot.value = null;
      this.#resetListState();
    });
  }

  #store(): MessageStore | null {
    return this.#storeState.peek().store;
  }

  #setStore(store: MessageStore | null): void {
    this.#storeState.value = { store, version: this.#storeState.peek().version + 1 };
  }

  #storeChanged(): void {
    this.#setStore(this.#store());
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
    void this.#persistence.settings.set(next).catch((error: unknown) => this.#report(error));
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
    this.keep.value = keep;
    await this.#persistence.keep.set([...keep]);
  }

  async clearKept(): Promise<void> {
    const count = this.keep.peek().size;
    if (!count) {
      this.toasts.show('No senders are kept.');
      return;
    }
    if (!(await this.dialogs.ask({ kind: 'clearKept', count }))) return;
    this.keep.value = new Set();
    await this.#persistence.keep.set([]);
  }

  exportCsv(): string {
    return sendersToCsv(this.filteredGroups.peek());
  }

  // --- Scanning --------------------------------------------------------------------------

  async startScan(): Promise<void> {
    const store = this.#store();
    const account = this.account.peek();
    if (!store || !account || this.busy.peek()) return;

    const { scan, protection } = this.settings.peek();
    const query = buildScanQuery(scan, protection);
    const snapshotStore = this.#persistence.snapshot(account);
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
      const outcome = await this.#scanner.scan(store, {
        query,
        max: scan.maxMessages,
        signal: abort.signal,
        onProgress: (progress) => (this.scanState.value = { status: 'running', progress }),
        onListed: (ids) => {
          this.selected.value = new Set();
          void saveSnapshot(ids, false).catch((error: unknown) => this.#report(error));
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
    if (!groups.length || this.busy.peek()) return;
    if (action === 'delete' && !(await this.#ensureFullAccess())) return;

    await this.#exclusive(async () => {
      const ids = await this.#findMessages(groups, action);
      if (!ids.length) {
        await this.dialogs.ask({ kind: 'nothingToDo', action });
        return;
      }
      const confirmed = await this.dialogs.ask({
        kind: 'confirmAction',
        action,
        count: ids.length,
        senders: groups.map((g) => g.displayName),
        scanQuery: this.snapshot.peek()?.query ?? '',
        protection: this.settings.peek().protection,
      });
      if (confirmed) await this.#execute(action, ids, groups);
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

    await this.#exclusive(async () => {
      const results = await this.#unsubscriber.execute(plan.targets, (n) =>
        this.dialogs.showProgress('Unsubscribing', `${n} of ${plan.targets.length}`, n / plan.targets.length),
      );
      const done = results.filter((r) => r.status === 'done');
      if (done.length) {
        const unsubscribed = new Map(this.unsubscribed.peek());
        for (const r of done) unsubscribed.set(r.address, this.#now());
        this.unsubscribed.value = unsubscribed;
        await this.#persistence.unsubscribed.set(Object.fromEntries(unsubscribed));
      }
      if (choice.blockFuture) await this.#createFilters(groups, 'trash');
      if (choice.trashExisting) {
        const ids = await this.#findMessages(groups, 'trash');
        if (ids.length) await this.#execute('trash', ids, groups);
      }
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
    const choice = await this.dialogs.ask({ kind: 'block', senders: groups.map((g) => g.displayName) });
    if (!choice) return;

    await this.#exclusive(async () => {
      const created = await this.#createFilters(groups, choice.mode);
      if (choice.applyNow) {
        const action = choice.mode === 'trash' ? 'trash' : 'archive';
        const ids = await this.#findMessages(groups, action);
        if (ids.length) {
          if (choice.mode === 'archiveRead') {
            await this.#cleanup.run('markRead', ids);
            await this.#applyLocally('markRead', ids);
          }
          await this.#execute(action, ids, groups);
        }
      }
      this.toasts.show(`Created ${pluralize(created, 'filter')}`);
    });
  }

  async emptyFolder(label: 'TRASH' | 'SPAM'): Promise<void> {
    if (this.busy.peek() || !(await this.#ensureFullAccess())) return;
    const folder = label === 'TRASH' ? 'Trash' : 'Spam';
    await this.#exclusive(async () => {
      this.dialogs.showProgress(`Empty ${folder}`, 'Counting…');
      const ids = await this.#gmail.listMessageIds('', { labelIds: [label], includeSpamTrash: true });
      if (!ids.length) {
        await this.dialogs.ask({ kind: 'folderAlreadyEmpty', folder });
        return;
      }
      if (!(await this.dialogs.ask({ kind: 'emptyFolder', folder, count: ids.length }))) return;
      await this.#cleanup.run('delete', ids, {
        onProgress: (n) =>
          this.dialogs.showProgress(
            `Emptying ${folder}`,
            `${formatNumber(n)} of ${formatNumber(ids.length)}`,
            n / ids.length,
          ),
      });
      await this.#store()?.remove(ids);
      this.#storeChanged();
      this.toasts.show(`Emptied ${folder}: ${emails(ids.length)} deleted`);
    });
  }

  async clearCache(): Promise<void> {
    const account = this.account.peek();
    if (!account || this.busy.peek() || !(await this.dialogs.ask({ kind: 'clearCache' }))) return;
    await this.#store()?.clear();
    await this.#persistence.snapshot(account).remove();
    batch(() => {
      this.snapshot.value = null;
      this.selected.value = new Set();
      this.#storeChanged();
    });
  }

  /** Run a long operation with the busy flag set and errors reported. */
  async #exclusive(work: () => Promise<void>): Promise<void> {
    this.busy.value = true;
    try {
      await work();
    } catch (error) {
      this.#report(error);
    } finally {
      this.dialogs.hideProgress();
      this.busy.value = false;
    }
  }

  /** Message IDs from the groups' addresses, restricted to the last scan's search and current protections. */
  #findMessages(groups: readonly SenderGroup[], action: BulkAction): Promise<string[]> {
    const keep = this.keep.peek();
    const addresses = [...new Set(groups.flatMap((g) => actionableAddresses(g, keep)))];
    const query = [this.snapshot.peek()?.query ?? '', ...protectionTerms(this.settings.peek().protection)]
      .join(' ')
      .trim();
    const title = ACTION_COPY[action].title;
    this.dialogs.showProgress(title, 'Finding emails…');
    return this.#cleanup.findMessages(addresses, query, action, {
      onProgress: (n) => this.dialogs.showProgress(title, `Finding emails… ${formatNumber(n)}`),
    });
  }

  async #execute(action: BulkAction, ids: readonly string[], groups: readonly SenderGroup[]): Promise<void> {
    const copy = ACTION_COPY[action];
    const account = this.account.peek();
    const store = this.#store();
    const wasInInbox = ids.filter((id) => store?.get(id)?.inInbox);
    const token = await this.#cleanup.run(action, ids, {
      wasInInbox,
      onProgress: (n) =>
        this.dialogs.showProgress(
          copy.title,
          `${copy.verb}… ${formatNumber(n)} of ${formatNumber(ids.length)}`,
          n / ids.length,
        ),
    });
    const removedFromView = await this.#applyLocally(action, ids);
    this.selected.value = new Set([...this.selected.peek()].filter((k) => !groups.some((g) => g.key === k)));
    this.dialogs.hideProgress();
    this.toasts.show(
      copy.done(emails(ids.length)),
      token ? { action: { label: 'Undo', run: () => void this.#undo(token, removedFromView, account) } } : {},
    );
  }

  /** Mirror an action in the cache and the scan's view. Returns IDs removed from the view. */
  async #applyLocally(action: BulkAction, ids: readonly string[]): Promise<string[]> {
    const store = this.#store();
    if (!store) return [];
    const spec = ACTION_SPECS[action];
    if (action === 'delete') await store.remove(ids);
    else if (spec.labels) {
      const { add, remove } = spec.labels;
      await store.applyLabelChanges(ids.map((id) => ({ id, added: add, removed: remove })));
    }
    const scope = this.snapshot.peek()?.scope;
    const leavesView =
      spec.leavesMailbox ||
      (action === 'archive' && scope === 'inbox') ||
      (action === 'markRead' && scope === 'unread');
    const removed = leavesView ? await this.#removeFromView(ids) : [];
    this.#storeChanged();
    return removed;
  }

  async #undo(token: UndoToken, removedFromView: readonly string[], account: string | null): Promise<void> {
    if (account !== this.account.peek()) return;
    if (this.busy.peek()) {
      this.toasts.show('Wait for the current action to finish, then try Undo again.');
      return;
    }
    await this.#exclusive(async () => {
      this.dialogs.showProgress('Undo', 'Restoring…');
      await this.#cleanup.undo(token, (n) =>
        this.dialogs.showProgress(
          'Undo',
          `Restoring… ${formatNumber(n)} of ${formatNumber(token.ids.length)}`,
          n / token.ids.length,
        ),
      );
      const labels = ACTION_SPECS[token.action].labels;
      if (labels) {
        await this.#store()?.applyLabelChanges([
          ...token.ids.map((id) => ({ id, added: labels.remove, removed: labels.add })),
          ...token.wasInInbox.map((id) => ({ id, added: ['INBOX'], removed: [] })),
        ]);
      }
      await this.#restoreToView(removedFromView);
      this.#storeChanged();
      this.toasts.show('Undone');
    });
  }

  async #removeFromView(ids: readonly string[]): Promise<string[]> {
    const snapshot = this.snapshot.peek();
    const account = this.account.peek();
    if (!snapshot || !account) return [];
    const gone = new Set(ids);
    const removed = snapshot.ids.filter((id) => gone.has(id));
    if (!removed.length) return [];
    await this.#saveSnapshot(account, { ...snapshot, ids: snapshot.ids.filter((id) => !gone.has(id)) });
    return removed;
  }

  async #restoreToView(ids: readonly string[]): Promise<void> {
    const snapshot = this.snapshot.peek();
    const account = this.account.peek();
    if (!snapshot || !account || !ids.length) return;
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

  async #createFilters(
    groups: readonly SenderGroup[],
    mode: Parameters<typeof createBlockFilters>[2],
  ): Promise<number> {
    const keep = this.keep.peek();
    // A whole domain gets one domain-wide filter, unless some of its addresses are kept.
    const senders = groups.flatMap((g) => {
      const addresses = actionableAddresses(g, keep);
      return g.groupBy === 'domain' && addresses.length === g.addresses.size ? [g.key] : addresses;
    });
    return createBlockFilters(this.#gmail, senders, mode, (n) =>
      this.dialogs.showProgress('Creating filters', `${n} of ${senders.length}`, n / senders.length),
    );
  }

  /** Permanent deletion needs the full Gmail scope; ask for it only when first needed. */
  async #ensureFullAccess(): Promise<boolean> {
    if (await this.#auth.hasScope(SCOPES.full)) return true;
    if (!(await this.dialogs.ask({ kind: 'grantFullAccess' }))) return false;
    try {
      await this.#auth.getToken({ interactive: true, scopes: [...BASE_SCOPES, SCOPES.full] });
      return await this.#auth.hasScope(SCOPES.full);
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
