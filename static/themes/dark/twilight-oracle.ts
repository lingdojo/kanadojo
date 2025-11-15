import { ThemeDefinition } from '../types';

export const twilightOracleTheme: ThemeDefinition = {
  id: 'twilight-oracle',
  name: 'Twilight Oracle',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.126 256)',
  foreground: 'oklch(0.660 0.276 5)',
  card: 'oklch(0.160 0.126 256)',
  cardForeground: 'oklch(0.660 0.276 5)',
  popover: 'oklch(0.160 0.126 256)',
  popoverForeground: 'oklch(0.660 0.276 5)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.126 256)',
  secondary: 'oklch(0.160 0.126 256)',
  secondaryForeground: 'oklch(0.660 0.276 5)',
  muted: 'oklch(0.160 0.126 256)',
  mutedForeground: 'oklch(0.700 0.210 208)',
  accent: 'oklch(0.160 0.126 256)',
  accentForeground: 'oklch(0.660 0.276 5)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.126 256)',
  input: 'oklch(0.250 0.126 256)',
  ring: 'oklch(0.700 0.210 208)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(256, 42%, 12%, 1)',
  cardColor: 'hsla(256, 42%, 16%, 1)',
  borderColor: 'hsla(256, 42%, 25%, 1)',
  mainColor: 'hsla(5, 92%, 66%, 1)',
  secondaryColor: 'hsla(208, 70%, 70%, 1)',
};
