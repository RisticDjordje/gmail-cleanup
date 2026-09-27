import './styles.css';
import { render } from 'preact';
import { AppController } from '../app/controller';
import { Persistence } from '../app/persistence';
import { chromeIdentity, OAuthClient } from '../auth/oauth';
import { MessageCache } from '../cache/messageCache';
import { GmailClient } from '../gmail/client';
import { chromeStorageArea } from '../platform/storage';
import { App } from './App';
import { ControllerContext } from './context';

// Composition root: the only place that touches chrome.* APIs directly.
const local = chromeStorageArea(chrome.storage.local);
const auth = new OAuthClient({
  identity: chromeIdentity(),
  local,
  session: chromeStorageArea(chrome.storage.session),
});
const controller = new AppController({
  auth,
  gmail: new GmailClient({ tokens: auth }),
  persistence: new Persistence(local),
  openCache: (account) => MessageCache.open(account),
});

const root = document.getElementById('app');
if (!root) throw new Error('Missing #app element');
render(
  <ControllerContext.Provider value={controller}>
    <App />
  </ControllerContext.Provider>,
  root,
);

window.addEventListener('beforeunload', (event) => {
  if (controller.busy.peek()) event.preventDefault(); // ask before closing mid-scan or mid-action
});

void controller.init();
