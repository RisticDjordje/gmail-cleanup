import type { JSX } from 'preact';
import type { AgeFilter, ScanScope } from '../../core/types';
import { formatDuration, formatNumber } from '../../core/format';
import type { ScanState } from '../../app/controller';
import { useController } from '../context';
import { Button, ProgressBar } from './ui';

const SCOPES: readonly [ScanScope, string][] = [
  ['all', 'All mail'],
  ['inbox', 'Inbox only'],
  ['promotions', 'Promotions tab'],
  ['social', 'Social tab'],
  ['updates', 'Updates tab'],
  ['forums', 'Forums tab'],
  ['unread', 'Unread only'],
  ['large', 'Emails over 5 MB'],
  ['custom', 'Custom Gmail search…'],
];

const AGES: readonly [AgeFilter, string][] = [
  ['', 'Any age'],
  ['1m', 'Older than 1 month'],
  ['6m', 'Older than 6 months'],
  ['1y', 'Older than 1 year'],
  ['2y', 'Older than 2 years'],
  ['5y', 'Older than 5 years'],
];

const LIMITS: readonly [number, string][] = [
  [0, 'No limit'],
  [2000, 'Newest 2,000'],
  [10000, 'Newest 10,000'],
  [25000, 'Newest 25,000'],
  [50000, 'Newest 50,000'],
];

function describeProgress(state: ScanState): { label: string; fraction: number | null } | null {
  if (state.status === 'idle') return null;
  const p = state.progress;
  switch (p.phase) {
    case 'syncing':
      return { label: 'Checking for changes since the last scan…', fraction: null };
    case 'listing':
      return { label: `Finding messages… ${formatNumber(p.listed)} so far`, fraction: null };
    case 'reading': {
      const cached = p.cached ? ` (${formatNumber(p.cached)} already cached)` : '';
      const eta = p.done < p.total && p.etaMs !== null ? ` · about ${formatDuration(p.etaMs)} left` : '';
      return {
        label: `Reading ${formatNumber(p.done)} of ${formatNumber(p.total)} new messages${cached}${eta}`,
        fraction: p.total ? p.done / p.total : 1,
      };
    }
  }
}

export function ScanPanel(): JSX.Element {
  const controller = useController();
  const { scan, protection } = controller.settings.value;
  const scanState = controller.scanState.value;
  const busy = controller.busy.value;
  const snapshot = controller.snapshot.value;
  const coverage = controller.coverage.value;
  const progress = describeProgress(scanState);

  const setScan = (patch: Partial<typeof scan>): void =>
    controller.updateSettings((s) => ({ ...s, scan: { ...s.scan, ...patch } }));
  const setProtection = (patch: Partial<typeof protection>): void =>
    controller.updateSettings((s) => ({ ...s, protection: { ...s.protection, ...patch } }));

  return (
    <section class="card scan" aria-label="Scan">
      <div class="scan-grid">
        <label>
          Scan
          <select value={scan.scope} onChange={(e) => setScan({ scope: e.currentTarget.value as ScanScope })}>
            {SCOPES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Age
          <select
            value={scan.olderThan}
            onChange={(e) => setScan({ olderThan: e.currentTarget.value as AgeFilter })}
          >
            {AGES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Limit
          <select
            value={String(scan.maxMessages)}
            onChange={(e) => setScan({ maxMessages: Number(e.currentTarget.value) })}
          >
            {LIMITS.map(([value, label]) => (
              <option key={value} value={String(value)}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {scan.scope === 'custom' && (
          <label class="custom-query">
            Gmail search
            <input
              type="text"
              placeholder="e.g. before:2022/01/01 has:attachment"
              spellcheck={false}
              maxLength={1000}
              value={scan.customQuery}
              onInput={(e) => setScan({ customQuery: e.currentTarget.value })}
            />
          </label>
        )}
      </div>
      <div class="scan-row">
        <label class="check">
          <input
            type="checkbox"
            checked={protection.protectStarred}
            onChange={(e) => setProtection({ protectStarred: e.currentTarget.checked })}
          />
          Never touch starred
        </label>
        <label class="check">
          <input
            type="checkbox"
            checked={protection.protectImportant}
            onChange={(e) => setProtection({ protectImportant: e.currentTarget.checked })}
          />
          Never touch important
        </label>
        <div class="spacer" />
        {scanState.status === 'running' ? (
          <Button onClick={() => controller.stopScan()}>Stop</Button>
        ) : (
          <Button variant="primary" disabled={busy} onClick={() => void controller.startScan()}>
            Scan mailbox
          </Button>
        )}
      </div>
      {progress && (
        <div class="progress" aria-live="polite">
          <ProgressBar fraction={progress.fraction} label="Scan progress" />
          <div class="progress-text">{progress.label}</div>
        </div>
      )}
      <p class="muted small scan-info">
        {snapshot
          ? `Last scan ${new Date(snapshot.scannedAt).toLocaleString()} · search: ${snapshot.query || '(all mail)'}` +
            (coverage.read < coverage.listed
              ? ` · partial: ${formatNumber(coverage.read)} of ${formatNumber(coverage.listed)} read, scan again to finish`
              : '')
          : 'Pick what to scan and press “Scan mailbox”. The first full scan of a big mailbox takes a while (Gmail allows about 40 messages a second); later scans only read new mail.'}
      </p>
    </section>
  );
}
