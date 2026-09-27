// OAuth via chrome.identity.launchWebAuthFlow (implicit grant).
// Works with any Google account (not just the one signed into Chrome) and in any Chromium browser.

export const BASE_SCOPES = [
  'https://www.googleapis.com/auth/gmail.modify', // read headers, trash, archive, mark read, send unsubscribe emails
  'https://www.googleapis.com/auth/gmail.settings.basic', // create filters for future mail
];
// Only requested when the user chooses "Delete forever" or empties Trash/Spam.
export const FULL_SCOPE = 'https://mail.google.com/';

export class AuthRequiredError extends Error {
  constructor(message = 'Sign-in required') {
    super(message);
    this.name = 'AuthRequiredError';
  }
}

async function loadAuth() {
  const { auth = {} } = await chrome.storage.local.get('auth');
  return auth;
}

async function saveAuth(patch) {
  const auth = { ...(await loadAuth()), ...patch };
  await chrome.storage.local.set({ auth });
  return auth;
}

export function redirectUri() {
  return chrome.identity.getRedirectURL();
}

export async function getClientId() {
  return (await loadAuth()).clientId || '';
}

export async function setClientId(clientId) {
  await saveAuth({ clientId: clientId.trim(), token: null });
}

export async function setLoginHint(email) {
  await saveAuth({ loginHint: email });
}

export async function hasScope(scope) {
  const { token } = await loadAuth();
  return !!token?.scopes?.includes(scope);
}

/**
 * Return a valid access token that covers `scopes`.
 * Tries the cached token, then a silent refresh, then (if `interactive`) the consent popup.
 */
let inflight = null;

export async function getToken(opts = {}) {
  // Many concurrent API calls may need a fresh token at once; share one auth flow between them.
  while (inflight) {
    try {
      await inflight;
    } catch {
      // the next caller retries with its own options
    }
  }
  const p = fetchToken(opts);
  inflight = p;
  try {
    return await p;
  } finally {
    if (inflight === p) inflight = null;
  }
}

async function fetchToken({ interactive = false, scopes = BASE_SCOPES, selectAccount = false }) {
  const auth = await loadAuth();
  const t = auth.token;
  if (!selectAccount && t && t.expiresAt > Date.now() + 60_000 && scopes.every((s) => t.scopes.includes(s))) {
    return t.accessToken;
  }
  if (!auth.clientId) throw new AuthRequiredError('No OAuth client ID configured');

  // Keep scopes already granted so an incremental request doesn't drop them.
  const wanted = [...new Set([...(t?.scopes || []).filter((s) => s.startsWith('https://')), ...scopes])];

  if (!selectAccount && auth.loginHint) {
    try {
      return await authorize(auth, wanted, false);
    } catch {
      // fall through to interactive
    }
  }
  if (!interactive) throw new AuthRequiredError();
  return authorize(auth, wanted, true, selectAccount);
}

async function authorize(auth, scopes, interactive, selectAccount = false) {
  const params = new URLSearchParams({
    client_id: auth.clientId,
    response_type: 'token',
    redirect_uri: redirectUri(),
    scope: scopes.join(' '),
    include_granted_scopes: 'true',
  });
  if (!interactive) params.set('prompt', 'none');
  else if (selectAccount || !auth.loginHint) params.set('prompt', 'select_account');
  if (auth.loginHint && !selectAccount) params.set('login_hint', auth.loginHint);

  const details = { url: `https://accounts.google.com/o/oauth2/v2/auth?${params}`, interactive };
  if (!interactive) {
    // Google's prompt=none flow may redirect via script after the page loads, so don't abort on first load.
    details.abortOnLoadForNonInteractive = false;
    details.timeoutMsForNonInteractive = 8000;
  }

  let responseUrl;
  try {
    responseUrl = await chrome.identity.launchWebAuthFlow(details);
  } catch (e) {
    throw new AuthRequiredError(e?.message || 'Sign-in was cancelled');
  }
  const fragment = new URLSearchParams(new URL(responseUrl).hash.slice(1));
  if (fragment.get('error')) throw new AuthRequiredError(fragment.get('error'));
  const accessToken = fragment.get('access_token');
  if (!accessToken) throw new AuthRequiredError('No access token returned');

  const granted = (fragment.get('scope') || scopes.join(' ')).split(/\s+/).filter(Boolean);
  await saveAuth({
    token: {
      accessToken,
      expiresAt: Date.now() + Number(fragment.get('expires_in') || 3600) * 1000,
      scopes: granted,
    },
  });
  return accessToken;
}

/** Forget a token that the API rejected so the next call refreshes it. */
export async function invalidateToken() {
  await saveAuth({ token: null });
}

export async function signOut() {
  const { token } = await loadAuth();
  if (token?.accessToken) {
    fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(token.accessToken)}`, {
      method: 'POST',
    }).catch(() => {});
  }
  await saveAuth({ token: null, loginHint: '' });
}
