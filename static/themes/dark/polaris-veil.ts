import { ThemeDefinition } from '../types';

export const polarisVeilTheme: ThemeDefinition = {
  id: 'polaris-veil',
  name: 'Polaris Veil',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.138 222)',
  foreground: 'oklch(0.720 0.300 196)',
  card: 'oklch(0.170 0.138 222)',
  cardForeground: 'oklch(0.720 0.300 196)',
  popover: 'oklch(0.170 0.138 222)',
  popoverForeground: 'oklch(0.720 0.300 196)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.138 222)',
  secondary: 'oklch(0.170 0.138 222)',
  secondaryForeground: 'oklch(0.720 0.300 196)',
  muted: 'oklch(0.170 0.138 222)',
  mutedForeground: 'oklch(0.730 0.300 60)',
  accent: 'oklch(0.170 0.138 222)',
  accentForeground: 'oklch(0.720 0.300 196)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.138 222)',
  input: 'oklch(0.290 0.138 222)',
  ring: 'oklch(0.730 0.300 60)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(222, 46%, 12%, 1)',
  cardColor: 'hsla(222, 46%, 17%, 1)',
  borderColor: 'hsla(222, 46%, 29%, 1)',
  mainColor: 'hsla(196, 100%, 72%, 1)',
  secondaryColor: 'hsla(60, 100%, 73%, 1)',
};
