import type { JSX } from 'preact';
import { useController } from '../context';

export function Toasts(): JSX.Element {
  const { toasts } = useController();
  return (
    <div class="toasts" aria-live="polite">
      {toasts.toasts.value.map((toast) => (
        <div
          class={`toast${toast.tone === 'error' ? ' error' : ''}`}
          key={toast.id}
          role={toast.tone === 'error' ? 'alert' : 'status'}
        >
          <span>{toast.message}</span>
          {toast.action && (
            <button
              type="button"
              onClick={() => {
                toasts.dismiss(toast.id);
                toast.action?.run();
              }}
            >
              {toast.action.label}
            </button>
          )}
          <button
            type="button"
            class="toast-close"
            aria-label="Dismiss"
            onClick={() => toasts.dismiss(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
