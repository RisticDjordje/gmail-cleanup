import path from 'node:path';
import type { FakeSender } from '../../src/testing/fakeGmail';
import { expect, test } from '../../e2e/fixtures';

const OUT = path.resolve(import.meta.dirname, '..', '..', 'docs', 'screenshots');

const SUBJECTS = {
  deals: [
    '⚡ Flash sale: 60% off ends tonight',
    'Your cart misses you',
    'Top picks for you this week',
    'Last chance: free shipping',
  ],
  social: [
    'You appeared in 14 searches this week',
    'New connection suggestions',
    'Someone viewed your profile',
  ],
  news: [
    'Morning briefing: what you need to know',
    'Your weekly digest',
    '5 stories we think you’ll like',
    'Weekend reading list',
  ],
  food: ['Hungry? 30% off your next order', 'Your order is on the way', 'New restaurants near you'],
  code: ['[org/repo] New issue opened', 'Re: [org/repo] Fix flaky test (#482)', 'Your CI run failed'],
  music: ['Your Weekly Mix is ready', 'New releases from artists you follow'],
  travel: ['Prices dropped for your saved trip', 'Weekend getaways from $89'],
  bank: ['Your statement is ready', 'Payment received', 'Security alert: new sign-in'],
  family: ['Dinner on Sunday?', 'Photos from the trip', 'Re: Birthday plans'],
};
const oneClick = (domain: string) => ({ oneClick: `https://${domain}/unsubscribe` });

// Fictional senders only.
const DEMO: FakeSender[] = [
  { name: 'ShopNest', email: 'deals@shopnest.com', count: 1240, subjects: SUBJECTS.deals, unsubscribe: oneClick('shopnest.com'), readEvery: 12, size: () => 62_000 },
  { name: 'Linkfolio', email: 'notifications@linkfolio.com', count: 860, subjects: SUBJECTS.social, unsubscribe: oneClick('linkfolio.com'), readEvery: 20 },
  { name: 'The Daily Brief', email: 'newsletter@dailybrief.news', count: 715, subjects: SUBJECTS.news, unsubscribe: { mailto: 'mailto:leave@dailybrief.news' }, readEvery: 8 },
  { name: 'Foodzy', email: 'offers@foodzy.app', count: 530, subjects: SUBJECTS.food, unsubscribe: oneClick('foodzy.app'), readEvery: 15 },
  { name: 'Codehub', email: 'notifications@codehub.dev', count: 480, subjects: SUBJECTS.code, readEvery: 3 },
  { name: 'ShopNest Orders', email: 'orders@mail.shopnest.com', count: 310, subjects: SUBJECTS.deals, readEvery: 2 },
  { name: 'Tunewave', email: 'no-reply@tunewave.fm', count: 295, subjects: SUBJECTS.music, unsubscribe: oneClick('tunewave.fm'), readEvery: 30 },
  { name: 'TravelNest', email: 'hello@travelnest.com', count: 260, subjects: SUBJECTS.travel, unsubscribe: { website: 'https://travelnest.com/prefs' }, readEvery: 25, size: () => 180_000 },
  { name: 'Pixelgram', email: 'digest@pixelgram.social', count: 240, subjects: SUBJECTS.social, unsubscribe: oneClick('pixelgram.social'), readEvery: 40 },
  { name: 'Medley Weekly', email: 'weekly@medley.blog', count: 210, subjects: SUBJECTS.news, unsubscribe: oneClick('medley.blog'), readEvery: 50 },
  { name: 'Northbank', email: 'alerts@northbank.com', count: 180, subjects: SUBJECTS.bank, readEvery: 2 },
  { name: 'Coupon Corner', email: 'save@couponcorner.co', count: 150, subjects: SUBJECTS.deals, unsubscribe: oneClick('couponcorner.co'), readEvery: 60 },
  { name: 'Mom', email: 'mom@gmail.com', count: 95, subjects: SUBJECTS.family, readEvery: 0, starred: 10 },
  { name: 'Photo Backup', email: 'backup@snapvault.io', count: 70, subjects: SUBJECTS.news, size: () => 4_800_000, readEvery: 4 },
  { name: 'Alex', email: 'alex.w@gmail.com', count: 42, subjects: SUBJECTS.family, readEvery: 0 },
]; // prettier-ignore

test.use({ mailboxes: { 'you@gmail.com': DEMO } });

async function shot(page: import('@playwright/test').Page, name: string): Promise<void> {
  await page.evaluate(() => document.querySelector('.toasts')?.replaceChildren());
  await page.screenshot({ path: path.join(OUT, `${name}.png`) });
}

test('light', async ({ harness }) => {
  const { page } = harness;
  await expect(page.getByRole('heading', { name: 'One-time setup' })).toBeVisible();
  await shot(page, 'setup');
  await harness.signIn();
  await harness.scan();
  await shot(page, 'dashboard');

  await page.locator('#senders').evaluate((el) => window.scrollTo(0, (el as HTMLElement).offsetTop - 70));
  for (const email of ['deals@shopnest.com', 'notifications@linkfolio.com', 'offers@foodzy.app']) {
    await harness.row(email).getByRole('checkbox').check();
  }
  await harness
    .row('newsletter@dailybrief.news')
    .getByRole('button', { name: /Details for/ })
    .click();
  await shot(page, 'select');

  await page
    .getByRole('region', { name: 'Bulk actions' })
    .getByRole('button', { name: 'Unsubscribe' })
    .click();
  await expect(harness.dialog()).toBeVisible();
  await shot(page, 'unsubscribe');
});

test.describe('dark', () => {
  test.use({ colorScheme: 'dark' });
  test('dark', async ({ harness }) => {
    const { page } = harness;
    await harness.signIn();
    await harness.scan();
    await page.getByRole('button', { name: 'By domain' }).click();
    await page.getByRole('combobox', { name: 'Sort' }).selectOption('size');
    await page.locator('#senders').evaluate((el) => window.scrollTo(0, (el as HTMLElement).offsetTop - 70));
    await shot(page, 'dark');
  });
});
