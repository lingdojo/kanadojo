import { ThemeDefinition } from '../types';

export const nebulaVeilTheme: ThemeDefinition = {
  id: 'nebula-veil',
  name: 'Nebula Veil',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.093 248)',
  foreground: 'oklch(0.740 0.249 293)',
  card: 'oklch(0.170 0.123 263)',
  cardForeground: 'oklch(0.740 0.249 293)',
  popover: 'oklch(0.170 0.123 263)',
  popoverForeground: 'oklch(0.740 0.249 293)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.093 248)',
  secondary: 'oklch(0.170 0.123 263)',
  secondaryForeground: 'oklch(0.740 0.249 293)',
  muted: 'oklch(0.170 0.123 263)',
  mutedForeground: 'oklch(0.710 0.276 192)',
  accent: 'oklch(0.170 0.123 263)',
  accentForeground: 'oklch(0.740 0.249 293)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.162 286)',
  input: 'oklch(0.270 0.162 286)',
  ring: 'oklch(0.710 0.276 192)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(248, 31%, 11%, 1)',
  cardColor: 'hsla(263, 41%, 17%, 1)',
  borderColor: 'hsla(286, 54%, 27%, 1)',
  mainColor: 'hsla(293, 83%, 74%, 1)',
  secondaryColor: 'hsla(192, 92%, 71%, 1)',
};
