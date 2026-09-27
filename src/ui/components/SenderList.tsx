import type { JSX } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import type { ListFilters, SortKey } from '../../core/types';
import { formatNumber } from '../../core/format';
import { useController } from '../context';
import { SenderRow } from './SenderRow';
import { Button } from './ui';

const SORTS: readonly [SortKey, string][] = [
  ['count', 'Most emails'],
  ['size', 'Most storage'],
  ['unread', 'Most unread'],
  ['newest', 'Most recent'],
  ['oldest', 'Oldest'],
  ['name', 'Name (A–Z)'],
];

const FILTERS: readonly [keyof ListFilters, string][] = [
  ['hasUnsubscribe', 'Has unsubscribe'],
  ['mostlyUnread', 'Mostly unread'],
  ['hideKept', 'Hide kept'],
];

function download(filename: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function SenderList(): JSX.Element {
  const controller = useController();
  const { groupBy, sort, filters } = controller.settings.value.view;
  const filtered = controller.filteredGroups.value;
  const visible = filtered.slice(0, controller.visibleCount.value);
  const selected = controller.selected.value;
  const expanded = controller.expanded.value;
  const unsubscribed = controller.unsubscribed.value;
  const account = controller.account.value ?? '';
  const maxCount = filtered.reduce((max, g) => Math.max(max, g.count), 1);
  const remaining = filtered.length - visible.length;

  const selectable = filtered.filter((g) => !controller.isKept(g));
  const selectedCount = selectable.filter((g) => selected.has(g.key)).length;
  const partlySelected = selectedCount > 0 && selectedCount < selectable.length;

  const search = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      const target = event.target as HTMLElement | null;
      if (event.key === '/' && !target?.closest('input, textarea, select, dialog')) {
        event.preventDefault();
        search.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section class="card list" id="senders" aria-label="Senders">
      <div class="toolbar">
        <input
          ref={search}
          type="search"
          placeholder="Search senders (press /)"
          aria-label="Search senders"
          spellcheck={false}
          value={controller.search.value}
          onInput={(e) => controller.setSearch(e.currentTarget.value)}
        />
        <div class="segmented" role="group" aria-label="Group by">
          {(['sender', 'domain'] as const).map((value) => (
            <button
              type="button"
              key={value}
              class={groupBy === value ? 'active' : ''}
              aria-pressed={groupBy === value}
              onClick={() => controller.setGroupBy(value)}
            >
              {value === 'sender' ? 'By sender' : 'By domain'}
            </button>
          ))}
        </div>
        <select
          aria-label="Sort"
          value={sort}
          onChange={(e) => controller.setSort(e.currentTarget.value as SortKey)}
        >
          {SORTS.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div class="chips">
          {FILTERS.map(([key, label]) => (
            <button
              type="button"
              key={key}
              class={`chip${filters[key] ? ' active' : ''}`}
              aria-pressed={filters[key]}
              onClick={() => controller.toggleFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div class="spacer" />
        <Button
          variant="ghost"
          size="small"
          onClick={() =>
            download(`gmail-senders-${new Date().toISOString().slice(0, 10)}.csv`, controller.exportCsv())
          }
        >
          Export CSV
        </Button>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th class="col-check">
                <input
                  // `indeterminate` is a DOM property with no HTML attribute, so set it via a ref callback.
                  ref={(el) => {
                    if (el) el.indeterminate = partlySelected;
                  }}
                  type="checkbox"
                  aria-label={`Select all ${formatNumber(selectable.length)} shown`}
                  checked={selectable.length > 0 && selectedCount === selectable.length}
                  disabled={!selectable.length}
                  onChange={(e) => controller.setAllSelected(e.currentTarget.checked)}
                />
              </th>
              <th scope="col">{groupBy === 'sender' ? 'Sender' : 'Domain'}</th>
              <th scope="col" class="col-count">
                Emails
              </th>
              <th scope="col" class="col-num">
                Unread
              </th>
              <th scope="col" class="col-num">
                Size
              </th>
              <th scope="col" class="col-date">
                Latest
              </th>
              <th class="col-actions">
                <span class="visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((group) => (
              <SenderRow
                key={group.key}
                group={group}
                account={account}
                maxCount={maxCount}
                selected={selected.has(group.key)}
                expanded={expanded.has(group.key)}
                kept={controller.isKept(group)}
                unsubscribed={[...group.addresses.keys()].some((a) => unsubscribed.has(a))}
              />
            ))}
          </tbody>
        </table>
      </div>
      {!filtered.length && <p class="empty">No senders match.</p>}
      {remaining > 0 && (
        <div class="more">
          <Button onClick={() => controller.showMore()}>
            Show {formatNumber(Math.min(remaining, 100))} more ({formatNumber(remaining)} left)
          </Button>
        </div>
      )}
    </section>
  );
}
