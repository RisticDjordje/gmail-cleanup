// Bundles the extension into dist/. Usage: node scripts/build.mjs [--watch]
import * as esbuild from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const watch = process.argv.includes('--watch');

async function copyStatic() {
  const pkg = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'src/manifest.json'), 'utf8'));
  manifest.version = pkg.version;
  await fs.writeFile(path.join(dist, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  await fs.copyFile(path.join(root, 'src/ui/dashboard.html'), path.join(dist, 'dashboard.html'));
  await fs.cp(path.join(root, 'public'), dist, { recursive: true });
}

/** @type {import('esbuild').BuildOptions} */
const options = {
  absWorkingDir: root,
  entryPoints: { background: 'src/background.ts', dashboard: 'src/ui/main.tsx' },
  outdir: dist,
  bundle: true,
  format: 'esm',
  target: 'chrome116',
  jsx: 'automatic',
  jsxImportSource: 'preact',
  sourcemap: watch ? 'inline' : false,
  // Readable output: the Chrome Web Store reviews shipped code, and it keeps stack traces useful.
  minify: false,
  legalComments: 'none',
  logLevel: 'info',
  plugins: [{ name: 'static', setup: (build) => build.onEnd(copyStatic) }],
};

await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });
if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}
