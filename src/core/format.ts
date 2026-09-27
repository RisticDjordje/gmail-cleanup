const numberFormat = new Intl.NumberFormat('en-US');

export function formatNumber(n: number): string {
  return numberFormat.format(n);
}

const BYTE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'] as const;

export function formatBytes(bytes: number): string {
  if (!(bytes > 0)) return '0 B';
  const exponent = Math.min(BYTE_UNITS.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const value = bytes / 1024 ** exponent;
  const digits = value >= 100 || exponent === 0 ? 0 : 1;
  return `${value.toFixed(digits)} ${BYTE_UNITS[exponent] ?? 'B'}`;
}

export function formatDuration(ms: number): string {
  const seconds = Math.max(0, Math.round(ms / 1000));
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ${seconds % 60}s`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

/** Short date: "Mar 4" this year, "Mar 4, 2021" otherwise, "—" for unknown. */
export function formatDate(ms: number, now: Date = new Date()): string {
  if (!Number.isFinite(ms) || ms <= 0) return '—';
  const date = new Date(ms);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    ...(date.getFullYear() === now.getFullYear() ? {} : { year: 'numeric' }),
  });
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${formatNumber(count)} ${count === 1 ? singular : plural}`;
}
