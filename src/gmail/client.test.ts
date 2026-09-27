import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SCOPES } from '../auth/oauth';
import { isAbortError } from '../shared/async';
import { VirtualClock } from '../testing/fixtures';
import type { TokenProvider } from './client';
import { GmailClient, retryAfterMs } from './client';
import { GmailApiError } from './errors';
import { QuotaLimiter } from './rateLimiter';

interface Recorded {
  url: URL;
  init: RequestInit;
}

type Responder = (req: Recorded) => Response | Promise<Response>;

const json = (body: unknown, status = 200, headers: Record<string, string> = {}): Response =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...headers } });
const apiError = (status: number, message: string, reason?: string): Response =>
  json({ error: { code: status, message, errors: reason ? [{ reason }] : [] } }, status);

describe('GmailClient', () => {
  let requests: Recorded[];
  let queue: Responder[];
  let tokens: TokenProvider & { issued: number; invalidated: string[]; scopesSeen: (readonly string[])[] };
  let clock: VirtualClock;
  let client: GmailClient;

  const reply = (...responders: Responder[]): void => void queue.push(...responders);

  beforeEach(() => {
    requests = [];
    queue = [];
    clock = new VirtualClock();
    tokens = {
      issued: 1,
      invalidated: [],
      scopesSeen: [],
      getToken({ scopes }) {
        this.scopesSeen.push(scopes);
        return Promise.resolve(`t${this.issued}`);
      },
      invalidate(token) {
        this.invalidated.push(token);
        this.issued++;
        return Promise.resolve();
      },
    };
    const fetchFake = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const req = { url: new URL(input instanceof Request ? input.url : input.toString()), init: init ?? {} };
      requests.push(req);
      const next = queue.shift();
      if (!next) throw new Error(`unexpected request ${req.url.toString()}`);
      return next(req);
    });
    client = new GmailClient({
      tokens,
      fetch: fetchFake,
      clock,
      limiter: new QuotaLimiter(250, clock),
      random: () => 0,
      baseUrl: 'https://gmail.test/v1/me',
    });
  });

  it('validates the profile response and sends the bearer token', async () => {
    reply(() => json({ emailAddress: 'me@gmail.com', historyId: '42', messagesTotal: 3 }));
    expect(await client.getProfile()).toEqual({
      emailAddress: 'me@gmail.com',
      historyId: '42',
      messagesTotal: 3,
    });
    expect(new Headers(requests[0]!.init.headers).get('Authorization')).toBe('Bearer t1');
    expect(requests[0]!.init.cache).toBe('no-store');
  });

  it('rejects malformed or unexpected responses', async () => {
    reply(() => new Response('not json', { status: 200 }));
    await expect(client.getProfile()).rejects.toMatchObject({ kind: 'invalid_response' });
    reply(() => json({ nope: true }));
    await expect(client.getProfile()).rejects.toMatchObject({ kind: 'invalid_response' });
  });

  it('pages through message IDs and respects the maximum', async () => {
    reply(
      (req) => {
        expect(req.url.searchParams.get('q')).toBe('in:inbox');
        expect(req.url.searchParams.get('maxResults')).toBe('500');
        return json({ messages: [{ id: 'a' }, { id: 'b' }], nextPageToken: 'p2' });
      },
      (req) => {
        expect(req.url.searchParams.get('pageToken')).toBe('p2');
        return json({ messages: [{ id: 'c' }] });
      },
    );
    const progress: number[] = [];
    expect(await client.listMessageIds('in:inbox', { onProgress: (n) => progress.push(n) })).toEqual([
      'a',
      'b',
      'c',
    ]);
    expect(progress).toEqual([2, 3]);

    reply((req) => {
      expect(req.url.searchParams.get('maxResults')).toBe('2');
      return json({ messages: [{ id: 'x' }, { id: 'y' }], nextPageToken: 'more' });
    });
    expect(await client.listMessageIds('', { max: 2 })).toEqual(['x', 'y']);
    expect(requests.at(-1)!.url.searchParams.has('q')).toBe(false);
  });

  it('passes label filters for listing trash', async () => {
    reply((req) => {
      expect(req.url.searchParams.getAll('labelIds')).toEqual(['TRASH']);
      expect(req.url.searchParams.get('includeSpamTrash')).toBe('true');
      return json({});
    });
    expect(await client.listMessageIds('', { labelIds: ['TRASH'], includeSpamTrash: true })).toEqual([]);
  });

  it('requests only the metadata headers it needs', async () => {
    reply((req) => {
      expect(req.url.pathname).toBe('/v1/me/messages/m%2F1');
      expect(req.url.searchParams.get('format')).toBe('metadata');
      expect(req.url.searchParams.getAll('metadataHeaders')).toEqual([
        'From',
        'Subject',
        'List-Unsubscribe',
        'List-Unsubscribe-Post',
      ]);
      return json({ id: 'm/1', labelIds: ['INBOX'] });
    });
    expect(await client.getMessageMetadata('m/1')).toEqual({ id: 'm/1', labelIds: ['INBOX'] });
  });

  it('batches label changes and deletes in chunks of 1000', async () => {
    const ids = Array.from({ length: 2500 }, (_, i) => `m${i}`);
    const bodies: unknown[] = [];
    for (let i = 0; i < 3; i++) {
      reply((req) => {
        bodies.push(JSON.parse(req.init.body as string));
        return new Response(null, { status: 204 });
      });
    }
    const progress: number[] = [];
    await client.batchModify(ids, { add: ['TRASH'] }, { onProgress: (n) => progress.push(n) });
    expect(progress).toEqual([1000, 2000, 2500]);
    expect(bodies[0]).toMatchObject({ addLabelIds: ['TRASH'], removeLabelIds: [] });
    expect((bodies[2] as { ids: string[] }).ids).toHaveLength(500);

    reply(() => new Response(null, { status: 204 }));
    await client.batchDelete(['a']);
    expect(requests.at(-1)!.url.pathname).toBe('/v1/me/messages/batchDelete');
    expect(tokens.scopesSeen.at(-1)).toContain(SCOPES.full);
  });

  it('trashes, sends and creates filters', async () => {
    reply(
      () => json({ id: 'a' }),
      () => json({ id: 'sent' }),
      () => json({ id: 'f1' }),
    );
    await client.trashMessage('a');
    await client.sendMessage('cmF3');
    await client.createFilter({ from: 'x@y.com' }, { removeLabelIds: ['INBOX'] });
    expect(requests.map((r) => `${r.init.method} ${r.url.pathname}`)).toEqual([
      'POST /v1/me/messages/a/trash',
      'POST /v1/me/messages/send',
      'POST /v1/me/settings/filters',
    ]);
    expect(JSON.parse(requests[2]!.init.body as string)).toEqual({
      criteria: { from: 'x@y.com' },
      action: { removeLabelIds: ['INBOX'] },
    });
  });

  it('collects history changes across pages in order', async () => {
    reply(
      (req) => {
        expect(req.url.searchParams.get('startHistoryId')).toBe('10');
        expect(req.url.searchParams.getAll('historyTypes')).toEqual([
          'labelAdded',
          'labelRemoved',
          'messageDeleted',
        ]);
        return json({
          history: [
            { labelsRemoved: [{ message: { id: 'a' }, labelIds: ['UNREAD'] }] },
            { messagesDeleted: [{ message: { id: 'b' } }] },
          ],
          nextPageToken: 'n',
          historyId: '11',
        });
      },
      () =>
        json({
          history: [{ labelsAdded: [{ message: { id: 'a' }, labelIds: ['UNREAD'] }] }],
          historyId: '12',
        }),
    );
    const changes = await client.listHistory('10');
    expect([...changes.deleted]).toEqual(['b']);
    expect(changes.labelChanges).toEqual([
      { id: 'a', added: [], removed: ['UNREAD'] },
      { id: 'a', added: ['UNREAD'], removed: [] },
    ]);
    expect(changes.historyId).toBe('12');
  });

  it('refreshes the token once on 401', async () => {
    reply(
      () => apiError(401, 'Invalid Credentials'),
      (req) => {
        expect(new Headers(req.init.headers).get('Authorization')).toBe('Bearer t2');
        return json({ emailAddress: 'me@gmail.com', historyId: '1' });
      },
    );
    await client.getProfile();
    expect(tokens.invalidated).toEqual(['t1']);

    reply(
      () => apiError(401, 'Invalid Credentials'),
      () => apiError(401, 'Invalid Credentials'),
    );
    await expect(client.getProfile()).rejects.toMatchObject({ kind: 'unauthorized', status: 401 });
  });

  it('backs off on rate limits and server errors, honoring Retry-After', async () => {
    reply(
      () => apiError(429, 'Too many'),
      () =>
        json({ error: { message: 'slow down', errors: [{ reason: 'userRateLimitExceeded' }] } }, 403, {
          'Retry-After': '5',
        }),
      () => apiError(503, 'Unavailable'),
      () => json({ emailAddress: 'me@gmail.com', historyId: '1' }),
    );
    await client.getProfile();
    expect(clock.sleeps).toEqual([1000, 5000, 4000]);
  });

  it('gives up after repeated failures', async () => {
    for (let i = 0; i < 7; i++) reply(() => apiError(500, 'Backend Error'));
    await expect(client.getProfile()).rejects.toMatchObject({
      kind: 'server',
      status: 500,
      message: 'Backend Error',
    });
    expect(clock.sleeps).toHaveLength(6);
    expect(Math.max(...clock.sleeps)).toBe(32_000);
  });

  it('retries network failures, then reports them', async () => {
    reply(
      () => Promise.reject(new TypeError('Failed to fetch')),
      () => json({ emailAddress: 'me@gmail.com', historyId: '1' }),
    );
    await client.getProfile();
    for (let i = 0; i < 7; i++) reply(() => Promise.reject(new TypeError('Failed to fetch')));
    await expect(client.getProfile()).rejects.toMatchObject({ kind: 'network' });
  });

  it.each([
    [403, 'Request had insufficient authentication scopes.', 'insufficientPermissions', 'insufficient_scope'],
    [404, 'Not Found', undefined, 'not_found'],
    [400, 'Invalid label: TRASH', 'invalidArgument', 'invalid_request'],
  ])('classifies %i errors without retrying', async (status, message, reason, kind) => {
    reply(() => apiError(status, message, reason));
    const error = await client.getProfile().catch((e: unknown) => e);
    expect(error).toBeInstanceOf(GmailApiError);
    expect(error).toMatchObject({ kind, status, message });
    expect(clock.sleeps).toEqual([]);
  });

  it('keeps the status line for non-JSON errors', async () => {
    reply(() => new Response('<html>', { status: 400, statusText: 'Bad Request' }));
    await expect(client.getProfile()).rejects.toMatchObject({ message: '400 Bad Request' });
  });

  it('stops immediately when aborted', async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(client.getProfile(controller.signal)).rejects.toSatisfy(isAbortError);
    expect(requests).toHaveLength(0);

    const late = new AbortController();
    reply(() => {
      late.abort();
      return Promise.reject(late.signal.reason as Error);
    });
    await expect(client.getProfile(late.signal)).rejects.toSatisfy(isAbortError);
  });
});

describe('retryAfterMs', () => {
  it('parses seconds and HTTP dates', () => {
    expect(retryAfterMs(null, 0)).toBeNull();
    expect(retryAfterMs('3', 0)).toBe(3000);
    expect(retryAfterMs('Thu, 01 Jan 1970 00:00:10 GMT', 4000)).toBe(6000);
    expect(retryAfterMs('garbage', 0)).toBeNull();
  });
});
