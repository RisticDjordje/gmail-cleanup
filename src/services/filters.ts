import type { FilterAction, GmailClient } from '../gmail/client';
import { isSafeAddress } from '../core/headers';
import { GmailApiError } from '../gmail/errors';

export const BLOCK_MODES = ['trash', 'archive', 'archiveRead'] as const;
export type BlockMode = (typeof BLOCK_MODES)[number];

export const BLOCK_FILTER_ACTIONS: Readonly<Record<BlockMode, FilterAction>> = {
  trash: { addLabelIds: ['TRASH'], removeLabelIds: ['INBOX'] },
  archive: { removeLabelIds: ['INBOX'] },
  archiveRead: { removeLabelIds: ['INBOX', 'UNREAD'] },
};

/**
 * Create one Gmail filter per sender (an address, or `@domain`). An identical existing filter
 * counts as success, so this is safe to repeat.
 */
export async function createBlockFilters(
  gmail: Pick<GmailClient, 'createFilter'>,
  senders: readonly string[],
  mode: BlockMode,
  onProgress?: (done: number) => void,
): Promise<number> {
  const unsafe = senders.find((s) => !isSafeFilterSender(s));
  if (unsafe !== undefined) throw new Error(`Refusing to create a filter for a malformed sender: ${unsafe}`);
  let done = 0;
  for (const from of senders) {
    try {
      await gmail.createFilter({ from }, BLOCK_FILTER_ACTIONS[mode]);
    } catch (error) {
      const duplicate =
        error instanceof GmailApiError && error.kind === 'invalid_request' && /exists/i.test(error.message);
      if (!duplicate) throw error;
    }
    done++;
    onProgress?.(done);
  }
  return done;
}

/** An address, or `@domain`, that can't change the meaning of a Gmail filter's "from" criteria. */
export function isSafeFilterSender(sender: string): boolean {
  return sender.startsWith('@') ? isSafeAddress(`x${sender}`) : isSafeAddress(sender);
}
