// Test harness: serves the extension pages in Chromium with a mocked `chrome.*` API and a fake Gmail
// REST API (via Playwright request routing). Used by tests/e2e.mjs and scripts/screenshots.mjs.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'http://extension.test';
const DAY = 86_400_000;

/**
 * Build a fake mailbox. Each sender is { name, email, count, unsub?, unreadEvery?, starred?, size? }
 * where unsub is { oneClick | mailto | link: url }.
 */
export function createMailbox(senders, { idPrefix = 'm', spreadDays = 700 } = {}) {
  const messages = new Map();
  const total = senders.reduce((n, s) => n + s.count, 0);
  let n = 0;
  for (const s of senders) {
    for (let i = 0; i < s.count; i++) {
      const id = `${idPrefix}${++n}`;
      const headers = [
        { name: 'From', value: `"${s.name}" <${s.email}>` },
        { name: 'Subject', value: s.subjects ? s.subjects[i % s.subjects.length] : `${s.name} message #${i + 1}` },
      ];
      const unsub = s.unsub || {};
      if (unsub.oneClick) {
        headers.push({ name: 'List-Unsubscribe', value: `<${unsub.oneClick}>` });
        headers.push({ name: 'List-Unsubscribe-Post', value: 'List-Unsubscribe=One-Click' });
      }
      if (unsub.mailto) headers.push({ name: 'List-Unsubscribe', value: `<${unsub.mailto}>` });
      if (unsub.link) headers.push({ name: 'List-Unsubscribe', value: `<${unsub.link}>` });
      const labels = new Set(['INBOX']);
      const unreadEvery = s.unreadEvery ?? 5; // 0 = all read; k = every message except each k-th is unread
      if (unreadEvery && i % unreadEvery !== 0) labels.add('UNREAD');
      if (s.starred && i < s.starred) labels.add('STARRED');
      // Spread each sender's mail over time, interleaved with the others.
      const age = Math.floor(((i + 0.5) / s.count) * spreadDays * DAY) + (n % 97) * 60_000;
      messages.set(id, {
        id,
        internalDate: String(Date.now() - age),
        sizeEstimate: s.size ? s.size(i) : 20_000 + (n % 7) * 15_000,
        labels,
        headers,
        from: s.email,
      });
    }
  }
  assert.equal(messages.size, total);
  return messages;
}

function matches(m, q, includeSpamTrash, labelIds) {
  if (!includeSpamTrash && (m.labels.has('TRASH') || m.labels.has('SPAM'))) return false;
  for (const l of labelIds) if (!m.labels.has(l)) return false;
  const from = q.match(/from:\(([^)]*)\)|from:(\S+)/);
  if (from) {
    const list = (from[1] ?? from[2]).split(/\s+OR\s+/).map((s) => s.trim());
    if (!list.some((f) => (f.startsWith('@') ? m.from.endsWith(f) : m.from === f))) return false;
  }
  if (/-is:starred/.test(q) && m.labels.has('STARRED')) return false;
  if (/(^|\s)is:unread/.test(q) && !m.labels.has('UNREAD')) return false;
  if (/(^|\s)in:inbox/.test(q) && !m.labels.has('INBOX')) return false;
  return true;
}

// Runs in the page before any script: a minimal chrome.storage / chrome.identity.
// The account chooser picks window.__nextAccount (set by tests) or the first account.
function chromeMock(accounts) {
  const key = '__chrome_storage__';
  const load = () => JSON.parse(sessionStorage.getItem(key) || '{}');
  const save = (d) => sessionStorage.setItem(key, JSON.stringify(d));
  window.__authUrls = [];
  window.chrome = {
    storage: {
      local: {
        async get(keys) {
          const d = load();
          const out = {};
          for (const k of [].concat(keys)) if (k in d) out[k] = d[k];
          return out;
        },
        async set(obj) {
          save({ ...load(), ...obj });
        },
        async remove(keys) {
          const d = load();
          for (const k of [].concat(keys)) delete d[k];
          save(d);
        },
      },
    },
    identity: {
      getRedirectURL: () => 'https://abcdefghijklmnop.chromiumapp.org/',
      async launchWebAuthFlow({ url, interactive }) {
        window.__authUrls.push({ url, interactive });
        const u = new URL(url);
        let account = u.searchParams.get('login_hint');
        if (u.searchParams.get('prompt') === 'none') {
          if (!sessionStorage.getItem('__signedIn')) throw new Error('User interaction required.');
        } else if (u.searchParams.get('prompt') === 'select_account' || !account) {
          account = window.__nextAccount || accounts[0];
        }
        sessionStorage.setItem('__signedIn', '1');
        const scope = encodeURIComponent(u.searchParams.get('scope'));
        return `https://abcdefghijklmnop.chromiumapp.org/#access_token=tok:${account}&expires_in=3600&scope=${scope}`;
      },
    },
  };
}

/**
 * Open dashboard.html against fake mailboxes: { 'me@gmail.com': Map, ... }.
 * Returns the page plus a log of the API calls the dashboard made.
 */
export async function launchDashboard({
  mailboxes,
  colorScheme = 'light',
  viewport = { width: 1280, height: 900 },
  deviceScaleFactor = 1,
  fastQuota = true, // lift the client-side Gmail rate limit so big fake mailboxes scan quickly
}) {
  const accounts = Object.keys(mailboxes);
  const calls = { batchModify: [], batchDelete: [], send: [], filters: [], unsubPosts: [] };
  const errors = [];

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport, colorScheme, deviceScaleFactor });
  page.on('pageerror', (e) => errors.push(e));
  page.on('console', (m) => m.type() === 'error' && errors.push(new Error(m.text())));
  await page.addInitScript(chromeMock, accounts);

  await page.route(`${ORIGIN}/**`, (route) => {
    const file = path.join(root, new URL(route.request().url()).pathname);
    if (!fs.existsSync(file)) return route.fulfill({ status: 404 });
    if (fastQuota && file.endsWith(path.join('lib', 'gmail.js'))) {
      const src = fs.readFileSync(file, 'utf8').replace(/const UNITS_PER_SECOND = \d+;/, 'const UNITS_PER_SECOND = 100000;');
      return route.fulfill({ contentType: 'text/javascript', body: src });
    }
    return route.fulfill({ path: file });
  });

  await page.route('https://gmail.googleapis.com/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const p = url.pathname.replace('/gmail/v1/users/me', '');
    const json = (body, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });
    const account = (req.headers().authorization || '').replace('Bearer tok:', '');
    const messages = mailboxes[account];
    if (!messages) return json({ error: { code: 401, message: 'Invalid Credentials' } }, 401);

    if (p === '/profile') return json({ emailAddress: account, messagesTotal: messages.size });
    if (p === '/messages' && req.method() === 'GET') {
      const q = url.searchParams.get('q') || '';
      const all = [...messages.values()].filter((m) =>
        matches(m, q, url.searchParams.get('includeSpamTrash') === 'true', url.searchParams.getAll('labelIds')),
      );
      const start = Number(url.searchParams.get('pageToken') || 0);
      const size = Number(url.searchParams.get('maxResults') || 100);
      return json({
        messages: all.slice(start, start + size).map((m) => ({ id: m.id })),
        ...(start + size < all.length ? { nextPageToken: String(start + size) } : {}),
      });
    }
    if (p === '/messages/batchModify') {
      const body = req.postDataJSON();
      calls.batchModify.push({ account, ...body });
      for (const id of body.ids) {
        const m = messages.get(id);
        if (!m) return json({ error: { code: 400, message: `Invalid id ${id}` } }, 400);
        body.addLabelIds?.forEach((l) => m.labels.add(l));
        body.removeLabelIds?.forEach((l) => m.labels.delete(l));
      }
      return route.fulfill({ status: 204, body: '' });
    }
    if (p === '/messages/batchDelete') {
      const body = req.postDataJSON();
      calls.batchDelete.push({ account, ...body });
      body.ids.forEach((id) => messages.delete(id));
      return route.fulfill({ status: 204, body: '' });
    }
    if (p === '/messages/send') {
      calls.send.push(Buffer.from(req.postDataJSON().raw, 'base64url').toString());
      return json({ id: 'sent1' });
    }
    if (p === '/settings/filters') {
      calls.filters.push(req.postDataJSON());
      return json({ id: `f${calls.filters.length}` });
    }
    const get = p.match(/^\/messages\/(\w+)$/);
    if (get) {
      const m = messages.get(get[1]);
      if (!m) return json({ error: { code: 404, message: 'Not Found' } }, 404);
      return json({
        id: m.id,
        internalDate: m.internalDate,
        sizeEstimate: m.sizeEstimate,
        labelIds: [...m.labels],
        payload: { headers: m.headers },
      });
    }
    return json({ error: { message: `unhandled ${req.method()} ${p}` } }, 500);
  });

  // Anything else (unsubscribe endpoints) just records the request.
  await page.route(/^https:\/\/(?!gmail\.googleapis\.com)/, (route) => {
    calls.unsubPosts.push({ url: route.request().url(), method: route.request().method(), body: route.request().postData() });
    return route.fulfill({ status: 200, body: 'ok' });
  });

  await page.goto(`${ORIGIN}/dashboard.html`);
  return { browser, page, calls, errors };
}

/** Enter a client ID and sign in with the first account. */
export async function signIn(page) {
  await page.locator('#setupView').waitFor();
  await page.fill('#clientIdInput', '123-abc.apps.googleusercontent.com');
  await page.click('#clientIdForm button[type=submit]');
  await page.click('#signInBtn');
  await page.locator('#appView').waitFor();
}
