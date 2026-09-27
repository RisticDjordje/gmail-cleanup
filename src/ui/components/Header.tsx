import type { JSX } from 'preact';
import { useController } from '../context';
import { Button } from './ui';

export function Header(): JSX.Element {
  const controller = useController();
  const account = controller.account.value;
  const signedIn = controller.view.value === 'app' && account !== null;
  return (
    <header class="topbar">
      <div class="brand">
        <img src="icons/icon48.png" alt="" width={28} height={28} />
        <h1>Gmail Cleanup</h1>
      </div>
      {signedIn && (
        <div class="account">
          <span class="account-email" data-testid="account-email">
            {account}
          </span>
          <Button
            variant="ghost"
            size="small"
            onClick={() => void controller.signIn({ selectAccount: true })}
          >
            Switch account
          </Button>
          <Button variant="ghost" size="small" onClick={() => void controller.signOut()}>
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
