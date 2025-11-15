import { ThemeDefinition } from '../types';

export const luminousNebulaTheme: ThemeDefinition = {
  id: 'luminous-nebula',
  name: 'Luminous Nebula',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space","mystical"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.213 239)',
  foreground: 'oklch(0.700 0.297 288)',
  card: 'oklch(0.160 0.222 239)',
  cardForeground: 'oklch(0.700 0.297 288)',
  popover: 'oklch(0.160 0.222 239)',
  popoverForeground: 'oklch(0.700 0.297 288)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.213 239)',
  secondary: 'oklch(0.160 0.222 239)',
  secondaryForeground: 'oklch(0.700 0.297 288)',
  muted: 'oklch(0.160 0.222 239)',
  mutedForeground: 'oklch(0.750 0.300 199)',
  accent: 'oklch(0.160 0.222 239)',
  accentForeground: 'oklch(0.700 0.297 288)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.222 239)',
  input: 'oklch(0.280 0.222 239)',
  ring: 'oklch(0.750 0.300 199)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(239, 71%, 9%, 1)',
  cardColor: 'hsla(239, 74%, 16%, 1)',
  borderColor: 'hsla(239, 74%, 28%, 1)',
  mainColor: 'hsla(288, 99%, 70%, 1)',
  secondaryColor: 'hsla(199, 100%, 75%, 1)',
};
