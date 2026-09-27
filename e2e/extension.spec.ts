import { chromium, expect, test } from '@playwright/test';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const EXTENSION_ID = 'jeabichcgpliejpjncdekkiljbiiiabn';

// Loads the real built extension: proves the manifest is valid, the pinned key yields the documented
// extension ID (and so the documented redirect URI), the service worker starts, and the dashboard
// renders under the extension's Content Security Policy.
test('the built extension loads with a stable ID and renders the dashboard', async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'gmail-cleanup-'));
  const context = await chromium.launchPersistentContext(profile, {
    channel: 'chromium',
    args: [`--disable-extensions-except=${DIST}`, `--load-extension=${DIST}`],
  });
  try {
    const worker = context.serviceWorkers()[0] ?? (await context.waitForEvent('serviceworker'));
    expect(new URL(worker.url()).host).toBe(EXTENSION_ID);

    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(`chrome-extension://${EXTENSION_ID}/dashboard.html`);
    await expect(page.getByRole('heading', { name: 'One-time setup' })).toBeVisible();
    await expect(page.getByTestId('redirect-uri')).toHaveText(`https://${EXTENSION_ID}.chromiumapp.org/`);
    expect(errors).toEqual([]);
  } finally {
    await context.close();
    fs.rmSync(profile, { recursive: true, force: true });
  }
});
