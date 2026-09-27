import { describe, expect, it } from 'vitest';
import { GmailApiError } from '../gmail/errors';
import { FakeGmail } from '../testing/fakeGmail';
import { BLOCK_FILTER_ACTIONS, createBlockFilters } from './filters';

describe('createBlockFilters', () => {
  it('creates one filter per sender and tolerates duplicates', async () => {
    const gmail = new FakeGmail('me@gmail.com');
    const progress: number[] = [];
    expect(await createBlockFilters(gmail, ['a@x.com', '@spam.com'], 'trash', (n) => progress.push(n))).toBe(
      2,
    );
    expect(await createBlockFilters(gmail, ['a@x.com'], 'archive')).toBe(1);
    expect(gmail.filters).toEqual([
      { criteria: { from: 'a@x.com' }, action: BLOCK_FILTER_ACTIONS.trash },
      { criteria: { from: '@spam.com' }, action: BLOCK_FILTER_ACTIONS.trash },
    ]);
    expect(progress).toEqual([1, 2]);
  });

  it('propagates real failures', async () => {
    const gmail = new FakeGmail('me@gmail.com');
    gmail.createFilter = () => Promise.reject(new GmailApiError('insufficient_scope', 'no', 403));
    await expect(createBlockFilters(gmail, ['a@x.com'], 'trash')).rejects.toMatchObject({
      kind: 'insufficient_scope',
    });
  });
});
