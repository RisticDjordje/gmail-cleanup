import type { JSX } from 'preact';
import { formatBytes, formatDate, formatNumber, pluralize } from '../../core/format';
import { unreadRatio } from '../../core/grouping';
import { gmailSearchUrl } from '../../core/query';
import type { SenderGroup } from '../../core/types';
import { useController } from '../context';

interface Props {
  readonly group: SenderGroup;
  readonly account: string;
  readonly maxCount: number;
  readonly selected: boolean;
  readonly expanded: boolean;
  readonly kept: boolean;
  readonly unsubscribed: boolean;
}

export function SenderRow({
  group,
  account,
  maxCount,
  selected,
  expanded,
  kept,
  unsubscribed,
}: Props): JSX.Element {
  const controller = useController();
  const subtitle =
    group.groupBy === 'domain' ? pluralize(group.addresses.size, 'address', 'addresses') : group.key;
  const detailsId = `details-${group.key}`;
  return (
    <>
      <tr
        class={['row', selected && 'selected', kept && 'kept'].filter(Boolean).join(' ')}
        data-key={group.key}
      >
        <td class="col-check">
          <input
            type="checkbox"
            aria-label={`Select ${group.displayName}`}
            checked={selected}
            disabled={kept}
            title={kept ? 'Kept senders can’t be selected' : undefined}
            onChange={(e) => controller.setSelected(group.key, e.currentTarget.checked)}
          />
        </td>
        <td>
          <div class="sender">
            <button
              type="button"
              class={`expand${expanded ? ' open' : ''}`}
              aria-expanded={expanded}
              aria-controls={detailsId}
              aria-label={`Details for ${group.displayName}`}
              onClick={() => controller.toggleExpanded(group.key)}
            >
              ▶
            </button>
            <div class="sender-text">
              <div class="sender-name" title={group.displayName}>
                {group.displayName}
                {group.hasUnsubscribe && <span class="badge">list</span>}
                {unsubscribed && <span class="badge done">unsubscribed</span>}
                {kept && <span class="badge">kept</span>}
              </div>
              <div class="sender-email" title={subtitle}>
                {subtitle}
              </div>
            </div>
          </div>
        </td>
        <td class="col-count">
          <div class="countbar">
            <div class="fill" style={{ width: `${Math.max(2, (group.count / maxCount) * 100)}%` }} />
            <span>{formatNumber(group.count)}</span>
          </div>
        </td>
        <td class="col-num">{Math.round(unreadRatio(group) * 100)}%</td>
        <td class="col-num">{formatBytes(group.size)}</td>
        <td class="col-date">{formatDate(group.newest)}</td>
        <td class="col-actions">
          <button
            type="button"
            class={`icon-btn${kept ? ' on' : ''}`}
            aria-pressed={kept}
            title={kept ? 'Stop keeping' : 'Keep: protect from bulk actions'}
            onClick={() => void controller.toggleKeep(group)}
          >
            {kept ? '★ Kept' : '☆ Keep'}
          </button>
          <a
            class="icon-btn"
            href={gmailSearchUrl(account, group.key)}
            target="_blank"
            rel="noopener noreferrer"
            title="Open these emails in Gmail"
          >
            Open ↗
          </a>
        </td>
      </tr>
      {expanded && (
        <tr class="details" id={detailsId}>
          <td colSpan={7}>
            <h4>Recent subjects</h4>
            <ul>
              {group.recent.map((m) => (
                <li key={m.id}>
                  <span class="date">{formatDate(m.date)}</span>
                  <span>{m.subject || '(no subject)'}</span>
                </li>
              ))}
            </ul>
            <h4>Addresses</h4>
            <div class="addresses">
              {[...group.addresses.entries()]
                .sort((a, b) => b[1].count - a[1].count)
                .slice(0, 30)
                .map(([address, stats]) => (
                  <span key={address}>
                    {address} · {formatNumber(stats.count)}
                  </span>
                ))}
            </div>
            <p class="muted small">
              Oldest email: {formatDate(group.oldest)} · In inbox: {formatNumber(group.inInbox)}
            </p>
          </td>
        </tr>
      )}
    </>
  );
}
