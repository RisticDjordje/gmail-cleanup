import { parseFrom, parseUnsubscribe } from './headers';
import type { MessageRecord } from './types';

/** The subset of a Gmail API message resource (format=metadata) that we use. */
export interface RawMessage {
  readonly id: string;
  readonly internalDate?: string | undefined;
  readonly sizeEstimate?: number | undefined;
  readonly labelIds?: readonly string[] | undefined;
  readonly payload?:
    | { readonly headers?: readonly { readonly name: string; readonly value: string }[] | undefined }
    | undefined;
}

export const METADATA_HEADERS = ['From', 'Subject', 'List-Unsubscribe', 'List-Unsubscribe-Post'] as const;

export function toRecord(message: RawMessage): MessageRecord {
  const headers = new Map<string, string>();
  for (const h of message.payload?.headers ?? []) {
    const key = h.name.toLowerCase();
    if (!headers.has(key)) headers.set(key, h.value); // first occurrence wins, like mail clients
  }
  const { name, email } = parseFrom(headers.get('from'));
  const date = Number(message.internalDate);
  return {
    id: message.id,
    email,
    name,
    subject: headers.get('subject') ?? '',
    date: Number.isFinite(date) ? date : 0,
    size: message.sizeEstimate ?? 0,
    ...labelFlags(message.labelIds ?? []),
    unsubscribe: parseUnsubscribe(headers.get('list-unsubscribe'), headers.get('list-unsubscribe-post')),
  };
}

type LabelFlags = Pick<MessageRecord, 'unread' | 'inInbox' | 'starred' | 'important'>;

function labelFlags(labelIds: readonly string[]): LabelFlags {
  const labels = new Set(labelIds);
  return {
    unread: labels.has('UNREAD'),
    inInbox: labels.has('INBOX'),
    starred: labels.has('STARRED'),
    important: labels.has('IMPORTANT'),
  };
}

const FLAG_BY_LABEL: Readonly<Record<string, keyof LabelFlags>> = {
  UNREAD: 'unread',
  INBOX: 'inInbox',
  STARRED: 'starred',
  IMPORTANT: 'important',
};

/** Apply label additions/removals (from an action or the History API) to a cached record. */
export function withLabelChanges(
  record: MessageRecord,
  added: readonly string[],
  removed: readonly string[],
): MessageRecord {
  const patch: Partial<Record<keyof LabelFlags, boolean>> = {};
  for (const label of added) {
    const flag = FLAG_BY_LABEL[label];
    if (flag) patch[flag] = true;
  }
  for (const label of removed) {
    const flag = FLAG_BY_LABEL[label];
    if (flag) patch[flag] = false;
  }
  return Object.keys(patch).length ? { ...record, ...patch } : record;
}
