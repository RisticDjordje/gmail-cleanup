import { fromClauses } from '../core/query';
import type { GmailClient, LabelChange } from '../gmail/client';
import { GmailApiError } from '../gmail/errors';
import { forEachConcurrent } from '../shared/async';

export type CleanupApi = Pick<GmailClient, 'listMessageIds' | 'batchModify' | 'batchDelete' | 'trashMessage'>;

export const BULK_ACTIONS = ['trash', 'archive', 'markRead', 'spam', 'delete'] as const;
export type BulkAction = (typeof BULK_ACTIONS)[number];
export type UndoableAction = Exclude<BulkAction, 'delete'>;

interface ActionSpec {
  /** Extra search terms: only messages the action would change. */
  readonly onlyMatching: string;
  /** Label change applied (and inverted on undo). `null` for permanent deletion. */
  readonly labels: Required<LabelChange> | null;
  /** The message leaves every normal listing (Trash/Spam/deleted). */
  readonly leavesMailbox: boolean;
}

export const ACTION_SPECS: Readonly<Record<BulkAction, ActionSpec>> = {
  trash: { onlyMatching: '', labels: { add: ['TRASH'], remove: [] }, leavesMailbox: true },
  archive: { onlyMatching: 'in:inbox', labels: { add: [], remove: ['INBOX'] }, leavesMailbox: false },
  markRead: { onlyMatching: 'is:unread', labels: { add: [], remove: ['UNREAD'] }, leavesMailbox: false },
  spam: { onlyMatching: '', labels: { add: ['SPAM'], remove: ['INBOX'] }, leavesMailbox: true },
  delete: { onlyMatching: '', labels: null, leavesMailbox: true },
};

/** Everything needed to reverse an action. */
export interface UndoToken {
  readonly action: UndoableAction;
  readonly ids: readonly string[];
  /** Messages that were in the inbox before (trash/spam may drop INBOX). */
  readonly wasInInbox: readonly string[];
}

export interface RunOptions {
  readonly onProgress?: (done: number) => void;
  readonly wasInInbox?: readonly string[];
}

export class CleanupService {
  constructor(private readonly gmail: CleanupApi) {}

  /**
   * Every message from `addresses` that matches `baseQuery` (the scan's search, so actions only touch
   * what the user scanned) and that `action` would change.
   */
  async findMessages(
    addresses: readonly string[],
    baseQuery: string,
    action: BulkAction,
    options: { signal?: AbortSignal; onProgress?: (found: number) => void } = {},
  ): Promise<string[]> {
    const found = new Set<string>();
    const restrict = [baseQuery, ACTION_SPECS[action].onlyMatching].filter(Boolean).join(' ');
    for (const clause of fromClauses(addresses)) {
      const before = found.size;
      const ids = await this.gmail.listMessageIds(`${clause} ${restrict}`.trim(), {
        signal: options.signal,
        onProgress: (n) => options.onProgress?.(before + n),
      });
      for (const id of ids) found.add(id);
    }
    return [...found];
  }

  /** Apply `action` to `ids`. Returns an undo token unless the action is permanent. */
  async run(action: BulkAction, ids: readonly string[], options: RunOptions = {}): Promise<UndoToken | null> {
    const spec = ACTION_SPECS[action];
    if (action === 'delete' || spec.labels === null) {
      await this.gmail.batchDelete(ids, { onProgress: options.onProgress });
      return null;
    }
    if (action === 'trash') await this.#trash(ids, options.onProgress);
    else await this.gmail.batchModify(ids, spec.labels, { onProgress: options.onProgress });
    return { action, ids, wasInInbox: options.wasInInbox ?? [] };
  }

  async undo(token: UndoToken, onProgress?: (done: number) => void): Promise<void> {
    const labels = ACTION_SPECS[token.action].labels;
    if (!labels) return;
    await this.gmail.batchModify(token.ids, { add: labels.remove, remove: labels.add }, { onProgress });
    // Trashing or reporting spam can drop INBOX; put back what was there.
    if (ACTION_SPECS[token.action].leavesMailbox && token.wasInInbox.length) {
      await this.gmail.batchModify(token.wasInInbox, { add: ['INBOX'] });
    }
  }

  /** Bulk-trash via the TRASH label; fall back to per-message trash if Gmail rejects that. */
  async #trash(ids: readonly string[], onProgress?: (done: number) => void): Promise<void> {
    try {
      await this.gmail.batchModify(ids, ACTION_SPECS.trash.labels ?? {}, { onProgress });
    } catch (error) {
      if (!(error instanceof GmailApiError && error.kind === 'invalid_request')) throw error;
      let done = 0;
      await forEachConcurrent(ids, 8, async (id) => {
        await this.gmail.trashMessage(id);
        done++;
        onProgress?.(done);
      });
    }
  }
}
