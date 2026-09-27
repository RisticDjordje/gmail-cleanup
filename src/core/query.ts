import type { Protection, ScanOptions, ScanScope } from './types';

const SCOPE_QUERIES: Readonly<Record<Exclude<ScanScope, 'custom'>, string>> = {
  all: '',
  inbox: 'in:inbox',
  promotions: 'category:promotions',
  social: 'category:social',
  updates: 'category:updates',
  forums: 'category:forums',
  unread: 'is:unread',
  large: 'larger:5M',
};

/** Terms that exclude protected messages from every search and action. */
export function protectionTerms(protection: Protection): string[] {
  const terms: string[] = [];
  if (protection.protectStarred) terms.push('-is:starred');
  if (protection.protectImportant) terms.push('-is:important');
  return terms;
}

/** The Gmail search for a scan. Drafts and chats are never included. */
export function buildScanQuery(options: ScanOptions, protection: Protection): string {
  const terms: string[] = [];
  if (options.scope === 'custom') {
    const custom = options.customQuery.trim();
    if (custom) terms.push(`(${custom})`);
  } else {
    const scope = SCOPE_QUERIES[options.scope];
    if (scope) terms.push(scope);
  }
  if (options.olderThan) terms.push(`older_than:${options.olderThan}`);
  terms.push(...protectionTerms(protection), '-in:drafts', '-in:chats');
  return terms.join(' ');
}

/** Quote a search term if it contains characters with special meaning in Gmail search. */
export function quoteTerm(term: string): string {
  return /[\s(){}"]|^-/.test(term) ? `"${term.replace(/"/g, '')}"` : term;
}

/** `from:(a OR b OR …)` clauses, chunked so each query stays well under Gmail's length limit. */
export function fromClauses(addresses: readonly string[], chunkSize = 20): string[] {
  const clauses: string[] = [];
  for (let i = 0; i < addresses.length; i += chunkSize) {
    const chunk = addresses.slice(i, i + chunkSize).map(quoteTerm);
    clauses.push(chunk.length === 1 ? `from:${chunk[0] ?? ''}` : `from:(${chunk.join(' OR ')})`);
  }
  return clauses;
}

/** Link that opens a Gmail search for a group, in the right account. */
export function gmailSearchUrl(accountEmail: string, groupKey: string): string {
  const query = encodeURIComponent(`from:${quoteTerm(groupKey)}`);
  return `https://mail.google.com/mail/u/?authuser=${encodeURIComponent(accountEmail)}#search/${query}`;
}
