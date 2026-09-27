// Pure helpers with no browser/extension dependencies, so they can be unit tested in Node.

/**
 * Parse an RFC 5322 "From" header into a display name and a lowercase email address.
 * Handles `"Name" <a@b.com>`, `Name <a@b.com>`, `<a@b.com>`, `a@b.com` and `a@b.com (Name)`.
 */
export function parseFrom(header) {
  const raw = (header || '').trim();
  if (!raw) return { name: '', email: '(unknown sender)' };

  const angle = raw.match(/^(.*?)<\s*([^<>\s]+@[^<>\s]+)\s*>\s*$/);
  if (angle) {
    const name = cleanName(angle[1]);
    const email = angle[2].toLowerCase();
    return { name: name || email, email };
  }

  const paren = raw.match(/^([^\s()]+@[^\s()]+)\s*\((.*)\)\s*$/);
  if (paren) {
    const email = paren[1].toLowerCase();
    return { name: cleanName(paren[2]) || email, email };
  }

  const bare = raw.match(/[^\s<>"',;]+@[^\s<>"',;]+/);
  if (bare) {
    const email = bare[0].toLowerCase();
    const rest = cleanName(raw.replace(bare[0], ''));
    return { name: rest || email, email };
  }

  return { name: cleanName(raw) || raw, email: raw.toLowerCase() };
}

function cleanName(s) {
  return (s || '')
    .trim()
    .replace(/^"(.*)"$/, '$1')
    .replace(/\\(.)/g, '$1')
    .replace(/^'(.*)'$/, '$1')
    .trim();
}

export function domainOf(email) {
  const at = (email || '').lastIndexOf('@');
  return at === -1 ? '' : email.slice(at + 1).toLowerCase();
}

// Second-level labels under which registrable domains live one level deeper (e.g. example.co.uk).
const MULTI_PART_SUFFIXES = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'gov.uk', 'me.uk', 'ltd.uk', 'plc.uk',
  'com.au', 'net.au', 'org.au', 'edu.au', 'gov.au',
  'co.nz', 'org.nz', 'co.jp', 'ne.jp', 'or.jp', 'co.kr', 'co.in', 'co.za',
  'com.br', 'com.mx', 'com.ar', 'com.tr', 'com.cn', 'com.hk', 'com.sg', 'com.tw',
  'co.il', 'co.id', 'com.my', 'com.ph', 'com.vn', 'com.ua', 'com.pl',
]);

/** Approximate registrable domain: news.mail.example.co.uk -> example.co.uk */
export function rootDomain(domain) {
  const parts = (domain || '').toLowerCase().split('.').filter(Boolean);
  if (parts.length <= 2) return parts.join('.');
  const lastTwo = parts.slice(-2).join('.');
  return MULTI_PART_SUFFIXES.has(lastTwo) ? parts.slice(-3).join('.') : lastTwo;
}

/**
 * Parse a List-Unsubscribe header, e.g.
 * `<mailto:unsub@x.com?subject=unsubscribe>, <https://x.com/u?id=1>`
 */
export function parseListUnsubscribe(header) {
  const result = { mailto: null, http: null };
  if (!header) return result;
  const entries = header.match(/<[^>]+>/g) || header.split(',');
  for (let entry of entries) {
    entry = entry.trim().replace(/^<|>$/g, '').trim();
    if (!result.mailto && /^mailto:/i.test(entry)) result.mailto = entry;
    else if (!result.http && /^https?:\/\//i.test(entry)) result.http = entry;
  }
  return result;
}

export function parseMailto(url) {
  const withoutScheme = url.replace(/^mailto:/i, '');
  const [addr, query = ''] = withoutScheme.split('?');
  const params = new URLSearchParams(query);
  const get = (k) => {
    for (const [key, v] of params) if (key.toLowerCase() === k) return v;
    return '';
  };
  return {
    to: decodeURIComponent(addr || get('to')),
    subject: get('subject') || 'unsubscribe',
    body: get('body') || 'unsubscribe',
  };
}

/** Is RFC 8058 one-click unsubscribe supported? */
export function isOneClick(postHeader) {
  return /list-unsubscribe\s*=\s*one-click/i.test(postHeader || '');
}

/** Turn a Gmail API message resource (format=metadata) into the compact record we cache. */
export function toRecord(msg) {
  const headers = {};
  for (const h of msg.payload?.headers || []) headers[h.name.toLowerCase()] = h.value;
  const { name, email } = parseFrom(headers.from);
  const labels = new Set(msg.labelIds || []);
  return {
    id: msg.id,
    email,
    name,
    subject: headers.subject || '',
    date: Number(msg.internalDate) || 0,
    size: msg.sizeEstimate || 0,
    unread: labels.has('UNREAD'),
    inbox: labels.has('INBOX'),
    starred: labels.has('STARRED'),
    important: labels.has('IMPORTANT'),
    unsub: headers['list-unsubscribe'] || '',
    oneClick: isOneClick(headers['list-unsubscribe-post']),
  };
}

/**
 * Group cached records by sender email or by domain.
 * Returns groups with counts, sizes, unread counts, dates and a few recent subjects.
 */
export function aggregate(records, groupBy = 'sender') {
  const groups = new Map();
  for (const r of records) {
    const key = groupBy === 'domain' ? '@' + (rootDomain(domainOf(r.email)) || r.email) : r.email;
    let g = groups.get(key);
    if (!g) {
      g = {
        key,
        name: '',
        nameDate: -1,
        emails: new Map(), // email -> { count, unsub, oneClick, unsubDate }
        count: 0,
        size: 0,
        unread: 0,
        inbox: 0,
        latest: 0,
        oldest: Infinity,
        recent: [], // up to 5 most recent {subject, date, id}
      };
      groups.set(key, g);
    }
    g.count++;
    g.size += r.size;
    if (r.unread) g.unread++;
    if (r.inbox) g.inbox++;
    if (r.date > g.latest) g.latest = r.date;
    if (r.date < g.oldest) g.oldest = r.date;
    if (r.date > g.nameDate) {
      g.nameDate = r.date;
      g.name = groupBy === 'domain' ? key.slice(1) : r.name;
    }

    let e = g.emails.get(r.email);
    if (!e) g.emails.set(r.email, (e = { count: 0, unsub: '', oneClick: false, unsubDate: -1 }));
    e.count++;
    if (r.unsub && r.date > e.unsubDate) {
      e.unsub = r.unsub;
      e.oneClick = r.oneClick;
      e.unsubDate = r.date;
    }

    insertRecent(g.recent, r);
  }

  const out = [];
  for (const g of groups.values()) {
    if (g.oldest === Infinity) g.oldest = 0;
    g.hasUnsub = [...g.emails.values()].some((e) => e.unsub);
    g.unreadRatio = g.count ? g.unread / g.count : 0;
    delete g.nameDate;
    out.push(g);
  }
  return out;
}

function insertRecent(list, r) {
  if (list.length === 5 && r.date <= list[4].date) return;
  const item = { subject: r.subject, date: r.date, id: r.id };
  let i = list.findIndex((x) => r.date > x.date);
  if (i === -1) i = list.length;
  list.splice(i, 0, item);
  if (list.length > 5) list.pop();
}

export const SORTS = {
  count: (a, b) => b.count - a.count || b.size - a.size,
  size: (a, b) => b.size - a.size || b.count - a.count,
  unread: (a, b) => b.unread - a.unread || b.count - a.count,
  latest: (a, b) => b.latest - a.latest,
  oldest: (a, b) => a.oldest - b.oldest,
  name: (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
};

/** Quote a term for Gmail search if it contains characters that would break the query. */
export function quoteTerm(term) {
  return /[\s()"{}]/.test(term) ? `"${term.replace(/"/g, '')}"` : term;
}

/** Build `from:(a OR b OR c)` clauses, chunked so queries stay short. */
export function fromClauses(emails, chunkSize = 20) {
  const out = [];
  for (let i = 0; i < emails.length; i += chunkSize) {
    const chunk = emails.slice(i, i + chunkSize).map(quoteTerm);
    out.push(chunk.length === 1 ? `from:${chunk[0]}` : `from:(${chunk.join(' OR ')})`);
  }
  return out;
}

export const SCOPE_QUERIES = {
  all: '',
  inbox: 'in:inbox',
  promotions: 'category:promotions',
  social: 'category:social',
  updates: 'category:updates',
  forums: 'category:forums',
  unread: 'is:unread',
  large: 'larger:5M',
};

/** Build the Gmail search query for a scan from the user's settings. */
export function buildScanQuery(settings) {
  const parts = [];
  if (settings.scope === 'custom') {
    if (settings.customQuery?.trim()) parts.push(`(${settings.customQuery.trim()})`);
  } else if (SCOPE_QUERIES[settings.scope]) {
    parts.push(SCOPE_QUERIES[settings.scope]);
  }
  if (settings.olderThan) parts.push(`older_than:${settings.olderThan}`);
  parts.push(...protectionTerms(settings));
  parts.push('-in:drafts', '-in:chats');
  return parts.join(' ');
}

export function protectionTerms(settings) {
  const parts = [];
  if (settings.protectStarred) parts.push('-is:starred');
  if (settings.protectImportant) parts.push('-is:important');
  return parts;
}

export function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const v = bytes / 1024 ** i;
  return `${v >= 100 || i === 0 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
}

export function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n);
}

export function formatDuration(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ${s % 60}s`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

/** Encode an RFC 2047 header value if it has non-ASCII characters. */
function encodeHeader(value) {
  // eslint-disable-next-line no-control-regex
  if (/^[\x00-\x7F]*$/.test(value)) return value;
  return `=?UTF-8?B?${base64(new TextEncoder().encode(value))}?=`;
}

function base64(bytes) {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

/** Build a base64url-encoded RFC 822 message for the Gmail API `messages.send` endpoint. */
export function buildRawEmail({ to, subject, body }) {
  const lines = [
    `To: ${to.replace(/[\r\n]/g, '')}`,
    `Subject: ${encodeHeader(subject.replace(/[\r\n]/g, ' '))}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64(new TextEncoder().encode(body)),
  ];
  return base64(new TextEncoder().encode(lines.join('\r\n')))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function toCsv(groups) {
  const esc = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = [['Sender', 'Name', 'Emails', 'Unread', 'Size (bytes)', 'Newest', 'Oldest', 'Has unsubscribe']];
  for (const g of groups) {
    rows.push([
      g.key,
      g.name,
      g.count,
      g.unread,
      g.size,
      g.latest ? new Date(g.latest).toISOString().slice(0, 10) : '',
      g.oldest ? new Date(g.oldest).toISOString().slice(0, 10) : '',
      g.hasUnsub ? 'yes' : 'no',
    ]);
  }
  return rows.map((r) => r.map(esc).join(',')).join('\n');
}
