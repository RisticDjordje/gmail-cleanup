import { GmailApiError } from '../src/gmail/errors';
import { decodeBase64Url } from '../src/testing/fixtures';
import { expect, REDIRECT_URI, test } from './fixtures';

test.describe('setup and sign-in', () => {
  test('validates the client ID and signs in with a CSRF state', async ({ harness }) => {
    const { page } = harness;
    await expect(page.getByTestId('redirect-uri')).toHaveText(REDIRECT_URI);
    await page.getByLabel('OAuth client ID').fill('not-a-client-id');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(harness.toast('doesn’t look like an OAuth client ID')).toBeVisible();

    await harness.signIn();
    await expect(page.getByTestId('account-email')).toHaveText('me@gmail.com');
    const auth = (await harness.authRequests()).at(-1)!;
    expect(auth.searchParams.get('client_id')).toBe('123-abc.apps.googleusercontent.com');
    expect(auth.searchParams.get('response_type')).toBe('token');
    expect(auth.searchParams.get('state')).toMatch(/^[0-9a-f]{32}$/);
    expect(auth.searchParams.get('scope')).toContain('gmail.modify');
    expect(auth.searchParams.get('scope')).not.toContain('https://mail.google.com/');
  });

  test('shows a clear message when sign-in is cancelled', async ({ harness }) => {
    const { page } = harness;
    await page.getByLabel('OAuth client ID').fill('123-abc.apps.googleusercontent.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await harness.cancelNextSignIn();
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
    await expect(page.getByRole('alert')).toHaveText('Sign-in was cancelled.');
  });
});

test.describe('dashboard', () => {
  test.beforeEach(async ({ harness }) => {
    await harness.signIn();
    await harness.scan();
  });

  test('ranks senders, skipping starred mail by default', async ({ harness }) => {
    const { page } = harness;
    expect(await harness.stat(0)).toBe('257'); // 260 minus Mom's 3 starred
    await expect(page.locator('tr.row .sender-name').first()).toContainText('Daily Deals');
    await expect(page.locator('tr.row')).toHaveCount(6);
    await harness
      .row('deals@shop.example')
      .getByRole('button', { name: /Details for/ })
      .click();
    await expect(page.locator('tr.details')).toContainText('Daily Deals message #1');
  });

  test('moves a sender to Trash and undoes it', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.row('deals@shop.example').getByRole('checkbox').check();
    await expect(page.getByTestId('selection')).toContainText('1 sender selected · 90 emails');
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Move to Trash' })
      .click();
    await expect(harness.dialog()).toContainText('90 emails');
    await harness.dialog().getByRole('button', { name: 'Move to Trash' }).click();
    await expect(harness.toast('Moved 90 emails to Trash')).toBeVisible();
    expect(await harness.stat(0)).toBe('167');
    await expect(harness.row('deals@shop.example')).toHaveCount(0);
    const gmail = accounts.get('me@gmail.com')!;
    expect(gmail.labelsOf(gmail.idsFrom('deals@shop.example')[0]!)).toContain('TRASH');

    await harness.toast('Moved 90 emails').getByRole('button', { name: 'Undo' }).click();
    await expect(harness.toast('Undone')).toBeVisible();
    expect(await harness.stat(0)).toBe('257');
    expect(gmail.labelsOf(gmail.idsFrom('deals@shop.example')[0]!)).not.toContain('TRASH');
  });

  test('Escape cancels a confirmation without changing anything', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.row('alerts@bank.example').getByRole('checkbox').check();
    await page.getByRole('region', { name: 'Bulk actions' }).getByRole('button', { name: 'Archive' }).click();
    await expect(harness.dialog()).toContainText('15 emails');
    await page.keyboard.press('Escape');
    await expect(harness.dialog()).toHaveCount(0);
    const gmail = accounts.get('me@gmail.com')!;
    expect(gmail.labelsOf(gmail.idsFrom('alerts@bank.example')[0]!)).toContain('INBOX');
  });

  test('kept senders cannot be selected', async ({ harness }) => {
    const { page } = harness;
    await harness.row('mom@gmail.com').getByRole('button', { name: /Keep/ }).click();
    await expect(harness.row('mom@gmail.com').getByRole('checkbox')).toBeDisabled();
    await page.getByRole('checkbox', { name: /Select all/ }).check();
    await expect(page.getByTestId('selection')).toContainText('5 senders selected');
    await page.getByRole('button', { name: 'Hide kept' }).click();
    await expect(harness.row('mom@gmail.com')).toHaveCount(0);
  });

  test('unsubscribes by one-click, email and website, then trashes their mail', async ({ harness }) => {
    const { page, accounts, unsubscribeRequests } = harness;
    for (const email of ['deals@shop.example', 'messages-noreply@linkedin.com', 'news@mail.shop.example']) {
      await harness.row(email).getByRole('checkbox').check();
    }
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Unsubscribe' })
      .click();
    await expect(harness.dialog()).toContainText('automatically (one-click)');
    await harness.dialog().getByRole('button', { name: 'Unsubscribe' }).click();

    await expect(harness.dialog()).toContainText('Finish on these websites');
    await expect(harness.dialog().getByRole('link', { name: 'news@mail.shop.example' })).toHaveAttribute(
      'href',
      'https://shop.example/prefs',
    );
    expect(unsubscribeRequests).toHaveLength(1);
    expect(unsubscribeRequests[0]).toMatchObject({ method: 'POST', body: 'List-Unsubscribe=One-Click' });
    expect(unsubscribeRequests[0]!.headers['cookie']).toBeUndefined();
    const sent = accounts.get('me@gmail.com')!.sent.map(decodeBase64Url);
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatch(/^To: leave@linkedin.com\r\n/);

    await harness.dialog().getByRole('button', { name: 'OK' }).click();
    expect(await harness.stat(0)).toBe('67'); // 257 − 90 − 60 − 40
    await expect(harness.row('mom@gmail.com')).toBeVisible();
  });

  test('blocks future mail with a filter and archives existing mail', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.row('notifications@github.com').getByRole('checkbox').check();
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Block future' })
      .click();
    await harness
      .dialog()
      .getByLabel(/Skip the inbox: archive/)
      .check();
    await harness.dialog().getByRole('button', { name: 'Create filters' }).click();
    await expect(harness.toast('Created 1 filter')).toBeVisible();
    const gmail = accounts.get('me@gmail.com')!;
    expect(gmail.filters).toEqual([
      { criteria: { from: 'notifications@github.com' }, action: { removeLabelIds: ['INBOX'] } },
    ]);
    expect(gmail.labelsOf(gmail.idsFrom('notifications@github.com')[0]!)).not.toContain('INBOX');
  });

  test('groups by domain and blocks a whole domain with one filter', async ({ harness }) => {
    const { page, accounts } = harness;
    await page.getByRole('button', { name: 'By domain' }).click();
    await expect(harness.row('shop.example')).toContainText('2 addresses');
    await harness.row('shop.example').getByRole('checkbox').check();
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Block future' })
      .click();
    await harness.dialog().getByLabel('Apply the same action to their existing emails now').uncheck();
    await harness.dialog().getByRole('button', { name: 'Create filters' }).click();
    await expect(harness.toast('Created 1 filter')).toBeVisible();
    expect(accounts.get('me@gmail.com')!.filters[0]?.criteria).toEqual({ from: '@shop.example' });
  });

  test('reports spam', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.row('alerts@bank.example').getByRole('checkbox').check();
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Report spam' })
      .click();
    await harness.dialog().getByRole('button', { name: 'Report spam' }).click();
    await expect(harness.toast('Reported 15 emails as spam')).toBeVisible();
    const gmail = accounts.get('me@gmail.com')!;
    expect(gmail.labelsOf(gmail.idsFrom('alerts@bank.example')[0]!)).toContain('SPAM');
  });

  test('deletes forever only after granting the extra permission', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.row('alerts@bank.example').getByRole('checkbox').check();
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Delete forever' })
      .click();
    await expect(harness.dialog()).toContainText('Extra permission needed');
    await harness.dialog().getByRole('button', { name: 'Continue' }).click();
    await expect(harness.dialog()).toContainText('cannot be undone');
    expect((await harness.authRequests()).at(-1)!.searchParams.get('scope')).toContain(
      'https://mail.google.com/',
    );
    await harness.dialog().getByRole('button', { name: 'Delete forever' }).click();
    await expect(harness.toast('Permanently deleted 15 emails')).toBeVisible();
    expect(accounts.get('me@gmail.com')!.idsFrom('alerts@bank.example')).toEqual([]);
  });

  test('reloading uses the cache, and rescans pick up changes made in Gmail', async ({ harness }) => {
    const { page, accounts, metadataReads } = harness;
    const readsAfterFirstScan = metadataReads.length;
    await page.reload();
    await expect(page.getByTestId('results')).toBeVisible();
    expect(await harness.stat(0)).toBe('257');

    const gmail = accounts.get('me@gmail.com')!;
    gmail.relabel(gmail.idsFrom('deals@shop.example'), { remove: ['UNREAD'] });
    await harness.scan();
    expect(metadataReads.length).toBe(readsAfterFirstScan); // label changes came from history, not re-reads
    await expect(harness.row('deals@shop.example').locator('td.col-num').first()).toHaveText('0%');
  });

  test('switching accounts keeps each cache separate and drops stale Undo buttons', async ({ harness }) => {
    const { page } = harness;
    await harness.row('notifications@github.com').getByRole('checkbox').check();
    await page
      .getByRole('region', { name: 'Bulk actions' })
      .getByRole('button', { name: 'Mark read' })
      .click();
    await harness.dialog().getByRole('button', { name: 'Mark read' }).click();
    await expect(harness.toast('Marked')).toBeVisible();

    await harness.chooseAccount('second@gmail.com');
    await page.getByRole('button', { name: 'Switch account' }).click();
    await expect(page.getByTestId('account-email')).toHaveText('second@gmail.com');
    await expect(page.getByRole('button', { name: 'Undo' })).toHaveCount(0);
    await expect(page.getByTestId('results')).toHaveCount(0);
    expect((await harness.authRequests()).at(-1)!.searchParams.get('prompt')).toBe('select_account');
    await harness.scan();
    await expect(page.locator('tr.row')).toHaveCount(2);

    const reads = harness.metadataReads.length;
    await harness.chooseAccount('me@gmail.com');
    await page.getByRole('button', { name: 'Switch account' }).click();
    await expect(page.getByTestId('account-email')).toHaveText('me@gmail.com');
    expect(await harness.stat(0)).toBe('257');
    expect(harness.metadataReads.length).toBe(reads);
  });

  test('cancelling "switch account" keeps you signed in', async ({ harness }) => {
    const { page } = harness;
    await harness.cancelNextSignIn();
    await page.getByRole('button', { name: 'Switch account' }).click();
    await expect(page.getByTestId('account-email')).toHaveText('me@gmail.com');
    await expect(page.getByTestId('results')).toBeVisible();
  });

  test('exports the sender list as CSV', async ({ harness }) => {
    const { page } = harness;
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export CSV' }).click();
    const download = await downloadPromise;
    const text = await (await download.createReadStream()).toArray();
    const csv = Buffer.concat(text as Buffer[]).toString();
    expect(csv.split('\r\n')[0]).toBe('Sender,Name,Emails,Unread,Size (bytes),Newest,Oldest,Has unsubscribe');
    expect(csv).toContain('deals@shop.example,Daily Deals,90,');
  });
});

test.describe('errors', () => {
  test('explains Gmail failures in plain words', async ({ harness }) => {
    const { page, accounts } = harness;
    await harness.signIn();
    accounts.get('me@gmail.com')!.getProfile = () =>
      Promise.reject(
        new GmailApiError(
          'insufficient_scope',
          'Request had insufficient authentication scopes.',
          403,
          'insufficientPermissions',
        ),
      );
    await page.getByRole('button', { name: 'Scan mailbox' }).click();
    await expect(harness.toast('a permission is missing')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Scan mailbox' })).toBeEnabled();
  });
});
