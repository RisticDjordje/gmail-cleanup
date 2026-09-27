import type { Route } from '@playwright/test';
import { GmailApiError } from '../src/gmail/errors';
import type { FakeGmail } from '../src/testing/fakeGmail';

/** Serves FakeGmail instances (one per account) over Gmail's REST API, for the real client to talk to. */
export async function serveGmail(route: Route, accounts: ReadonlyMap<string, FakeGmail>): Promise<void> {
  const request = route.request();
  const url = new URL(request.url());
  const path = url.pathname.replace('/gmail/v1/users/me', '');
  const json = (body: unknown, status = 200): Promise<void> =>
    route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });

  const account = /^Bearer tok:(.+)$/.exec(request.headers()['authorization'] ?? '')?.[1];
  const gmail = account ? accounts.get(account) : undefined;
  if (!gmail)
    return json({ error: { code: 401, message: 'Invalid Credentials', status: 'UNAUTHENTICATED' } }, 401);

  const body = (): Record<string, unknown> => (request.postDataJSON() ?? {}) as Record<string, unknown>;
  const params = url.searchParams;
  try {
    if (request.method() === 'GET' && path === '/profile') return json(await gmail.getProfile());
    if (request.method() === 'GET' && path === '/messages') {
      const all = await gmail.listMessageIds(params.get('q') ?? '', {
        labelIds: params.getAll('labelIds'),
        includeSpamTrash: params.get('includeSpamTrash') === 'true',
      });
      const start = Number(params.get('pageToken') ?? 0);
      const size = Number(params.get('maxResults') ?? 100);
      const page = all.slice(start, start + size);
      return json({
        ...(page.length ? { messages: page.map((id) => ({ id })) } : {}),
        ...(start + size < all.length ? { nextPageToken: String(start + size) } : {}),
      });
    }
    if (request.method() === 'GET' && path === '/history') {
      const changes = await gmail.listHistory(params.get('startHistoryId') ?? '0');
      return json({
        history: [
          ...[...changes.deleted].map((id) => ({ messagesDeleted: [{ message: { id } }] })),
          ...changes.labelChanges.map((c) =>
            c.added.length
              ? { labelsAdded: [{ message: { id: c.id }, labelIds: c.added }] }
              : { labelsRemoved: [{ message: { id: c.id }, labelIds: c.removed }] },
          ),
        ],
        historyId: changes.historyId,
      });
    }
    if (request.method() === 'POST' && path === '/messages/batchModify') {
      const { ids, addLabelIds, removeLabelIds } = body() as {
        ids: string[];
        addLabelIds: string[];
        removeLabelIds: string[];
      };
      await gmail.batchModify(ids, { add: addLabelIds, remove: removeLabelIds });
      return route.fulfill({ status: 204 });
    }
    if (request.method() === 'POST' && path === '/messages/batchDelete') {
      await gmail.batchDelete((body() as { ids: string[] }).ids);
      return route.fulfill({ status: 204 });
    }
    if (request.method() === 'POST' && path === '/messages/send') {
      await gmail.sendMessage((body() as { raw: string }).raw);
      return json({ id: 'sent' });
    }
    if (request.method() === 'POST' && path === '/settings/filters') {
      const { criteria, action } = body() as { criteria: { from: string }; action: Record<string, string[]> };
      await gmail.createFilter(criteria, action);
      return json({ id: `filter-${gmail.filters.length}` });
    }
    const trash = /^\/messages\/([^/]+)\/trash$/.exec(path);
    if (request.method() === 'POST' && trash) {
      await gmail.trashMessage(decodeURIComponent(trash[1] ?? ''));
      return json({ id: trash[1] });
    }
    const get = /^\/messages\/([^/]+)$/.exec(path);
    if (request.method() === 'GET' && get)
      return json(await gmail.getMessageMetadata(decodeURIComponent(get[1] ?? '')));
    return json({ error: { code: 400, message: `Fake Gmail: unhandled ${request.method()} ${path}` } }, 400);
  } catch (error) {
    if (error instanceof GmailApiError) {
      const status = error.status ?? 400;
      return json(
        { error: { code: status, message: error.message, errors: [{ reason: error.reason ?? 'error' }] } },
        status,
      );
    }
    throw error;
  }
}
