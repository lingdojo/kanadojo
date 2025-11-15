import { ThemeDefinition } from '../types';

export const hyperionSkiesTheme: ThemeDefinition = {
  id: 'hyperion-skies',
  name: 'Hyperion Skies',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.162 209)',
  foreground: 'oklch(0.680 0.288 199)',
  card: 'oklch(0.170 0.171 209)',
  cardForeground: 'oklch(0.680 0.288 199)',
  popover: 'oklch(0.170 0.171 209)',
  popoverForeground: 'oklch(0.680 0.288 199)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.162 209)',
  secondary: 'oklch(0.170 0.171 209)',
  secondaryForeground: 'oklch(0.680 0.288 199)',
  muted: 'oklch(0.170 0.171 209)',
  mutedForeground: 'oklch(0.630 0.300 47)',
  accent: 'oklch(0.170 0.171 209)',
  accentForeground: 'oklch(0.680 0.288 199)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.260 0.171 209)',
  input: 'oklch(0.260 0.171 209)',
  ring: 'oklch(0.630 0.300 47)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(209, 54%, 11%, 1)',
  cardColor: 'hsla(209, 57%, 17%, 1)',
  borderColor: 'hsla(209, 57%, 26%, 1)',
  mainColor: 'hsla(199, 96%, 68%, 1)',
  secondaryColor: 'hsla(47, 100%, 63%, 1)',
};
