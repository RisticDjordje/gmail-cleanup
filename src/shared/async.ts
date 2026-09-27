/** True for the error an aborted AbortSignal produces (DOMException named AbortError). */
export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

/** Resolve after `ms`, or reject with the signal's reason if it aborts first. */
export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason as Error);
      return;
    }
    const onAbort = (): void => {
      clearTimeout(timer);
      reject(signal?.reason as Error);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

/**
 * Run `worker` over `items` with at most `concurrency` in flight.
 * Stops starting new items on the first failure (or abort) and rethrows it once in-flight work settles.
 */
export async function forEachConcurrent<T>(
  items: readonly T[],
  concurrency: number,
  worker: (item: T, index: number) => Promise<void>,
  signal?: AbortSignal,
): Promise<void> {
  const state: { next: number; failure?: { error: unknown } } = { next: 0 };
  const run = async (): Promise<void> => {
    while (!state.failure && state.next < items.length) {
      if (signal?.aborted) {
        state.failure = { error: signal.reason };
        return;
      }
      const index = state.next++;
      try {
        await worker(items[index] as T, index);
      } catch (error) {
        state.failure ??= { error };
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  if (state.failure) throw state.failure.error;
}

/** Serializes async critical sections (FIFO). */
export class Mutex {
  #tail: Promise<unknown> = Promise.resolve();

  runExclusive<T>(fn: () => Promise<T>): Promise<T> {
    const result = this.#tail.then(fn, fn);
    this.#tail = result.catch(() => undefined);
    return result;
  }
}

/** Split an array into chunks of at most `size`. */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}
