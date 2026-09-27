import * as auth from './lib/auth.js';
import * as gmail from './lib/gmail.js';
import * as db from './lib/db.js';
import {
  aggregate,
  buildRawEmail,
  buildScanQuery,
  domainOf,
  formatBytes,
  formatDuration,
  formatNumber,
  fromClauses,
  parseListUnsubscribe,
  parseMailto,
  protectionTerms,
  rootDomain,
  SORTS,
  toCsv,
  toRecord,
} from './lib/parse.js';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const PAGE_SIZE = 100;
const DEFAULT_SETTINGS = {
  scope: 'all',
  customQuery: '',
  olderThan: '',
  maxMessages: 0,
  protectStarred: true,
  protectImportant: false,
  groupBy: 'sender',
  sort: 'count',
  filterUnsub: false,
  filterUnread: false,
  hideKept: false,
};

const state = {
  settings: { ...DEFAULT_SETTINGS },
  keep: new Set(), // sender emails, or "@domain" entries
  unsubscribed: {}, // email -> timestamp
  profile: null,
  cache: new Map(), // message id -> record
  lastScan: null, // { email, query, at, ids: [], complete }
  viewIds: new Set(), // message ids from the last scan that are still present
  groups: [],
  groupIndex: new Map(),
  filtered: [],
  selected: new Set(),
  expanded: new Set(),
  shown: PAGE_SIZE,
  search: '',
  scanAbort: null,
  busy: false,
};

// ---------------------------------------------------------------------------
// Boot

init().catch((e) => showError(e));

async function init() {
  const stored = await chrome.storage.local.get(['settings', 'keep', 'unsubscribed', 'lastScan']);
  state.settings = { ...DEFAULT_SETTINGS, ...stored.settings };
  state.keep = new Set(stored.keep || []);
  state.unsubscribed = stored.unsubscribed || {};
  state.lastScan = stored.lastScan || null;

  bindUi();
  applySettingsToUi();

  if (!(await auth.getClientId())) return showView('setup');
  try {
    await auth.getToken({ interactive: false });
    await onSignedIn();
  } catch {
    showView('signin');
  }
}

function showView(name) {
  $('#setupView').hidden = name !== 'setup';
  $('#signinView').hidden = name !== 'signin';
  $('#appView').hidden = name !== 'app';
  $('#account').hidden = name !== 'app';
  if (name === 'setup') {
    $('#redirectUri').textContent = auth.redirectUri();
  }
  updateActionBar();
}

async function onSignedIn() {
  state.profile = await gmail.getProfile();
  await auth.setLoginHint(state.profile.emailAddress);
  $('#accountEmail').textContent = state.profile.emailAddress;

  // Cached data belongs to a single account; drop it if the user switched accounts.
  if (state.lastScan && state.lastScan.email !== state.profile.emailAddress) {
    await db.clear();
    state.lastScan = null;
    await chrome.storage.local.remove('lastScan');
  }

  const records = await db.getAll();
  state.cache = new Map(records.map((r) => [r.id, r]));
  state.viewIds = new Set(state.lastScan?.ids || []);
  showView('app');
  recompute();
  updateScanInfo();
}

// ---------------------------------------------------------------------------
// UI wiring

function bindUi() {
  $('#copyRedirectBtn').addEventListener('click', async () => {
    await navigator.clipboard.writeText(auth.redirectUri());
    toast('Redirect URI copied');
  });
  $('#clientIdForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = $('#clientIdInput').value.trim();
    if (!/\.apps\.googleusercontent\.com$/.test(id)) {
      toast('That doesn’t look like an OAuth client ID (it should end in .apps.googleusercontent.com)', { error: true });
      return;
    }
    await auth.setClientId(id);
    showView('signin');
  });

  $('#signInBtn').addEventListener('click', () => signIn(false));
  $('#switchAccountBtn').addEventListener('click', () => signIn(true));
  $('#signOutBtn').addEventListener('click', async () => {
    await auth.signOut();
    showView('signin');
  });

  for (const id of ['scope', 'olderThan', 'maxMessages']) {
    $('#' + id).addEventListener('change', (e) => {
      state.settings[id] = id === 'maxMessages' ? Number(e.target.value) : e.target.value;
      $('#customQueryWrap').hidden = state.settings.scope !== 'custom';
      saveSettings();
    });
  }
  $('#customQuery').addEventListener('input', (e) => {
    state.settings.customQuery = e.target.value;
    saveSettings();
  });
  for (const id of ['protectStarred', 'protectImportant']) {
    $('#' + id).addEventListener('change', (e) => {
      state.settings[id] = e.target.checked;
      saveSettings();
    });
  }
  $('#scanBtn').addEventListener('click', scan);
  $('#stopBtn').addEventListener('click', () => state.scanAbort?.abort());

  $('#search').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    state.shown = PAGE_SIZE;
    applyFilters();
  });
  $$('.segmented button').forEach((b) =>
    b.addEventListener('click', () => {
      state.settings.groupBy = b.dataset.group;
      state.selected.clear();
      state.expanded.clear();
      state.shown = PAGE_SIZE;
      saveSettings();
      applySettingsToUi();
      recompute();
    }),
  );
  $('#sort').addEventListener('change', (e) => {
    state.settings.sort = e.target.value;
    saveSettings();
    applyFilters();
  });
  $$('.chip').forEach((c) =>
    c.addEventListener('click', () => {
      const key = c.dataset.filter;
      state.settings[key] = !state.settings[key];
      state.shown = PAGE_SIZE;
      saveSettings();
      applySettingsToUi();
      applyFilters();
    }),
  );
  $('#exportBtn').addEventListener('click', exportCsv);
  $('#moreBtn').addEventListener('click', () => {
    state.shown += PAGE_SIZE;
    renderRows();
  });

  $('#selectAll').addEventListener('change', (e) => {
    const selectable = state.filtered.filter((g) => !isKept(g));
    if (e.target.checked) selectable.forEach((g) => state.selected.add(g.key));
    else selectable.forEach((g) => state.selected.delete(g.key));
    renderRows();
    updateActionBar();
  });

  $('#rows').addEventListener('click', onRowClick);
  $('#rows').addEventListener('change', (e) => {
    if (!e.target.matches('input[type=checkbox]')) return;
    const key = e.target.closest('tr').dataset.key;
    if (e.target.checked) state.selected.add(key);
    else state.selected.delete(key);
    e.target.closest('tr').classList.toggle('selected', e.target.checked);
    updateSelectAll();
    updateActionBar();
  });

  $$('#actionBar [data-action]').forEach((b) => b.addEventListener('click', () => runAction(b.dataset.action)));
  $('#clearSelectionBtn').addEventListener('click', () => {
    state.selected.clear();
    renderRows();
    updateActionBar();
  });

  $('#emptyTrashBtn').addEventListener('click', () => emptyFolder('TRASH', 'Trash'));
  $('#emptySpamBtn').addEventListener('click', () => emptyFolder('SPAM', 'Spam'));
  $('#clearKeptBtn').addEventListener('click', async () => {
    if (!state.keep.size) return toast('No kept senders');
    const ok = await confirmModal('Clear kept list?', `<p>${state.keep.size} kept senders will become selectable again.</p>`, 'Clear');
    if (!ok) return;
    state.keep.clear();
    await saveKeep();
    applyFilters();
  });
  $('#clearCacheBtn').addEventListener('click', async () => {
    const ok = await confirmModal(
      'Clear cached data?',
      '<p>This only removes the scan results stored in this browser. Your email is not affected. The next scan will start from scratch.</p>',
      'Clear cache',
    );
    if (!ok) return;
    await db.clear();
    state.cache.clear();
    state.viewIds.clear();
    state.lastScan = null;
    await chrome.storage.local.remove('lastScan');
    recompute();
    updateScanInfo();
  });
  $('#resetClientBtn').addEventListener('click', async () => {
    await auth.signOut();
    await auth.setClientId('');
    showView('setup');
  });

  window.addEventListener('beforeunload', (e) => {
    if (state.busy) e.preventDefault();
  });
}

function applySettingsToUi() {
  const s = state.settings;
  $('#scope').value = s.scope;
  $('#olderThan').value = s.olderThan;
  $('#maxMessages').value = String(s.maxMessages);
  $('#customQuery').value = s.customQuery;
  $('#customQueryWrap').hidden = s.scope !== 'custom';
  $('#protectStarred').checked = s.protectStarred;
  $('#protectImportant').checked = s.protectImportant;
  $('#sort').value = s.sort;
  $$('.segmented button').forEach((b) => b.classList.toggle('active', b.dataset.group === s.groupBy));
  $$('.chip').forEach((c) => c.classList.toggle('active', !!s[c.dataset.filter]));
}

function saveSettings() {
  return chrome.storage.local.set({ settings: state.settings });
}
function saveKeep() {
  return chrome.storage.local.set({ keep: [...state.keep] });
}
function saveLastScan() {
  if (!state.lastScan) return;
  state.lastScan.ids = [...state.viewIds];
  return chrome.storage.local.set({ lastScan: state.lastScan });
}

async function signIn(selectAccount) {
  $('#signinError').hidden = true;
  try {
    await auth.getToken({ interactive: true, selectAccount });
    await onSignedIn();
  } catch (e) {
    showView('signin');
    $('#signinError').textContent = friendlyAuthError(e);
    $('#signinError').hidden = false;
  }
}

function friendlyAuthError(e) {
  const msg = e?.message || String(e);
  if (/redirect_uri_mismatch/i.test(msg))
    return `Google rejected the redirect URI. Make sure ${auth.redirectUri()} is listed exactly under Authorized redirect URIs.`;
  if (/access_denied|cancel|did not approve/i.test(msg)) return 'Sign-in was cancelled.';
  if (/Authorization page could not be loaded/i.test(msg))
    return 'The Google sign-in page could not load. Check that the client ID is correct and is a "Web application" client.';
  return `Sign-in failed: ${msg}`;
}

// ---------------------------------------------------------------------------
// Scanning

async function scan() {
  if (state.busy) return;
  const query = buildScanQuery(state.settings);
  const max = state.settings.maxMessages || Infinity;
  const abort = new AbortController();
  state.scanAbort = abort;
  setBusy(true, 'scan');

  let pending = [];
  const flush = async () => {
    const batch = pending;
    pending = [];
    await db.putMany(batch);
  };

  try {
    setProgress('Finding messages…', null);
    const ids = await gmail.listMessageIds(query, {
      max,
      signal: abort.signal,
      onProgress: (n) => setProgress(`Finding messages… ${formatNumber(n)} so far`, null),
    });

    state.lastScan = { email: state.profile.emailAddress, query, at: Date.now(), ids, complete: false };
    state.viewIds = new Set(ids);
    state.selected.clear();

    const missing = ids.filter((id) => !state.cache.has(id));
    const start = performance.now();
    let done = 0;
    let lastRender = 0;
    const report = () => {
      const pct = missing.length ? done / missing.length : 1;
      const elapsed = performance.now() - start;
      const eta = done > 20 ? formatDuration((elapsed / done) * (missing.length - done)) : '…';
      const cached = ids.length - missing.length;
      setProgress(
        `Reading ${formatNumber(done)} of ${formatNumber(missing.length)} new messages` +
          (cached ? ` (${formatNumber(cached)} already cached)` : '') +
          (done < missing.length ? ` · about ${eta} left` : ''),
        pct,
      );
    };
    report();

    await gmail.pool(
      missing,
      10,
      async (id) => {
        try {
          const record = toRecord(await gmail.getMessageMeta(id, { signal: abort.signal }));
          state.cache.set(id, record);
          pending.push(record);
        } catch (e) {
          if (e.status === 404) state.viewIds.delete(id); // deleted since listing
          else {
            abort.abort(e);
            throw e;
          }
        }
        done++;
        if (pending.length >= 250) await flush();
        const now = performance.now();
        if (now - lastRender > 1500) {
          lastRender = now;
          report();
          recompute();
        }
      },
      abort.signal,
    );

    state.lastScan.complete = true;
    toast(`Scan complete: ${formatNumber(state.viewIds.size)} emails`);
  } catch (e) {
    // Stop button -> the signal's reason is a DOMException named AbortError; worker failures abort with the real error.
    if (abort.signal.reason?.name === 'AbortError') {
      toast('Scan stopped. Showing what was read so far; scan again to continue where you left off.');
    } else showError(e);
  } finally {
    await flush().catch(() => {});
    await saveLastScan();
    state.scanAbort = null;
    setBusy(false);
    recompute();
    updateScanInfo();
  }
}

function setProgress(text, fraction) {
  $('#progress').hidden = false;
  $('#progressText').textContent = text;
  const fill = $('#progressFill');
  fill.classList.toggle('indeterminate', fraction === null);
  fill.style.width = fraction === null ? '' : `${Math.round(fraction * 100)}%`;
}

function setBusy(busy, kind) {
  state.busy = busy;
  $('#scanBtn').disabled = busy;
  $('#stopBtn').hidden = !(busy && kind === 'scan');
  $$('#actionBar [data-action]').forEach((b) => (b.disabled = busy));
  if (!busy) $('#progress').hidden = true;
}

function updateScanInfo() {
  const s = state.lastScan;
  if (!s) {
    $('#scanInfo').textContent = 'Pick what to scan and press “Scan mailbox”. A first full scan of a big mailbox can take a while (Gmail allows about 40 messages per second); later scans only read new mail.';
    return;
  }
  const read = [...state.viewIds].filter((id) => state.cache.has(id)).length;
  const partial = read < state.viewIds.size ? ` (partial: ${formatNumber(read)} of ${formatNumber(state.viewIds.size)} read, scan again to finish)` : '';
  $('#scanInfo').textContent = `Last scan ${new Date(s.at).toLocaleString()} · search: ${s.query || '(all mail)'}${partial}`;
}

// ---------------------------------------------------------------------------
// Grouping, filtering and rendering

function viewRecords() {
  const out = [];
  for (const id of state.viewIds) {
    const r = state.cache.get(id);
    if (r) out.push(r);
  }
  return out;
}

function recompute() {
  const records = viewRecords();
  state.groups = aggregate(records, state.settings.groupBy);
  state.groupIndex = new Map(state.groups.map((g) => [g.key, g]));
  for (const key of state.selected) if (!state.groupIndex.has(key)) state.selected.delete(key);
  $('#resultsView').hidden = records.length === 0;
  renderStats(records);
  renderInsights();
  applyFilters();
}

function isKept(g) {
  if (state.keep.has(g.key)) return true;
  if (state.settings.groupBy === 'sender') return state.keep.has('@' + rootDomain(domainOf(g.key)));
  return false;
}

function applyFilters() {
  const s = state.settings;
  const q = state.search;
  state.filtered = state.groups
    .filter((g) => {
      if (s.filterUnsub && !g.hasUnsub) return false;
      if (s.filterUnread && !(g.unreadRatio >= 0.8 && g.count >= 2)) return false;
      if (s.hideKept && isKept(g)) return false;
      if (q && !g.key.includes(q) && !g.name.toLowerCase().includes(q)) return false;
      return true;
    })
    .sort(SORTS[s.sort] || SORTS.count);
  renderRows();
  updateActionBar();
}

function renderStats(records) {
  let size = 0;
  let unread = 0;
  for (const r of records) {
    size += r.size;
    if (r.unread) unread++;
  }
  const senders = state.settings.groupBy === 'sender' ? state.groups.length : new Set(records.map((r) => r.email)).size;
  const withUnsub = state.groups.filter((g) => g.hasUnsub).length;
  const tiles = [
    [formatNumber(records.length), 'emails scanned'],
    [formatNumber(senders), 'different senders'],
    [formatBytes(size), 'total size'],
    [records.length ? `${Math.round((unread / records.length) * 100)}%` : '0%', 'unread'],
    [formatNumber(withUnsub), `${state.settings.groupBy === 'sender' ? 'senders' : 'domains'} you can unsubscribe from`],
  ];
  $('#stats').innerHTML = tiles
    .map(([v, l]) => `<div class="stat"><div class="value">${esc(v)}</div><div class="label">${esc(l)}</div></div>`)
    .join('');
}

function renderInsights() {
  const groups = state.groups.filter((g) => !isKept(g));
  const total = groups.reduce((n, g) => n + g.count, 0);
  if (!total) return ($('#insights').innerHTML = '');
  const noun = state.settings.groupBy === 'sender' ? 'senders' : 'domains';
  const cards = [];

  if (groups.length > 10) {
    const top10 = [...groups].sort(SORTS.count).slice(0, 10);
    const topCount = top10.reduce((n, g) => n + g.count, 0);
    cards.push({
      id: 'top10',
      title: `Your top 10 ${noun} sent ${Math.round((topCount / total) * 100)}% of your mail`,
      text: `${formatNumber(topCount)} emails. Click to select them for review.`,
    });
  }

  const ignored = groups.filter((g) => g.count >= 5 && g.unreadRatio >= 0.9);
  if (ignored.length) {
    cards.push({
      id: 'ignored',
      title: `${formatNumber(ignored.length)} ${noun} you never read`,
      text: `${formatNumber(ignored.reduce((n, g) => n + g.count, 0))} emails you left unopened. Good candidates for unsubscribe + trash.`,
    });
  }

  const newsletters = groups.filter((g) => g.hasUnsub);
  if (newsletters.length) {
    cards.push({
      id: 'newsletters',
      title: `${formatNumber(newsletters.length)} mailing lists & newsletters`,
      text: `${formatNumber(newsletters.reduce((n, g) => n + g.count, 0))} emails from ${noun} with an unsubscribe link.`,
    });
  }

  const heavy = groups.filter((g) => g.size >= 10 * 1024 * 1024);
  if (heavy.length) {
    cards.push({
      id: 'heavy',
      title: `${formatNumber(heavy.length)} ${noun} using over 10 MB each`,
      text: `${formatBytes(heavy.reduce((n, g) => n + g.size, 0))} in total. Sort by storage to see them.`,
    });
  }

  $('#insights').innerHTML = cards
    .map((c) => `<button class="insight" data-insight="${c.id}"><strong>${esc(c.title)}</strong><span>${esc(c.text)}</span></button>`)
    .join('');
  $$('#insights .insight').forEach((b) => b.addEventListener('click', () => onInsight(b.dataset.insight)));
}

function onInsight(id) {
  const s = state.settings;
  s.filterUnsub = false;
  s.filterUnread = false;
  state.search = '';
  $('#search').value = '';
  if (id === 'top10') {
    s.sort = 'count';
    state.selected = new Set([...state.groups].filter((g) => !isKept(g)).sort(SORTS.count).slice(0, 10).map((g) => g.key));
  } else if (id === 'ignored') {
    s.filterUnread = true;
    s.sort = 'count';
  } else if (id === 'newsletters') {
    s.filterUnsub = true;
    s.sort = 'count';
  } else if (id === 'heavy') {
    s.sort = 'size';
  }
  state.shown = PAGE_SIZE;
  saveSettings();
  applySettingsToUi();
  applyFilters();
  $('.list').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderRows() {
  const rows = state.filtered.slice(0, state.shown);
  const max = state.filtered.reduce((m, g) => Math.max(m, g.count), 0) || 1;
  const html = [];
  for (const g of rows) {
    const kept = isKept(g);
    const selected = state.selected.has(g.key);
    const open = state.expanded.has(g.key);
    const addresses = g.emails.size;
    const unsubscribed = [...g.emails.keys()].some((e) => state.unsubscribed[e]);
    const subtitle =
      state.settings.groupBy === 'domain' ? `${addresses} address${addresses === 1 ? '' : 'es'}` : g.key;
    html.push(`
      <tr class="row${selected ? ' selected' : ''}${kept ? ' kept' : ''}" data-key="${esc(g.key)}">
        <td class="col-check"><input type="checkbox" ${selected ? 'checked' : ''} ${kept ? 'disabled title="Kept senders can’t be selected"' : ''} aria-label="Select ${esc(g.name)}"></td>
        <td>
          <div class="sender">
            <button class="expand${open ? ' open' : ''}" data-act="expand" aria-label="Show details">▶</button>
            <div class="sender-text">
              <div class="sender-name" title="${esc(g.name)}">${esc(g.name)}${g.hasUnsub ? '<span class="badge">list</span>' : ''}${unsubscribed ? '<span class="badge done">unsubscribed</span>' : ''}${kept ? '<span class="badge">kept</span>' : ''}</div>
              <div class="sender-email" title="${esc(subtitle)}">${esc(subtitle)}</div>
            </div>
          </div>
        </td>
        <td class="col-count"><div class="countbar"><div class="fill" style="width:${Math.max(2, (g.count / max) * 100)}%"></div><span>${formatNumber(g.count)}</span></div></td>
        <td class="col-num">${Math.round(g.unreadRatio * 100)}%</td>
        <td class="col-num">${formatBytes(g.size)}</td>
        <td class="col-date">${formatDate(g.latest)}</td>
        <td class="col-actions">
          <button class="icon-btn${kept ? ' on' : ''}" data-act="keep" title="${kept ? 'Stop keeping' : 'Keep: protect from bulk actions'}">${kept ? '★ Kept' : '☆ Keep'}</button>
          <a class="icon-btn" href="${gmailSearchUrl(g)}" target="_blank" rel="noopener" title="Open these emails in Gmail">Open ↗</a>
        </td>
      </tr>`);
    if (open) html.push(detailsRow(g));
  }
  $('#rows').innerHTML = html.join('');
  $('#emptyState').hidden = state.filtered.length > 0 || state.groups.length === 0;
  const remaining = state.filtered.length - rows.length;
  $('#moreBtn').hidden = remaining <= 0;
  $('#moreBtn').textContent = `Show ${Math.min(PAGE_SIZE, remaining)} more (${formatNumber(remaining)} left)`;
  updateSelectAll();
}

function detailsRow(g) {
  const recent = g.recent
    .map((m) => `<li><span class="date">${formatDate(m.date)}</span><span>${esc(m.subject || '(no subject)')}</span></li>`)
    .join('');
  const addresses = [...g.emails.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 30)
    .map(([email, e]) => `<span>${esc(email)} · ${formatNumber(e.count)}</span>`)
    .join('');
  return `
    <tr class="details"><td colspan="7">
      <h4>Recent subjects</h4>
      <ul>${recent}</ul>
      <h4>Addresses</h4>
      <div class="addresses">${addresses}</div>
      <p class="muted small">Oldest email: ${formatDate(g.oldest)} · In inbox: ${formatNumber(g.inbox)}</p>
    </td></tr>`;
}

async function onRowClick(e) {
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const key = btn.closest('tr').dataset.key;
  const g = state.groupIndex.get(key);
  if (!g) return;
  if (btn.dataset.act === 'expand') {
    if (state.expanded.has(key)) state.expanded.delete(key);
    else state.expanded.add(key);
    renderRows();
  } else if (btn.dataset.act === 'keep') {
    if (isKept(g)) {
      state.keep.delete(g.key);
      if (state.settings.groupBy === 'sender') state.keep.delete('@' + rootDomain(domainOf(g.key)));
    } else {
      state.keep.add(g.key);
      state.selected.delete(g.key);
    }
    await saveKeep();
    renderInsights();
    applyFilters();
  }
}

function updateSelectAll() {
  const selectable = state.filtered.filter((g) => !isKept(g));
  const n = selectable.filter((g) => state.selected.has(g.key)).length;
  const box = $('#selectAll');
  box.checked = n > 0 && n === selectable.length;
  box.indeterminate = n > 0 && n < selectable.length;
  box.title = `Select all ${selectable.length} shown`;
}

function updateActionBar() {
  const groups = selectedGroups();
  $('#actionBar').hidden = groups.length === 0 || $('#appView').hidden;
  if (!groups.length) return;
  const count = groups.reduce((n, g) => n + g.count, 0);
  const size = groups.reduce((n, g) => n + g.size, 0);
  const noun = state.settings.groupBy === 'sender' ? 'sender' : 'domain';
  $('#selectionText').innerHTML = `${formatNumber(groups.length)} ${noun}${groups.length === 1 ? '' : 's'} selected <span class="muted">· ${formatNumber(count)} emails · ${formatBytes(size)}</span>`;
}

function selectedGroups() {
  return [...state.selected].map((k) => state.groupIndex.get(k)).filter(Boolean);
}

function gmailSearchUrl(g) {
  const q = `from:${g.key}`; // "@domain" keys search the whole domain
  const user = encodeURIComponent(state.profile?.emailAddress || '0');
  return `https://mail.google.com/mail/u/?authuser=${user}#search/${encodeURIComponent(q)}`;
}

function exportCsv() {
  const blob = new Blob([toCsv(state.filtered)], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gmail-senders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// ---------------------------------------------------------------------------
// Bulk actions

/** Sender addresses a group's actions should apply to (individually kept addresses excluded). */
function actionEmails(g) {
  return [...g.emails.keys()].filter((e) => !state.keep.has(e));
}

/**
 * Find every message from the given groups that matches the last scan's search
 * (so "older than 1 year" etc. is respected), plus the current protection settings.
 */
async function resolveIds(groups, extra = '') {
  const emails = [...new Set(groups.flatMap(actionEmails))];
  const base = [state.lastScan?.query || '', ...protectionTerms(state.settings), extra].join(' ').trim();
  const ids = new Set();
  for (const clause of fromClauses(emails)) {
    const found = await gmail.listMessageIds(`${clause} ${base}`, {
      onProgress: (n) => modalStatus(`Finding emails… ${formatNumber(ids.size + n)}`),
    });
    found.forEach((id) => ids.add(id));
  }
  return [...ids];
}

const ACTIONS = {
  trash: {
    title: 'Move to Trash',
    verb: 'Moving to Trash',
    button: 'Move to Trash',
    note: 'They stay in Trash for 30 days, then Gmail deletes them for good. You can undo right after.',
  },
  archive: {
    title: 'Archive',
    verb: 'Archiving',
    button: 'Archive',
    extra: 'in:inbox',
    note: 'Removes them from your inbox. They stay searchable in All Mail.',
  },
  read: {
    title: 'Mark as read',
    verb: 'Marking as read',
    button: 'Mark read',
    extra: 'is:unread',
    note: '',
  },
  delete: {
    title: 'Delete forever',
    verb: 'Deleting',
    button: 'Delete forever',
    danger: true,
    note: 'This skips the Trash. It cannot be undone.',
  },
};

async function runAction(type) {
  if (state.busy) return;
  const groups = selectedGroups().filter((g) => !isKept(g));
  if (!groups.length) return;
  if (type === 'unsubscribe') return unsubscribe(groups);
  if (type === 'filter') return blockFuture(groups);

  const spec = ACTIONS[type];
  if (type === 'delete' && !(await ensureFullScope())) return;

  setBusy(true);
  try {
    openModal(spec.title, '<p class="muted">Finding emails…</p>', []);
    const ids = await resolveIds(groups, spec.extra);
    if (!ids.length) {
      await confirmModal(spec.title, '<p>Nothing to do: no matching emails were found.</p>', null);
      return;
    }
    const body = `
      <p><b>${formatNumber(ids.length)} emails</b> from ${senderSummary(groups)}.</p>
      ${spec.note ? `<p class="${spec.danger ? 'warn' : 'muted'}">${spec.note}</p>` : ''}
      ${protectionNote()}`;
    const ok = await confirmModal(spec.title, body, spec.button, spec.danger);
    if (!ok) return;

    await executeAction(type, ids, groups);
  } catch (e) {
    closeModal();
    showError(e);
  } finally {
    setBusy(false);
  }
}

async function executeAction(type, ids, groups) {
  const spec = ACTIONS[type];
  openModal(spec.title, '', []);
  const progress = (n) => modalStatus(`${spec.verb}… ${formatNumber(n)} of ${formatNumber(ids.length)}`, n / ids.length);
  progress(0);

  if (type === 'trash') await trashIds(ids, progress);
  else if (type === 'archive') await gmail.batchModify(ids, { remove: ['INBOX'] }, progress);
  else if (type === 'read') await gmail.batchModify(ids, { remove: ['UNREAD'] }, progress);
  else if (type === 'delete') await gmail.batchDelete(ids, progress);
  closeModal();

  const undo = await applyLocally(type, ids);
  for (const g of groups) state.selected.delete(g.key);
  recompute();
  updateScanInfo();

  toast(doneMessage(type, ids.length), undo ? { action: 'Undo', onAction: undo } : {});
}

function doneMessage(type, n) {
  const c = formatNumber(n);
  return {
    trash: `Moved ${c} emails to Trash`,
    archive: `Archived ${c} emails`,
    read: `Marked ${c} emails as read`,
    delete: `Permanently deleted ${c} emails`,
  }[type];
}

async function trashIds(ids, progress) {
  try {
    await gmail.batchModify(ids, { add: ['TRASH'] }, progress);
  } catch (e) {
    if (e.status !== 400) throw e;
    // Fallback: trash one by one if the batch label change is rejected.
    let n = 0;
    await gmail.pool(ids, 8, async (id) => {
      await gmail.trashMessage(id);
      progress(++n);
    });
  }
}

/** Update the local cache/view after an action. Returns an undo function if the action can be undone. */
async function applyLocally(type, ids) {
  const query = state.lastScan?.query || '';
  const touched = [];
  const hadInView = ids.filter((id) => state.viewIds.has(id));
  const wasInInbox = ids.filter((id) => state.cache.get(id)?.inbox);

  if (type === 'trash' || type === 'delete') {
    ids.forEach((id) => state.viewIds.delete(id));
    if (type === 'delete') {
      ids.forEach((id) => state.cache.delete(id));
      await db.deleteMany(ids);
    }
  } else {
    for (const id of ids) {
      const r = state.cache.get(id);
      if (!r) continue;
      if (type === 'archive') r.inbox = false;
      if (type === 'read') r.unread = false;
      touched.push(r);
      if ((type === 'archive' && /in:inbox/.test(query)) || (type === 'read' && /is:unread/.test(query))) {
        state.viewIds.delete(id);
      }
    }
    await db.putMany(touched);
  }
  await saveLastScan();

  if (type === 'delete') return null;
  return async () => {
    try {
      openModal('Undoing…', '', []);
      const progress = (n) => modalStatus(`Restoring… ${formatNumber(n)} of ${formatNumber(ids.length)}`, n / ids.length);
      if (type === 'trash') {
        await gmail.batchModify(ids, { remove: ['TRASH'] }, progress);
        if (wasInInbox.length) await gmail.batchModify(wasInInbox, { add: ['INBOX'] });
      } else if (type === 'archive') {
        await gmail.batchModify(ids, { add: ['INBOX'] }, progress);
      } else if (type === 'read') {
        await gmail.batchModify(ids, { add: ['UNREAD'] }, progress);
      }
      for (const r of touched) {
        if (type === 'archive') r.inbox = true;
        if (type === 'read') r.unread = true;
      }
      await db.putMany(touched);
      hadInView.forEach((id) => state.viewIds.add(id));
      await saveLastScan();
      closeModal();
      recompute();
      updateScanInfo();
      toast('Undone');
    } catch (e) {
      closeModal();
      showError(e);
    }
  };
}

function senderSummary(groups) {
  const names = groups.slice(0, 3).map((g) => `<b>${esc(g.name)}</b>`);
  if (groups.length <= 3) return names.join(', ');
  return `${names.join(', ')} and ${formatNumber(groups.length - 3)} more`;
}

function protectionNote() {
  const s = state.settings;
  const parts = [];
  if (s.protectStarred) parts.push('starred');
  if (s.protectImportant) parts.push('important');
  const scope = state.lastScan?.query ? `Only emails matching your scan (<code>${esc(state.lastScan.query)}</code>) are included.` : '';
  return `<p class="muted small">${parts.length ? `Skipping ${parts.join(' and ')} emails. ` : ''}${scope}</p>`;
}

async function ensureFullScope() {
  if (await auth.hasScope(auth.FULL_SCOPE)) return true;
  const ok = await confirmModal(
    'Extra permission needed',
    '<p>Permanently deleting email needs Gmail’s full-access permission, which the extension only asks for when you use this feature. Google will show a consent screen next.</p><p class="muted small">If you’d rather not grant it, “Move to Trash” does the same job: Gmail empties Trash after 30 days.</p>',
    'Continue',
  );
  if (!ok) return false;
  try {
    await auth.getToken({ interactive: true, scopes: [...auth.BASE_SCOPES, auth.FULL_SCOPE] });
    return await auth.hasScope(auth.FULL_SCOPE);
  } catch (e) {
    showError(e);
    return false;
  }
}

// --- Unsubscribe -----------------------------------------------------------

async function unsubscribe(groups) {
  const targets = [];
  const none = [];
  for (const g of groups) {
    for (const email of actionEmails(g)) {
      const info = g.emails.get(email);
      const links = parseListUnsubscribe(info?.unsub);
      if (links.http && info.oneClick) targets.push({ email, method: 'oneclick', url: links.http, http: links.http });
      else if (links.mailto) targets.push({ email, method: 'mailto', url: links.mailto, http: links.http });
      else if (links.http) targets.push({ email, method: 'link', url: links.http, http: links.http });
      else none.push(email);
    }
  }

  const byMethod = (m) => targets.filter((t) => t.method === m).length;
  const body = `
    ${targets.length ? `<p>Found unsubscribe options for <b>${formatNumber(targets.length)}</b> address${targets.length === 1 ? '' : 'es'}:</p>
    <ul>
      ${byMethod('oneclick') ? `<li>${byMethod('oneclick')} will be unsubscribed automatically (one-click)</li>` : ''}
      ${byMethod('mailto') ? `<li>${byMethod('mailto')} by sending an unsubscribe email from your account</li>` : ''}
      ${byMethod('link') ? `<li>${byMethod('link')} need you to confirm on their website (links shown next)</li>` : ''}
    </ul>` : '<p>None of these senders include an unsubscribe option.</p>'}
    ${none.length ? `<p class="muted small">${formatNumber(none.length)} address${none.length === 1 ? ' has' : 'es have'} no unsubscribe option. Use “Block future” for those.</p>` : ''}
    <label class="check"><input type="checkbox" name="trash" checked> Also move their existing emails to Trash</label>
    <label class="check"><input type="checkbox" name="filter"> Also block future emails with a filter (for senders that ignore unsubscribes)</label>`;
  const result = await formModal('Unsubscribe', body, 'Unsubscribe');
  if (!result) return;

  setBusy(true);
  const links = [];
  let ok = 0;
  let failed = 0;
  try {
    openModal('Unsubscribing…', '', []);
    let n = 0;
    for (const t of targets) {
      modalStatus(`Unsubscribing… ${n} of ${targets.length}`, n / targets.length);
      try {
        if (t.method === 'oneclick') {
          // RFC 8058 one-click: a plain form POST. no-cors because we don't need to read the response.
          await fetch(t.url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'List-Unsubscribe=One-Click',
          });
          ok++;
          state.unsubscribed[t.email] = Date.now();
        } else if (t.method === 'mailto') {
          const m = parseMailto(t.url);
          await gmail.sendRaw(buildRawEmail(m));
          ok++;
          state.unsubscribed[t.email] = Date.now();
        } else {
          links.push(t);
        }
      } catch {
        // Fall back to the website link when the automatic method fails.
        if (t.http) links.push({ ...t, url: t.http });
        else failed++;
      }
      n++;
    }
    await chrome.storage.local.set({ unsubscribed: state.unsubscribed });

    if (result.filter) await createFilters(groups, 'trash', () => {});
    closeModal();

    if (result.trash) {
      openModal('Move to Trash', '<p class="muted">Finding emails…</p>', []);
      const ids = await resolveIds(groups);
      if (ids.length) await executeAction('trash', ids, groups);
      else closeModal();
    } else {
      renderRows();
    }

    if (links.length) {
      const list = links
        .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.email)}</a></li>`)
        .join('');
      await confirmModal(
        'Finish on these websites',
        `<p>${ok ? `Unsubscribed from ${ok}. ` : ''}These senders need you to confirm on their page. Click each link:</p><ul class="link-list">${list}</ul>`,
        null,
      );
    } else if (ok) {
      toast(`Unsubscribed from ${ok} sender${ok === 1 ? '' : 's'}${failed ? ` (${failed} failed)` : ''}`);
    }
  } catch (e) {
    closeModal();
    showError(e);
  } finally {
    setBusy(false);
  }
}

// --- Filters ---------------------------------------------------------------

async function blockFuture(groups) {
  const body = `
    <p>Create Gmail filters so future emails from ${senderSummary(groups)} never reach your inbox.</p>
    <label class="radio"><input type="radio" name="mode" value="trash" checked> <span><b>Delete</b>: send straight to Trash</span></label>
    <label class="radio"><input type="radio" name="mode" value="archive"> <span><b>Skip the inbox</b>: archive, still searchable</span></label>
    <label class="radio"><input type="radio" name="mode" value="archiveRead"> <span><b>Skip the inbox and mark read</b></span></label>
    <label class="check"><input type="checkbox" name="applyNow" checked> Apply the same action to their existing emails now</label>
    <p class="muted small">You can review or remove filters in Gmail under Settings → Filters and Blocked Addresses.</p>`;
  const result = await formModal('Block future emails', body, 'Create filters');
  if (!result) return;

  setBusy(true);
  try {
    openModal('Creating filters…', '', []);
    const created = await createFilters(groups, result.mode, (n, total) =>
      modalStatus(`Creating filters… ${n} of ${total}`, n / total),
    );
    closeModal();
    if (result.applyNow) {
      const type = result.mode === 'trash' ? 'trash' : 'archive';
      openModal(ACTIONS[type].title, '<p class="muted">Finding emails…</p>', []);
      const ids = await resolveIds(groups, ACTIONS[type].extra);
      if (ids.length) {
        await executeAction(type, ids, groups);
        if (result.mode === 'archiveRead') await gmail.batchModify(ids, { remove: ['UNREAD'] });
      } else closeModal();
    }
    toast(`Created ${created} filter${created === 1 ? '' : 's'}`);
  } catch (e) {
    closeModal();
    showError(e);
  } finally {
    setBusy(false);
  }
}

async function createFilters(groups, mode, onProgress) {
  const action = {
    trash: { addLabelIds: ['TRASH'], removeLabelIds: ['INBOX'] },
    archive: { removeLabelIds: ['INBOX'] },
    archiveRead: { removeLabelIds: ['INBOX', 'UNREAD'] },
  }[mode];

  // One filter per domain when a whole domain is selected (and nothing in it is kept), otherwise per address.
  const froms = [];
  for (const g of groups) {
    const emails = actionEmails(g);
    if (state.settings.groupBy === 'domain' && emails.length === g.emails.size) froms.push(g.key);
    else froms.push(...emails);
  }
  let n = 0;
  for (const from of froms) {
    try {
      await gmail.createFilter({ from }, action);
    } catch (e) {
      if (!/exists/i.test(e.message)) throw e; // an identical filter is fine
    }
    onProgress(++n, froms.length);
  }
  return n;
}

// --- Tools -----------------------------------------------------------------

async function emptyFolder(label, name) {
  if (state.busy || !(await ensureFullScope())) return;
  setBusy(true);
  try {
    openModal(`Empty ${name}`, '<p class="muted">Counting…</p>', []);
    const ids = await gmail.listMessageIds('', { labelIds: label, includeSpamTrash: true });
    if (!ids.length) {
      await confirmModal(`Empty ${name}`, `<p>${name} is already empty.</p>`, null);
      return;
    }
    const ok = await confirmModal(
      `Empty ${name}`,
      `<p>Permanently delete <b>${formatNumber(ids.length)} emails</b> in ${name}?</p><p class="warn">This cannot be undone.</p>`,
      'Delete forever',
      true,
    );
    if (!ok) return;
    openModal(`Emptying ${name}…`, '', []);
    await gmail.batchDelete(ids, (n) => modalStatus(`Deleting… ${formatNumber(n)} of ${formatNumber(ids.length)}`, n / ids.length));
    ids.forEach((id) => state.cache.delete(id));
    await db.deleteMany(ids);
    closeModal();
    toast(`Emptied ${name}: ${formatNumber(ids.length)} emails deleted`);
  } catch (e) {
    closeModal();
    showError(e);
  } finally {
    setBusy(false);
  }
}

// ---------------------------------------------------------------------------
// Modal & toasts

let modalResolve = null;

/** Show the dialog. Resolves with the clicked button's value ('' if superseded or closed programmatically). */
function openModal(title, bodyHtml, actions) {
  const dialog = $('#modal');
  settleModal('');
  $('#modalTitle').textContent = title;
  $('#modalBody').innerHTML = bodyHtml;
  $('#modalActions').innerHTML = actions
    .map((a) => `<button type="button" class="btn ${a.kind || ''}" value="${a.value}" ${a.autofocus ? 'autofocus' : ''}>${esc(a.label)}</button>`)
    .join('');
  dialog.dataset.locked = actions.length ? '' : '1'; // no buttons = work in progress, can't be dismissed
  if (!dialog.open) dialog.showModal();
  $('#modalActions [autofocus]')?.focus();
  return new Promise((resolve) => (modalResolve = resolve));
}

function settleModal(value) {
  const resolve = modalResolve;
  modalResolve = null;
  resolve?.(value);
}

function closeModal(value = '') {
  const dialog = $('#modal');
  if (dialog.open) dialog.close();
  settleModal(value);
}

function modalStatus(text, fraction) {
  let status = $('#modalBody .modal-status');
  if (!status) {
    $('#modalBody').innerHTML = `<div class="modal-status"><div class="progress-bar"><div class="progress-fill"></div></div><p class="progress-text"></p></div>`;
    status = $('#modalBody .modal-status');
  }
  const fill = status.querySelector('.progress-fill');
  fill.classList.toggle('indeterminate', fraction === undefined);
  fill.style.width = fraction === undefined ? '' : `${Math.round(fraction * 100)}%`;
  status.querySelector('.progress-text').textContent = text;
}

$('#modalActions').addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (button) closeModal(button.value);
});
$('#modal form').addEventListener('submit', (e) => e.preventDefault());
$('#modal').addEventListener('cancel', (e) => {
  e.preventDefault();
  if (!$('#modal').dataset.locked) closeModal('cancel'); // Esc
});

/** Confirm dialog. Pass `confirmLabel = null` for an informational dialog with just "OK". */
async function confirmModal(title, bodyHtml, confirmLabel, danger = false) {
  const actions = confirmLabel
    ? [
        { label: 'Cancel', value: 'cancel', kind: 'ghost' },
        { label: confirmLabel, value: 'ok', kind: danger ? 'danger solid' : 'primary', autofocus: !danger },
      ]
    : [{ label: 'OK', value: 'ok', kind: 'primary', autofocus: true }];
  return (await openModal(title, bodyHtml, actions)) === 'ok';
}

/** Dialog with form inputs; resolves to an object of the form's values, or null if cancelled. */
async function formModal(title, bodyHtml, confirmLabel) {
  if (!(await confirmModal(title, bodyHtml, confirmLabel))) return null;
  const values = {};
  for (const el of $('#modal form').elements) {
    if (!el.name) continue;
    if (el.type === 'checkbox') values[el.name] = el.checked;
    else if (el.type === 'radio') {
      if (el.checked) values[el.name] = el.value;
    } else values[el.name] = el.value;
  }
  return values;
}

function toast(message, { error = false, action, onAction, timeout } = {}) {
  const el = document.createElement('div');
  el.className = `toast${error ? ' error' : ''}`;
  el.innerHTML = `<span>${esc(message)}</span>`;
  if (action) {
    const b = document.createElement('button');
    b.textContent = action;
    b.addEventListener('click', () => {
      el.remove();
      onAction();
    });
    el.append(b);
  }
  $('#toasts').append(el);
  while ($('#toasts').children.length > 3) $('#toasts').firstElementChild.remove();
  setTimeout(() => el.remove(), timeout ?? (action ? 15000 : error ? 8000 : 4000));
}

function showError(e) {
  console.error(e);
  if (e instanceof auth.AuthRequiredError) {
    showView('signin');
    return;
  }
  const msg = e?.message || String(e);
  toast(msg.includes('insufficient') ? 'Gmail refused: missing permission. Try signing out and in again.' : `Error: ${msg}`, {
    error: true,
  });
}

// ---------------------------------------------------------------------------
// Utils

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function formatDate(ms) {
  if (!ms) return '—';
  const d = new Date(ms);
  const sameYear = d.getFullYear() === new Date().getFullYear();
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', ...(sameYear ? {} : { year: 'numeric' }) });
}
