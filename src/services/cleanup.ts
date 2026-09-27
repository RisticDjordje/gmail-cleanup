import { fromClauses } from '../core/query';
import type { GmailClient, LabelChange } from '../gmail/client';
import { GmailApiError } from '../gmail/errors';
import { forEachConcurrent } from '../shared/async';

export type CleanupApi = Pick<GmailClient, 'listMessageIds' | 'batchModify' | 'batchDelete' | 'trashMessage'>;

/** Actions offered in the bulk action bar. */
export const BULK_ACTIONS = ['trash', 'archive', 'markRead', 'spam', 'delete'] as const;
/** `archiveRead` is used when a block filter is applied to existing mail. */
export type BulkAction = (typeof BULK_ACTIONS)[number] | 'archiveRead';
export type UndoableAction = Exclude<BulkAction, 'delete'>;

interface ActionSpec {
  /** Extra search terms: only messages the action would change. */
  readonly onlyMatching: string;
  /** Label change applied. `null` for permanent deletion. */
  readonly labels: Required<LabelChange> | null;
  /** Labels whose prior membership is recorded, so undo restores them only where they were. */
  readonly restorable: readonly string[];
  /** The message leaves every normal listing (Trash/Spam/deleted). */
  readonly leavesMailbox: boolean;
}

export const ACTION_SPECS: Readonly<Record<BulkAction, ActionSpec>> = {
  // Gmail may drop INBOX when trashing, so remember who had it.
  trash: {
    onlyMatching: '',
    labels: { add: ['TRASH'], remove: [] },
    restorable: ['INBOX'],
    leavesMailbox: true,
  },
  archive: {
    onlyMatching: 'in:inbox',
    labels: { add: [], remove: ['INBOX'] },
    restorable: ['INBOX'],
    leavesMailbox: false,
  },
  markRead: {
    onlyMatching: 'is:unread',
    labels: { add: [], remove: ['UNREAD'] },
    restorable: ['UNREAD'],
    leavesMailbox: false,
  },
  archiveRead: {
    onlyMatching: 'in:inbox',
    labels: { add: [], remove: ['INBOX', 'UNREAD'] },
    restorable: ['INBOX', 'UNREAD'],
    leavesMailbox: false,
  },
  spam: {
    onlyMatching: '',
    labels: { add: ['SPAM'], remove: ['INBOX'] },
    restorable: ['INBOX'],
    leavesMailbox: true,
  },
  delete: { onlyMatching: '', labels: null, restorable: [], leavesMailbox: true },
};

/** Gmail search term matching messages that have a label. */
const LABEL_TERMS: Readonly<Record<string, string>> = { INBOX: 'in:inbox', UNREAD: 'is:unread' };

/** Everything needed to reverse an action exactly. */
export interface UndoToken {
  readonly action: UndoableAction;
  readonly ids: readonly string[];
  /** For each restorable label, the messages that had it before the action. */
  readonly restore: Readonly<Record<string, readonly string[]>>;
}

/** Thrown when an action failed part-way: `succeeded` messages were already changed in Gmail. */
export class PartialActionError extends Error {
  override readonly name = 'PartialActionError';
  constructor(
    readonly action: BulkAction,
    readonly succeeded: readonly string[],
    readonly token: UndoToken | null,
    override readonly cause: unknown,
  ) {
    super(cause instanceof Error ? cause.message : String(cause));
  }
}

export interface Search {
  readonly addresses: readonly string[];
  /** The scan's search plus protections, so actions only touch what the user scanned. */
  readonly baseQuery: string;
}

export class CleanupService {
  constructor(private readonly gmail: CleanupApi) {}

  /** Every message from the addresses, within the base query, that `action` would change. */
  async findMessages(
    search: Search,
    action: BulkAction,
    options: { signal?: AbortSignal; onProgress?: (found: number) => void } = {},
  ): Promise<string[]> {
    return this.#find(search, ACTION_SPECS[action].onlyMatching, options);
  }

  /**
   * Record which of `ids` currently carry each label the action removes, straight from Gmail
   * (the local cache may be stale or incomplete), so undo can put back exactly what was there.
   */
  async captureRestore(
    search: Search,
    action: BulkAction,
    ids: readonly string[],
  ): Promise<UndoToken['restore']> {
    const spec = ACTION_SPECS[action];
    const wanted = new Set(ids);
    const restore: Record<string, string[]> = {};
    for (const label of spec.restorable) {
      const term = LABEL_TERMS[label];
      if (!term) continue;
      // Already implied by the action's own search: every message has the label.
      if (spec.onlyMatching.split(' ').includes(term)) {
        restore[label] = [...ids];
        continue;
      }
      restore[label] = (await this.#find(search, [spec.onlyMatching, term].filter(Boolean).join(' '))).filter(
        (id) => wanted.has(id),
      );
    }
    return restore;
  }

  /**
   * Apply `action` to `ids`. Returns an undo token unless the action is permanent.
   * Throws PartialActionError if Gmail failed part-way, describing what was already changed.
   */
  async run(
    action: BulkAction,
    ids: readonly string[],
    options: { onProgress?: (done: number) => void; restore?: UndoToken['restore'] } = {},
  ): Promise<UndoToken | null> {
    const spec = ACTION_SPECS[action];
    const token = (subset: readonly string[]): UndoToken | null => {
      if (action === 'delete') return null;
      const included = new Set(subset);
      const restore = Object.fromEntries(
        Object.entries(options.restore ?? {}).map(([label, labelIds]) => [
          label,
          labelIds.filter((id) => included.has(id)),
        ]),
      );
      return { action, ids: subset, restore };
    };

    // Batches go in order, so "done" messages are a prefix of `ids` (the trash fallback tracks its own).
    let succeeded: readonly string[] = [];
    const track = (done: number): void => {
      succeeded = ids.slice(0, done);
      options.onProgress?.(done);
    };
    try {
      if (spec.labels === null) await this.gmail.batchDelete(ids, { onProgress: track });
      else if (action === 'trash') {
        await this.#trash(ids, track, (done) => {
          succeeded = [...done]; // per-message fallback finishes out of order
          options.onProgress?.(done.length);
        });
      } else await this.gmail.batchModify(ids, spec.labels, { onProgress: track });
    } catch (error) {
      if (succeeded.length) throw new PartialActionError(action, succeeded, token(succeeded), error);
      throw error;
    }
    return token(ids);
  }

  /** Reverse an action: remove what it added, and restore removed labels only where they were. */
  async undo(token: UndoToken, onProgress?: (done: number) => void): Promise<void> {
    const labels = ACTION_SPECS[token.action].labels;
    if (labels?.add.length) await this.gmail.batchModify(token.ids, { remove: labels.add }, { onProgress });
    for (const [label, ids] of Object.entries(token.restore)) {
      if (ids.length) await this.gmail.batchModify(ids, { add: [label] }, { onProgress });
    }
  }

  async #find(
    search: Search,
    extraTerms: string,
    options: { signal?: AbortSignal; onProgress?: (found: number) => void } = {},
  ): Promise<string[]> {
    const found = new Set<string>();
    const restrict = [search.baseQuery, extraTerms].filter(Boolean).join(' ');
    for (const clause of fromClauses(search.addresses)) {
      const before = found.size;
      const ids = await this.gmail.listMessageIds(`${clause} ${restrict}`.trim(), {
        signal: options.signal,
        onProgress: (n) => options.onProgress?.(before + n),
      });
      for (const id of ids) found.add(id);
    }
    return [...found];
  }

  /** Bulk-trash via the TRASH label; fall back to per-message trash if Gmail rejects that. */
  async #trash(
    ids: readonly string[],
    onBatchProgress: (done: number) => void,
    onFallbackProgress: (succeeded: readonly string[]) => void,
  ): Promise<void> {
    try {
      await this.gmail.batchModify(ids, { add: ['TRASH'] }, { onProgress: onBatchProgress });
    } catch (error) {
      if (!(error instanceof GmailApiError && error.kind === 'invalid_request')) throw error;
      const done: string[] = [];
      await forEachConcurrent(ids, 8, async (id) => {
        await this.gmail.trashMessage(id);
        done.push(id);
        onFallbackProgress(done);
      });
    }
  }
}
