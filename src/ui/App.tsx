import type { JSX } from 'preact';
import { ActionBar } from './components/ActionBar';
import { DialogHost } from './components/DialogHost';
import { Header } from './components/Header';
import { Toasts } from './components/Toasts';
import { useController } from './context';
import { Dashboard } from './views/Dashboard';
import { SetupView } from './views/SetupView';
import { SignInView } from './views/SignInView';

export function App(): JSX.Element {
  const controller = useController();
  const view = controller.view.value;
  return (
    <>
      <Header />
      <main>
        {view === 'loading' && <p class="loading">Loading…</p>}
        {view === 'setup' && <SetupView />}
        {view === 'signin' && <SignInView />}
        {view === 'app' && <Dashboard />}
      </main>
      {view === 'app' && <ActionBar />}
      <DialogHost />
      <Toasts />
    </>
  );
}
