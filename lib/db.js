// IndexedDB cache of message metadata so rescans only fetch messages we haven't seen.
// Each Gmail account gets its own database, so switching accounts keeps both caches.

const PREFIX = 'gmail-cleanup:';
const LEGACY_DB = 'gmail-cleanup'; // v1.0 used one shared database
const STORE = 'messages';

let dbName = null;
let dbPromise = null;

function openDb(name) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(name, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error(`Could not open the local cache (${name})`));
    req.onblocked = () => reject(new Error('The local cache is in use by another tab. Close other Gmail Cleanup tabs and try again.'));
  });
}

/** Point the cache at `email`'s database. */
export async function useAccount(email) {
  const name = PREFIX + email;
  if (name === dbName) return;
  const previous = dbPromise;
  dbName = name;
  dbPromise = openDb(name);
  previous?.then((db) => db.close()).catch(() => {});
  await dbPromise;
}

async function tx(mode, fn) {
  if (!dbPromise) throw new Error('No account selected for the local cache');
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const result = fn(t.objectStore(STORE));
    t.oncomplete = () => resolve(result?.result ?? result);
    // transaction.error is only set after the error event, so read it from the failing request.
    t.onerror = (e) => reject(e.target.error || t.error || new Error('Local cache write failed'));
    t.onabort = () => reject(t.error || new Error('Local cache transaction was aborted'));
  });
}

export function getAll() {
  return tx('readonly', (s) => s.getAll());
}

export function putMany(records) {
  if (!records.length) return Promise.resolve();
  return tx('readwrite', (s) => {
    for (const r of records) s.put(r);
  });
}

export function deleteMany(ids) {
  if (!ids.length) return Promise.resolve();
  return tx('readwrite', (s) => {
    for (const id of ids) s.delete(id);
  });
}

export function clear() {
  return tx('readwrite', (s) => s.clear());
}

/** Move a v1.0 shared cache into `email`'s own database, then delete the old one. */
export async function migrateLegacy(email) {
  const dbs = (await indexedDB.databases?.()) || [];
  if (!dbs.some((d) => d.name === LEGACY_DB)) return;
  const legacy = await openDb(LEGACY_DB);
  const records = await new Promise((resolve, reject) => {
    const req = legacy.transaction(STORE, 'readonly').objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  legacy.close();
  if (email && records.length) {
    const target = await openDb(PREFIX + email);
    await new Promise((resolve, reject) => {
      const t = target.transaction(STORE, 'readwrite');
      for (const r of records) t.objectStore(STORE).put(r);
      t.oncomplete = resolve;
      t.onerror = (e) => reject(e.target.error);
    });
    target.close();
  }
  indexedDB.deleteDatabase(LEGACY_DB);
}
