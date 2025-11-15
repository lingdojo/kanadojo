import { ThemeDefinition } from '../types';

export const luminousTideTheme: ThemeDefinition = {
  id: 'luminous-tide',
  name: 'Luminous Tide',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","ocean","mystical"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.147 209)',
  foreground: 'oklch(0.620 0.288 45)',
  card: 'oklch(0.160 0.162 209)',
  cardForeground: 'oklch(0.620 0.288 45)',
  popover: 'oklch(0.160 0.162 209)',
  popoverForeground: 'oklch(0.620 0.288 45)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.147 209)',
  secondary: 'oklch(0.160 0.162 209)',
  secondaryForeground: 'oklch(0.620 0.288 45)',
  muted: 'oklch(0.160 0.162 209)',
  mutedForeground: 'oklch(0.500 0.255 188)',
  accent: 'oklch(0.160 0.162 209)',
  accentForeground: 'oklch(0.620 0.288 45)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.260 0.162 209)',
  input: 'oklch(0.260 0.162 209)',
  ring: 'oklch(0.500 0.255 188)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(209, 49%, 11%, 1)',
  cardColor: 'hsla(209, 54%, 16%, 1)',
  borderColor: 'hsla(209, 54%, 26%, 1)',
  mainColor: 'hsla(45, 96%, 62%, 1)',
  secondaryColor: 'hsla(188, 85%, 50%, 1)',
};
