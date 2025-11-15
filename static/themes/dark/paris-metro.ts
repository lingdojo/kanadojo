import { ThemeDefinition } from '../types';

export const parisMetroTheme: ThemeDefinition = {
  id: 'paris-metro',
  name: 'Paris Metro',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","city"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.048 216)',
  foreground: 'oklch(0.630 0.231 339)',
  card: 'oklch(0.200 0.048 216)',
  cardForeground: 'oklch(0.630 0.231 339)',
  popover: 'oklch(0.200 0.048 216)',
  popoverForeground: 'oklch(0.630 0.231 339)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.048 216)',
  secondary: 'oklch(0.200 0.048 216)',
  secondaryForeground: 'oklch(0.630 0.231 339)',
  muted: 'oklch(0.200 0.048 216)',
  mutedForeground: 'oklch(0.640 0.270 60)',
  accent: 'oklch(0.200 0.048 216)',
  accentForeground: 'oklch(0.630 0.231 339)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.048 216)',
  input: 'oklch(0.290 0.048 216)',
  ring: 'oklch(0.640 0.270 60)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(216, 16%, 13%, 1)',
  cardColor: 'hsla(216, 16%, 20%, 1)',
  borderColor: 'hsla(216, 16%, 29%, 1)',
  mainColor: 'hsla(339, 77%, 63%, 1)',
  secondaryColor: 'hsla(60, 90%, 64%, 1)',
};
