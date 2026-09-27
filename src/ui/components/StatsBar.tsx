import type { JSX } from 'preact';
import { formatBytes, formatNumber } from '../../core/format';
import { useController } from '../context';

export function StatsBar(): JSX.Element {
  const controller = useController();
  const stats = controller.stats.value;
  const noun = controller.settings.value.view.groupBy === 'sender' ? 'senders' : 'domains';
  const tiles: [string, string][] = [
    [formatNumber(stats.messages), 'emails scanned'],
    [formatNumber(stats.senders), 'different senders'],
    [formatBytes(stats.bytes), 'total size'],
    [stats.messages ? `${Math.round((stats.unread / stats.messages) * 100)}%` : '0%', 'unread'],
    [formatNumber(stats.unsubscribable), `${noun} you can unsubscribe from`],
  ];
  return (
    <section class="stats" aria-label="Mailbox summary">
      {tiles.map(([value, label]) => (
        <div class="stat" key={label}>
          <div class="value">{value}</div>
          <div class="label">{label}</div>
        </div>
      ))}
    </section>
  );
}
