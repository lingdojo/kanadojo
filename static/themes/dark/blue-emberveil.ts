import { ThemeDefinition } from '../types';

export const blueEmberveilTheme: ThemeDefinition = {
  id: 'blue-emberveil',
  name: 'Blue Emberveil',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.180 212)',
  foreground: 'oklch(0.710 0.282 199)',
  card: 'oklch(0.160 0.105 288)',
  cardForeground: 'oklch(0.710 0.282 199)',
  popover: 'oklch(0.160 0.105 288)',
  popoverForeground: 'oklch(0.710 0.282 199)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.180 212)',
  secondary: 'oklch(0.160 0.105 288)',
  secondaryForeground: 'oklch(0.710 0.282 199)',
  muted: 'oklch(0.160 0.105 288)',
  mutedForeground: 'oklch(0.610 0.291 19)',
  accent: 'oklch(0.160 0.105 288)',
  accentForeground: 'oklch(0.710 0.282 199)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.105 288)',
  input: 'oklch(0.290 0.105 288)',
  ring: 'oklch(0.610 0.291 19)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(212, 60%, 10%, 1)',
  cardColor: 'hsla(288, 35%, 16%, 1)',
  borderColor: 'hsla(288, 35%, 29%, 1)',
  mainColor: 'hsla(199, 94%, 71%, 1)',
  secondaryColor: 'hsla(19, 97%, 61%, 1)',
};
