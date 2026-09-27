// End-to-end smoke test: loads dashboard.html in Chromium with a mocked `chrome.*` API and a fake
// Gmail REST API (via Playwright request routing), then drives the main flows.
// Run: npm run test:e2e   (set SCREENSHOTS=dir to save screenshots)
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'http://extension.test';
const shots = process.env.SCREENSHOTS;
if (shots) fs.mkdirSync(shots, { recursive: true });

// ---- Fake mailbox --------------------------------------------------------
const senders = [
  ['Daily Deals', 'deals@shop.example', 90, { oneClick: 'https://shop.example/unsub' }],
  ['LinkedIn', 'messages-noreply@linkedin.com', 60, { mailto: 'mailto:leave@linkedin.com?subject=unsubscribe' }],
  ['Shop News', 'news@mail.shop.example', 40, { link: 'https://shop.example/prefs' }],
  ['GitHub', 'notifications@github.com', 35, {}],
  ['Mom', 'mom@gmail.com', 20, {}],
  ['Bank', 'alerts@bank.example', 15, {}],
];
const messages = new Map();
let n = 0;
const DAY = 86_400_000;
for (const [name, email, count, unsub] of senders) {
  for (let i = 0; i < count; i++) {
    const id = `m${++n}`;
    const headers = [
      { name: 'From', value: `"${name}" <${email}>` },
      { name: 'Subject', value: `${name} message #${i + 1}` },
    ];
    if (unsub.oneClick) {
      headers.push({ name: 'List-Unsubscribe', value: `<${unsub.oneClick}>` });
      headers.push({ name: 'List-Unsubscribe-Post', value: 'List-Unsubscribe=One-Click' });
    }
    if (unsub.mailto) headers.push({ name: 'List-Unsubscribe', value: `<${unsub.mailto}>` });
    if (unsub.link) headers.push({ name: 'List-Unsubscribe', value: `<${unsub.link}>` });
    const labels = new Set(['INBOX']);
    if (email !== 'mom@gmail.com' && i % 5 !== 0) labels.add('UNREAD');
    if (email === 'mom@gmail.com' && i < 3) labels.add('STARRED');
    messages.set(id, {
      id,
      internalDate: String(Date.now() - n * DAY),
      sizeEstimate: 20_000 + (n % 7) * 15_000,
      labels,
      headers,
      from: email,
    });
  }
}
const calls = { batchModify: [], batchDelete: [], send: [], filters: [], unsubPosts: [] };

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

async function gmailApi(route) {
  const req = route.request();
  const url = new URL(req.url());
  const p = url.pathname.replace('/gmail/v1/users/me', '');
  assert.equal(req.headers().authorization, 'Bearer fake-token');
  const json = (body, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });

  if (p === '/profile') return json({ emailAddress: 'me@gmail.com', messagesTotal: messages.size });
  if (p === '/messages' && req.method() === 'GET') {
    const q = url.searchParams.get('q') || '';
    const all = [...messages.values()].filter((m) =>
      matches(m, q, url.searchParams.get('includeSpamTrash') === 'true', url.searchParams.getAll('labelIds')),
    );
    const start = Number(url.searchParams.get('pageToken') || 0);
    const size = Number(url.searchParams.get('maxResults') || 100);
    const page = all.slice(start, start + size);
    return json({
      messages: page.map((m) => ({ id: m.id })),
      ...(start + size < all.length ? { nextPageToken: String(start + size) } : {}),
    });
  }
  if (p === '/messages/batchModify') {
    const body = req.postDataJSON();
    calls.batchModify.push(body);
    for (const id of body.ids) {
      const m = messages.get(id);
      body.addLabelIds?.forEach((l) => m.labels.add(l));
      body.removeLabelIds?.forEach((l) => m.labels.delete(l));
    }
    return route.fulfill({ status: 204, body: '' });
  }
  if (p === '/messages/batchDelete') {
    const body = req.postDataJSON();
    calls.batchDelete.push(body);
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
}

// ---- chrome.* mock (runs in the page before any script) -----------------
function chromeMock() {
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
        if (u.searchParams.get('prompt') === 'none' && !sessionStorage.getItem('__signedIn')) {
          throw new Error('User interaction required.');
        }
        sessionStorage.setItem('__signedIn', '1');
        const scope = encodeURIComponent(u.searchParams.get('scope'));
        return `https://abcdefghijklmnop.chromiumapp.org/#access_token=fake-token&expires_in=3600&scope=${scope}`;
      },
    },
  };
}

// ---- Run ------------------------------------------------------------------
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, colorScheme: process.env.COLOR_SCHEME || 'light' });
const errors = [];
page.on('pageerror', (e) => errors.push(e));
page.on('console', (m) => m.type() === 'error' && errors.push(new Error(m.text())));
await page.addInitScript(chromeMock);
await page.route(`${ORIGIN}/**`, (route) => {
  const file = path.join(root, new URL(route.request().url()).pathname);
  return fs.existsSync(file) ? route.fulfill({ path: file }) : route.fulfill({ status: 404 });
});
await page.route('https://gmail.googleapis.com/**', gmailApi);
await page.route('https://shop.example/**', (route) => {
  calls.unsubPosts.push({ url: route.request().url(), method: route.request().method(), body: route.request().postData() });
  return route.fulfill({ status: 200, body: 'ok' });
});

const step = async (name, fn) => {
  await fn();
  if (shots) await page.screenshot({ path: path.join(shots, `${name}.png`), fullPage: false });
  console.log(`ok - ${name}`);
};
const toast = (text) => page.locator('.toast', { hasText: text }).waitFor();
const rowNames = () => page.locator('#rows tr.row .sender-name').allTextContents();

await step('01-setup', async () => {
  await page.goto(`${ORIGIN}/dashboard.html`);
  await page.locator('#setupView').waitFor();
  assert.equal(await page.locator('#redirectUri').textContent(), 'https://abcdefghijklmnop.chromiumapp.org/');
  await page.fill('#clientIdInput', 'not-a-client-id');
  await page.click('#clientIdForm button[type=submit]');
  await toast('doesn’t look like');
  await page.fill('#clientIdInput', '123-abc.apps.googleusercontent.com');
  await page.click('#clientIdForm button[type=submit]');
  await page.locator('#signinView').waitFor();
});

await step('02-signed-in', async () => {
  await page.click('#signInBtn');
  await page.locator('#appView').waitFor();
  assert.equal(await page.locator('#accountEmail').textContent(), 'me@gmail.com');
  const authUrl = new URL((await page.evaluate(() => window.__authUrls.at(-1))).url);
  assert.equal(authUrl.searchParams.get('client_id'), '123-abc.apps.googleusercontent.com');
  assert.equal(authUrl.searchParams.get('response_type'), 'token');
  assert.match(authUrl.searchParams.get('scope'), /gmail\.modify/);
  assert.doesNotMatch(authUrl.searchParams.get('scope'), /mail\.google\.com/);
});

await step('03-scanned', async () => {
  await page.click('#scanBtn');
  await toast('Scan complete');
  // 260 messages minus 3 starred ones from Mom (protected by default)
  assert.equal(await page.locator('.stat .value').first().textContent(), '257');
  const names = await rowNames();
  assert.equal(names[0], 'Daily Deals' + 'list');
  assert.equal(names.length, 6);
  assert.ok(!(await page.locator('#resultsView').isHidden()));
});

await step('04-expanded', async () => {
  await page.locator('#rows tr.row').first().locator('[data-act=expand]').click();
  await page.locator('#rows tr.details', { hasText: 'Daily Deals message #1' }).waitFor();
});

await step('05-trash-confirm', async () => {
  await page.locator('#rows tr.row').first().locator('input[type=checkbox]').check();
  await page.locator('#actionBar').waitFor();
  assert.match(await page.locator('#selectionText').textContent(), /1 sender selected · 90 emails/);
  await page.click('#actionBar [data-action=trash]');
  await page.locator('#modal', { hasText: '90 emails' }).waitFor();
});

await step('06-trashed', async () => {
  await page.click('#modalActions button[value=ok]');
  await toast('Moved 90 emails to Trash');
  assert.equal(calls.batchModify.at(-1).addLabelIds[0], 'TRASH');
  assert.equal(calls.batchModify.at(-1).ids.length, 90);
  assert.equal(await page.locator('.stat .value').first().textContent(), '167');
  assert.ok(!(await rowNames()).includes('Daily Dealslist'));
});

await step('07-undo', async () => {
  await page.locator('.toast button', { hasText: 'Undo' }).click();
  await toast('Undone');
  assert.deepEqual(calls.batchModify.at(-2).removeLabelIds, ['TRASH']);
  assert.equal(await page.locator('.stat .value').first().textContent(), '257');
});

await step('08-keep', async () => {
  const momRow = page.locator('#rows tr.row', { hasText: 'mom@gmail.com' });
  await momRow.locator('[data-act=keep]').click();
  await page.locator('#rows tr.row.kept', { hasText: 'mom@gmail.com' }).waitFor();
  assert.ok(await page.locator('#rows tr.row.kept input[type=checkbox]').isDisabled());
  await page.locator('#selectAll').check();
  assert.match(await page.locator('#selectionText').textContent(), /5 senders selected/);
  await page.click('#clearSelectionBtn');
});

await step('09-unsubscribe', async () => {
  for (const email of ['deals@shop.example', 'messages-noreply@linkedin.com', 'news@mail.shop.example']) {
    await page.locator('#rows tr.row', { hasText: email }).locator('input[type=checkbox]').check();
  }
  await page.click('#actionBar [data-action=unsubscribe]');
  await page.locator('#modal', { hasText: 'automatically (one-click)' }).waitFor();
  await page.click('#modalActions button[value=ok]');
  await page.locator('#modal', { hasText: 'Finish on these websites' }).waitFor();
  assert.equal(calls.unsubPosts.length, 1);
  assert.equal(calls.unsubPosts[0].method, 'POST');
  assert.equal(calls.unsubPosts[0].body, 'List-Unsubscribe=One-Click');
  assert.equal(calls.send.length, 1);
  assert.match(calls.send[0], /^To: leave@linkedin.com/);
  assert.ok(await page.locator('#modal a[href="https://shop.example/prefs"]').isVisible());
  await page.click('#modalActions button[value=ok]');
  // default "also trash" moved 90 + 60 + 40 emails
  assert.equal(await page.locator('.stat .value').first().textContent(), '67');
});

await step('10-block-future', async () => {
  await page.locator('#rows tr.row', { hasText: 'notifications@github.com' }).locator('input[type=checkbox]').check();
  await page.click('#actionBar [data-action=filter]');
  await page.locator('#modal', { hasText: 'Block future emails' }).waitFor();
  await page.locator('#modal input[value=archive]').check();
  await page.click('#modalActions button[value=ok]');
  await toast('Created 1 filter');
  assert.deepEqual(calls.filters.at(-1), { criteria: { from: 'notifications@github.com' }, action: { removeLabelIds: ['INBOX'] } });
  assert.deepEqual(calls.batchModify.at(-1).removeLabelIds, ['INBOX']);
});

await step('11-domain-view', async () => {
  await page.click('.segmented button[data-group=domain]');
  const names = await rowNames();
  assert.ok(names.some((n) => n.startsWith('github.com')));
  await page.click('.segmented button[data-group=sender]');
});

await step('12-delete-forever', async () => {
  await page.locator('#rows tr.row', { hasText: 'alerts@bank.example' }).locator('input[type=checkbox]').check();
  await page.click('#actionBar [data-action=delete]');
  await page.locator('#modal', { hasText: 'Extra permission needed' }).waitFor();
  await page.click('#modalActions button[value=ok]');
  await page.locator('#modal', { hasText: 'cannot be undone' }).waitFor();
  const lastAuth = new URL((await page.evaluate(() => window.__authUrls.at(-1))).url);
  assert.match(lastAuth.searchParams.get('scope'), /https:\/\/mail\.google\.com\//);
  await page.click('#modalActions button[value=ok]');
  await toast('Permanently deleted 15 emails');
  assert.equal(calls.batchDelete.at(-1).ids.length, 15);
});

await step('13-reload-uses-cache', async () => {
  const before = calls.batchModify.length;
  await page.reload();
  await page.locator('#resultsView').waitFor();
  assert.equal(await page.locator('.stat .value').first().textContent(), '52');
  assert.equal(calls.batchModify.length, before);
});

await browser.close();
if (errors.length) {
  console.error(errors);
  process.exit(1);
}
console.log('All e2e checks passed');
