import type { JSX } from 'preact';
import { useController } from '../context';
import { Button } from '../components/ui';

export function SignInView(): JSX.Element {
  const controller = useController();
  const error = controller.signInError.value;
  return (
    <section class="card signin" aria-labelledby="signin-title">
      <h2 id="signin-title">Clean up your inbox</h2>
      <p>
        Sign in to see which senders fill your mailbox the most, then trash, archive, unsubscribe from or
        block them in bulk.
      </p>
      <Button variant="primary" size="large" onClick={() => void controller.signIn()}>
        Sign in with Google
      </Button>
      <p class="muted small">Everything runs in your browser. Nothing is changed without asking you first.</p>
      {error && (
        <p class="error" role="alert">
          {error}
        </p>
      )}
      <p class="small">
        <Button variant="ghost" size="small" onClick={() => void controller.resetClient()}>
          Use a different OAuth client
        </Button>
      </p>
    </section>
  );
}
