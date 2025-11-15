import { ThemeDefinition } from '../types';

export const velvetAbyssTheme: ThemeDefinition = {
  id: 'velvet-abyss',
  name: 'Velvet Abyss',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","elegant"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.180 258)',
  foreground: 'oklch(0.550 0.249 12)',
  card: 'oklch(0.120 0.180 258)',
  cardForeground: 'oklch(0.550 0.249 12)',
  popover: 'oklch(0.120 0.180 258)',
  popoverForeground: 'oklch(0.550 0.249 12)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.180 258)',
  secondary: 'oklch(0.120 0.180 258)',
  secondaryForeground: 'oklch(0.550 0.249 12)',
  muted: 'oklch(0.120 0.180 258)',
  mutedForeground: 'oklch(0.650 0.258 172)',
  accent: 'oklch(0.120 0.180 258)',
  accentForeground: 'oklch(0.550 0.249 12)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.240 0.180 258)',
  input: 'oklch(0.240 0.180 258)',
  ring: 'oklch(0.650 0.258 172)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(258, 60%, 8%, 1)',
  cardColor: 'hsla(258, 60%, 12%, 1)',
  borderColor: 'hsla(258, 60%, 24%, 1)',
  mainColor: 'hsla(12, 83%, 55%, 1)',
  secondaryColor: 'hsla(172, 86%, 65%, 1)',
};
