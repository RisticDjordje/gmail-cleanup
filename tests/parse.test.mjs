import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  aggregate,
  buildRawEmail,
  buildScanQuery,
  fromClauses,
  parseFrom,
  parseListUnsubscribe,
  parseMailto,
  rootDomain,
  toCsv,
  toRecord,
} from '../lib/parse.js';

test('parseFrom handles common header shapes', () => {
  assert.deepEqual(parseFrom('"Amazon.com" <Shipment-Tracking@Amazon.com>'), {
    name: 'Amazon.com',
    email: 'shipment-tracking@amazon.com',
  });
  assert.deepEqual(parseFrom('LinkedIn <messages-noreply@linkedin.com>'), {
    name: 'LinkedIn',
    email: 'messages-noreply@linkedin.com',
  });
  assert.deepEqual(parseFrom('<no-name@x.com>'), { name: 'no-name@x.com', email: 'no-name@x.com' });
  assert.deepEqual(parseFrom('plain@x.com'), { name: 'plain@x.com', email: 'plain@x.com' });
  assert.deepEqual(parseFrom('bob@x.com (Bob Smith)'), { name: 'Bob Smith', email: 'bob@x.com' });
  assert.deepEqual(parseFrom('"Smith, Bob \\"The Builder\\"" <bob@x.com>'), {
    name: 'Smith, Bob "The Builder"',
    email: 'bob@x.com',
  });
  assert.equal(parseFrom('').email, '(unknown sender)');
});

test('rootDomain collapses subdomains', () => {
  assert.equal(rootDomain('email.news.nytimes.com'), 'nytimes.com');
  assert.equal(rootDomain('mail.bbc.co.uk'), 'bbc.co.uk');
  assert.equal(rootDomain('gmail.com'), 'gmail.com');
});

test('parseListUnsubscribe finds mailto and http links', () => {
  assert.deepEqual(parseListUnsubscribe('<mailto:u@x.com?subject=unsub>, <https://x.com/u?id=1>'), {
    mailto: 'mailto:u@x.com?subject=unsub',
    http: 'https://x.com/u?id=1',
  });
  assert.deepEqual(parseListUnsubscribe('<https://x.com/u>'), { mailto: null, http: 'https://x.com/u' });
  assert.deepEqual(parseListUnsubscribe(''), { mailto: null, http: null });
});

test('parseMailto reads subject/body with defaults', () => {
  assert.deepEqual(parseMailto('mailto:leave@list.com?Subject=Remove%20me'), {
    to: 'leave@list.com',
    subject: 'Remove me',
    body: 'unsubscribe',
  });
  assert.deepEqual(parseMailto('mailto:a@b.com'), { to: 'a@b.com', subject: 'unsubscribe', body: 'unsubscribe' });
});

test('buildScanQuery combines scope, age and protections', () => {
  assert.equal(
    buildScanQuery({ scope: 'promotions', olderThan: '1y', protectStarred: true, protectImportant: false }),
    'category:promotions older_than:1y -is:starred -in:drafts -in:chats',
  );
  assert.equal(buildScanQuery({ scope: 'all' }), '-in:drafts -in:chats');
  assert.equal(
    buildScanQuery({ scope: 'custom', customQuery: 'has:attachment OR larger:1M' }),
    '(has:attachment OR larger:1M) -in:drafts -in:chats',
  );
});

test('fromClauses chunks addresses', () => {
  assert.deepEqual(fromClauses(['a@x.com']), ['from:a@x.com']);
  assert.deepEqual(fromClauses(['a@x.com', 'b@y.com', 'c@z.com'], 2), ['from:(a@x.com OR b@y.com)', 'from:c@z.com']);
});

const msg = (id, from, date, labels = [], extra = []) => ({
  id,
  internalDate: String(date),
  sizeEstimate: 1000,
  labelIds: labels,
  payload: { headers: [{ name: 'From', value: from }, { name: 'Subject', value: `s${id}` }, ...extra] },
});

test('toRecord extracts labels and unsubscribe info', () => {
  const r = toRecord(
    msg('1', 'Shop <deals@shop.com>', 5, ['UNREAD', 'INBOX'], [
      { name: 'List-Unsubscribe', value: '<https://shop.com/u>' },
      { name: 'List-Unsubscribe-Post', value: 'List-Unsubscribe=One-Click' },
    ]),
  );
  assert.equal(r.email, 'deals@shop.com');
  assert.equal(r.unread, true);
  assert.equal(r.inbox, true);
  assert.equal(r.starred, false);
  assert.equal(r.oneClick, true);
  assert.equal(r.unsub, '<https://shop.com/u>');
});

test('aggregate groups by sender and by domain', () => {
  const records = [
    toRecord(msg('1', 'Shop <deals@shop.com>', 1, ['UNREAD'])),
    toRecord(msg('2', 'Shop Deals <deals@shop.com>', 3, [], [{ name: 'List-Unsubscribe', value: '<mailto:u@shop.com>' }])),
    toRecord(msg('3', 'Shop News <news@mail.shop.com>', 2, ['UNREAD'])),
    toRecord(msg('4', 'Friend <friend@gmail.com>', 4)),
  ];
  const bySender = aggregate(records, 'sender');
  const deals = bySender.find((g) => g.key === 'deals@shop.com');
  assert.equal(deals.count, 2);
  assert.equal(deals.unread, 1);
  assert.equal(deals.name, 'Shop Deals'); // most recent display name
  assert.equal(deals.hasUnsub, true);
  assert.equal(deals.latest, 3);
  assert.equal(deals.oldest, 1);
  assert.deepEqual(deals.recent.map((m) => m.id), ['2', '1']);

  const byDomain = aggregate(records, 'domain');
  const shop = byDomain.find((g) => g.key === '@shop.com');
  assert.equal(shop.count, 3);
  assert.equal(shop.emails.size, 2);
  assert.equal(byDomain.length, 2);
});

test('aggregate keeps only 5 most recent subjects', () => {
  const records = Array.from({ length: 12 }, (_, i) => toRecord(msg(String(i), 'a@x.com', (i * 7) % 12)));
  const [g] = aggregate(records);
  assert.deepEqual(g.recent.map((m) => m.date), [11, 10, 9, 8, 7]);
});

test('buildRawEmail produces base64url RFC 822', () => {
  const raw = buildRawEmail({ to: 'u@x.com', subject: 'unsubscribé', body: 'unsubscribe' });
  assert.match(raw, /^[A-Za-z0-9_-]+$/);
  const decoded = Buffer.from(raw, 'base64url').toString();
  assert.match(decoded, /^To: u@x.com\r\n/);
  assert.match(decoded, /Subject: =\?UTF-8\?B\?/);
});

test('toCsv escapes values', () => {
  const [g] = aggregate([toRecord(msg('1', '"Hi, there" <a@x.com>', Date.UTC(2024, 0, 2)))]);
  const csv = toCsv([g]);
  assert.match(csv.split('\n')[1], /^a@x.com,"Hi, there",1,0,1000,2024-01-02,2024-01-02,no$/);
});
