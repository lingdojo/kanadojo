import { ThemeDefinition } from '../types';

export const cyanicWisdomTheme: ThemeDefinition = {
  id: 'cyanic-wisdom',
  name: 'Cyanic Wisdom',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.186 197)',
  foreground: 'oklch(0.730 0.300 192)',
  card: 'oklch(0.150 0.225 203)',
  cardForeground: 'oklch(0.730 0.300 192)',
  popover: 'oklch(0.150 0.225 203)',
  popoverForeground: 'oklch(0.730 0.300 192)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.186 197)',
  secondary: 'oklch(0.150 0.225 203)',
  secondaryForeground: 'oklch(0.730 0.300 192)',
  muted: 'oklch(0.150 0.225 203)',
  mutedForeground: 'oklch(0.740 0.237 331)',
  accent: 'oklch(0.150 0.225 203)',
  accentForeground: 'oklch(0.730 0.300 192)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.225 203)',
  input: 'oklch(0.280 0.225 203)',
  ring: 'oklch(0.740 0.237 331)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(197, 62%, 9%, 1)',
  cardColor: 'hsla(203, 75%, 15%, 1)',
  borderColor: 'hsla(203, 75%, 28%, 1)',
  mainColor: 'hsla(192, 100%, 73%, 1)',
  secondaryColor: 'hsla(331, 79%, 74%, 1)',
};
