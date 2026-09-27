import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryArea } from '../platform/storage';
import { FakeIdentity, grant, REDIRECT } from '../testing/fakeIdentity';
import { AuthError, BASE_SCOPES, isValidClientId, OAuthClient, SCOPES } from './oauth';

const CLIENT_ID = '123-abc.apps.googleusercontent.com';

describe('OAuthClient', () => {
  let identity: FakeIdentity;
  let local: MemoryArea;
  let session: MemoryArea;
  let now: number;
  let revoke: ReturnType<typeof vi.fn<(token: string) => Promise<void>>>;
  let client: OAuthClient;
  let stateCounter: number;

  beforeEach(async () => {
    identity = new FakeIdentity();
    local = new MemoryArea();
    session = new MemoryArea();
    now = 1_000_000;
    stateCounter = 0;
    revoke = vi.fn(() => Promise.resolve());
    client = new OAuthClient({
      identity,
      local,
      session,
      now: () => now,
      randomState: () => `state-${++stateCounter}`,
      revoke,
    });
    await client.setClientId(CLIENT_ID);
  });

  it('validates client IDs', async () => {
    expect(isValidClientId(` ${CLIENT_ID} `)).toBe(true);
    expect(isValidClientId('nope')).toBe(false);
    await expect(client.setClientId('nope')).rejects.toBeInstanceOf(AuthError);
  });

  it('requires a client ID', async () => {
    await client.setClientId('');
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code: 'not_configured' });
  });

  it('signs in with the account chooser first, then caches the token', async () => {
    const token = await client.getToken({ interactive: true });
    expect(token).toBe('token-picked');
    const p = identity.last.url.searchParams;
    expect(identity.last.url.origin + identity.last.url.pathname).toBe(
      'https://accounts.google.com/o/oauth2/v2/auth',
    );
    expect(p.get('client_id')).toBe(CLIENT_ID);
    expect(p.get('response_type')).toBe('token');
    expect(p.get('redirect_uri')).toBe(REDIRECT);
    expect(p.get('prompt')).toBe('select_account');
    expect(p.get('scope')?.split(' ')).toEqual([...BASE_SCOPES]);
    expect(p.get('state')).toBe('state-1');
    expect(identity.last.interactive).toBe(true);

    await client.getToken();
    expect(identity.calls).toHaveLength(1);
  });

  it('stores the access token only in session storage', async () => {
    await client.getToken({ interactive: true });
    expect(JSON.stringify([...local.data.values()])).not.toContain('token-picked');
    expect(JSON.stringify([...session.data.values()])).toContain('token-picked');
  });

  it('refreshes silently with the login hint once the token nears expiry', async () => {
    await client.getToken({ interactive: true });
    await client.setLoginHint('me@gmail.com');
    now += 3600_000 - 30_000; // within the expiry margin
    expect(await client.getToken()).toBe('token-me@gmail.com');
    expect(identity.last.interactive).toBe(false);
    expect(identity.last.url.searchParams.get('prompt')).toBe('none');
    expect(identity.last.url.searchParams.get('login_hint')).toBe('me@gmail.com');
  });

  it('asks for interaction only when allowed', async () => {
    await expect(client.getToken()).rejects.toMatchObject({ code: 'interaction_required' });
    expect(identity.calls).toHaveLength(0);

    await client.setLoginHint('me@gmail.com');
    identity.respond = (call) =>
      call.interactive ? grant(call) : grant(call, { error: 'interaction_required', access_token: null });
    await expect(client.getToken()).rejects.toMatchObject({ code: 'interaction_required' });
    expect(await client.getToken({ interactive: true })).toBe('token-me@gmail.com');
    expect(identity.calls.map((c) => c.interactive)).toEqual([false, false, true]);
  });

  it('rejects a response whose state does not match (CSRF)', async () => {
    identity.respond = (call) => grant(call, { state: 'forged' });
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code: 'state_mismatch' });
  });

  it('fails clearly when the user unticks permissions', async () => {
    identity.respond = (call) => grant(call, { scope: SCOPES.modify });
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code: 'missing_scopes' });
  });

  it('assumes requested scopes when Google omits the scope parameter', async () => {
    identity.respond = (call) => grant(call, { scope: null });
    await client.getToken({ interactive: true });
    expect(await client.hasScope(SCOPES.settings)).toBe(true);
  });

  it.each([
    [new Error('The user did not approve access.'), 'cancelled'],
    [new Error('User interaction required.'), 'interaction_required'],
    [new Error('Authorization page could not be loaded.'), 'page_load_failed'],
    ['weird', 'failed'],
  ])('classifies flow failure %s', async (thrown, code) => {
    identity.respond = () => {
      // Deliberately covers non-Error rejections from the browser API.
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw thrown;
    };
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code });
  });

  it.each([
    ['access_denied', 'access_denied'],
    ['consent_required', 'interaction_required'],
    ['server_error', 'failed'],
  ])('maps OAuth error %s', async (error, code) => {
    identity.respond = (call) => grant(call, { error, access_token: null });
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code });
  });

  it('fails when no access token comes back', async () => {
    identity.respond = (call) => grant(call, { access_token: null });
    await expect(client.getToken({ interactive: true })).rejects.toMatchObject({ code: 'failed' });
  });

  it('requests extra scopes incrementally, keeping those already granted', async () => {
    await client.getToken({ interactive: true });
    await client.setLoginHint('me@gmail.com');
    await client.getToken({ interactive: true, scopes: [...BASE_SCOPES, SCOPES.full] });
    expect(identity.last.url.searchParams.get('scope')?.split(' ').sort()).toEqual(
      [...BASE_SCOPES, SCOPES.full].sort(),
    );
    expect(identity.last.url.searchParams.get('include_granted_scopes')).toBe('true');
    expect(await client.hasScope(SCOPES.full)).toBe(true);
  });

  it('switching accounts shows the chooser and does not carry over extra scopes', async () => {
    await client.setLoginHint('me@gmail.com');
    await client.getToken({ interactive: true, scopes: [...BASE_SCOPES, SCOPES.full] });
    await client.getToken({ selectAccount: true });
    const p = identity.last.url.searchParams;
    expect(p.get('prompt')).toBe('select_account');
    expect(p.get('login_hint')).toBeNull();
    expect(p.get('scope')?.split(' ')).toEqual([...BASE_SCOPES]);
  });

  it('shares one auth flow between concurrent callers', async () => {
    const tokens = await Promise.all([
      client.getToken({ interactive: true }),
      client.getToken({ interactive: true }),
      client.getToken({ interactive: true }),
    ]);
    expect(new Set(tokens).size).toBe(1);
    expect(identity.calls).toHaveLength(1);
  });

  it('invalidates only the token that was rejected', async () => {
    const first = await client.getToken({ interactive: true });
    await client.invalidate('some-older-token');
    expect(await client.getToken()).toBe(first);
    await client.invalidate(first);
    await expect(client.getToken()).rejects.toMatchObject({ code: 'interaction_required' });
  });

  it('signs out by forgetting and revoking the token', async () => {
    await client.setLoginHint('me@gmail.com');
    const token = await client.getToken({ interactive: true });
    revoke.mockRejectedValueOnce(new Error('offline'));
    await client.signOut();
    expect(revoke).toHaveBeenCalledWith(token);
    expect((await client.getConfig()).loginHint).toBe('');
    expect(await client.hasScope(SCOPES.modify)).toBe(false);
    await client.signOut(); // no token: nothing to revoke
    expect(revoke).toHaveBeenCalledOnce();
  });

  it('exposes the redirect URI', () => {
    expect(client.redirectUri()).toBe(REDIRECT);
  });
});
