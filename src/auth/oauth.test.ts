import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryArea } from '../platform/storage';
import { accountOfToken, FakeIdentity, grant, REDIRECT, tokenFor } from '../testing/fakeIdentity';
import { AuthError, BASE_SCOPES, isValidClientId, OAuthClient, SCOPES } from './oauth';

const CLIENT_ID = '123-abc.apps.googleusercontent.com';
const ME = 'me@gmail.com';

describe('OAuthClient', () => {
  let identity: FakeIdentity;
  let local: MemoryArea;
  let session: MemoryArea;
  let now: number;
  let revoke: ReturnType<typeof vi.fn<(token: string) => Promise<void>>>;
  let whoAmI: ReturnType<typeof vi.fn<(token: string) => Promise<string>>>;
  let client: OAuthClient;

  beforeEach(async () => {
    identity = new FakeIdentity();
    local = new MemoryArea();
    session = new MemoryArea();
    now = 1_000_000;
    let state = 0;
    revoke = vi.fn(() => Promise.resolve());
    whoAmI = vi.fn(accountOfToken);
    client = new OAuthClient({
      identity,
      local,
      session,
      whoAmI,
      now: () => now,
      randomState: () => `state-${++state}`,
      revoke,
    });
    await client.setClientId(CLIENT_ID);
  });

  const base = (account = ME) =>
    client.forAccount(account).getToken({ interactive: false, scopes: BASE_SCOPES });

  it('validates client IDs', async () => {
    expect(isValidClientId(` ${CLIENT_ID} `)).toBe(true);
    expect(isValidClientId('nope')).toBe(false);
    await expect(client.setClientId('nope')).rejects.toBeInstanceOf(AuthError);
  });

  it('requires a client ID', async () => {
    await client.setClientId('');
    await expect(client.signIn()).rejects.toMatchObject({ code: 'not_configured' });
  });

  it('signs in with the account chooser, verifies the account and remembers it', async () => {
    expect(await client.signIn()).toBe(ME);
    const p = identity.last.url.searchParams;
    expect(identity.last.url.origin + identity.last.url.pathname).toBe(
      'https://accounts.google.com/o/oauth2/v2/auth',
    );
    expect(p.get('client_id')).toBe(CLIENT_ID);
    expect(p.get('response_type')).toBe('token');
    expect(p.get('redirect_uri')).toBe(REDIRECT);
    expect(p.get('prompt')).toBe('select_account');
    expect(p.get('scope')?.split(' ')).toEqual([...BASE_SCOPES]);
    expect(p.get('include_granted_scopes')).toBeNull(); // tokens stay narrow
    expect(p.get('state')).toBe('state-1');
    expect(whoAmI).toHaveBeenCalledWith(tokenFor(ME));
    expect((await client.getConfig()).lastAccount).toBe(ME);

    expect(await base()).toBe(tokenFor(ME));
    expect(identity.calls).toHaveLength(1); // cached
  });

  it('stores access tokens only in session storage', async () => {
    await client.signIn();
    expect(JSON.stringify([...local.data.values()])).not.toContain(tokenFor(ME));
    expect(JSON.stringify([...session.data.values()])).toContain(tokenFor(ME));
  });

  it('resumes the last account silently, or asks for sign-in', async () => {
    await expect(client.resume()).rejects.toMatchObject({ code: 'interaction_required' });
    await client.signIn();
    now += 3600_000; // expired
    expect(await client.resume()).toBe(ME);
    expect(identity.last).toMatchObject({ interactive: false });
    expect(identity.last.url.searchParams.get('prompt')).toBe('none');
    expect(identity.last.url.searchParams.get('login_hint')).toBe(ME);
  });

  it('re-signs in with the last account as a hint', async () => {
    await client.signIn();
    await client.signIn();
    expect(identity.last.url.searchParams.get('login_hint')).toBe(ME);
    expect(identity.last.url.searchParams.get('prompt')).toBeNull();
  });

  it('falls back to a popup only when interaction is allowed', async () => {
    await client.signIn();
    now += 3600_000;
    identity.respond = (call) =>
      call.interactive ? grant(call) : grant(call, { error: 'interaction_required', access_token: null });
    await expect(base()).rejects.toMatchObject({ code: 'interaction_required' });
    expect(await client.forAccount(ME).getToken({ interactive: true, scopes: BASE_SCOPES })).toBe(
      tokenFor(ME),
    );
    expect(identity.calls.slice(-3).map((c) => c.interactive)).toEqual([false, false, true]);
  });

  it('rejects a token for a different account than requested', async () => {
    await client.signIn();
    now += 3600_000;
    identity.respond = (call) => grant(call, { access_token: tokenFor('other@gmail.com') });
    await expect(base()).rejects.toMatchObject({ code: 'wrong_account' });
    now -= 3600_000; // even then, nothing was stored for the wrong account
    expect(JSON.stringify([...session.data.values()])).not.toContain('other@gmail.com');
  });

  it('keeps tokens separate per account', async () => {
    await client.signIn();
    identity.picked = 'second@gmail.com';
    expect(await client.signIn({ selectAccount: true })).toBe('second@gmail.com');
    expect(await base(ME)).toBe(tokenFor(ME));
    expect(await base('second@gmail.com')).toBe(tokenFor('second@gmail.com'));
  });

  it('keeps full access in its own token and remembers it was granted', async () => {
    await client.signIn();
    expect(await client.hasFullAccess(ME)).toBe(false);
    const full = client.forAccount(ME).getToken({ interactive: true, scopes: [SCOPES.full] });
    expect(await full).toBe(tokenFor(ME));
    expect(identity.last.url.searchParams.get('scope')).toBe(SCOPES.full);
    expect(await client.hasFullAccess(ME)).toBe(true);
    expect(await base()).toBe(tokenFor(ME)); // the base token is untouched
  });

  it('fails clearly when verification fails', async () => {
    whoAmI.mockRejectedValueOnce(new Error('offline'));
    await expect(client.signIn()).rejects.toMatchObject({
      code: 'failed',
      message: /confirm which Google account/,
    });
  });

  it('rejects a response whose state does not match (CSRF)', async () => {
    identity.respond = (call) => grant(call, { state: 'forged' });
    await expect(client.signIn()).rejects.toMatchObject({ code: 'state_mismatch' });
  });

  it('fails clearly when the user unticks permissions', async () => {
    identity.respond = (call) => grant(call, { scope: SCOPES.modify });
    await expect(client.signIn()).rejects.toMatchObject({ code: 'missing_scopes' });
  });

  it('assumes requested scopes when Google omits the scope parameter', async () => {
    identity.respond = (call) => grant(call, { scope: null, expires_in: 'nonsense' });
    await expect(client.signIn()).resolves.toBe(ME);
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
    await expect(client.signIn()).rejects.toMatchObject({ code });
  });

  it.each([
    ['access_denied', 'access_denied'],
    ['consent_required', 'interaction_required'],
    ['server_error', 'failed'],
  ])('maps OAuth error %s', async (error, code) => {
    identity.respond = (call) => grant(call, { error, access_token: null });
    await expect(client.signIn()).rejects.toMatchObject({ code });
  });

  it('fails when no access token comes back', async () => {
    identity.respond = (call) => grant(call, { access_token: null });
    await expect(client.signIn()).rejects.toMatchObject({ code: 'failed' });
  });

  it('shares one auth flow between concurrent callers', async () => {
    await client.signIn();
    now += 3600_000;
    const provider = client.forAccount(ME);
    const tokens = await Promise.all(
      [1, 2, 3].map(() => provider.getToken({ interactive: true, scopes: BASE_SCOPES })),
    );
    expect(new Set(tokens).size).toBe(1);
    expect(identity.calls).toHaveLength(2); // sign-in + one refresh
  });

  it('invalidates only the token that was rejected', async () => {
    await client.signIn();
    const provider = client.forAccount(ME);
    await provider.invalidate('some-older-token');
    expect(await base()).toBe(tokenFor(ME));
    await provider.invalidate(tokenFor(ME));
    identity.respond = (call) => grant(call, { error: 'login_required', access_token: null });
    await expect(base()).rejects.toMatchObject({ code: 'interaction_required' });
  });

  it('signs out one account by forgetting and revoking its tokens', async () => {
    await client.signIn();
    await client.forAccount(ME).getToken({ interactive: true, scopes: [SCOPES.full] });
    revoke.mockRejectedValueOnce(new Error('offline'));
    await client.signOut(ME);
    expect(revoke).toHaveBeenCalledWith(tokenFor(ME));
    expect(await client.getConfig()).toMatchObject({ lastAccount: '', fullAccess: [] });
    expect(JSON.stringify([...session.data.values()])).not.toContain(tokenFor(ME));
  });

  it('forgets tokens when the client ID changes', async () => {
    await client.signIn();
    await client.setClientId(CLIENT_ID);
    expect(JSON.stringify([...session.data.values()])).not.toContain(tokenFor(ME));
    expect(client.redirectUri()).toBe(REDIRECT);
  });
});
