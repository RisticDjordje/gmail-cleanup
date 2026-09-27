# Gmail Cleanup: Top Senders

A Chrome extension that scans your Gmail, ranks everyone who emails you by how much they send, and lets you clean them out in bulk.

It runs entirely in your browser. It talks straight to the Gmail API with your own Google OAuth client, so your mail never goes through a third-party server.

## What it does

**See who's filling your mailbox**
- Groups every email **by sender** or **by domain** (e.g. all `*.amazon.com` addresses together).
- Sorts by **most emails**, **most storage**, **most unread**, most recent, oldest or name.
- For each sender it shows the count, % unread, total size and latest date. Expand a row to see recent subject lines and every address they used.
- Summary tiles show emails scanned, number of senders, total size, % unread, and how many senders you can unsubscribe from.
- **Insight cards** point out easy wins: senders you *never read*, mailing lists and newsletters, senders using over 10 MB, and what share of your mail comes from your top 10 senders. Click a card to filter the list.
- Search, filter chips (*Has unsubscribe*, *Mostly unread*, *Hide kept*) and **CSV export**.

**Clean up in bulk** (select any number of senders, then:)
| Action | What happens |
|---|---|
| **Move to Trash** | Trashes every email from them. Gmail empties Trash after 30 days. **Undo** is available right after. |
| **Unsubscribe** | Uses the sender's `List-Unsubscribe` header: one-click unsubscribe (RFC 8058) where supported, otherwise sends the unsubscribe email for you, otherwise gives you the links to click. It can also trash their existing mail and add a block filter in the same step. |
| **Block future** | Creates Gmail filters that send future mail from them to Trash, or skip the inbox (optionally marking it read). It can also apply to their existing mail. |
| **Archive** | Removes them from the inbox; they stay searchable. Undoable. |
| **Mark read** | Clears unread counts. Undoable. |
| **Delete forever** | Skips Trash. Asks for the extra permission this needs only when you first use it. |

**Safety**
- Nothing is changed without a confirmation that shows the exact number of emails affected.
- **Never touch starred** (on by default) and **Never touch important** options.
- **Keep** (☆) a sender to protect them from being selected in bulk actions.
- Actions only apply to what you scanned. If you scanned "Older than 1 year", trashing a sender only trashes their mail that is more than a year old.

**Scan options**
- Scope: all mail, inbox only, Promotions/Social/Updates/Forums tabs, unread only, emails over 5 MB, or any custom Gmail search (e.g. `before:2020/01/01 has:attachment`).
- Age filter (older than 1 month to 5 years) and an optional limit for a quick first look.
- Results are cached locally (IndexedDB), so reopening is instant and rescans only read new mail. You can stop a scan at any time and continue later.

**Extra tools**: empty Trash or Spam immediately, clear the kept list, clear the local cache.

## Setup

Because this is a personal extension (not on the Chrome Web Store), you create your own free Google OAuth client once. It takes about 5 minutes.

### 1. Load the extension

1. Download or clone this repository.
2. Open `chrome://extensions`, turn on **Developer mode** (top right), click **Load unpacked** and choose this folder.
3. Click the extension's toolbar icon (pin it from the puzzle-piece menu). A dashboard tab opens and shows your **redirect URI**, which looks like `https://<extension-id>.chromiumapp.org/`. You'll need it in step 2.

### 2. Create a Google OAuth client

1. Go to the [Google Cloud Console](https://console.cloud.google.com/projectcreate) and create a project (any name).
2. Enable the [Gmail API](https://console.cloud.google.com/apis/library/gmail.googleapis.com) for the project.
3. Open [Google Auth Platform → Branding / Audience](https://console.cloud.google.com/auth/overview) and configure the consent screen:
   - User type **External**, and fill in an app name and your email.
   - Under **Audience → Test users**, add the Gmail address(es) you want to clean up.
4. Open [Clients](https://console.cloud.google.com/auth/clients) → **Create client**:
   - Application type: **Web application**
   - **Authorized redirect URIs**: paste the redirect URI from the dashboard, *including the trailing slash*.
5. Copy the **Client ID** (ends in `.apps.googleusercontent.com`).

### 3. Sign in

Paste the client ID into the dashboard, click **Save**, then **Sign in with Google**.

Google will warn that it *hasn't verified this app*. That's expected, because it's your own app in testing mode: click **Continue**. You can sign in with any Google account you added as a test user, not only the one Chrome is signed into. Use **Switch account** to change accounts.

> **Tip:** the extension ID (and so the redirect URI) comes from the folder you loaded it from. If you move the folder, re-add the new redirect URI in the Cloud Console.

## Permissions

| Permission | Why |
|---|---|
| `gmail.modify` | Read message headers (sender, subject, date, size, unsubscribe info), trash/archive/mark read, and send unsubscribe emails. It **cannot** permanently delete. |
| `gmail.settings.basic` | Create filters for "Block future". |
| `https://mail.google.com/` | Only requested the first time you use **Delete forever** or **Empty Trash/Spam**. |
| `identity`, `storage`, `unlimitedStorage` | Sign-in, settings, and caching scan results locally. |

The extension only reads headers (`format=metadata`), never message bodies. Access tokens and the cache stay in your browser profile. **Sign out** revokes the token.

## Performance

Gmail limits each user to about 250 API "quota units" per second. Reading one message costs 5, so the scanner reads about 40 messages per second. A first full scan of 10,000 emails takes about 4 minutes, and 100,000 takes about 40 minutes. Later scans only read new messages. To get results faster, pick a limit (e.g. newest 10,000) or a narrower scope (e.g. Promotions) first.

Bulk actions are fast: up to 1,000 emails per API call.

## Development

```
lib/parse.js    pure helpers (header parsing, grouping, queries); unit-tested
lib/gmail.js    Gmail REST client: quota-aware rate limiter, retries, token refresh
lib/auth.js     OAuth via chrome.identity.launchWebAuthFlow
lib/db.js       IndexedDB cache of message metadata
dashboard.*     the UI
background.js   opens the dashboard when you click the toolbar icon
```

```sh
npm test            # unit tests (Node 18+)
npm install         # installs Playwright for the e2e test
npm run test:e2e    # drives the dashboard in Chromium against a fake Gmail API
npm run package     # zip for distribution
```
