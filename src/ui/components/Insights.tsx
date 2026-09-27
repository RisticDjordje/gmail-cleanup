import type { JSX } from 'preact';
import type { Insight } from '../../core/grouping';
import { formatBytes, formatNumber, pluralize } from '../../core/format';
import { useController } from '../context';

function copy(insight: Insight, noun: string): { title: string; text: string } {
  const n = insight.groups.length;
  switch (insight.id) {
    case 'top10':
      return {
        title: `Your top 10 ${noun} sent ${Math.round((insight.share ?? 0) * 100)}% of your mail`,
        text: `${pluralize(insight.messages, 'email')}. Click to select them for review.`,
      };
    case 'neverRead':
      return {
        title: `${formatNumber(n)} ${noun} you never read`,
        text: `${pluralize(insight.messages, 'email')} left unopened. Good candidates for unsubscribe + trash.`,
      };
    case 'mailingLists':
      return {
        title: `${formatNumber(n)} mailing lists & newsletters`,
        text: `${pluralize(insight.messages, 'email')} from ${noun} with an unsubscribe link.`,
      };
    case 'heavy':
      return {
        title: `${formatNumber(n)} ${noun} using over 10 MB each`,
        text: `${formatBytes(insight.bytes)} in total. Sorts the list by storage.`,
      };
  }
}

export function Insights(): JSX.Element | null {
  const controller = useController();
  const insights = controller.insights.value;
  if (!insights.length) return null;
  const noun = controller.settings.value.view.groupBy === 'sender' ? 'senders' : 'domains';
  return (
    <section class="insights" aria-label="Suggestions">
      {insights.map((insight) => {
        const { title, text } = copy(insight, noun);
        return (
          <button
            type="button"
            class="insight"
            key={insight.id}
            data-insight={insight.id}
            onClick={() => {
              controller.focusInsight(insight.id);
              document.getElementById('senders')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <strong>{title}</strong>
            <span>{text}</span>
          </button>
        );
      })}
    </section>
  );
}
