import type { MessageRecord } from '../core/types';

/** A cached message record with sensible defaults, for tests. */
export function message(overrides: Partial<MessageRecord> = {}): MessageRecord {
  return {
    id: 'id',
    email: 'sender@example.com',
    name: 'Sender',
    subject: 'Subject',
    date: 1,
    size: 1000,
    unread: false,
    inInbox: true,
    starred: false,
    important: false,
    unsubscribe: null,
    ...overrides,
  };
}

/** Decode base64url (as used by Gmail's `raw` field) to a UTF-8 string. */
export function decodeBase64Url(value: string): string {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const bytes = Uint8Array.from(atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '=')), (c) =>
    c.charCodeAt(0),
  );
  return new TextDecoder().decode(bytes);
}

/** A clock whose sleep() advances virtual time instantly, recording each delay. */
export class VirtualClock {
  time = 0;
  readonly sleeps: number[] = [];
  now = (): number => this.time;
  sleep = (ms: number, signal?: AbortSignal): Promise<void> => {
    signal?.throwIfAborted();
    this.sleeps.push(ms);
    this.time += ms;
    return Promise.resolve();
  };
}
