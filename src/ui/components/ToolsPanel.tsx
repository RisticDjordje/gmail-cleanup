import type { JSX } from 'preact';
import { pluralize } from '../../core/format';
import { useController } from '../context';
import { Button } from './ui';

export function ToolsPanel(): JSX.Element {
  const controller = useController();
  const busy = controller.busy.value;
  const kept = controller.keep.value.size;
  return (
    <details class="card tools">
      <summary>More tools</summary>
      <div class="tools-grid">
        <div>
          <h3>Empty Trash now</h3>
          <p class="muted small">
            Gmail empties Trash after 30 days by itself. This frees the space immediately and can’t be undone.
          </p>
          <Button variant="danger" disabled={busy} onClick={() => void controller.emptyFolder('TRASH')}>
            Empty Trash
          </Button>
        </div>
        <div>
          <h3>Empty Spam now</h3>
          <p class="muted small">Permanently deletes everything in Spam.</p>
          <Button variant="danger" disabled={busy} onClick={() => void controller.emptyFolder('SPAM')}>
            Empty Spam
          </Button>
        </div>
        <div>
          <h3>Kept senders</h3>
          <p class="muted small">
            {kept ? `${pluralize(kept, 'sender')} kept.` : 'No senders kept.'} Kept senders can’t be selected
            for bulk actions.
          </p>
          <Button disabled={!kept} onClick={() => void controller.clearKept()}>
            Clear kept list
          </Button>
        </div>
        <div>
          <h3>Local cache</h3>
          <p class="muted small">Scanned headers are cached in this browser so rescans are fast.</p>
          <div class="button-row">
            <Button disabled={busy} onClick={() => void controller.clearCache()}>
              Clear cache
            </Button>
            <Button variant="ghost" disabled={busy} onClick={() => void controller.resetClient()}>
              Change OAuth client
            </Button>
          </div>
        </div>
      </div>
    </details>
  );
}
