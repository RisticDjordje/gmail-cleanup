import { describe, expect, it, vi } from 'vitest';
import { decodeBase64Url } from '../testing/fixtures';
import { FakeGmail } from '../testing/fakeGmail';
import { planUnsubscribe, UnsubscribeService } from './unsubscribe';

describe('planUnsubscribe', () => {
  it('prefers one-click, then email, then website', () => {
    const plan = planUnsubscribe([
      { address: 'a@x.com', info: { url: 'https://x.com/1', mailto: 'mailto:u@x.com', oneClick: true } },
      { address: 'b@x.com', info: { url: 'https://x.com/2', mailto: 'mailto:u@x.com', oneClick: false } },
      { address: 'c@x.com', info: { url: 'https://x.com/3', mailto: null, oneClick: false } },
      { address: 'd@x.com', info: null },
    ]);
    expect(plan.targets.map((t) => [t.address, t.method])).toEqual([
      ['a@x.com', 'oneClick'],
      ['b@x.com', 'email'],
      ['c@x.com', 'website'],
    ]);
    expect(plan.unavailable).toEqual(['d@x.com']);
    expect(plan.targets[1]).toMatchObject({ recipient: 'u@x.com', crossDomain: false });
  });

  it('flags unsubscribe emails addressed to another domain', () => {
    const { targets } = planUnsubscribe([
      { address: 'news@shop.com', info: { url: null, mailto: 'mailto:ceo@othercorp.com', oneClick: false } },
      {
        address: 'news@mail.shop.com',
        info: { url: null, mailto: 'mailto:leave@lists.shop.com', oneClick: false },
      },
    ]);
    expect(targets.map((t) => [t.recipient, t.crossDomain])).toEqual([
      ['ceo@othercorp.com', true],
      ['leave@lists.shop.com', false],
    ]);
  });
});

describe('UnsubscribeService', () => {
  it('unsubscribes by one-click POST and by email, and hands back website links', async () => {
    const gmail = new FakeGmail('me@gmail.com');
    const post = vi.fn(() => Promise.resolve());
    const progress: number[] = [];
    const { targets } = planUnsubscribe([
      { address: 'a@x.com', info: { url: 'https://x.com/1', mailto: null, oneClick: true } },
      { address: 'b@x.com', info: { url: null, mailto: 'mailto:leave@x.com?subject=bye', oneClick: false } },
      { address: 'c@x.com', info: { url: 'https://x.com/3', mailto: null, oneClick: false } },
    ]);
    const results = await new UnsubscribeService(gmail, post).execute(targets, (n) => progress.push(n));
    expect(results).toEqual([
      { address: 'a@x.com', status: 'done', method: 'oneClick' },
      { address: 'b@x.com', status: 'done', method: 'email' },
      { address: 'c@x.com', status: 'needsWebsite', url: 'https://x.com/3' },
    ]);
    expect(post).toHaveBeenCalledWith('https://x.com/1');
    expect(decodeBase64Url(gmail.sent[0]!)).toMatch(/^To: leave@x.com\r\nSubject: unsubscribe\r\n/);
    expect(progress).toEqual([1, 2, 3]);
  });

  it('falls back to the website, or reports failure', async () => {
    const gmail = new FakeGmail('me@gmail.com');
    gmail.sendMessage = () => Promise.reject(new Error('quota'));
    const post = vi.fn(() => Promise.reject(new Error('offline')));
    const results = await new UnsubscribeService(gmail, post).execute([
      {
        address: 'a@x.com',
        method: 'oneClick',
        url: 'https://x.com/1',
        mailto: null,
        recipient: null,
        crossDomain: false,
      },
      {
        address: 'b@x.com',
        method: 'email',
        url: null,
        mailto: 'mailto:leave@x.com',
        recipient: 'leave@x.com',
        crossDomain: false,
      },
      {
        address: 'c@x.com',
        method: 'email',
        url: null,
        mailto: 'mailto:not valid',
        recipient: null,
        crossDomain: false,
      },
    ]);
    expect(results).toEqual([
      { address: 'a@x.com', status: 'needsWebsite', url: 'https://x.com/1' },
      { address: 'b@x.com', status: 'failed' },
      { address: 'c@x.com', status: 'failed' },
    ]);
  });
});
