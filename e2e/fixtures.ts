import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import type { FakeSender } from '../src/testing/fakeGmail';
import { FakeGmail } from '../src/testing/fakeGmail';
import { serveGmail } from './fakeGmailServer';

const ORIGIN = 'http://extension.test';
const DIST = path.resolve(import.meta.dirname, '..', 'dist');
export const REDIRECT_URI = 'https://jeabichcgpliejpjncdekkiljbiiiabn.chromiumapp.org/';

export const DEFAULT_MAILBOXES: Record<string, FakeSender[]> = {
  'me@gmail.com': [
    { name: 'Daily Deals', email: 'deals@shop.example', count: 90, unsubscribe: { oneClick: 'https://shop.example/unsub' } },
    { name: 'LinkedIn', email: 'messages-noreply@linkedin.com', count: 60, unsubscribe: { mailto: 'mailto:leave@linkedin.com?subject=unsubscribe' } },
    { name: 'Shop News', email: 'news@mail.shop.example', count: 40, unsubscribe: { website: 'https://shop.example/prefs' } },
    { name: 'GitHub', email: 'notifications@github.com', count: 35 },
    { name: 'Mom', email: 'mom@gmail.com', count: 20, readEvery: 0, starred: 3 },
    { name: 'Bank', email: 'alerts@bank.example', count: 15 },
  ],
  'second@gmail.com': [
    { name: 'Newsletter', email: 'hello@news.example', count: 12 },
    { name: 'Friend', email: 'pal@gmail.com', count: 4 },
  ],
}; // prettier-ignore

export interface Harness {
  readonly page: Page;
  readonly accounts: ReadonlyMap<string, FakeGmail>;
  /** Requests to third-party unsubscribe endpoints. */
  readonly unsubscribeRequests: {
    url: string;
    method: string;
    body: string | null;
    headers: Record<string, string>;
  }[];
  /** Metadata reads per message ID, to check what the cache saved us. */
  readonly metadataReads: string[];
  /** Pick which account Google's account chooser returns next. */
  chooseAccount(email: string): Promise<void>;
  /** Make the next interactive sign-in fail as if the user closed the popup. */
  cancelNextSignIn(): Promise<void>;
  /** OAuth authorization URLs the page opened, oldest first. */
  authRequests(): Promise<URL[]>;
  /** Set up a client ID and sign in with the first account. */
  signIn(): Promise<void>;
  scan(): Promise<void>;
  stat(index?: number): Promise<string>;
  row(text: string): ReturnType<Page['locator']>;
  toast(text: string | RegExp): ReturnType<Page['locator']>;
  dialog(): ReturnType<Page['locator']>;
}

/** Runs in the page before any script: minimal chrome.storage and chrome.identity. */
function installChromeMock({ accounts, redirectUri }: { accounts: string[]; redirectUri: string }): void {
  const area = (name: string): unknown => {
    const key = `__chrome_${name}__`;
    const load = (): Record<string, unknown> =>
      JSON.parse(sessionStorage.getItem(key) ?? '{}') as Record<string, unknown>;
    return {
      get: (k: string) => Promise.resolve(k in load() ? { [k]: load()[k] } : {}),
      set: (items: Record<string, unknown>) => {
        sessionStorage.setItem(key, JSON.stringify({ ...load(), ...items }));
        return Promise.resolve();
      },
      remove: (k: string) => {
        const data = load();
        delete data[k];
        sessionStorage.setItem(key, JSON.stringify(data));
        return Promise.resolve();
      },
    };
  };
  const w = window as unknown as Record<string, unknown>;
  w.__authRequests = [];
  (window as unknown as { chrome: unknown }).chrome = {
    storage: { local: area('local'), session: area('session') },
    identity: {
      getRedirectURL: () => redirectUri,
      launchWebAuthFlow: ({ url, interactive }: { url: string; interactive: boolean }) => {
        (w.__authRequests as string[]).push(url);
        const p = new URL(url).searchParams;
        const reply = (fields: Record<string, string>): Promise<string> =>
          Promise.resolve(
            `${redirectUri}#${new URLSearchParams({ ...fields, state: p.get('state') ?? '' }).toString()}`,
          );
        if (p.get('prompt') === 'none') {
          if (!sessionStorage.getItem('__signedIn')) return reply({ error: 'interaction_required' });
          return reply({
            access_token: `tok:${p.get('login_hint') ?? ''}`,
            expires_in: '3600',
            scope: p.get('scope') ?? '',
          });
        }
        if (!interactive) return Promise.reject(new Error('User interaction required.'));
        if (sessionStorage.getItem('__cancelNext')) {
          sessionStorage.removeItem('__cancelNext');
          return Promise.reject(new Error('The user did not approve access.'));
        }
        const hint = p.get('login_hint');
        const account =
          p.get('prompt') === 'select_account' || !hint
            ? (sessionStorage.getItem('__nextAccount') ?? accounts[0])
            : hint;
        sessionStorage.setItem('__signedIn', '1');
        return reply({
          access_token: `tok:${account ?? ''}`,
          expires_in: '3600',
          scope: p.get('scope') ?? '',
        });
      },
    },
  };
}

export const test = base.extend<{ mailboxes: Record<string, FakeSender[]>; harness: Harness }>({
  mailboxes: [DEFAULT_MAILBOXES, { option: true }],

  harness: async ({ page, mailboxes }, use) => {
    if (!fs.existsSync(path.join(DIST, 'manifest.json')))
      throw new Error('Run `npm run build` before the e2e tests');
    const accounts = new Map(
      Object.entries(mailboxes).map(([email, senders], i) => [
        email,
        new FakeGmail(email, senders, { idPrefix: `a${i}m` }),
      ]),
    );
    const errors: string[] = [];
    const unsubscribeRequests: Harness['unsubscribeRequests'] = [];
    const metadataReads: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.addInitScript(installChromeMock, {
      accounts: [...accounts.keys()],
      redirectUri: REDIRECT_URI,
    });
    await page.route(`${ORIGIN}/**`, (route) => {
      const file = path.join(DIST, new URL(route.request().url()).pathname);
      if (!file.startsWith(DIST) || !fs.existsSync(file)) return route.fulfill({ status: 404 });
      if (file.endsWith('dashboard.js')) {
        // Lift the client-side quota limiter so big fake mailboxes scan quickly.
        const source = fs
          .readFileSync(file, 'utf8')
          .replace('DEFAULT_UNITS_PER_SECOND = 200', 'DEFAULT_UNITS_PER_SECOND = 1e6');
        return route.fulfill({ contentType: 'text/javascript', body: source });
      }
      return route.fulfill({ path: file });
    });
    await page.route('https://gmail.googleapis.com/**', async (route) => {
      if (
        /\/messages\/[^/]+$/.test(new URL(route.request().url()).pathname) &&
        route.request().method() === 'GET'
      ) {
        metadataReads.push(route.request().url());
      }
      await serveGmail(route, accounts);
    });
    await page.route('https://oauth2.googleapis.com/**', (route) =>
      route.fulfill({ status: 200, body: '{}' }),
    );
    await page.route(/^https:\/\/(?!gmail\.googleapis\.com|oauth2\.googleapis\.com)/, async (route) => {
      const r = route.request();
      unsubscribeRequests.push({
        url: r.url(),
        method: r.method(),
        body: r.postData(),
        headers: await r.allHeaders(),
      });
      return route.fulfill({ status: 200, body: 'ok' });
    });

    const harness: Harness = {
      page,
      accounts,
      unsubscribeRequests,
      metadataReads,
      chooseAccount: (email) => page.evaluate((e) => sessionStorage.setItem('__nextAccount', e), email),
      cancelNextSignIn: () => page.evaluate(() => sessionStorage.setItem('__cancelNext', '1')),
      authRequests: async () =>
        (await page.evaluate(() => (window as unknown as { __authRequests: string[] }).__authRequests)).map(
          (u) => new URL(u),
        ),
      signIn: async () => {
        await page.getByLabel('OAuth client ID').fill('123-abc.apps.googleusercontent.com');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Sign in with Google' }).click();
        await expect(page.getByTestId('account-email')).toBeVisible();
      },
      scan: async () => {
        await page.getByRole('button', { name: 'Scan mailbox' }).click();
        await expect(harness.toast(/Scan complete/)).toBeVisible({ timeout: 120_000 });
      },
      stat: (index = 0) => page.locator('.stat .value').nth(index).innerText(),
      row: (text) => page.locator('tr.row', { hasText: text }),
      toast: (text) => page.locator('.toast', { hasText: text }),
      dialog: () => page.locator('dialog[open]'),
    };

    await page.goto(`${ORIGIN}/dashboard.html`);
    await use(harness);
    expect(errors, 'uncaught page errors').toEqual([]);
  },
});

export { expect };
