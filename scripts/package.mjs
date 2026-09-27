// Zips dist/ into gmail-cleanup-<version>.zip for sharing or a GitHub release.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const zip = path.join(root, `gmail-cleanup-${version}.zip`);
fs.rmSync(zip, { force: true });
execFileSync('zip', ['-qr', zip, '.'], { cwd: path.join(root, 'dist'), stdio: 'inherit' });
console.log(`wrote ${path.relative(root, zip)}`);
