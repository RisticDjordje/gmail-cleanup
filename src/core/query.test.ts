import { describe, expect, it } from 'vitest';
import { buildScanQuery, fromClauses, gmailSearchUrl, protectionTerms, quoteTerm } from './query';
import type { ScanOptions } from './types';

const options = (o: Partial<ScanOptions>): ScanOptions => ({
  scope: 'all',
  customQuery: '',
  olderThan: '',
  maxMessages: 0,
  ...o,
});
const unprotected = { protectStarred: false, protectImportant: false };

describe('buildScanQuery', () => {
  it('combines scope, age and protection', () => {
    expect(
      buildScanQuery(options({ scope: 'promotions', olderThan: '1y' }), {
        protectStarred: true,
        protectImportant: false,
      }),
    ).toBe('category:promotions older_than:1y -is:starred -in:drafts -in:chats');
  });

  it('always excludes drafts and chats', () => {
    expect(buildScanQuery(options({}), unprotected)).toBe('-in:drafts -in:chats');
  });

  it('parenthesizes custom queries so OR stays scoped', () => {
    expect(buildScanQuery(options({ scope: 'custom', customQuery: ' a OR b ' }), unprotected)).toBe(
      '(a OR b) -in:drafts -in:chats',
    );
    expect(buildScanQuery(options({ scope: 'custom', customQuery: '  ' }), unprotected)).toBe(
      '-in:drafts -in:chats',
    );
  });
});

describe('protectionTerms', () => {
  it('lists the enabled protections', () => {
    expect(protectionTerms({ protectStarred: true, protectImportant: true })).toEqual([
      '-is:starred',
      '-is:important',
    ]);
    expect(protectionTerms(unprotected)).toEqual([]);
  });
});

describe('fromClauses', () => {
  it('chunks addresses into OR groups', () => {
    expect(fromClauses(['a@x.com'])).toEqual(['from:a@x.com']);
    expect(fromClauses(['a@x.com', 'b@y.com', 'c@z.com'], 2)).toEqual([
      'from:(a@x.com OR b@y.com)',
      'from:c@z.com',
    ]);
    expect(fromClauses([])).toEqual([]);
  });

  it('quotes terms that would change the query meaning', () => {
    expect(quoteTerm('(unknown sender)')).toBe('"(unknown sender)"');
    expect(quoteTerm('-a@x.com')).toBe('"-a@x.com"');
    expect(quoteTerm('a"b@x.com')).toBe('"ab@x.com"');
    expect(quoteTerm('plain+tag@x.com')).toBe('plain+tag@x.com');
  });
});

describe('gmailSearchUrl', () => {
  it('targets the right account and encodes the search', () => {
    expect(gmailSearchUrl('me@gmail.com', '@shop.com')).toBe(
      'https://mail.google.com/mail/u/?authuser=me%40gmail.com#search/from%3A%40shop.com',
    );
  });
});
