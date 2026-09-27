import { domainOf, registrableDomain } from '../core/domains';
import { parseMailto } from '../core/headers';
import { buildRawEmail } from '../core/mime';
import type { UnsubscribeInfo } from '../core/types';
import type { GmailClient } from '../gmail/client';

export type UnsubscribeMethod = 'oneClick' | 'email' | 'website';

export interface UnsubscribeTarget {
  readonly address: string;
  readonly method: UnsubscribeMethod;
  /** https URL (one-click endpoint or web page), if the sender provided one. */
  readonly url: string | null;
  readonly mailto: string | null;
  /** For `email`: who the unsubscribe email goes to, shown to the user before sending. */
  readonly recipient: string | null;
  /** For `email`: the recipient is on a different domain than the sender (worth a second look). */
  readonly crossDomain: boolean;
}

export interface UnsubscribePlan {
  readonly targets: readonly UnsubscribeTarget[];
  /** Addresses with no usable unsubscribe option. */
  readonly unavailable: readonly string[];
}

export type UnsubscribeResult =
  | { readonly address: string; readonly status: 'done'; readonly method: 'oneClick' | 'email' }
  | { readonly address: string; readonly status: 'needsWebsite'; readonly url: string }
  | { readonly address: string; readonly status: 'failed' };

const site = (email: string): string => registrableDomain(domainOf(email));

/** Pick the most automatic method each sender supports: one-click, then email, then website. */
export function planUnsubscribe(
  entries: Iterable<{ readonly address: string; readonly info: UnsubscribeInfo | null }>,
): UnsubscribePlan {
  const targets: UnsubscribeTarget[] = [];
  const unavailable: string[] = [];
  for (const { address, info } of entries) {
    const common = { address, url: info?.url ?? null, mailto: info?.mailto ?? null };
    const recipient = info?.mailto ? (parseMailto(info.mailto)?.to ?? null) : null;
    if (info?.oneClick && info.url) {
      targets.push({ ...common, method: 'oneClick', recipient: null, crossDomain: false });
    } else if (recipient) {
      targets.push({ ...common, method: 'email', recipient, crossDomain: site(recipient) !== site(address) });
    } else if (info?.url) {
      targets.push({ ...common, method: 'website', recipient: null, crossDomain: false });
    } else {
      unavailable.push(address);
    }
  }
  return { targets, unavailable };
}

/**
 * RFC 8058 one-click unsubscribe: a form POST with no cookies or referrer.
 * `no-cors` because we can't (and needn't) read the response from another origin.
 */
export async function postOneClick(url: string): Promise<void> {
  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'List-Unsubscribe=One-Click',
    signal: AbortSignal.timeout(15_000),
  });
}

export class UnsubscribeService {
  constructor(
    private readonly gmail: Pick<GmailClient, 'sendMessage'>,
    private readonly post: (url: string) => Promise<void> = postOneClick,
  ) {}

  async execute(
    targets: readonly UnsubscribeTarget[],
    onProgress?: (done: number) => void,
  ): Promise<UnsubscribeResult[]> {
    const results: UnsubscribeResult[] = [];
    for (const target of targets) {
      results.push(await this.#unsubscribe(target));
      onProgress?.(results.length);
    }
    return results;
  }

  async #unsubscribe(target: UnsubscribeTarget): Promise<UnsubscribeResult> {
    const { address, url } = target;
    try {
      if (target.method === 'oneClick' && url) {
        await this.post(url);
        return { address, status: 'done', method: 'oneClick' };
      }
      const mail = target.method === 'email' && target.mailto ? parseMailto(target.mailto) : null;
      if (mail) {
        await this.gmail.sendMessage(buildRawEmail(mail));
        return { address, status: 'done', method: 'email' };
      }
    } catch {
      // Fall through to the website, if there is one.
    }
    return url ? { address, status: 'needsWebsite', url } : { address, status: 'failed' };
  }
}
