import { ThemeDefinition } from '../types';

export const celestialGroveTheme: ThemeDefinition = {
  id: 'celestial-grove',
  name: 'Celestial Grove',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","green","nature"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.105 170)',
  foreground: 'oklch(0.570 0.204 86)',
  card: 'oklch(0.150 0.111 170)',
  cardForeground: 'oklch(0.570 0.204 86)',
  popover: 'oklch(0.150 0.111 170)',
  popoverForeground: 'oklch(0.570 0.204 86)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.105 170)',
  secondary: 'oklch(0.150 0.111 170)',
  secondaryForeground: 'oklch(0.570 0.204 86)',
  muted: 'oklch(0.150 0.111 170)',
  mutedForeground: 'oklch(0.640 0.279 43)',
  accent: 'oklch(0.150 0.111 170)',
  accentForeground: 'oklch(0.570 0.204 86)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.111 170)',
  input: 'oklch(0.250 0.111 170)',
  ring: 'oklch(0.640 0.279 43)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(170, 35%, 10%, 1)',
  cardColor: 'hsla(170, 37%, 15%, 1)',
  borderColor: 'hsla(170, 37%, 25%, 1)',
  mainColor: 'hsla(86, 68%, 57%, 1)',
  secondaryColor: 'hsla(43, 93%, 64%, 1)',
};
