import { describe, expect, it } from 'vitest';
import { QuotaLimiter } from './rateLimiter';
import { VirtualClock } from '../testing/fixtures';
import { isAbortError } from '../shared/async';

describe('QuotaLimiter', () => {
  it('allows a burst up to the rate, then paces requests', async () => {
    const clock = new VirtualClock();
    const limiter = new QuotaLimiter(100, clock);
    for (let i = 0; i < 20; i++) await limiter.acquire(5);
    expect(clock.time).toBe(0);
    await limiter.acquire(50);
    expect(clock.time).toBeCloseTo(500);
  });

  it('caps a single request at the bucket size so it can always proceed', async () => {
    const clock = new VirtualClock();
    const limiter = new QuotaLimiter(10, clock);
    await limiter.acquire(10);
    await limiter.acquire(1000);
    expect(clock.time).toBeCloseTo(1000);
  });

  it('rejects aborted waiters without blocking later ones', async () => {
    const clock = new VirtualClock();
    const limiter = new QuotaLimiter(10, clock);
    const controller = new AbortController();
    controller.abort();
    await expect(limiter.acquire(1, controller.signal)).rejects.toSatisfy(isAbortError);
    await expect(limiter.acquire(1)).resolves.toBeUndefined();
  });
});
