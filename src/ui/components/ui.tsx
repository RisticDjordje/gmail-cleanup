import type { ButtonHTMLAttributes, ComponentChildren, JSX } from 'preact';

type ButtonVariant = 'default' | 'primary' | 'danger' | 'dangerSolid' | 'ghost';

const VARIANT_CLASS: Readonly<Record<ButtonVariant, string>> = {
  default: '',
  primary: 'primary',
  danger: 'danger',
  dangerSolid: 'danger solid',
  ghost: 'ghost',
};

export function Button({
  variant = 'default',
  size,
  class: className,
  ...props
}: ButtonHTMLAttributes & {
  variant?: ButtonVariant;
  size?: 'small' | 'large';
  class?: string;
}): JSX.Element {
  const classes = ['btn', VARIANT_CLASS[variant], size ?? '', className ?? '']
    .filter((c) => c !== '')
    .join(' ');
  return <button type="button" class={classes} {...props} />;
}

export function ProgressBar({ fraction, label }: { fraction: number | null; label: string }): JSX.Element {
  const percent = fraction === null ? null : Math.round(Math.min(1, Math.max(0, fraction)) * 100);
  return (
    <div
      class="progress-bar"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      {...(percent === null ? {} : { 'aria-valuenow': percent })}
    >
      <div
        class={`progress-fill${percent === null ? ' indeterminate' : ''}`}
        style={percent === null ? undefined : { width: `${percent}%` }}
      />
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ComponentChildren }): JSX.Element {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
