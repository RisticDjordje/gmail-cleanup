import type { ComponentChildren, JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import type { Answers, DialogRequest, OpenDialog, ProgressState } from '../../app/dialogs';
import { DISMISSED } from '../../app/dialogs';
import { formatNumber, pluralize } from '../../core/format';
import type { BulkAction } from '../../services/cleanup';
import type { BlockMode } from '../../services/filters';
import { useController } from '../context';
import { Button, ExternalLink, ProgressBar } from './ui';

interface Props<K extends DialogRequest['kind']> {
  readonly request: Extract<DialogRequest, { kind: K }>;
  readonly answer: (value: Answers[K]) => void;
}

/** Renders the controller's current dialog (a question or progress) in a native modal <dialog>. */
export function DialogHost(): JSX.Element {
  const { dialogs } = useController();
  const open = dialogs.current.value;
  const progress = dialogs.progress.value;
  const ref = useRef<HTMLDialogElement>(null);
  const visible = open !== null || progress !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (visible && !dialog.open) dialog.showModal();
    else if (!visible && dialog.open) dialog.close();
  }, [visible]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="dialog-title"
      onCancel={(event) => {
        event.preventDefault(); // Esc: dismiss questions; progress can't be dismissed
        if (open) (open.answer as (value: unknown) => void)(DISMISSED[open.request.kind]);
      }}
    >
      {open ? <Question key={open.id} dialog={open} /> : progress ? <Progress state={progress} /> : null}
    </dialog>
  );
}

function Question({ dialog }: { dialog: OpenDialog }): JSX.Element {
  const { request } = dialog;
  const answer = dialog.answer as (value: unknown) => void;
  switch (request.kind) {
    case 'confirmAction':
      return <ConfirmAction request={request} answer={answer} />;
    case 'nothingToDo':
      return (
        <Info title={ACTION_TEXT[request.action].title} onOk={() => answer(undefined)}>
          <p>No matching emails were found, so there’s nothing to do.</p>
        </Info>
      );
    case 'grantFullAccess':
      return (
        <Confirm title="Extra permission needed" confirmLabel="Continue" answer={answer}>
          <p>
            Permanently deleting email needs Gmail’s full-access permission, which the extension only asks for
            when you use this feature. Google will show a consent screen next.
          </p>
          <p class="muted small">
            Prefer not to? “Move to Trash” does the same job: Gmail empties Trash after 30 days.
          </p>
        </Confirm>
      );
    case 'unsubscribe':
      return <Unsubscribe request={request} answer={answer} />;
    case 'block':
      return <Block request={request} answer={answer} />;
    case 'websiteLinks':
      return (
        <Info title="Finish on these websites" onOk={() => answer(undefined)}>
          <p>
            {request.done ? `Unsubscribed from ${pluralize(request.done, 'sender')}. ` : ''}These senders need
            you to confirm on their website. Open each link:
          </p>
          <ul class="link-list">
            {request.links.map((link) => (
              <li key={link.address}>
                <ExternalLink href={link.url}>{link.address}</ExternalLink>
              </li>
            ))}
          </ul>
        </Info>
      );
    case 'emptyFolder':
      return (
        <Confirm title={`Empty ${request.folder}`} confirmLabel="Delete forever" danger answer={answer}>
          <p>
            Permanently delete <b>{pluralize(request.count, 'email')}</b> in {request.folder}?
          </p>
          <p class="warn">This cannot be undone.</p>
        </Confirm>
      );
    case 'folderAlreadyEmpty':
      return (
        <Info title={`Empty ${request.folder}`} onOk={() => answer(undefined)}>
          <p>{request.folder} is already empty.</p>
        </Info>
      );
    case 'clearCache':
      return (
        <Confirm title="Clear cached data?" confirmLabel="Clear cache" answer={answer}>
          <p>
            This only removes the scan results stored in this browser for this account. Your email isn’t
            affected. The next scan starts from scratch.
          </p>
        </Confirm>
      );
    case 'clearKept':
      return (
        <Confirm title="Clear kept list?" confirmLabel="Clear" answer={answer}>
          <p>{pluralize(request.count, 'kept sender')} will become selectable again.</p>
        </Confirm>
      );
  }
}

const ACTION_TEXT: Readonly<
  Record<BulkAction, { title: string; button: string; note: string; danger?: boolean }>
> = {
  trash: {
    title: 'Move to Trash',
    button: 'Move to Trash',
    note: 'They stay in Trash for 30 days, then Gmail deletes them. You can undo right after.',
  },
  archive: {
    title: 'Archive',
    button: 'Archive',
    note: 'Removes them from your inbox. They stay searchable in All Mail. You can undo right after.',
  },
  markRead: { title: 'Mark as read', button: 'Mark read', note: 'You can undo right after.' },
  spam: {
    title: 'Report spam',
    button: 'Report spam',
    note: 'Moves them to Spam and helps Gmail catch similar mail. You can undo right after.',
  },
  delete: {
    title: 'Delete forever',
    button: 'Delete forever',
    note: 'This skips the Trash. It cannot be undone.',
    danger: true,
  },
};

function SenderNames({ names }: { names: readonly string[] }): JSX.Element {
  const shown = names.slice(0, 3);
  return (
    <>
      {shown.map((name, i) => (
        <span key={i}>
          {i > 0 && (i === shown.length - 1 && names.length <= 3 ? ' and ' : ', ')}
          <b>{name}</b>
        </span>
      ))}
      {names.length > 3 && ` and ${formatNumber(names.length - 3)} more`}
    </>
  );
}

function ConfirmAction({ request, answer }: Props<'confirmAction'>): JSX.Element {
  const text = ACTION_TEXT[request.action];
  const protectedKinds = [
    request.protection.protectStarred && 'starred',
    request.protection.protectImportant && 'important',
  ].filter(Boolean);
  return (
    <Confirm title={text.title} confirmLabel={text.button} danger={text.danger ?? false} answer={answer}>
      <p>
        <b>{pluralize(request.count, 'email')}</b> from <SenderNames names={request.senders} />.
      </p>
      <p class={text.danger ? 'warn' : 'muted'}>{text.note}</p>
      <p class="muted small">
        {protectedKinds.length > 0 && `Skipping ${protectedKinds.join(' and ')} emails. `}
        {request.scanQuery && (
          <>
            Only emails matching your scan (<code>{request.scanQuery}</code>) are included.
          </>
        )}
      </p>
    </Confirm>
  );
}

function Unsubscribe({ request, answer }: Props<'unsubscribe'>): JSX.Element {
  const [trashExisting, setTrashExisting] = useState(true);
  const [blockFuture, setBlockFuture] = useState(false);
  const { targets, unavailable } = request.plan;
  const count = (method: string): number => targets.filter((t) => t.method === method).length;
  return (
    <Frame
      title="Unsubscribe"
      actions={
        <>
          <Button variant="ghost" onClick={() => answer(null)}>
            Cancel
          </Button>
          <Button variant="primary" autofocus onClick={() => answer({ trashExisting, blockFuture })}>
            Unsubscribe
          </Button>
        </>
      }
    >
      {targets.length ? (
        <>
          <p>Unsubscribe options found for {pluralize(targets.length, 'address', 'addresses')}:</p>
          <ul>
            {count('oneClick') > 0 && <li>{formatNumber(count('oneClick'))} automatically (one-click)</li>}
            {count('email') > 0 && (
              <li>{formatNumber(count('email'))} by sending an unsubscribe email from your account</li>
            )}
            {count('website') > 0 && (
              <li>
                {formatNumber(count('website'))} need you to confirm on their website (links shown next)
              </li>
            )}
          </ul>
        </>
      ) : (
        <p>None of these senders include an unsubscribe option.</p>
      )}
      {unavailable.length > 0 && (
        <p class="muted small">
          {pluralize(unavailable.length, 'address', 'addresses')} {unavailable.length === 1 ? 'has' : 'have'}{' '}
          no unsubscribe option. Blocking works for those.
        </p>
      )}
      <p class="muted small">
        Only unsubscribe from senders you recognize. For real spam, use “Report spam” instead: unsubscribing
        tells a spammer your address is active.
      </p>
      <label class="check">
        <input
          type="checkbox"
          checked={trashExisting}
          onChange={(e) => setTrashExisting(e.currentTarget.checked)}
        />
        Also move their existing emails to Trash
      </label>
      <label class="check">
        <input
          type="checkbox"
          checked={blockFuture}
          onChange={(e) => setBlockFuture(e.currentTarget.checked)}
        />
        Also block future emails with a filter (for senders that ignore unsubscribes)
      </label>
    </Frame>
  );
}

const BLOCK_OPTIONS: readonly [BlockMode, string, string][] = [
  ['trash', 'Delete', 'send straight to Trash'],
  ['archive', 'Skip the inbox', 'archive, still searchable'],
  ['archiveRead', 'Skip the inbox and mark read', ''],
];

function Block({ request, answer }: Props<'block'>): JSX.Element {
  const [mode, setMode] = useState<BlockMode>('trash');
  const [applyNow, setApplyNow] = useState(true);
  return (
    <Frame
      title="Block future emails"
      actions={
        <>
          <Button variant="ghost" onClick={() => answer(null)}>
            Cancel
          </Button>
          <Button variant="primary" autofocus onClick={() => answer({ mode, applyNow })}>
            Create filters
          </Button>
        </>
      }
    >
      <p>
        Create Gmail filters so future emails from <SenderNames names={request.senders} /> never reach your
        inbox.
      </p>
      <fieldset class="radios">
        <legend class="visually-hidden">What happens to future emails</legend>
        {BLOCK_OPTIONS.map(([value, label, hint]) => (
          <label class="radio" key={value}>
            <input
              type="radio"
              name="block-mode"
              value={value}
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            <span>
              <b>{label}</b>
              {hint && `: ${hint}`}
            </span>
          </label>
        ))}
      </fieldset>
      <label class="check">
        <input type="checkbox" checked={applyNow} onChange={(e) => setApplyNow(e.currentTarget.checked)} />
        Apply the same action to their existing emails now
      </label>
      <p class="muted small">
        Review or remove filters in Gmail under Settings → Filters and Blocked Addresses.
      </p>
    </Frame>
  );
}

function Progress({ state }: { state: ProgressState }): JSX.Element {
  return (
    <Frame title={state.title}>
      <ProgressBar fraction={state.fraction} label={state.title} />
      <p class="progress-text" aria-live="polite">
        {state.label}
      </p>
    </Frame>
  );
}

function Frame({
  title,
  children,
  actions,
}: {
  title: string;
  children: ComponentChildren;
  actions?: ComponentChildren;
}): JSX.Element {
  return (
    <div class="modal">
      <h2 id="dialog-title">{title}</h2>
      <div class="modal-body">{children}</div>
      {actions && <div class="modal-actions">{actions}</div>}
    </div>
  );
}

function Confirm({
  title,
  confirmLabel,
  danger = false,
  answer,
  children,
}: {
  title: string;
  confirmLabel: string;
  danger?: boolean;
  answer: (value: boolean) => void;
  children: ComponentChildren;
}): JSX.Element {
  return (
    <Frame
      title={title}
      actions={
        <>
          <Button variant="ghost" onClick={() => answer(false)}>
            Cancel
          </Button>
          {/* Destructive actions don't get default focus, so Enter can't trigger them by accident. */}
          <Button
            variant={danger ? 'dangerSolid' : 'primary'}
            autofocus={!danger}
            onClick={() => answer(true)}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      {children}
    </Frame>
  );
}

function Info({
  title,
  onOk,
  children,
}: {
  title: string;
  onOk: () => void;
  children: ComponentChildren;
}): JSX.Element {
  return (
    <Frame
      title={title}
      actions={
        <Button variant="primary" autofocus onClick={onOk}>
          OK
        </Button>
      }
    >
      {children}
    </Frame>
  );
}
