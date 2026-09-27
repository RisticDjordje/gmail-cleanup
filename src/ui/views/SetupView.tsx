import type { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useController } from '../context';
import { Button, ExternalLink } from '../components/ui';

const README_SETUP = 'https://github.com/RisticDjordje/gmail-cleanup#install';

export function SetupView(): JSX.Element {
  const controller = useController();
  const [clientId, setClientId] = useState('');
  const redirectUri = controller.redirectUri();

  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(redirectUri);
    controller.toasts.show('Redirect URI copied');
  };

  return (
    <section class="card setup" aria-labelledby="setup-title">
      <h2 id="setup-title">One-time setup</h2>
      <p>
        Gmail Cleanup talks to Gmail directly from your browser with your own Google OAuth client, so your
        mail never passes through anyone else’s server. Setup takes about 5 minutes; the{' '}
        <ExternalLink href={README_SETUP}>README</ExternalLink> walks through each step.
      </p>
      <ol class="steps">
        <li>
          Create a project in the{' '}
          <ExternalLink href="https://console.cloud.google.com/projectcreate">
            Google Cloud Console
          </ExternalLink>
          .
        </li>
        <li>
          Enable the{' '}
          <ExternalLink href="https://console.cloud.google.com/apis/library/gmail.googleapis.com">
            Gmail API
          </ExternalLink>{' '}
          for it.
        </li>
        <li>
          Set up the{' '}
          <ExternalLink href="https://console.cloud.google.com/auth/overview">
            OAuth consent screen
          </ExternalLink>
          : choose <b>External</b> and add each Gmail address you’ll clean up as a <b>test user</b>.
        </li>
        <li>
          Under <ExternalLink href="https://console.cloud.google.com/auth/clients">Clients</ExternalLink>,
          create a <b>Web application</b> client with this <b>Authorized redirect URI</b>:
          <div class="copy-row">
            <code data-testid="redirect-uri">{redirectUri}</code>
            <Button size="small" onClick={() => void copy()}>
              Copy
            </Button>
          </div>
        </li>
        <li>
          Paste the client ID:
          <form
            class="copy-row"
            onSubmit={(event) => {
              event.preventDefault();
              void controller.saveClientId(clientId.trim());
            }}
          >
            <input
              type="text"
              aria-label="OAuth client ID"
              placeholder="1234567890-abc123.apps.googleusercontent.com"
              spellcheck={false}
              autocomplete="off"
              required
              value={clientId}
              onInput={(event) => setClientId(event.currentTarget.value)}
            />
            <Button variant="primary" type="submit">
              Save
            </Button>
          </form>
        </li>
      </ol>
    </section>
  );
}
