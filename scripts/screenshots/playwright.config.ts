import { defineConfig } from '@playwright/test';

// `npm run screenshots`: regenerates docs/screenshots from a fictional mailbox.
export default defineConfig({
  testDir: '.',
  testMatch: 'screenshots.spec.ts',
  workers: 1,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    viewport: { width: 1200, height: 800 },
    deviceScaleFactor: 2,
    contextOptions: { reducedMotion: 'reduce' },
  },
});
