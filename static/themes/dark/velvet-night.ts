import { ThemeDefinition } from '../types';

export const velvetNightTheme: ThemeDefinition = {
  id: 'velvet-night',
  name: 'Velvet Night',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","elegant","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.078 220)',
  foreground: 'oklch(0.570 0.255 271)',
  card: 'oklch(0.170 0.078 220)',
  cardForeground: 'oklch(0.570 0.255 271)',
  popover: 'oklch(0.170 0.078 220)',
  popoverForeground: 'oklch(0.570 0.255 271)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.078 220)',
  secondary: 'oklch(0.170 0.078 220)',
  secondaryForeground: 'oklch(0.570 0.255 271)',
  muted: 'oklch(0.170 0.078 220)',
  mutedForeground: 'oklch(0.530 0.231 340)',
  accent: 'oklch(0.170 0.078 220)',
  accentForeground: 'oklch(0.570 0.255 271)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.066 220)',
  input: 'oklch(0.280 0.066 220)',
  ring: 'oklch(0.530 0.231 340)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(220, 26%, 13%, 1)',
  cardColor: 'hsla(220, 26%, 17%, 1)',
  borderColor: 'hsla(220, 22%, 28%, 1)',
  mainColor: 'hsla(271, 85%, 57%, 1)',
  secondaryColor: 'hsla(340, 77%, 53%, 1)',
};
