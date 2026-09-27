import { describe, expect, it } from 'vitest';
import { toRecord, withLabelChanges } from './record';

describe('toRecord', () => {
  it('extracts sender, labels and unsubscribe info', () => {
    const record = toRecord({
      id: 'm1',
      internalDate: '1700000000000',
      sizeEstimate: 1234,
      labelIds: ['UNREAD', 'INBOX', 'CATEGORY_PROMOTIONS'],
      payload: {
        headers: [
          { name: 'From', value: 'Shop <Deals@Shop.com>' },
          { name: 'subject', value: 'Sale' },
          { name: 'Subject', value: 'Ignored duplicate' },
          { name: 'List-Unsubscribe', value: '<https://shop.com/u>' },
          { name: 'List-Unsubscribe-Post', value: 'List-Unsubscribe=One-Click' },
        ],
      },
    });
    expect(record).toEqual({
      id: 'm1',
      email: 'deals@shop.com',
      name: 'Shop',
      subject: 'Sale',
      date: 1700000000000,
      size: 1234,
      unread: true,
      inInbox: true,
      starred: false,
      important: false,
      unsubscribe: { url: 'https://shop.com/u', mailto: null, oneClick: true },
    });
  });

  it('tolerates a message with no metadata', () => {
    expect(toRecord({ id: 'x', internalDate: 'garbage' })).toMatchObject({
      id: 'x',
      date: 0,
      size: 0,
      unread: false,
    });
  });
});

describe('withLabelChanges', () => {
  const base = toRecord({ id: 'm', labelIds: ['UNREAD', 'INBOX'] });

  it('applies additions and removals', () => {
    expect(withLabelChanges(base, ['STARRED'], ['UNREAD', 'INBOX'])).toMatchObject({
      starred: true,
      unread: false,
      inInbox: false,
    });
  });

  it('returns the same object when nothing relevant changes', () => {
    expect(withLabelChanges(base, ['CATEGORY_SOCIAL'], [])).toBe(base);
  });
});
