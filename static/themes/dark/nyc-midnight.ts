import { ThemeDefinition } from '../types';

export const nycMidnightTheme: ThemeDefinition = {
  id: 'nyc-midnight',
  name: 'Nyc Midnight',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night","city"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.081 227)',
  foreground: 'oklch(0.660 0.300 45)',
  card: 'oklch(0.170 0.081 227)',
  cardForeground: 'oklch(0.660 0.300 45)',
  popover: 'oklch(0.170 0.081 227)',
  popoverForeground: 'oklch(0.660 0.300 45)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.081 227)',
  secondary: 'oklch(0.170 0.081 227)',
  secondaryForeground: 'oklch(0.660 0.300 45)',
  muted: 'oklch(0.170 0.081 227)',
  mutedForeground: 'oklch(0.610 0.276 192)',
  accent: 'oklch(0.170 0.081 227)',
  accentForeground: 'oklch(0.660 0.300 45)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.081 227)',
  input: 'oklch(0.290 0.081 227)',
  ring: 'oklch(0.610 0.276 192)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(227, 27%, 11%, 1)',
  cardColor: 'hsla(227, 27%, 17%, 1)',
  borderColor: 'hsla(227, 27%, 29%, 1)',
  mainColor: 'hsla(45, 100%, 66%, 1)',
  secondaryColor: 'hsla(192, 92%, 61%, 1)',
};
