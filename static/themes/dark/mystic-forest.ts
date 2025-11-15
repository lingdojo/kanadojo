import { ThemeDefinition } from '../types';

export const mysticForestTheme: ThemeDefinition = {
  id: 'mystic-forest',
  name: 'Mystic Forest',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","green","nature","mystical"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.090 146)',
  foreground: 'oklch(0.450 0.186 111)',
  card: 'oklch(0.170 0.096 146)',
  cardForeground: 'oklch(0.450 0.186 111)',
  popover: 'oklch(0.170 0.096 146)',
  popoverForeground: 'oklch(0.450 0.186 111)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.090 146)',
  secondary: 'oklch(0.170 0.096 146)',
  secondaryForeground: 'oklch(0.450 0.186 111)',
  muted: 'oklch(0.170 0.096 146)',
  mutedForeground: 'oklch(0.600 0.135 96)',
  accent: 'oklch(0.170 0.096 146)',
  accentForeground: 'oklch(0.450 0.186 111)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.078 146)',
  input: 'oklch(0.250 0.078 146)',
  ring: 'oklch(0.600 0.135 96)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(146, 30%, 12%, 1)',
  cardColor: 'hsla(146, 32%, 17%, 1)',
  borderColor: 'hsla(146, 26%, 25%, 1)',
  mainColor: 'hsla(111, 62%, 45%, 1)',
  secondaryColor: 'hsla(96, 45%, 60%, 1)',
};
