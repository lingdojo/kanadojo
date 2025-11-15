import { ThemeDefinition } from '../types';

export const cosmicCharcoalTheme: ThemeDefinition = {
  id: 'cosmic-charcoal',
  name: 'Cosmic Charcoal',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.045 210)',
  foreground: 'oklch(0.620 0.285 15)',
  card: 'oklch(0.150 0.045 210)',
  cardForeground: 'oklch(0.620 0.285 15)',
  popover: 'oklch(0.150 0.045 210)',
  popoverForeground: 'oklch(0.620 0.285 15)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.045 210)',
  secondary: 'oklch(0.150 0.045 210)',
  secondaryForeground: 'oklch(0.620 0.285 15)',
  muted: 'oklch(0.150 0.045 210)',
  mutedForeground: 'oklch(0.550 0.300 29)',
  accent: 'oklch(0.150 0.045 210)',
  accentForeground: 'oklch(0.620 0.285 15)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.045 210)',
  input: 'oklch(0.250 0.045 210)',
  ring: 'oklch(0.550 0.300 29)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(210, 15%, 11%, 1)',
  cardColor: 'hsla(210, 15%, 15%, 1)',
  borderColor: 'hsla(210, 15%, 25%, 1)',
  mainColor: 'hsla(15, 95%, 62%, 1)',
  secondaryColor: 'hsla(29, 100%, 55%, 1)',
};
