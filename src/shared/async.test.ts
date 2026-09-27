import { describe, expect, it, vi } from 'vitest';
import { chunk, forEachConcurrent, isAbortError, Mutex, sleep } from './async';

describe('sleep', () => {
  it('resolves after the delay and rejects when aborted', async () => {
    vi.useFakeTimers();
    const done = sleep(100);
    vi.advanceTimersByTime(100);
    await expect(done).resolves.toBeUndefined();

    const controller = new AbortController();
    const pending = sleep(1000, controller.signal);
    controller.abort();
    await expect(pending).rejects.toSatisfy(isAbortError);
    await expect(sleep(1, controller.signal)).rejects.toSatisfy(isAbortError);
    vi.useRealTimers();
  });
});

describe('forEachConcurrent', () => {
  it('limits concurrency and visits every item', async () => {
    let active = 0;
    let peak = 0;
    const seen: number[] = [];
    await forEachConcurrent([1, 2, 3, 4, 5, 6, 7], 3, async (n) => {
      active++;
      peak = Math.max(peak, active);
      await Promise.resolve();
      seen.push(n);
      active--;
    });
    expect(peak).toBe(3);
    expect(seen.sort()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('stops scheduling after a failure and rethrows it', async () => {
    const started: number[] = [];
    await expect(
      forEachConcurrent([1, 2, 3, 4, 5], 1, async (n) => {
        started.push(n);
        if (n === 2) throw new Error('boom');
      }),
    ).rejects.toThrow('boom');
    expect(started).toEqual([1, 2]);
  });

  it('stops when the signal aborts', async () => {
    const controller = new AbortController();
    const started: number[] = [];
    await expect(
      forEachConcurrent(
        [1, 2, 3],
        1,
        async (n) => {
          started.push(n);
          controller.abort();
        },
        controller.signal,
      ),
    ).rejects.toSatisfy(isAbortError);
    expect(started).toEqual([1]);
  });

  it('handles empty input', async () => {
    await expect(forEachConcurrent([], 4, () => Promise.reject(new Error('no')))).resolves.toBeUndefined();
  });
});

describe('Mutex', () => {
  it('runs sections one at a time in order, surviving failures', async () => {
    const mutex = new Mutex();
    const log: string[] = [];
    const section = (name: string, fail = false) =>
      mutex.runExclusive(async () => {
        log.push(`start ${name}`);
        await Promise.resolve();
        log.push(`end ${name}`);
        if (fail) throw new Error(name);
        return name;
      });
    const results = await Promise.allSettled([section('a'), section('b', true), section('c')]);
    expect(log).toEqual(['start a', 'end a', 'start b', 'end b', 'start c', 'end c']);
    expect(results.map((r) => r.status)).toEqual(['fulfilled', 'rejected', 'fulfilled']);
  });
});

describe('chunk', () => {
  it('splits arrays', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([], 3)).toEqual([]);
  });
});
