import { domainKey } from './domains';
import { isSafeAddress } from './headers';
import type {
  AddressStats,
  GroupBy,
  KeepList,
  ListFilters,
  MessageRecord,
  RecentMessage,
  SenderGroup,
  SortKey,
} from './types';

const RECENT_LIMIT = 5;

export function groupKey(email: string, groupBy: GroupBy): string {
  return groupBy === 'domain' ? domainKey(email) : email;
}

interface MutableAddress {
  count: number;
  unsubscribe: AddressStats['unsubscribe'];
  unsubscribeDate: number;
}

interface Builder {
  key: string;
  displayName: string;
  displayNameDate: number;
  addresses: Map<string, MutableAddress>;
  count: number;
  size: number;
  unread: number;
  inInbox: number;
  newest: number;
  oldest: number;
  recent: RecentMessage[];
}

/** Group messages by sender address or by registrable domain. */
export function groupMessages(records: Iterable<MessageRecord>, groupBy: GroupBy): SenderGroup[] {
  const builders = new Map<string, Builder>();
  for (const r of records) {
    const key = groupKey(r.email, groupBy);
    let b = builders.get(key);
    if (!b) {
      b = {
        key,
        displayName: '',
        displayNameDate: -Infinity,
        addresses: new Map(),
        count: 0,
        size: 0,
        unread: 0,
        inInbox: 0,
        newest: -Infinity,
        oldest: Infinity,
        recent: [],
      };
      builders.set(key, b);
    }
    b.count++;
    b.size += r.size;
    if (r.unread) b.unread++;
    if (r.inInbox) b.inInbox++;
    b.newest = Math.max(b.newest, r.date);
    b.oldest = Math.min(b.oldest, r.date);
    if (r.date > b.displayNameDate) {
      b.displayNameDate = r.date;
      b.displayName = groupBy === 'domain' ? key.slice(1) : r.name;
    }

    let address = b.addresses.get(r.email);
    if (!address) {
      address = { count: 0, unsubscribe: null, unsubscribeDate: -Infinity };
      b.addresses.set(r.email, address);
    }
    address.count++;
    if (r.unsubscribe && r.date > address.unsubscribeDate) {
      address.unsubscribe = r.unsubscribe;
      address.unsubscribeDate = r.date;
    }

    insertRecent(b.recent, r);
  }

  return [...builders.values()].map((b): SenderGroup => {
    const addresses = new Map<string, AddressStats>();
    for (const [email, a] of b.addresses)
      addresses.set(email, { count: a.count, unsubscribe: a.unsubscribe });
    return {
      key: b.key,
      groupBy,
      displayName: b.displayName,
      addresses,
      count: b.count,
      size: b.size,
      unread: b.unread,
      inInbox: b.inInbox,
      newest: b.newest,
      oldest: b.oldest,
      recent: b.recent,
      hasUnsubscribe: [...addresses.values()].some((a) => a.unsubscribe !== null),
    };
  });
}

function insertRecent(list: RecentMessage[], r: MessageRecord): void {
  const last = list[RECENT_LIMIT - 1];
  if (last && r.date <= last.date) return;
  const index = list.findIndex((m) => r.date > m.date);
  list.splice(index === -1 ? list.length : index, 0, { id: r.id, subject: r.subject, date: r.date });
  if (list.length > RECENT_LIMIT) list.pop();
}

export function unreadRatio(group: SenderGroup): number {
  return group.count ? group.unread / group.count : 0;
}

const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

export const SORT_COMPARATORS: Readonly<Record<SortKey, (a: SenderGroup, b: SenderGroup) => number>> = {
  count: (a, b) => b.count - a.count || b.size - a.size || collator.compare(a.key, b.key),
  size: (a, b) => b.size - a.size || b.count - a.count || collator.compare(a.key, b.key),
  unread: (a, b) => b.unread - a.unread || b.count - a.count || collator.compare(a.key, b.key),
  newest: (a, b) => b.newest - a.newest || collator.compare(a.key, b.key),
  oldest: (a, b) => a.oldest - b.oldest || collator.compare(a.key, b.key),
  name: (a, b) => collator.compare(a.displayName, b.displayName) || collator.compare(a.key, b.key),
};

/** A group is kept if its key is kept, or (for a single sender) its whole domain is kept. */
export function isKept(group: SenderGroup, keep: KeepList): boolean {
  if (keep.has(group.key)) return true;
  return group.groupBy === 'sender' && keep.has(domainKey(group.key));
}

/**
 * Addresses in a group that bulk actions may touch. Kept addresses are excluded, and so are
 * malformed ones: an address is only ever used in a Gmail search or filter if it can't change its meaning.
 */
export function actionableAddresses(group: SenderGroup, keep: KeepList): string[] {
  if (isKept(group, keep)) return [];
  return [...group.addresses.keys()].filter((email) => !keep.has(email) && isSafeAddress(email));
}

export const MOSTLY_UNREAD_RATIO = 0.8;

export function filterGroups(
  groups: readonly SenderGroup[],
  { search, filters, keep }: { search: string; filters: ListFilters; keep: KeepList },
): SenderGroup[] {
  const needle = search.trim().toLowerCase();
  return groups.filter((g) => {
    if (filters.hasUnsubscribe && !g.hasUnsubscribe) return false;
    if (filters.mostlyUnread && !(g.count >= 2 && unreadRatio(g) >= MOSTLY_UNREAD_RATIO)) return false;
    if (filters.hideKept && isKept(g, keep)) return false;
    if (needle && !g.key.includes(needle) && !g.displayName.toLowerCase().includes(needle)) return false;
    return true;
  });
}

export type InsightId = 'top10' | 'neverRead' | 'mailingLists' | 'heavy';

export interface Insight {
  readonly id: InsightId;
  readonly groups: readonly SenderGroup[];
  readonly messages: number;
  readonly bytes: number;
  /** Share of all (non-kept) mail, 0..1. Only set for `top10`. */
  readonly share?: number;
}

const HEAVY_BYTES = 10 * 1024 * 1024;

/** Quick wins worth pointing out. Kept senders are ignored. */
export function findInsights(groups: readonly SenderGroup[], keep: KeepList): Insight[] {
  const candidates = groups.filter((g) => !isKept(g, keep));
  const total = sum(candidates, (g) => g.count);
  if (!total) return [];

  const insights: Insight[] = [];
  const add = (id: InsightId, list: SenderGroup[], extra: Partial<Insight> = {}): void => {
    if (list.length) {
      insights.push({
        id,
        groups: list,
        messages: sum(list, (g) => g.count),
        bytes: sum(list, (g) => g.size),
        ...extra,
      });
    }
  };

  if (candidates.length > 10) {
    const top = [...candidates].sort(SORT_COMPARATORS.count).slice(0, 10);
    add('top10', top, { share: sum(top, (g) => g.count) / total });
  }
  add(
    'neverRead',
    candidates.filter((g) => g.count >= 5 && unreadRatio(g) >= 0.9),
  );
  add(
    'mailingLists',
    candidates.filter((g) => g.hasUnsubscribe),
  );
  add(
    'heavy',
    candidates.filter((g) => g.size >= HEAVY_BYTES),
  );
  return insights;
}

function sum<T>(items: readonly T[], value: (item: T) => number): number {
  let total = 0;
  for (const item of items) total += value(item);
  return total;
}
