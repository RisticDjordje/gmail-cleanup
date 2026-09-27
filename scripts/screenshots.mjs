// Regenerates the README screenshots in docs/screenshots from a fictional mailbox.
// Run: npm run screenshots
import fs from 'node:fs';
import path from 'node:path';
import { createMailbox, launchDashboard, root, signIn } from '../tests/harness.mjs';

const out = path.join(root, 'docs', 'screenshots');
fs.mkdirSync(out, { recursive: true });

const subjects = {
  deals: ['⚡ Flash sale: 60% off ends tonight', 'Your cart misses you', 'Top picks for you this week', 'Last chance: free shipping'],
  social: ['You appeared in 14 searches this week', 'New connection suggestions', 'Someone viewed your profile', 'Trending in your network'],
  news: ['Morning briefing: what you need to know', 'Your weekly digest', '5 stories we think you’ll like', 'Weekend reading list'],
  food: ['Hungry? 30% off your next order', 'Your order is on the way', 'New restaurants near you'],
  code: ['[org/repo] New issue opened', 'Re: [org/repo] Fix flaky test (#482)', 'Your CI run failed', '[org/repo] PR merged'],
  music: ['Your Weekly Mix is ready', 'New releases from artists you follow', 'Your year in music'],
  travel: ['Prices dropped for your saved trip', 'Weekend getaways from $89', 'Your trip is coming up'],
  bank: ['Your statement is ready', 'Payment received', 'Security alert: new sign-in'],
  family: ['Dinner on Sunday?', 'Photos from the trip', 'Re: Birthday plans'],
};
const oneClick = (domain) => ({ oneClick: `https://${domain}/unsubscribe` });
const S = (name, email, count, subj, extra = {}) => ({ name, email, count, subjects: subjects[subj], ...extra });

const senders = [
  S('ShopNest', 'deals@shopnest.com', 1240, 'deals', { unsub: oneClick('shopnest.com'), unreadEvery: 12, size: () => 62_000 }),
  S('Linkfolio', 'notifications@linkfolio.com', 860, 'social', { unsub: oneClick('linkfolio.com'), unreadEvery: 20 }),
  S('The Daily Brief', 'newsletter@dailybrief.news', 715, 'news', { unsub: { mailto: 'mailto:leave@dailybrief.news' }, unreadEvery: 8 }),
  S('Foodzy', 'offers@foodzy.app', 530, 'food', { unsub: oneClick('foodzy.app'), unreadEvery: 15 }),
  S('Codehub', 'notifications@codehub.dev', 480, 'code', { unreadEvery: 3 }),
  S('ShopNest Orders', 'orders@mail.shopnest.com', 310, 'deals', { unreadEvery: 2 }),
  S('Tunewave', 'no-reply@tunewave.fm', 295, 'music', { unsub: oneClick('tunewave.fm'), unreadEvery: 30 }),
  S('TravelNest', 'hello@travelnest.com', 260, 'travel', { unsub: { link: 'https://travelnest.com/prefs' }, unreadEvery: 25, size: () => 180_000 }),
  S('Pixelgram', 'digest@pixelgram.social', 240, 'social', { unsub: oneClick('pixelgram.social'), unreadEvery: 40 }),
  S('Medley Weekly', 'weekly@medley.blog', 210, 'news', { unsub: oneClick('medley.blog'), unreadEvery: 50 }),
  S('Northbank', 'alerts@northbank.com', 180, 'bank', { unreadEvery: 2 }),
  S('Coupon Corner', 'save@couponcorner.co', 150, 'deals', { unsub: oneClick('couponcorner.co'), unreadEvery: 60 }),
  S('Mom', 'mom@gmail.com', 95, 'family', { unreadEvery: 0, starred: 10 }),
  S('Photo Backup', 'backup@snapvault.io', 70, 'news', { size: () => 4_800_000, unreadEvery: 4 }),
  S('Alex', 'alex.w@gmail.com', 42, 'family', { unreadEvery: 0 }),
];

async function capture(colorScheme, scenes) {
  const { browser, page } = await launchDashboard({
    mailboxes: { 'you@gmail.com': createMailbox(senders) },
    colorScheme,
    viewport: { width: 1200, height: 800 },
    deviceScaleFactor: 2,
  });
  const clean = () => page.evaluate(() => document.querySelector('#toasts').replaceChildren());
  const shot = async (name) => {
    await clean();
    await page.screenshot({ path: path.join(out, `${name}.png`) });
    console.log(`wrote docs/screenshots/${name}.png`);
  };
  await scenes(page, shot);
  await browser.close();
}

await capture('light', async (page, shot) => {
  await page.locator('#setupView').waitFor();
  await shot('setup');
  await signIn(page);
  await page.click('#scanBtn');
  await page.locator('.toast', { hasText: 'Scan complete' }).waitFor();
  await shot('dashboard');

  // Select a few senders and expand one to show the details + action bar.
  await page.locator('.list').evaluate((el) => window.scrollTo(0, el.offsetTop - 70));
  for (const email of ['deals@shopnest.com', 'notifications@linkfolio.com', 'offers@foodzy.app']) {
    await page.locator('#rows tr.row', { hasText: email }).locator('input[type=checkbox]').check();
  }
  await page.locator('#rows tr.row', { hasText: 'newsletter@dailybrief.news' }).locator('[data-act=expand]').click();
  await shot('select');

  await page.click('#actionBar [data-action=unsubscribe]');
  await page.locator('#modal', { hasText: 'Unsubscribe' }).waitFor();
  await shot('unsubscribe');
});

await capture('dark', async (page, shot) => {
  await signIn(page);
  await page.click('#scanBtn');
  await page.locator('.toast', { hasText: 'Scan complete' }).waitFor();
  await page.click('.segmented button[data-group=domain]');
  await page.selectOption('#sort', 'size');
  await page.locator('.list').evaluate((el) => window.scrollTo(0, el.offsetTop - 70));
  await shot('dark');
});
