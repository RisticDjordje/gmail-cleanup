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
 * Only https URLs are kept: plain http links are not safe to hand to the user or to POST to.
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
    if (!url && isHttpsUrl(value)) url = value;
    else if (!mailto && /^mailto:/i.test(value) && parseMailto(value)) mailto = value;
  }
  if (!url && !mailto) return null;
  const oneClick =
    url !== null && /(^|[\s;])list-unsubscribe\s*=\s*one-click($|[\s;])/i.test(listUnsubscribePost ?? '');
  return { url, mailto, oneClick };
}

export function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export interface MailtoTarget {
  readonly to: string;
  readonly subject: string;
  readonly body: string;
}

const SINGLE_ADDRESS = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/;

/**
 * Parse a mailto: URL. Returns null unless it names exactly one plausible address,
 * so a hostile header can't make us email several people or inject headers.
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
  return {
    to,
    subject:
      param('subject')
        .replace(/[\r\n]+/g, ' ')
        .trim() || 'unsubscribe',
    body: param('body') || 'unsubscribe',
  };
}
