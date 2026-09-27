import type { JSX } from 'preact';
import { useController } from '../context';
import { Insights } from '../components/Insights';
import { ScanPanel } from '../components/ScanPanel';
import { SenderList } from '../components/SenderList';
import { StatsBar } from '../components/StatsBar';
import { ToolsPanel } from '../components/ToolsPanel';

export function Dashboard(): JSX.Element {
  const controller = useController();
  const hasResults = controller.records.value.length > 0;
  return (
    <div class="dashboard">
      <ScanPanel />
      {hasResults && (
        <div class="results" data-testid="results">
          <StatsBar />
          <Insights />
          <SenderList />
        </div>
      )}
      <ToolsPanel />
    </div>
  );
}
