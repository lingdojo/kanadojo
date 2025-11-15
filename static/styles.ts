import clsx from 'clsx';

export const cardBorderStyles = clsx(
  'rounded-xl bg-[var(--card)]'
);

export const buttonBorderStyles = clsx(
  'rounded-xl bg-[var(--card)] hover:cursor-pointer',
  'duration-275',
  'transition-all ease-in-out',
  'hover:bg-[var(--border)]'
  // 'active:scale-85 md:active:scale-90 active:duration-300',
  // 'border-b-4 border-[var(--border)] '
);

export const miniButtonBorderStyles = clsx(
  'rounded-xl bg-[var(--background)] hover:cursor-pointer',
  'duration-275',
  'transition-all ease-in-out',
  'hover:bg-[var(--border)]'
  // 'active:scale-95 md:active:scale-98 active:duration-300',
  // 'border-b-4 border-[var(--border)] '
);
