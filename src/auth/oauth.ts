import * as z from 'zod/mini';
import { Mutex } from '../shared/async';
import type { KeyValueArea } from '../platform/storage';
import { StoredValue } from '../platform/storage';

export const SCOPES = {
  /** Read headers, trash/archive/label, send unsubscribe emails. Cannot permanently delete. */
  modify: 'https://www.googleapis.com/auth/gmail.modify',
  /** Create filters. */
  settings: 'https://www.googleapis.com/auth/gmail.settings.basic',
  /** Permanent deletion. Requested only when the user first needs it. */
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

const tokenSchema = z.object({
  accessToken: z.string().check(z.minLength(1)),
  expiresAt: z.number(),
  scopes: z.array(z.string()),
});
type Token = z.infer<typeof tokenSchema>;

const configSchema = z.object({
  clientId: z.string(),
  loginHint: z.string(),
});
export type AuthConfig = z.infer<typeof configSchema>;

export interface GetTokenOptions {
  /** Allow a consent/account popup. Silent refresh is always tried first. */
  readonly interactive?: boolean;
  readonly scopes?: readonly string[];
  /** Show Google's account chooser, e.g. to switch accounts. Implies interactive. */
  readonly selectAccount?: boolean;
}

export interface OAuthDeps {
  readonly identity: IdentityPort;
  /** Persistent storage (client ID, login hint). */
  readonly local: KeyValueArea;
  /** Session storage (access token): cleared when the browser closes. */
  readonly session: KeyValueArea;
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

/**
 * Google OAuth 2.0 via chrome.identity.launchWebAuthFlow (implicit grant, as recommended for
 * extensions that must support any Google account rather than only the Chrome profile's).
 *
 * - Access tokens live in session storage only and are never logged.
 * - Every request carries a random `state` that must round-trip (CSRF protection).
 * - Concurrent callers share one auth flow.
 */
export class OAuthClient {
  readonly #identity: IdentityPort;
  readonly #config: StoredValue<AuthConfig>;
  readonly #token: StoredValue<Token | null>;
  readonly #now: () => number;
  readonly #randomState: () => string;
  readonly #revoke: (token: string) => Promise<void>;
  readonly #mutex = new Mutex();

  constructor(deps: OAuthDeps) {
    this.#identity = deps.identity;
    this.#config = new StoredValue(deps.local, 'auth.config', configSchema, { clientId: '', loginHint: '' });
    this.#token = new StoredValue(deps.session, 'auth.token', z.nullable(tokenSchema), null);
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

  async setClientId(clientId: string): Promise<void> {
    const trimmed = clientId.trim();
    if (trimmed && !isValidClientId(trimmed))
      throw new AuthError('not_configured', 'Invalid OAuth client ID');
    await this.#config.set({ ...(await this.#config.get()), clientId: trimmed });
    await this.#token.remove();
  }

  async setLoginHint(email: string): Promise<void> {
    await this.#config.set({ ...(await this.#config.get()), loginHint: email });
  }

  async hasScope(scope: string): Promise<boolean> {
    const token = await this.#token.get();
    return token?.scopes.includes(scope) ?? false;
  }

  /** Return a valid access token covering `scopes`, refreshing or prompting as allowed. */
  async getToken(options: GetTokenOptions = {}): Promise<string> {
    const scopes = options.scopes ?? BASE_SCOPES;
    if (!options.selectAccount) {
      const cached = await this.#usableToken(scopes);
      if (cached) return cached;
    }
    return this.#mutex.runExclusive(async () => {
      // Another caller may have refreshed while we waited.
      if (!options.selectAccount) {
        const cached = await this.#usableToken(scopes);
        if (cached) return cached;
      }
      return this.#acquire(scopes, options);
    });
  }

  /** Drop a token the API rejected, unless it has already been replaced. */
  async invalidate(accessToken: string): Promise<void> {
    await this.#mutex.runExclusive(async () => {
      const token = await this.#token.get();
      if (token?.accessToken === accessToken) await this.#token.remove();
    });
  }

  async signOut(): Promise<void> {
    await this.#mutex.runExclusive(async () => {
      const token = await this.#token.get();
      await this.#token.remove();
      await this.#config.set({ ...(await this.#config.get()), loginHint: '' });
      if (token) await this.#revoke(token.accessToken).catch(() => undefined); // best effort
    });
  }

  async #usableToken(scopes: readonly string[]): Promise<string | null> {
    const token = await this.#token.get();
    if (!token || token.expiresAt - EXPIRY_MARGIN_MS <= this.#now()) return null;
    return scopes.every((s) => token.scopes.includes(s)) ? token.accessToken : null;
  }

  async #acquire(scopes: readonly string[], options: GetTokenOptions): Promise<string> {
    const config = await this.#config.get();
    if (!config.clientId) throw new AuthError('not_configured', 'No OAuth client ID configured');

    // Keep previously granted scopes so an incremental request doesn't narrow the token,
    // unless the user is picking a (possibly different) account.
    const previous = options.selectAccount ? [] : ((await this.#token.get())?.scopes ?? []);
    const wanted = [...new Set([...previous.filter((s) => s.startsWith('https://')), ...scopes])];

    if (!options.selectAccount && config.loginHint) {
      try {
        return await this.#authorize(config, wanted, 'silent');
      } catch (error) {
        if (!options.interactive) throw error;
      }
    }
    if (!options.interactive && !options.selectAccount) {
      throw new AuthError('interaction_required', 'Sign-in required');
    }
    return this.#authorize(config, wanted, options.selectAccount ? 'select_account' : 'interactive');
  }

  async #authorize(
    config: AuthConfig,
    scopes: readonly string[],
    mode: 'silent' | 'interactive' | 'select_account',
  ): Promise<string> {
    const state = this.#randomState();
    const params = new URLSearchParams({
      client_id: config.clientId,
      response_type: 'token',
      redirect_uri: this.#identity.redirectUri(),
      scope: scopes.join(' '),
      include_granted_scopes: 'true',
      state,
    });
    switch (mode) {
      case 'silent':
        params.set('prompt', 'none');
        params.set('login_hint', config.loginHint);
        break;
      case 'interactive':
        if (config.loginHint) params.set('login_hint', config.loginHint);
        else params.set('prompt', 'select_account');
        break;
      case 'select_account':
        params.set('prompt', 'select_account');
        break;
    }

    let responseUrl: string;
    try {
      responseUrl = await this.#identity.launchWebAuthFlow(
        `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
        mode !== 'silent',
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
    if (scopes.some((s) => !granted.includes(s)))
      throw new AuthError('missing_scopes', 'Not all permissions were granted');

    const expiresIn = Number(fragment.get('expires_in'));
    await this.#token.set({
      accessToken,
      expiresAt: this.#now() + (Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn : 3600) * 1000,
      scopes: granted,
    });
    return accessToken;
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
