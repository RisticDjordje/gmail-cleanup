import { describe, expect, it } from 'vitest';
import { domainKey, domainOf, registrableDomain } from './domains';
import { formatBytes, formatDate, formatDuration, formatNumber, pluralize } from './format';
import { sendersToCsv } from './csv';
import { buildRawEmail } from './mime';
import { groupMessages } from './grouping';
import { decodeBase64Url, message } from '../testing/fixtures';

describe('domains', () => {
  it('extracts and collapses domains', () => {
    expect(domainOf('a@News.Example.com')).toBe('news.example.com');
    expect(domainOf('no-at-sign')).toBe('');
    expect(registrableDomain('email.news.nytimes.com')).toBe('nytimes.com');
    expect(registrableDomain('mail.bbc.co.uk')).toBe('bbc.co.uk');
    expect(registrableDomain('gmail.com')).toBe('gmail.com');
    expect(domainKey('x@mail.shop.com')).toBe('@shop.com');
    expect(domainKey('weird')).toBe('@weird');
  });
});

describe('format', () => {
  it('formats bytes', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(-5)).toBe('0 B');
    expect(formatBytes(Number.NaN)).toBe('0 B');
    expect(formatBytes(512)).toBe('512 B');
    expect(formatBytes(1536)).toBe('1.5 KB');
    expect(formatBytes(150 * 1024 * 1024)).toBe('150 MB');
    expect(formatBytes(2 ** 60)).toBe('1048576 TB');
  });

  it('formats durations', () => {
    expect(formatDuration(-1)).toBe('0s');
    expect(formatDuration(59_000)).toBe('59s');
    expect(formatDuration(61_000)).toBe('1m 1s');
    expect(formatDuration(3_720_000)).toBe('1h 2m');
  });

  it('formats numbers, plurals and dates', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
    expect(pluralize(1, 'email')).toBe('1 email');
    expect(pluralize(2000, 'address', 'addresses')).toBe('2,000 addresses');
    expect(formatDate(0)).toBe('—');
    const now = new Date(2026, 5, 1);
    expect(formatDate(new Date(2026, 2, 4).getTime(), now)).not.toMatch(/2026/);
    expect(formatDate(new Date(2021, 2, 4).getTime(), now)).toMatch(/2021/);
  });
});

describe('sendersToCsv', () => {
  it('escapes quotes and commas and neutralizes formulas', () => {
    const groups = groupMessages(
      [
        message({ id: '1', email: 'a@x.com', name: 'Hi, "there"', date: Date.UTC(2024, 0, 2) }),
        message({ id: '2', email: 'b@x.com', name: '=HYPERLINK("http://evil")', date: Date.UTC(2024, 0, 3) }),
      ],
      'sender',
    );
    const lines = sendersToCsv(groups).trimEnd().split('\r\n');
    expect(lines[0]).toBe('Sender,Name,Emails,Unread,Size (bytes),Newest,Oldest,Has unsubscribe');
    expect(lines).toContain('a@x.com,"Hi, ""there""",1,0,1000,2024-01-02,2024-01-02,no');
    expect(lines).toContain('b@x.com,"\'=HYPERLINK(""http://evil"")",1,0,1000,2024-01-03,2024-01-03,no');
  });
});

describe('buildRawEmail', () => {
  it('produces base64url RFC 5322 with encoded non-ASCII subjects', () => {
    const raw = buildRawEmail({ to: 'u@x.com', subject: 'désabonner', body: 'unsubscribe' });
    expect(raw).toMatch(/^[A-Za-z0-9_-]+$/);
    const decoded = decodeBase64Url(raw);
    expect(decoded).toMatch(/^To: u@x.com\r\n/);
    expect(decoded).toContain('Subject: =?UTF-8?B?');
    expect(decoded).toContain('\r\n\r\ndW5zdWJzY3JpYmU=');
  });

  it('cannot be used to inject headers', () => {
    const decoded = decodeBase64Url(
      buildRawEmail({ to: 'u@x.com\r\nBcc: evil@x.com', subject: 's\r\nBcc: e@x.com', body: '' }),
    );
    expect(decoded.split('\r\n').filter((l) => l.startsWith('Bcc'))).toEqual([]);
  });
});
