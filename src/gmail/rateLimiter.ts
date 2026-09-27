import { sleep } from '../shared/async';

export interface Clock {
  now(): number;
  sleep(ms: number, signal?: AbortSignal): Promise<void>;
}

export const realClock: Clock = { now: () => performance.now(), sleep };

/**
 * Token bucket measured in Gmail quota units. Waiters are served in FIFO order; an aborted
 * waiter gives up its turn without consuming units.
 */
export class QuotaLimiter {
  #available: number;
  #updatedAt: number;
  #queue: Promise<void> = Promise.resolve();

  constructor(
    private readonly unitsPerSecond: number,
    private readonly clock: Clock = realClock,
  ) {
    this.#available = unitsPerSecond;
    this.#updatedAt = clock.now();
  }

  acquire(units: number, signal?: AbortSignal): Promise<void> {
    const cost = Math.min(units, this.unitsPerSecond);
    const turn = this.#queue.then(async () => {
      for (;;) {
        signal?.throwIfAborted();
        this.#refill();
        if (this.#available >= cost) {
          this.#available -= cost;
          return;
        }
        await this.clock.sleep(((cost - this.#available) / this.unitsPerSecond) * 1000, signal);
      }
    });
    this.#queue = turn.catch(() => undefined);
    return turn;
  }

  #refill(): void {
    const now = this.clock.now();
    this.#available = Math.min(
      this.unitsPerSecond,
      this.#available + ((now - this.#updatedAt) / 1000) * this.unitsPerSecond,
    );
    this.#updatedAt = now;
  }
}
