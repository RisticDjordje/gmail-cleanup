/** Parsed `List-Unsubscribe` information for a message. */
export interface UnsubscribeInfo {
  /** https URL from the header, if any. */
  readonly url: string | null;
  /** mailto: URL from the header, if any. */
  readonly mailto: string | null;
  /** RFC 8058 one-click unsubscribe is supported (`List-Unsubscribe-Post`). */
  readonly oneClick: boolean;
}

/** Compact, cached representation of one Gmail message (headers only). */
export interface MessageRecord {
  readonly id: string;
  /** Lowercased sender address. */
  readonly email: string;
  readonly name: string;
  readonly subject: string;
  /** Epoch milliseconds (Gmail `internalDate`). */
  readonly date: number;
  /** Bytes (Gmail `sizeEstimate`). */
  readonly size: number;
  readonly unread: boolean;
  readonly inInbox: boolean;
  readonly starred: boolean;
  readonly important: boolean;
  readonly unsubscribe: UnsubscribeInfo | null;
}

export type GroupBy = 'sender' | 'domain';

export interface AddressStats {
  readonly count: number;
  /** Unsubscribe info from this address's newest message that had one. */
  readonly unsubscribe: UnsubscribeInfo | null;
}

export interface RecentMessage {
  readonly id: string;
  readonly subject: string;
  readonly date: number;
}

/** All messages from one sender address, or from one domain. */
export interface SenderGroup {
  /** The sender's email address, or `@domain` when grouping by domain. */
  readonly key: string;
  readonly groupBy: GroupBy;
  readonly displayName: string;
  readonly addresses: ReadonlyMap<string, AddressStats>;
  readonly count: number;
  readonly size: number;
  readonly unread: number;
  readonly inInbox: number;
  readonly newest: number;
  readonly oldest: number;
  /** Up to five most recent messages, newest first. */
  readonly recent: readonly RecentMessage[];
  readonly hasUnsubscribe: boolean;
}

export const SCAN_SCOPES = [
  'all',
  'inbox',
  'promotions',
  'social',
  'updates',
  'forums',
  'unread',
  'large',
  'custom',
] as const;
export type ScanScope = (typeof SCAN_SCOPES)[number];

export const AGE_FILTERS = ['', '1m', '6m', '1y', '2y', '5y'] as const;
export type AgeFilter = (typeof AGE_FILTERS)[number];

export const SORT_KEYS = ['count', 'size', 'unread', 'newest', 'oldest', 'name'] as const;
export type SortKey = (typeof SORT_KEYS)[number];

export interface ScanOptions {
  readonly scope: ScanScope;
  readonly customQuery: string;
  readonly olderThan: AgeFilter;
  /** 0 means no limit. */
  readonly maxMessages: number;
}

export interface Protection {
  readonly protectStarred: boolean;
  readonly protectImportant: boolean;
}

export interface ListFilters {
  readonly hasUnsubscribe: boolean;
  readonly mostlyUnread: boolean;
  readonly hideKept: boolean;
}

/** Senders the user marked as "keep": addresses, or `@domain` entries. */
export type KeepList = ReadonlySet<string>;
