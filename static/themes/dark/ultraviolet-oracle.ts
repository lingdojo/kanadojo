import { ThemeDefinition } from '../types';

export const ultravioletOracleTheme: ThemeDefinition = {
  id: 'ultraviolet-oracle',
  name: 'Ultraviolet Oracle',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","purple"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.243 265)',
  foreground: 'oklch(0.690 0.300 210)',
  card: 'oklch(0.160 0.246 267)',
  cardForeground: 'oklch(0.690 0.300 210)',
  popover: 'oklch(0.160 0.246 267)',
  popoverForeground: 'oklch(0.690 0.300 210)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.243 265)',
  secondary: 'oklch(0.160 0.246 267)',
  secondaryForeground: 'oklch(0.690 0.300 210)',
  muted: 'oklch(0.160 0.246 267)',
  mutedForeground: 'oklch(0.730 0.279 273)',
  accent: 'oklch(0.160 0.246 267)',
  accentForeground: 'oklch(0.690 0.300 210)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.246 267)',
  input: 'oklch(0.290 0.246 267)',
  ring: 'oklch(0.730 0.279 273)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(265, 81%, 9%, 1)',
  cardColor: 'hsla(267, 82%, 16%, 1)',
  borderColor: 'hsla(267, 82%, 29%, 1)',
  mainColor: 'hsla(210, 100%, 69%, 1)',
  secondaryColor: 'hsla(273, 93%, 73%, 1)',
};
