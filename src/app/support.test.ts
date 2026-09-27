import { afterEach, describe, expect, it, vi } from 'vitest';
import { AuthError } from '../auth/oauth';
import type { AuthErrorCode } from '../auth/oauth';
import { GmailApiError } from '../gmail/errors';
import type { GmailErrorKind } from '../gmail/errors';
import { MemoryArea } from '../platform/storage';
import { DialogService } from './dialogs';
import { describeError } from './errors';
import { DEFAULT_SETTINGS, Persistence } from './persistence';
import { ToastService } from './toasts';

const REDIRECT = 'https://id.chromiumapp.org/';

describe('describeError', () => {
  it.each<[AuthErrorCode, string, RegExp]>([
    ['not_configured', '', /client ID/],
    ['interaction_required', '', /sign in again/],
    ['cancelled', '', /cancelled/],
    ['access_denied', '', /test user/],
    ['missing_scopes', '', /tick every box/],
    ['page_load_failed', '', /id\.chromiumapp\.org/],
    ['state_mismatch', '', /didn’t match/],
    [
      'wrong_account',
      'Google signed you in as a@x.com, but this tab is working on b@x.com.',
      /Switch account/,
    ],
    ['failed', 'redirect_uri_mismatch', /Authorized redirect URIs/],
    ['failed', 'server_error', /Sign-in failed: server_error/],
  ])('explains auth error %s', (code, message, expected) => {
    expect(describeError(new AuthError(code, message), REDIRECT)).toMatch(expected);
  });

  it.each<[GmailErrorKind, RegExp]>([
    ['insufficient_scope', /permission is missing/],
    ['rate_limited', /rate-limiting/],
    ['network', /^offline$/],
    ['unauthorized', /session expired/],
    ['server', /Gmail error: offline/],
  ])('explains Gmail error %s', (kind, expected) => {
    expect(describeError(new GmailApiError(kind, 'offline'), REDIRECT)).toMatch(expected);
  });

  it('never returns an empty or "null" message', () => {
    expect(describeError(new Error('plain'), REDIRECT)).toBe('plain');
    expect(describeError('text', REDIRECT)).toBe('text');
    for (const value of [null, undefined, '', new Error(''), {}]) {
      expect(describeError(value, REDIRECT)).toMatch(/no details/);
    }
  });
});

describe('ToastService', () => {
  afterEach(() => vi.useRealTimers());

  it('shows at most three toasts and expires them', () => {
    vi.useFakeTimers();
    const toasts = new ToastService();
    for (const n of [1, 2, 3, 4]) toasts.show(`t${n}`);
    expect(toasts.toasts.value.map((t) => t.message)).toEqual(['t2', 't3', 't4']);
    vi.advanceTimersByTime(4000);
    expect(toasts.toasts.value).toEqual([]);
  });

  it('keeps action and error toasts longer, and can be dismissed or cleared', () => {
    vi.useFakeTimers();
    const toasts = new ToastService();
    toasts.show('undo me', { action: { label: 'Undo', run: () => undefined } });
    toasts.error('bad');
    vi.advanceTimersByTime(4000);
    expect(toasts.toasts.value).toHaveLength(2);
    vi.advanceTimersByTime(4000);
    expect(toasts.toasts.value.map((t) => t.message)).toEqual(['undo me']);
    toasts.dismiss(toasts.toasts.value[0]!.id);
    expect(toasts.toasts.value).toEqual([]);
    toasts.show('a');
    toasts.clear();
    expect(toasts.toasts.value).toEqual([]);
  });
});

describe('DialogService', () => {
  it('answers questions and dismisses superseded ones', async () => {
    const dialogs = new DialogService();
    const first = dialogs.ask({ kind: 'clearCache' });
    const firstId = dialogs.current.value?.id;
    const second = dialogs.ask({ kind: 'clearKept', count: 2 });
    expect(await first).toBe(false); // dismissed when replaced
    expect(dialogs.current.value?.id).not.toBe(firstId);
    dialogs.current.value?.answer(true);
    expect(await second).toBe(true);
    expect(dialogs.current.value).toBeNull();
  });

  it('shows progress, which dismisses open questions', async () => {
    const dialogs = new DialogService();
    const question = dialogs.ask({ kind: 'block', senders: ['x'], criteria: ['x@y.com'] });
    dialogs.showProgress('Working', 'step 1', 0.5);
    expect(await question).toBeNull();
    expect(dialogs.progress.value).toEqual({ title: 'Working', label: 'step 1', fraction: 0.5 });
    dialogs.hideProgress();
    expect(dialogs.progress.value).toBeNull();
    const pending = dialogs.ask({ kind: 'grantFullAccess' });
    dialogs.closeAll();
    expect(await pending).toBe(false);
  });
});

describe('Persistence', () => {
  it('defaults, and repairs invalid settings field by field', async () => {
    const area = new MemoryArea();
    const persistence = new Persistence(area);
    expect(await persistence.settings.get()).toEqual(DEFAULT_SETTINGS);
    await area.set('settings', {
      scan: { scope: 'bogus', customQuery: 'x', olderThan: '1y', maxMessages: -3 },
      view: { groupBy: 'domain', sort: 7 },
    });
    expect(await persistence.settings.get()).toEqual({
      scan: { scope: 'all', customQuery: 'x', olderThan: '1y', maxMessages: 0 },
      protection: DEFAULT_SETTINGS.protection,
      view: { groupBy: 'domain', sort: 'count', filters: DEFAULT_SETTINGS.view.filters },
    });
  });

  it('stores a scan snapshot per account', async () => {
    const persistence = new Persistence(new MemoryArea());
    const snapshot = { query: 'q', scope: 'all' as const, ids: ['a'], scannedAt: 1, complete: true };
    await persistence.snapshot('a@x.com').set(snapshot);
    expect(await persistence.snapshot('a@x.com').get()).toEqual(snapshot);
    expect(await persistence.snapshot('b@x.com').get()).toBeNull();
  });
});
