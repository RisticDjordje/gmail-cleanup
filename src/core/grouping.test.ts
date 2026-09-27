import { describe, expect, it } from 'vitest';
import {
  actionableAddresses,
  filterGroups,
  findInsights,
  groupMessages,
  isKept,
  SORT_COMPARATORS,
  unreadRatio,
} from './grouping';
import { message } from '../testing/fixtures';
import type { ListFilters, SenderGroup } from './types';

const NO_FILTERS: ListFilters = { hasUnsubscribe: false, mostlyUnread: false, hideKept: false };

describe('groupMessages', () => {
  const records = [
    message({ id: '1', email: 'deals@shop.com', name: 'Shop', date: 1, unread: true }),
    message({
      id: '2',
      email: 'deals@shop.com',
      name: 'Shop Deals',
      date: 3,
      unsubscribe: { url: null, mailto: 'mailto:u@shop.com', oneClick: false },
    }),
    message({
      id: '3',
      email: 'news@mail.shop.com',
      name: 'Shop News',
      date: 2,
      unread: true,
      inInbox: false,
    }),
    message({ id: '4', email: 'friend@gmail.com', name: 'Friend', date: 4 }),
  ];

  it('groups by sender with counts, dates and the newest display name', () => {
    const deals = groupMessages(records, 'sender').find((g) => g.key === 'deals@shop.com')!;
    expect(deals).toMatchObject({
      count: 2,
      unread: 1,
      inInbox: 2,
      newest: 3,
      oldest: 1,
      displayName: 'Shop Deals',
    });
    expect(deals.hasUnsubscribe).toBe(true);
    expect(deals.recent.map((m) => m.id)).toEqual(['2', '1']);
    expect(deals.size).toBe(2000);
  });

  it('groups by registrable domain', () => {
    const groups = groupMessages(records, 'domain');
    expect(groups.map((g) => g.key).sort()).toEqual(['@gmail.com', '@shop.com']);
    const shop = groups.find((g) => g.key === '@shop.com')!;
    expect(shop.count).toBe(3);
    expect(shop.displayName).toBe('shop.com');
    expect([...shop.addresses.keys()].sort()).toEqual(['deals@shop.com', 'news@mail.shop.com']);
  });

  it('keeps the newest unsubscribe info per address', () => {
    const [group] = groupMessages(
      [
        message({ id: 'a', date: 5, unsubscribe: { url: 'https://new.com', mailto: null, oneClick: true } }),
        message({ id: 'b', date: 1, unsubscribe: { url: 'https://old.com', mailto: null, oneClick: false } }),
        message({ id: 'c', date: 9 }),
      ],
      'sender',
    );
    expect([...group!.addresses.values()][0]!.unsubscribe?.url).toBe('https://new.com');
  });

  it('keeps only the five most recent subjects, newest first', () => {
    const many = Array.from({ length: 12 }, (_, i) => message({ id: String(i), date: (i * 7) % 12 }));
    const [group] = groupMessages(many, 'sender');
    expect(group!.recent.map((m) => m.date)).toEqual([11, 10, 9, 8, 7]);
  });

  it('returns nothing for no messages', () => {
    expect(groupMessages([], 'sender')).toEqual([]);
  });
});

function group(overrides: Partial<SenderGroup> & { key: string }): SenderGroup {
  return {
    groupBy: 'sender',
    displayName: overrides.key,
    addresses: new Map([[overrides.key, { count: 1, unsubscribe: null }]]),
    count: 1,
    size: 0,
    unread: 0,
    inInbox: 0,
    newest: 0,
    oldest: 0,
    recent: [],
    hasUnsubscribe: false,
    ...overrides,
  };
}

describe('keep list', () => {
  const byDomain = group({
    key: '@shop.com',
    groupBy: 'domain',
    addresses: new Map([
      ['a@shop.com', { count: 1, unsubscribe: null }],
      ['b@shop.com', { count: 1, unsubscribe: null }],
    ]),
  });

  it('keeps a sender directly or through its domain', () => {
    expect(isKept(group({ key: 'a@shop.com' }), new Set(['a@shop.com']))).toBe(true);
    expect(isKept(group({ key: 'a@news.shop.com' }), new Set(['@shop.com']))).toBe(true);
    expect(isKept(group({ key: 'a@shop.com' }), new Set(['b@shop.com']))).toBe(false);
    expect(isKept(byDomain, new Set(['@shop.com']))).toBe(true);
    expect(isKept(byDomain, new Set(['a@shop.com']))).toBe(false);
  });

  it('excludes individually kept addresses from actions on a domain', () => {
    expect(actionableAddresses(byDomain, new Set(['a@shop.com']))).toEqual(['b@shop.com']);
    expect(actionableAddresses(byDomain, new Set(['@shop.com']))).toEqual([]);
  });
});

describe('sorting', () => {
  const a = group({
    key: 'a@x.com',
    displayName: 'Zed',
    count: 5,
    size: 10,
    unread: 1,
    newest: 5,
    oldest: 1,
  });
  const b = group({
    key: 'b@x.com',
    displayName: 'alpha',
    count: 5,
    size: 20,
    unread: 4,
    newest: 9,
    oldest: 3,
  });
  const sortBy = (key: keyof typeof SORT_COMPARATORS) => [a, b].sort(SORT_COMPARATORS[key]).map((g) => g.key);

  it('orders with deterministic tie-breaks', () => {
    expect(sortBy('count')).toEqual(['b@x.com', 'a@x.com']); // tie on count → larger size first
    expect(sortBy('size')).toEqual(['b@x.com', 'a@x.com']);
    expect(sortBy('unread')).toEqual(['b@x.com', 'a@x.com']);
    expect(sortBy('newest')).toEqual(['b@x.com', 'a@x.com']);
    expect(sortBy('oldest')).toEqual(['a@x.com', 'b@x.com']);
    expect(sortBy('name')).toEqual(['b@x.com', 'a@x.com']);
  });
});

describe('filterGroups', () => {
  const list = group({
    key: 'list@x.com',
    displayName: 'Newsletter',
    hasUnsubscribe: true,
    count: 10,
    unread: 9,
  });
  const person = group({ key: 'pal@y.com', displayName: 'Pal', count: 10, unread: 1 });
  const run = (filters: Partial<ListFilters>, search = '', keep = new Set<string>()) =>
    filterGroups([list, person], { search, filters: { ...NO_FILTERS, ...filters }, keep }).map((g) => g.key);

  it('applies each filter', () => {
    expect(run({})).toEqual(['list@x.com', 'pal@y.com']);
    expect(run({ hasUnsubscribe: true })).toEqual(['list@x.com']);
    expect(run({ mostlyUnread: true })).toEqual(['list@x.com']);
    expect(run({ hideKept: true }, '', new Set(['pal@y.com']))).toEqual(['list@x.com']);
  });

  it('searches address and name case-insensitively', () => {
    expect(run({}, 'NEWS')).toEqual(['list@x.com']);
    expect(run({}, 'y.com')).toEqual(['pal@y.com']);
  });

  it('computes unread ratio safely', () => {
    expect(unreadRatio(list)).toBe(0.9);
    expect(unreadRatio(group({ key: 'e@x.com', count: 0 }))).toBe(0);
  });
});

describe('findInsights', () => {
  it('reports top senders, never-read senders, mailing lists and heavy senders', () => {
    const groups = Array.from({ length: 12 }, (_, i) =>
      group({
        key: `s${i}@x.com`,
        count: 12 - i,
        unread: i === 0 ? 12 : 0,
        hasUnsubscribe: i < 2,
        size: i === 1 ? 20e6 : 1,
      }),
    );
    const insights = findInsights(groups, new Set(['s11@x.com']));
    const byId = Object.fromEntries(insights.map((i) => [i.id, i]));
    expect(byId.top10?.groups).toHaveLength(10);
    expect(byId.top10?.share).toBeCloseTo((12 + 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3) / (78 - 1));
    expect(byId.neverRead?.groups.map((g) => g.key)).toEqual(['s0@x.com']);
    expect(byId.mailingLists?.messages).toBe(23);
    expect(byId.heavy?.groups.map((g) => g.key)).toEqual(['s1@x.com']);
  });

  it('skips top10 for small mailboxes and returns nothing when empty', () => {
    expect(findInsights([group({ key: 'a@x.com' })], new Set()).map((i) => i.id)).toEqual([]);
    expect(findInsights([], new Set())).toEqual([]);
  });
});
