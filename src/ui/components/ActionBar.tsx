import type { JSX } from 'preact';
import { formatBytes, pluralize } from '../../core/format';
import { useController } from '../context';
import { Button } from './ui';

export function ActionBar(): JSX.Element | null {
  const controller = useController();
  const groups = controller.selectedGroups.value;
  if (!groups.length) return null;
  const busy = controller.busy.value;
  const count = groups.reduce((n, g) => n + g.count, 0);
  const size = groups.reduce((n, g) => n + g.size, 0);
  const noun = controller.settings.value.view.groupBy === 'sender' ? 'sender' : 'domain';
  return (
    <div class="actionbar" role="region" aria-label="Bulk actions">
      <div class="actionbar-inner">
        <div class="selection" data-testid="selection">
          {pluralize(groups.length, noun)} selected{' '}
          <span class="muted">
            · {pluralize(count, 'email')} · {formatBytes(size)}
          </span>
        </div>
        <div class="actions">
          <Button disabled={busy} onClick={() => void controller.unsubscribe()}>
            Unsubscribe
          </Button>
          <Button variant="primary" disabled={busy} onClick={() => void controller.runBulkAction('trash')}>
            Move to Trash
          </Button>
          <Button disabled={busy} onClick={() => void controller.runBulkAction('archive')}>
            Archive
          </Button>
          <Button disabled={busy} onClick={() => void controller.runBulkAction('markRead')}>
            Mark read
          </Button>
          <Button disabled={busy} onClick={() => void controller.blockFuture()}>
            Block future
          </Button>
          <Button disabled={busy} onClick={() => void controller.runBulkAction('spam')}>
            Report spam
          </Button>
          <Button variant="danger" disabled={busy} onClick={() => void controller.runBulkAction('delete')}>
            Delete forever
          </Button>
          <Button variant="ghost" aria-label="Clear selection" onClick={() => controller.clearSelection()}>
            ✕
          </Button>
        </div>
      </div>
    </div>
  );
}
