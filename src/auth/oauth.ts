import * as z from 'zod/mini';
import { Mutex } from '../shared/async';
import type { KeyValueArea } from '../platform/storage';
import { StoredValue } from '../platform/storage';

export const SCOPES = {
  /** Read headers, trash/archive/label, send unsubscribe emails. Cannot permanently delete. */
  modify: 'https://www.googleapis.com/auth/gmail.modify',
  /** Create filters. */
  settings: 'https://www.googleapis.com/auth/gmail.settings.basic',
  /** Permanent deletion. Requested only when the user first needs it, in a separate token. */
  full: 'https://mail.google.com/',
} as const;

export const BASE_SCOPES: readonly string[] = [SCOPES.modify, SCOPES.settings];

export type AuthErrorCode =
  | 'not_configured'
  | 'interaction_required'
  | 'cancelled'
  | 'access_denied'
  | 'missing_scopes'
  | 'page_load_failed'
  | 'state_mismatch'
  | 'wrong_account'
  | 'failed';

export class AuthError extends Error {
  override readonly name = 'AuthError';
  constructor(
    readonly code: AuthErrorCode,
    message: string = code,
  ) {
    super(message);
  }
}

/** Supplies access tokens for one Gmail account. */
export interface TokenProvider {
  getToken(options: { interactive: boolean; scopes: readonly string[] }): Promise<string>;
  /** Forget a token the API rejected (no-op if it was already replaced). */
  invalidate(accessToken: string): Promise<void>;
}

/** The part of chrome.identity we use; injectable for tests. */
export interface IdentityPort {
  redirectUri(): string;
  launchWebAuthFlow(url: string, interactive: boolean): Promise<string>;
}

export function chromeIdentity(): IdentityPort {
  return {
    redirectUri: () => chrome.identity.getRedirectURL(),
    launchWebAuthFlow: async (url, interactive) => {
      const result = await chrome.identity.launchWebAuthFlow({
        url,
        interactive,
        // Google's prompt=none flow can finish with a script redirect, so don't abort on first page load.
        ...(interactive ? {} : { abortOnLoadForNonInteractive: false, timeoutMsForNonInteractive: 8000 }),
      });
      if (!result) throw new Error('No redirect URL returned');
      return result;
    },
  };
}

/** Which set of scopes a token carries. Full access lives in its own token so everyday tokens stay narrow. */
type Grant = 'base' | 'full';
const GRANT_SCOPES: Readonly<Record<Grant, readonly string[]>> = { base: BASE_SCOPES, full: [SCOPES.full] };

const tokenSchema = z.object({
  accessToken: z.string().check(z.minLength(1)),
  expiresAt: z.number(),
  scopes: z.array(z.string()),
});
type Token = z.infer<typeof tokenSchema>;

/** account → grant → token */
const tokenTableSchema = z.record(z.string(), z.record(z.string(), tokenSchema));
type TokenTable = z.infer<typeof tokenTableSchema>;

const configSchema = z.object({
  clientId: z.catch(z.string(), ''),
  /** The account to resume on startup. */
  lastAccount: z.catch(z.string(), ''),
  /** Accounts that have granted full access, so it can be refreshed without asking again. */
  fullAccess: z.catch(z.array(z.string()), []),
});
export type AuthConfig = z.infer<typeof configSchema>;

export interface OAuthDeps {
  readonly identity: IdentityPort;
  /** Persistent storage (client ID, last account). */
  readonly local: KeyValueArea;
  /** Session storage (access tokens): cleared when the browser closes. */
  readonly session: KeyValueArea;
  /** The Gmail address a token belongs to. */
  readonly whoAmI: (accessToken: string) => Promise<string>;
  readonly now?: () => number;
  readonly randomState?: () => string;
  readonly revoke?: (token: string) => Promise<void>;
}

const EXPIRY_MARGIN_MS = 60_000;
const CLIENT_ID_PATTERN = /^[\w-]+\.apps\.googleusercontent\.com$/;

export function isValidClientId(clientId: string): boolean {
  return CLIENT_ID_PATTERN.test(clientId.trim());
}

function defaultRandomState(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

async function defaultRevoke(token: string): Promise<void> {
  await fetch('https://oauth2.googleapis.com/revoke', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ token }),
  });
}

type FlowMode =
  | { readonly mode: 'silent'; readonly hint: string }
  | { readonly mode: 'interactive'; readonly hint: string }
  | { readonly mode: 'select_account' };

/**
 * Google OAuth 2.0 via chrome.identity.launchWebAuthFlow (implicit grant), so any Google account
 * works, not just the Chrome profile's.
 *
 * - Tokens are stored per account and per grant, in session storage only, and never logged.
 *   Each dashboard tab asks for tokens for *its* account, so tabs can't act on each other's mailbox.
 * - Every new token is checked against the account it was requested for (`wrong_account`).
 * - Every request carries a random `state` that must round-trip (CSRF), and granted scopes are checked.
 * - Concurrent callers share one auth flow.
 */
export class OAuthClient {
  readonly #identity: IdentityPort;
  readonly #config: StoredValue<AuthConfig>;
  readonly #tokens: StoredValue<TokenTable>;
  readonly #whoAmI: (accessToken: string) => Promise<string>;
  readonly #now: () => number;
  readonly #randomState: () => string;
  readonly #revoke: (token: string) => Promise<void>;
  readonly #mutex = new Mutex();

  constructor(deps: OAuthDeps) {
    this.#identity = deps.identity;
    this.#config = new StoredValue(deps.local, 'auth.config', configSchema, {
      clientId: '',
      lastAccount: '',
      fullAccess: [],
    });
    this.#tokens = new StoredValue(deps.session, 'auth.tokens', tokenTableSchema, {});
    this.#whoAmI = deps.whoAmI;
    this.#now = deps.now ?? Date.now;
    this.#randomState = deps.randomState ?? defaultRandomState;
    this.#revoke = deps.revoke ?? defaultRevoke;
  }

  redirectUri(): string {
    return this.#identity.redirectUri();
  }

  async getConfig(): Promise<AuthConfig> {
    return this.#config.get();
  }

  /** Save (or clear) the OAuth client ID. Tokens from another client are discarded. */
  async setClientId(clientId: string): Promise<void> {
    const trimmed = clientId.trim();
    if (trimmed && !isValidClientId(trimmed))
      throw new AuthError('not_configured', 'Invalid OAuth client ID');
    await this.#mutex.runExclusive(async () => {
      await this.#config.set({ clientId: trimmed, lastAccount: '', fullAccess: [] });
      await this.#tokens.remove();
    });
  }

  /** Interactive sign-in. Shows the account chooser if asked (or if nobody signed in before). */
  signIn(options: { selectAccount?: boolean } = {}): Promise<string> {
    return this.#mutex.runExclusive(async () => {
      const config = await this.#requireClient();
      const flow: FlowMode =
        options.selectAccount || !config.lastAccount
          ? { mode: 'select_account' }
          : { mode: 'interactive', hint: config.lastAccount };
      const token = await this.#authorize(config.clientId, GRANT_SCOPES.base, flow);
      const account = await this.#verify(token, null);
      await this.#store(account, 'base', token);
      await this.#config.set({ ...(await this.#config.get()), lastAccount: account });
      return account;
    });
  }

  /** Resume the last account without any popup. Throws `interaction_required` if that isn't possible. */
  async resume(): Promise<string> {
    const { lastAccount } = await this.#config.get();
    if (!lastAccount) throw new AuthError('interaction_required', 'Sign-in required');
    await this.forAccount(lastAccount).getToken({ interactive: false, scopes: BASE_SCOPES });
    return lastAccount;
  }

  /** Tokens for one account. Anything acquired for it is verified to really be that account. */
  forAccount(account: string): TokenProvider {
    return {
      getToken: (options) => this.#tokenFor(account, options),
      invalidate: (accessToken) =>
        this.#mutex.runExclusive(async () => {
          const table = await this.#tokens.get();
          const grants = Object.entries(table[account] ?? {}).filter(
            ([, token]) => token.accessToken !== accessToken,
          );
          await this.#tokens.set({ ...table, [account]: Object.fromEntries(grants) });
        }),
    };
  }

  /** Whether the account granted full access before (so asking again is unnecessary). */
  async hasFullAccess(account: string): Promise<boolean> {
    return (await this.#config.get()).fullAccess.includes(account);
  }

  async signOut(account: string): Promise<void> {
    await this.#mutex.runExclusive(async () => {
      const table = await this.#tokens.get();
      const grants = Object.values(table[account] ?? {});
      await this.#tokens.set(Object.fromEntries(Object.entries(table).filter(([a]) => a !== account)));
      const config = await this.#config.get();
      await this.#config.set({
        ...config,
        lastAccount: config.lastAccount === account ? '' : config.lastAccount,
        fullAccess: config.fullAccess.filter((a) => a !== account),
      });
      // Best effort: the local copies are gone either way.
      await Promise.all(grants.map((t) => this.#revoke(t.accessToken).catch(() => undefined)));
    });
  }

  async #tokenFor(
    account: string,
    options: { interactive: boolean; scopes: readonly string[] },
  ): Promise<string> {
    const grant: Grant = options.scopes.includes(SCOPES.full) ? 'full' : 'base';
    const cached = await this.#cached(account, grant);
    if (cached) return cached;
    return this.#mutex.runExclusive(async () => {
      const again = await this.#cached(account, grant); // another caller may have refreshed meanwhile
      if (again) return again;
      const { clientId } = await this.#requireClient();
      let token: Token;
      try {
        token = await this.#authorize(clientId, GRANT_SCOPES[grant], { mode: 'silent', hint: account });
      } catch (error) {
        if (!options.interactive) throw error;
        token = await this.#authorize(clientId, GRANT_SCOPES[grant], { mode: 'interactive', hint: account });
      }
      await this.#verify(token, account);
      await this.#store(account, grant, token);
      if (grant === 'full') {
        const config = await this.#config.get();
        if (!config.fullAccess.includes(account)) {
          await this.#config.set({ ...config, fullAccess: [...config.fullAccess, account] });
        }
      }
      return token.accessToken;
    });
  }

  async #cached(account: string, grant: Grant): Promise<string | null> {
    const token = (await this.#tokens.get())[account]?.[grant];
    return token && token.expiresAt - EXPIRY_MARGIN_MS > this.#now() ? token.accessToken : null;
  }

  async #store(account: string, grant: Grant, token: Token): Promise<void> {
    const table = await this.#tokens.get();
    await this.#tokens.set({ ...table, [account]: { ...table[account], [grant]: token } });
  }

  async #requireClient(): Promise<AuthConfig> {
    const config = await this.#config.get();
    if (!config.clientId) throw new AuthError('not_configured', 'No OAuth client ID configured');
    return config;
  }

  /** Confirm which account a token belongs to (and that it's the expected one). */
  async #verify(token: Token, expected: string | null): Promise<string> {
    let actual: string;
    try {
      actual = (await this.#whoAmI(token.accessToken)).toLowerCase();
    } catch {
      throw new AuthError(
        'failed',
        'Could not confirm which Google account you signed in with. Please try again.',
      );
    }
    if (expected !== null && actual !== expected) {
      throw new AuthError(
        'wrong_account',
        `Google signed you in as ${actual}, but this tab is working on ${expected}.`,
      );
    }
    return actual;
  }

  async #authorize(clientId: string, scopes: readonly string[], flow: FlowMode): Promise<Token> {
    const state = this.#randomState();
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: 'token',
      redirect_uri: this.#identity.redirectUri(),
      scope: scopes.join(' '),
      state,
    });
    switch (flow.mode) {
      case 'silent':
        params.set('prompt', 'none');
        params.set('login_hint', flow.hint);
        break;
      case 'interactive':
        params.set('login_hint', flow.hint);
        break;
      case 'select_account':
        params.set('prompt', 'select_account');
        break;
    }

    let responseUrl: string;
    try {
      responseUrl = await this.#identity.launchWebAuthFlow(
        `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
        flow.mode !== 'silent',
      );
    } catch (error) {
      throw classifyFlowError(error);
    }

    const fragment = new URLSearchParams(new URL(responseUrl).hash.slice(1));
    if (fragment.get('state') !== state) throw new AuthError('state_mismatch', 'OAuth state mismatch');
    const oauthError = fragment.get('error');
    if (oauthError) throw new AuthError(codeForOAuthError(oauthError), oauthError);
    const accessToken = fragment.get('access_token');
    if (!accessToken) throw new AuthError('failed', 'No access token returned');

    // Google reports the granted scopes; if it ever omits them, the API's 403 is the backstop.
    const scopeParam = fragment.get('scope');
    const granted = scopeParam === null ? [...scopes] : scopeParam.split(/\s+/).filter(Boolean);
    // With granular consent the user can untick permissions; fail clearly rather than 403 later.
    if (scopes.some((s) => !granted.includes(s))) {
      throw new AuthError('missing_scopes', 'Not all permissions were granted');
    }

    const expiresIn = Number(fragment.get('expires_in'));
    return {
      accessToken,
      expiresAt: this.#now() + (Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn : 3600) * 1000,
      scopes: granted,
    };
  }
}

function codeForOAuthError(error: string): AuthErrorCode {
  switch (error) {
    case 'access_denied':
      return 'access_denied';
    case 'interaction_required':
    case 'login_required':
    case 'consent_required':
      return 'interaction_required';
    default:
      return 'failed';
  }
}

function classifyFlowError(error: unknown): AuthError {
  const message = error instanceof Error ? error.message : String(error);
  if (/did not approve|cancel/i.test(message)) return new AuthError('cancelled', message);
  if (/interaction required/i.test(message)) return new AuthError('interaction_required', message);
  if (/could not be loaded/i.test(message)) return new AuthError('page_load_failed', message);
  return new AuthError('failed', message);
}
