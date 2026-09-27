// Thin Gmail REST client with quota-aware rate limiting, retries and token refresh.
import { getToken, invalidateToken, BASE_SCOPES, FULL_SCOPE } from './auth.js';

const API = 'https://gmail.googleapis.com/gmail/v1/users/me';

// Gmail allows 250 quota units per user per second. Stay comfortably below it.
const UNITS_PER_SECOND = 200;
const COST = { list: 5, get: 5, batchModify: 50, batchDelete: 50, send: 100, filter: 5, profile: 1 };

class QuotaLimiter {
  constructor(rate) {
    this.rate = rate;
    this.tokens = rate;
    this.last = performance.now();
    this.queue = Promise.resolve();
  }
  take(units) {
    // Serialize waiters so they are served in order.
    const next = this.queue.then(async () => {
      for (;;) {
        const now = performance.now();
        this.tokens = Math.min(this.rate, this.tokens + ((now - this.last) / 1000) * this.rate);
        this.last = now;
        if (this.tokens >= units) {
          this.tokens -= units;
          return;
        }
        await sleep(((units - this.tokens) / this.rate) * 1000);
      }
    });
    this.queue = next.catch(() => {});
    return next;
  }
}

const limiter = new QuotaLimiter(UNITS_PER_SECOND);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export class GmailError extends Error {
  constructor(status, message, reason) {
    super(message);
    this.status = status;
    this.reason = reason;
  }
}

async function request(path, { method = 'GET', params, body, cost = 5, scopes = BASE_SCOPES, signal } = {}) {
  const url = new URL(API + path);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null || v === '') continue;
      for (const item of [].concat(v)) url.searchParams.append(k, item);
    }
  }

  let refreshed = false;
  for (let attempt = 0; ; attempt++) {
    signal?.throwIfAborted();
    await limiter.take(cost);
    const token = await getToken({ interactive: true, scopes });
    let res;
    try {
      res = await fetch(url, {
        method,
        signal,
        headers: {
          Authorization: `Bearer ${token}`,
          ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (e) {
      if (e.name === 'AbortError' || attempt >= 5) throw e;
      await backoff(attempt, signal);
      continue;
    }

    if (res.ok) {
      const text = await res.text();
      return text ? JSON.parse(text) : {};
    }

    let data = {};
    try {
      data = await res.json();
    } catch {
      // non-JSON error body
    }
    const reason = data.error?.errors?.[0]?.reason || data.error?.status || '';
    const message = data.error?.message || `${res.status} ${res.statusText}`;

    if (res.status === 401 && !refreshed) {
      refreshed = true;
      await invalidateToken();
      continue;
    }
    const retriable =
      res.status === 429 ||
      res.status >= 500 ||
      (res.status === 403 && /rateLimit|userRateLimit|quota/i.test(reason));
    if (retriable && attempt < 7) {
      await backoff(attempt, signal);
      continue;
    }
    throw new GmailError(res.status, message, reason);
  }
}

function backoff(attempt, signal) {
  const ms = Math.min(32_000, 1000 * 2 ** attempt) + Math.random() * 1000;
  return new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(signal.reason);
    }, { once: true });
  });
}

export function getProfile() {
  return request('/profile', { cost: COST.profile });
}

/** List all message IDs matching `q` (up to `max`). */
export async function listMessageIds(q, { max = Infinity, labelIds, includeSpamTrash, onProgress, signal } = {}) {
  const ids = [];
  let pageToken;
  do {
    const data = await request('/messages', {
      cost: COST.list,
      signal,
      params: {
        q,
        labelIds,
        includeSpamTrash,
        pageToken,
        maxResults: 500,
        fields: 'messages/id,nextPageToken',
      },
    });
    for (const m of data.messages || []) {
      ids.push(m.id);
      if (ids.length >= max) return ids;
    }
    onProgress?.(ids.length);
    pageToken = data.nextPageToken;
  } while (pageToken);
  return ids;
}

export function getMessageMeta(id, { signal } = {}) {
  return request(`/messages/${id}`, {
    cost: COST.get,
    signal,
    params: {
      format: 'metadata',
      metadataHeaders: ['From', 'Subject', 'List-Unsubscribe', 'List-Unsubscribe-Post'],
      fields: 'id,labelIds,sizeEstimate,internalDate,payload/headers',
    },
  });
}

/** Add/remove labels on any number of messages (1000 per API call). */
export async function batchModify(ids, { add = [], remove = [] }, onProgress) {
  for (let i = 0; i < ids.length; i += 1000) {
    await request('/messages/batchModify', {
      method: 'POST',
      cost: COST.batchModify,
      body: { ids: ids.slice(i, i + 1000), addLabelIds: add, removeLabelIds: remove },
    });
    onProgress?.(Math.min(ids.length, i + 1000));
  }
}

/** Permanently delete messages. Requires the full https://mail.google.com/ scope. */
export async function batchDelete(ids, onProgress) {
  for (let i = 0; i < ids.length; i += 1000) {
    await request('/messages/batchDelete', {
      method: 'POST',
      cost: COST.batchDelete,
      scopes: [...BASE_SCOPES, FULL_SCOPE],
      body: { ids: ids.slice(i, i + 1000) },
    });
    onProgress?.(Math.min(ids.length, i + 1000));
  }
}

export function trashMessage(id) {
  return request(`/messages/${id}/trash`, { method: 'POST', cost: COST.get, params: { fields: 'id' } });
}

export function sendRaw(raw) {
  return request('/messages/send', { method: 'POST', cost: COST.send, body: { raw } });
}

export function createFilter(criteria, action) {
  return request('/settings/filters', { method: 'POST', cost: COST.filter, body: { criteria, action } });
}

/** Run `fn` over `items` with at most `concurrency` in flight. */
export async function pool(items, concurrency, fn, signal) {
  let i = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (i < items.length) {
      signal?.throwIfAborted();
      const idx = i++;
      await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
}
