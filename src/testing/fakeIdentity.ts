import type { IdentityPort } from '../auth/oauth';

export const REDIRECT = 'https://abc.chromiumapp.org/';

export interface AuthCall {
  readonly url: URL;
  readonly interactive: boolean;
}

/** Token issued for an account; `accountOfToken` reverses it (a stand-in for Gmail's profile call). */
export const tokenFor = (account: string): string => `token-${account}`;
export const accountOfToken = (token: string): Promise<string> =>
  Promise.resolve(token.replace(/^token-/, ''));

/** Google's redirect for a successful (or overridden) authorization request. */
export function grant(
  call: AuthCall,
  overrides: Record<string, string | null> = {},
  picked = 'me@gmail.com',
): string {
  const p = call.url.searchParams;
  const fragment = new URLSearchParams();
  const account = p.get('prompt') === 'select_account' ? picked : (p.get('login_hint') ?? picked);
  const values: Record<string, string | null> = {
    access_token: tokenFor(account),
    expires_in: '3600',
    scope: p.get('scope'),
    state: p.get('state'),
    ...overrides,
  };
  for (const [k, v] of Object.entries(values)) if (v !== null) fragment.set(k, v);
  return `${REDIRECT}#${fragment.toString()}`;
}

/** Scriptable chrome.identity: each call is answered by `respond` (grants everything by default). */
export class FakeIdentity implements IdentityPort {
  calls: AuthCall[] = [];
  /** The account Google's chooser returns. */
  picked = 'me@gmail.com';
  respond: (call: AuthCall) => string = (call) => grant(call, {}, this.picked);
  redirectUri = (): string => REDIRECT;
  launchWebAuthFlow = (url: string, interactive: boolean): Promise<string> => {
    const call = { url: new URL(url), interactive };
    this.calls.push(call);
    try {
      return Promise.resolve(this.respond(call));
    } catch (error) {
      return Promise.reject(error instanceof Error ? error : new Error(String(error)));
    }
  };
  get last(): AuthCall {
    const call = this.calls.at(-1);
    if (!call) throw new Error('no calls');
    return call;
  }
}
