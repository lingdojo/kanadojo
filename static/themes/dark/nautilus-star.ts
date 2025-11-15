import { ThemeDefinition } from '../types';

export const nautilusStarTheme: ThemeDefinition = {
  id: 'nautilus-star',
  name: 'Nautilus Star',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","ocean"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.141 205)',
  foreground: 'oklch(0.650 0.285 207)',
  card: 'oklch(0.160 0.141 205)',
  cardForeground: 'oklch(0.650 0.285 207)',
  popover: 'oklch(0.160 0.141 205)',
  popoverForeground: 'oklch(0.650 0.285 207)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.141 205)',
  secondary: 'oklch(0.160 0.141 205)',
  secondaryForeground: 'oklch(0.650 0.285 207)',
  muted: 'oklch(0.160 0.141 205)',
  mutedForeground: 'oklch(0.720 0.276 30)',
  accent: 'oklch(0.160 0.141 205)',
  accentForeground: 'oklch(0.650 0.285 207)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.141 205)',
  input: 'oklch(0.290 0.141 205)',
  ring: 'oklch(0.720 0.276 30)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(205, 47%, 8%, 1)',
  cardColor: 'hsla(205, 47%, 16%, 1)',
  borderColor: 'hsla(205, 47%, 29%, 1)',
  mainColor: 'hsla(207, 95%, 65%, 1)',
  secondaryColor: 'hsla(30, 92%, 72%, 1)',
};
