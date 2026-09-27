import { describe, expect, it } from 'vitest';
import {
  isSafeAddress,
  isSafeUnsubscribeUrl,
  parseFrom,
  parseMailto,
  parseUnsubscribe,
  UNKNOWN_SENDER,
} from './headers';

describe('parseFrom', () => {
  it.each([
    ['"Amazon.com" <Shipment-Tracking@Amazon.com>', 'Amazon.com', 'shipment-tracking@amazon.com'],
    ['LinkedIn <messages-noreply@linkedin.com>', 'LinkedIn', 'messages-noreply@linkedin.com'],
    ['<no-name@x.com>', 'no-name@x.com', 'no-name@x.com'],
    ['plain@x.com', 'plain@x.com', 'plain@x.com'],
    ['bob@x.com (Bob Smith)', 'Bob Smith', 'bob@x.com'],
    ['"Smith, Bob \\"The Builder\\"" <bob@x.com>', 'Smith, Bob "The Builder"', 'bob@x.com'],
    ["'Quoted' <q@x.com>", 'Quoted', 'q@x.com'],
    ['Weird "name" junk bob@x.com', 'Weird "name" junk', 'bob@x.com'],
  ])('parses %s', (header, name, email) => {
    expect(parseFrom(header)).toEqual({ name, email });
  });

  it('handles missing or address-less headers', () => {
    expect(parseFrom(undefined)).toEqual({ name: UNKNOWN_SENDER, email: UNKNOWN_SENDER });
    expect(parseFrom('   ')).toEqual({ name: UNKNOWN_SENDER, email: UNKNOWN_SENDER });
    expect(parseFrom('Mailer Daemon')).toEqual({ name: 'Mailer Daemon', email: 'mailer daemon' });
  });
});

describe('parseUnsubscribe', () => {
  it('extracts https and mailto entries', () => {
    expect(parseUnsubscribe('<mailto:u@x.com?subject=unsub>, <https://x.com/u?id=1>', undefined)).toEqual({
      url: 'https://x.com/u?id=1',
      mailto: 'mailto:u@x.com?subject=unsub',
      oneClick: false,
    });
  });

  it('detects RFC 8058 one-click only alongside an https URL', () => {
    expect(parseUnsubscribe('<https://x.com/u>', 'List-Unsubscribe=One-Click')?.oneClick).toBe(true);
    expect(parseUnsubscribe('<mailto:u@x.com>', 'List-Unsubscribe=One-Click')?.oneClick).toBe(false);
    expect(parseUnsubscribe('<https://x.com/u>', 'List-Unsubscribe=Maybe')?.oneClick).toBe(false);
  });

  it('ignores insecure or unusable entries', () => {
    expect(parseUnsubscribe('<http://x.com/u>', undefined)).toBeNull();
    expect(parseUnsubscribe('<https://10.0.0.1/u>', 'List-Unsubscribe=One-Click')).toBeNull();
    expect(parseUnsubscribe('<javascript:alert(1)>', undefined)).toBeNull();
    expect(parseUnsubscribe('<mailto:a@x.com,b@y.com>', undefined)).toBeNull();
    expect(parseUnsubscribe('', undefined)).toBeNull();
    expect(parseUnsubscribe(undefined, undefined)).toBeNull();
  });

  it('accepts headers without angle brackets', () => {
    expect(parseUnsubscribe('https://x.com/u', undefined)?.url).toBe('https://x.com/u');
  });
});

describe('parseMailto', () => {
  it('reads the address and keeps only unsubscribe-like subjects', () => {
    expect(parseMailto('mailto:Leave@List.com?Subject=Remove%20me')).toEqual({
      to: 'leave@list.com',
      subject: 'Remove me',
      body: 'unsubscribe',
    });
    expect(parseMailto('mailto:a@b.com')).toEqual({
      to: 'a@b.com',
      subject: 'unsubscribe',
      body: 'unsubscribe',
    });
    expect(parseMailto('mailto:?to=a@b.com&body=stop')).toEqual({
      to: 'a@b.com',
      subject: 'unsubscribe',
      body: 'unsubscribe',
    });
  });

  it('never lets the sender choose what we write', () => {
    expect(parseMailto('mailto:ceo@othercorp.com?subject=I%20resign&body=Effective%20today')).toEqual({
      to: 'ceo@othercorp.com',
      subject: 'unsubscribe',
      body: 'unsubscribe',
    });
    expect(parseMailto(`mailto:a@b.com?subject=unsubscribe%20${'x'.repeat(300)}`)?.subject).toBe(
      'unsubscribe',
    );
  });

  it('rejects anything but a single plausible address', () => {
    expect(parseMailto('mailto:a@b.com,c@d.com')).toBeNull();
    expect(parseMailto('mailto:a@b.com%0D%0ABcc:evil@x.com')).toBeNull();
    expect(parseMailto('mailto:not-an-address')).toBeNull();
    expect(parseMailto('mailto:%E0%A4%A')).toBeNull();
    expect(parseMailto('https://x.com')).toBeNull();
  });

  it('strips line breaks from the subject', () => {
    expect(parseMailto('mailto:a@b.com?subject=unsub%0D%0ABcc:%20x@y.com')?.subject).toBe(
      'unsub Bcc: x@y.com',
    );
  });
});

describe('isSafeUnsubscribeUrl', () => {
  it.each([
    ['https://news.example.com/u?id=1', true],
    ['http://news.example.com/u', false],
    ['https://192.168.1.1/cgi-bin/reboot', false],
    ['https://2130706433/', false], // decimal IP, normalized to 127.0.0.1
    ['https://0x7f.1/', false],
    ['https://[::1]/', false],
    ['https://localhost/u', false],
    ['https://router.local/u', false],
    ['https://printer.home.arpa/u', false],
    ['https://intranet/u', false],
    ['https://news.example.com:8443/u', false],
    ['https://user:pass@news.example.com/u', false],
    ['javascript:alert(1)', false],
    ['not a url', false],
  ])('%s → %s', (url, safe) => {
    expect(isSafeUnsubscribeUrl(url)).toBe(safe);
  });
});

describe('isSafeAddress', () => {
  it.each([
    ['deals@shop.com', true],
    ['first.last+tag@mail.example.co.uk', true],
    ["o'brien@example.ie", true],
    ['(unknown sender)', false],
    ['amazon.com', false],
    ['x@evil.com|com', false],
    ['a*@x.com', false],
    ['-a@x.com', false],
    ['a"b@x.com', false],
    ['a@x', false],
    ['a@-x.com', false],
    ['Upper@x.com', false], // records are lowercased; anything else is unexpected
  ])('%s → %s', (email, safe) => {
    expect(isSafeAddress(email)).toBe(safe);
  });
});
