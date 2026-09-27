// End-to-end smoke test: drives dashboard.html in Chromium against a fake Gmail API (see harness.mjs).
// Run: npm run test:e2e   (set SCREENSHOTS=dir to save a screenshot after each step)
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createMailbox, launchDashboard } from './harness.mjs';

const shots = process.env.SCREENSHOTS;
if (shots) fs.mkdirSync(shots, { recursive: true });

const S = (name, email, count, extra = {}) => ({ name, email, count, ...extra });
const mailboxes = {
  'me@gmail.com': createMailbox([
    S('Daily Deals', 'deals@shop.example', 90, { unsub: { oneClick: 'https://shop.example/unsub' } }),
    S('LinkedIn', 'messages-noreply@linkedin.com', 60, { unsub: { mailto: 'mailto:leave@linkedin.com?subject=unsubscribe' } }),
    S('Shop News', 'news@mail.shop.example', 40, { unsub: { link: 'https://shop.example/prefs' } }),
    S('GitHub', 'notifications@github.com', 35),
    S('Mom', 'mom@gmail.com', 20, { unreadEvery: 0, starred: 3 }),
    S('Bank', 'alerts@bank.example', 15),
  ]),
  'second@gmail.com': createMailbox([S('Newsletter', 'hello@news.example', 12), S('Friend', 'pal@gmail.com', 4)], { idPrefix: 'x' }),
};

const { browser, page, calls, errors } = await launchDashboard({
  mailboxes,
  colorScheme: process.env.COLOR_SCHEME || 'light',
});

const step = async (name, fn) => {
  await fn();
  if (shots) await page.screenshot({ path: path.join(shots, `${name}.png`), fullPage: false });
  console.log(`ok - ${name}`);
};
const toast = (text) => page.locator('.toast', { hasText: text }).waitFor();
const rowNames = () => page.locator('#rows tr.row .sender-name').allTextContents();

await step('01-setup', async () => {
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

await step('14-switch-account', async () => {
  // Leave an Undo toast from the first account around; it must not survive the switch.
  await page.locator('#rows tr.row', { hasText: 'notifications@github.com' }).locator('input[type=checkbox]').check();
  await page.click('#actionBar [data-action=read]');
  await page.click('#modalActions button[value=ok]');
  await toast('Marked');
  await page.evaluate(() => (window.__nextAccount = 'second@gmail.com'));
  await page.click('#switchAccountBtn');
  await page.locator('#accountEmail', { hasText: 'second@gmail.com' }).waitFor();
  assert.equal(await page.locator('.toast button', { hasText: 'Undo' }).count(), 0);
  assert.ok(await page.locator('#resultsView').isHidden()); // nothing scanned yet for this account
  const switchAuth = new URL((await page.evaluate(() => window.__authUrls.at(-1))).url);
  assert.doesNotMatch(switchAuth.searchParams.get('scope'), /mail\.google\.com/); // no carried-over permissions
  await page.click('#scanBtn');
  await toast('Scan complete: 16 emails');
  assert.deepEqual(await rowNames(), ['Newsletter', 'Friend']);
});

await step('15-switch-back-keeps-cache', async () => {
  const listCalls = [];
  const onReq = (r) => /\/messages\/m\d+\?/.test(r.url()) && listCalls.push(r.url());
  page.on('request', onReq);
  await page.evaluate(() => (window.__nextAccount = 'me@gmail.com'));
  await page.click('#switchAccountBtn');
  await page.locator('#accountEmail', { hasText: 'me@gmail.com' }).waitFor();
  await page.locator('#resultsView').waitFor();
  assert.equal(await page.locator('.stat .value').first().textContent(), '52');
  page.off('request', onReq);
  assert.equal(listCalls.length, 0); // served from this account's cache, no re-reading
});

await browser.close();
if (errors.length) {
  console.error(errors);
  process.exit(1);
}
console.log('All e2e checks passed');
