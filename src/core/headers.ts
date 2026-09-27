import type { UnsubscribeInfo } from './types';

export interface ParsedAddress {
  readonly name: string;
  /** Lowercased address, or a placeholder when the header has none. */
  readonly email: string;
}

export const UNKNOWN_SENDER = '(unknown sender)';

// Deliberately permissive: real-world From headers are messy; we only need something to group by.
const ADDRESS = /[^\s<>"',;()]+@[^\s<>"',;()]+/;

/**
 * Parse an RFC 5322 `From` header into a display name and lowercase address.
 * Handles `"Name" <a@b.com>`, `Name <a@b.com>`, `<a@b.com>`, `a@b.com` and `a@b.com (Name)`.
 * Gmail's API already decodes RFC 2047 encoded words.
 */
export function parseFrom(header: string | undefined): ParsedAddress {
  const raw = (header ?? '').trim();
  if (!raw) return { name: UNKNOWN_SENDER, email: UNKNOWN_SENDER };

  const angle = /^(.*?)<\s*([^<>\s]+@[^<>\s]+)\s*>\s*$/.exec(raw);
  if (angle) {
    const email = (angle[2] ?? '').toLowerCase();
    return { name: cleanDisplayName(angle[1] ?? '') || email, email };
  }

  const comment = /^([^\s()]+@[^\s()]+)\s*\((.*)\)\s*$/.exec(raw);
  if (comment) {
    const email = (comment[1] ?? '').toLowerCase();
    return { name: cleanDisplayName(comment[2] ?? '') || email, email };
  }

  const bare = ADDRESS.exec(raw);
  if (bare) {
    const email = bare[0].toLowerCase();
    return { name: cleanDisplayName(raw.replace(bare[0], '')) || email, email };
  }

  return { name: cleanDisplayName(raw) || raw, email: raw.toLowerCase() };
}

function cleanDisplayName(value: string): string {
  return value
    .trim()
    .replace(/^"(.*)"$/s, '$1')
    .replace(/\\(.)/g, '$1')
    .replace(/^'(.*)'$/s, '$1')
    .trim();
}

/**
 * Parse `List-Unsubscribe` (RFC 2369) and `List-Unsubscribe-Post` (RFC 8058).
 * Only public https URLs are kept (see isSafeUnsubscribeUrl): headers are attacker-controlled.
 */
export function parseUnsubscribe(
  listUnsubscribe: string | undefined,
  listUnsubscribePost: string | undefined,
): UnsubscribeInfo | null {
  if (!listUnsubscribe) return null;
  let url: string | null = null;
  let mailto: string | null = null;
  const entries = listUnsubscribe.match(/<[^>]*>/g) ?? listUnsubscribe.split(',');
  for (const entry of entries) {
    const value = entry.trim().replace(/^<|>$/g, '').trim();
    if (!url && isSafeUnsubscribeUrl(value)) url = value;
    else if (!mailto && /^mailto:/i.test(value) && parseMailto(value)) mailto = value;
  }
  if (!url && !mailto) return null;
  const oneClick =
    url !== null && /(^|[\s;])list-unsubscribe\s*=\s*one-click($|[\s;])/i.test(listUnsubscribePost ?? '');
  return { url, mailto, oneClick };
}

const LOCAL_SUFFIXES = ['.local', '.localhost', '.internal', '.lan', '.home.arpa'];

/**
 * An https URL on a public hostname. Rejects IP literals, localhost, local-network names, custom
 * ports and embedded credentials, so a hostile header can't aim a request at the user's own network.
 */
export function isSafeUnsubscribeUrl(value: string): boolean {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:' || url.port !== '' || url.username || url.password) return false;
  const host = url.hostname.toLowerCase();
  if (!host.includes('.') || host.startsWith('[') || /^[\d.]+$/.test(host)) return false; // single-label or IP literal
  return !LOCAL_SUFFIXES.some((suffix) => host.endsWith(suffix));
}

export interface MailtoTarget {
  readonly to: string;
  readonly subject: string;
  readonly body: string;
}

const SINGLE_ADDRESS = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/;
const UNSUBSCRIBE_WORDS = /unsub|remove|opt[\s_-]?out|stop|leave|cancel/i;

/**
 * Parse a mailto: URL. Returns null unless it names exactly one plausible address, so a hostile
 * header can't make us email several people or inject headers. The sender doesn't get to choose
 * what we write: the body is always "unsubscribe", and the subject is kept only if it is a short
 * unsubscribe instruction (some list servers need a token there).
 */
export function parseMailto(url: string): MailtoTarget | null {
  const match = /^mailto:([^?]*)(?:\?(.*))?$/is.exec(url.trim());
  if (!match) return null;
  let to: string;
  try {
    to = decodeURIComponent(match[1] ?? '').trim();
  } catch {
    return null;
  }
  const params = new URLSearchParams(match[2] ?? '');
  const param = (key: string): string => {
    for (const [k, v] of params) if (k.toLowerCase() === key) return v;
    return '';
  };
  if (!to) to = param('to').trim();
  if (!SINGLE_ADDRESS.test(to)) return null;
  const subject = param('subject')
    .replace(/[\r\n]+/g, ' ')
    .trim();
  return {
    to: to.toLowerCase(),
    subject: subject.length <= 200 && UNSUBSCRIBE_WORDS.test(subject) ? subject : 'unsubscribe',
    body: 'unsubscribe',
  };
}

// Characters Gmail search treats as plain text. Anything else (quotes, parentheses, braces, |, *, a
// leading "-") could change a query's meaning, so such addresses are never used in searches or filters.
const SAFE_ADDRESS =
  /^[a-z0-9._%+'][a-z0-9._%+'-]*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/;

/** A lowercase `local@domain` address that is safe to put in a Gmail search or filter as-is. */
export function isSafeAddress(email: string): boolean {
  return email.length <= 254 && SAFE_ADDRESS.test(email);
}
