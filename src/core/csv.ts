import type { SenderGroup } from './types';

/**
 * Neutralize spreadsheet formula injection (CWE-1236): sender names are attacker-controlled,
 * and a cell starting with = + - @ would run as a formula when the CSV is opened in Excel/Sheets.
 */
function cell(value: string | number): string {
  let s = String(value);
  if (typeof value === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const isoDay = (ms: number): string => (ms > 0 ? new Date(ms).toISOString().slice(0, 10) : '');

export function sendersToCsv(groups: readonly SenderGroup[]): string {
  const header = [
    'Sender',
    'Name',
    'Emails',
    'Unread',
    'Size (bytes)',
    'Newest',
    'Oldest',
    'Has unsubscribe',
  ];
  const rows = groups.map((g) => [
    g.key,
    g.displayName,
    g.count,
    g.unread,
    g.size,
    isoDay(g.newest),
    isoDay(g.oldest),
    g.hasUnsubscribe ? 'yes' : 'no',
  ]);
  return [header, ...rows].map((row) => row.map(cell).join(',')).join('\r\n') + '\r\n';
}
