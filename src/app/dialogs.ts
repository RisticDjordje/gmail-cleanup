import { signal } from '@preact/signals';
import type { Protection } from '../core/types';
import type { BulkAction } from '../services/cleanup';
import type { BlockMode } from '../services/filters';
import type { UnsubscribePlan } from '../services/unsubscribe';

export interface UnsubscribeChoice {
  readonly trashExisting: boolean;
  readonly blockFuture: boolean;
}

export interface BlockChoice {
  readonly mode: BlockMode;
  readonly applyNow: boolean;
}

/**
 * Every dialog the app can show, as data. The controller decides *what* to ask; the UI decides how
 * it looks. `Answers` gives each dialog's result type.
 */
export type DialogRequest =
  | { readonly kind: 'confirmAction'; readonly action: BulkAction; readonly count: number; readonly senders: readonly string[]; readonly scanQuery: string; readonly protection: Protection }
  | { readonly kind: 'nothingToDo'; readonly action: BulkAction }
  | { readonly kind: 'grantFullAccess' }
  | { readonly kind: 'unsubscribe'; readonly plan: UnsubscribePlan }
  | { readonly kind: 'block'; readonly senders: readonly string[] }
  | { readonly kind: 'websiteLinks'; readonly done: number; readonly links: readonly { readonly address: string; readonly url: string }[] }
  | { readonly kind: 'emptyFolder'; readonly folder: 'Trash' | 'Spam'; readonly count: number }
  | { readonly kind: 'folderAlreadyEmpty'; readonly folder: 'Trash' | 'Spam' }
  | { readonly kind: 'clearCache' }
  | { readonly kind: 'clearKept'; readonly count: number }; // prettier-ignore

export interface Answers {
  confirmAction: boolean;
  nothingToDo: undefined;
  grantFullAccess: boolean;
  unsubscribe: UnsubscribeChoice | null;
  block: BlockChoice | null;
  websiteLinks: undefined;
  emptyFolder: boolean;
  folderAlreadyEmpty: undefined;
  clearCache: boolean;
  clearKept: boolean;
}

export type DialogKind = DialogRequest['kind'];

/** Result when the user dismisses a dialog (Esc / Cancel). */
export const DISMISSED: { readonly [K in DialogKind]: Answers[K] } = {
  confirmAction: false,
  nothingToDo: undefined,
  grantFullAccess: false,
  unsubscribe: null,
  block: null,
  websiteLinks: undefined,
  emptyFolder: false,
  folderAlreadyEmpty: undefined,
  clearCache: false,
  clearKept: false,
};

export interface ProgressState {
  readonly title: string;
  readonly label: string;
  /** 0..1, or null when indeterminate. */
  readonly fraction: number | null;
}

export interface OpenDialog<K extends DialogKind = DialogKind> {
  /** Unique per dialog shown, so the UI can reset per-dialog form state. */
  readonly id: number;
  readonly request: Extract<DialogRequest, { kind: K }>;
  readonly answer: (value: Answers[K]) => void;
}

/** One modal at a time: either a question awaiting an answer, or a progress indicator. */
export class DialogService {
  readonly current = signal<OpenDialog | null>(null);
  readonly progress = signal<ProgressState | null>(null);
  #nextId = 1;

  ask<K extends DialogKind>(request: Extract<DialogRequest, { kind: K }>): Promise<Answers[K]> {
    this.#dismissOpen();
    this.progress.value = null;
    return new Promise<Answers[K]>((resolve) => {
      const dialog: OpenDialog<K> = {
        id: this.#nextId++,
        request,
        answer: (value) => {
          if (this.current.peek() === (dialog as unknown as OpenDialog)) this.current.value = null;
          resolve(value);
        },
      };
      this.current.value = dialog as unknown as OpenDialog;
    });
  }

  /** Show (or update) a blocking progress indicator. */
  showProgress(title: string, label: string, fraction: number | null = null): void {
    this.#dismissOpen();
    this.progress.value = { title, label, fraction };
  }

  hideProgress(): void {
    this.progress.value = null;
  }

  /** Close everything, answering any open question as dismissed. */
  closeAll(): void {
    this.#dismissOpen();
    this.progress.value = null;
  }

  #dismissOpen(): void {
    const open = this.current.peek();
    if (open) (open.answer as (value: unknown) => void)(DISMISSED[open.request.kind]);
  }
}
