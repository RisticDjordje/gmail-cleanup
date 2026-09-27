// IndexedDB cache of message metadata so rescans only fetch messages we haven't seen.

const DB_NAME = 'gmail-cleanup';
const STORE = 'messages';

let dbPromise;

function open() {
  dbPromise ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

async function tx(mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const store = t.objectStore(STORE);
    const result = fn(store);
    t.oncomplete = () => resolve(result?.result ?? result);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
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
