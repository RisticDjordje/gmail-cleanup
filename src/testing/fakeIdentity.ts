import type { IdentityPort } from '../auth/oauth';

export const REDIRECT = 'https://abc.chromiumapp.org/';

export interface AuthCall {
  readonly url: URL;
  readonly interactive: boolean;
}

/** Google's redirect for a successful (or overridden) authorization request. */
export function grant(call: AuthCall, overrides: Record<string, string | null> = {}): string {
  const p = call.url.searchParams;
  const fragment = new URLSearchParams();
  const values: Record<string, string | null> = {
    access_token: `token-${p.get('login_hint') ?? 'picked'}`,
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
  respond: (call: AuthCall) => string = (call) => grant(call);
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
