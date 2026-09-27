import * as z from 'zod/mini';
import type { KeyValueArea } from '../platform/storage';
import { StoredValue } from '../platform/storage';
import type { GroupBy, ListFilters, Protection, ScanOptions, SortKey } from '../core/types';
import { AGE_FILTERS, SCAN_SCOPES, SORT_KEYS } from '../core/types';

export interface ViewSettings {
  readonly groupBy: GroupBy;
  readonly sort: SortKey;
  readonly filters: ListFilters;
}

export interface Settings {
  readonly scan: ScanOptions;
  readonly protection: Protection;
  readonly view: ViewSettings;
}

export const DEFAULT_SETTINGS: Settings = {
  scan: { scope: 'all', customQuery: '', olderThan: '', maxMessages: 0 },
  protection: { protectStarred: true, protectImportant: false },
  view: {
    groupBy: 'sender',
    sort: 'count',
    filters: { hasUnsubscribe: false, mostlyUnread: false, hideKept: false },
  },
};

// Each field falls back to its default on its own, so one bad value never resets everything.
const settingsSchema: z.ZodMiniType<Settings> = z.object({
  scan: z.catch(
    z.object({
      scope: z.catch(z.enum(SCAN_SCOPES), DEFAULT_SETTINGS.scan.scope),
      customQuery: z.catch(z.string().check(z.maxLength(1000)), ''),
      olderThan: z.catch(z.enum(AGE_FILTERS), ''),
      maxMessages: z.catch(z.int().check(z.minimum(0)), 0),
    }),
    DEFAULT_SETTINGS.scan,
  ),
  protection: z.catch(
    z.object({
      protectStarred: z.catch(z.boolean(), true),
      protectImportant: z.catch(z.boolean(), false),
    }),
    DEFAULT_SETTINGS.protection,
  ),
  view: z.catch(
    z.object({
      groupBy: z.catch(z.enum(['sender', 'domain']), 'sender'),
      sort: z.catch(z.enum(SORT_KEYS), 'count'),
      filters: z.catch(
        z.object({
          hasUnsubscribe: z.catch(z.boolean(), false),
          mostlyUnread: z.catch(z.boolean(), false),
          hideKept: z.catch(z.boolean(), false),
        }),
        DEFAULT_SETTINGS.view.filters,
      ),
    }),
    DEFAULT_SETTINGS.view,
  ),
});

/** The result of the last scan for an account: which messages it covered. */
export interface ScanSnapshot {
  readonly query: string;
  readonly scope: ScanOptions['scope'];
  /** Message IDs in the scan, minus those since trashed/deleted by the extension. */
  readonly ids: readonly string[];
  readonly scannedAt: number;
  /** False if the scan was stopped before every message was read. */
  readonly complete: boolean;
}

const snapshotSchema: z.ZodMiniType<ScanSnapshot> = z.object({
  query: z.string(),
  scope: z.enum(SCAN_SCOPES),
  ids: z.array(z.string()),
  scannedAt: z.number(),
  complete: z.boolean(),
});

export class Persistence {
  readonly settings: StoredValue<Settings>;
  /** Kept senders: addresses and `@domain` entries. */
  readonly keep: StoredValue<string[]>;
  /** Address → time the user unsubscribed through the extension. */
  readonly unsubscribed: StoredValue<Record<string, number>>;

  constructor(private readonly local: KeyValueArea) {
    this.settings = new StoredValue(local, 'settings', settingsSchema, DEFAULT_SETTINGS);
    this.keep = new StoredValue(local, 'keep', z.array(z.string()), []);
    this.unsubscribed = new StoredValue(local, 'unsubscribed', z.record(z.string(), z.number()), {});
  }

  snapshot(account: string): StoredValue<ScanSnapshot | null> {
    return new StoredValue(this.local, `scan:${account}`, z.nullable(snapshotSchema), null);
  }
}
