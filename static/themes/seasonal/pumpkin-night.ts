import { ThemeDefinition } from '../types';

export const pumpkinNightTheme: ThemeDefinition = {
  id: 'pumpkin-night',
  name: 'Pumpkin Night',
  description: 'Spooky Halloween theme with orange and purple',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'halloween', 'seasonal', 'orange', 'purple'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.060 280)',
  foreground: 'oklch(0.600 0.300 25)',
  card: 'oklch(0.150 0.075 280)',
  cardForeground: 'oklch(0.600 0.300 25)',
  popover: 'oklch(0.150 0.075 280)',
  popoverForeground: 'oklch(0.600 0.300 25)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.060 280)',
  secondary: 'oklch(0.150 0.075 280)',
  secondaryForeground: 'oklch(0.600 0.300 25)',
  muted: 'oklch(0.150 0.075 280)',
  mutedForeground: 'oklch(0.550 0.210 315)',
  accent: 'oklch(0.150 0.075 280)',
  accentForeground: 'oklch(0.600 0.300 25)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.220 0.075 280)',
  input: 'oklch(0.220 0.075 280)',
  ring: 'oklch(0.550 0.210 315)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(280, 20%, 8%, 1)',
  cardColor: 'hsla(280, 25%, 15%, 1)',
  borderColor: 'hsla(280, 25%, 22%, 1)',
  mainColor: 'hsla(25, 100%, 60%, 1)',
  secondaryColor: 'hsla(315, 70%, 55%, 1)',
};
