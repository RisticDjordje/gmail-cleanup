import { signal } from '@preact/signals';

export interface Toast {
  readonly id: number;
  readonly message: string;
  readonly tone: 'info' | 'error';
  readonly action?: { readonly label: string; readonly run: () => void };
}

const MAX_VISIBLE = 3;

export class ToastService {
  readonly toasts = signal<readonly Toast[]>([]);
  #nextId = 1;
  readonly #timers = new Map<number, ReturnType<typeof setTimeout>>();

  show(
    message: string,
    options: { tone?: Toast['tone']; action?: Toast['action']; durationMs?: number } = {},
  ): void {
    const toast: Toast = {
      id: this.#nextId++,
      message,
      tone: options.tone ?? 'info',
      ...(options.action ? { action: options.action } : {}),
    };
    const duration = options.durationMs ?? (options.action ? 15_000 : toast.tone === 'error' ? 8_000 : 4_000);
    const visible = [...this.toasts.peek(), toast];
    for (const dropped of visible.slice(0, -MAX_VISIBLE)) this.#clearTimer(dropped.id);
    this.toasts.value = visible.slice(-MAX_VISIBLE);
    this.#timers.set(
      toast.id,
      setTimeout(() => this.dismiss(toast.id), duration),
    );
  }

  error(message: string): void {
    this.show(message, { tone: 'error' });
  }

  dismiss(id: number): void {
    this.#clearTimer(id);
    this.toasts.value = this.toasts.peek().filter((t) => t.id !== id);
  }

  clear(): void {
    for (const id of this.#timers.keys()) this.#clearTimer(id);
    this.toasts.value = [];
  }

  #clearTimer(id: number): void {
    clearTimeout(this.#timers.get(id));
    this.#timers.delete(id);
  }
}
