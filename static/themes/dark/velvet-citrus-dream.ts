import { ThemeDefinition } from '../types';

export const velvetCitrusDreamTheme: ThemeDefinition = {
  id: 'velvet-citrus-dream',
  name: 'Velvet Citrus Dream',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","yellow","elegant"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.099 274)',
  foreground: 'oklch(0.670 0.300 48)',
  card: 'oklch(0.170 0.108 274)',
  cardForeground: 'oklch(0.670 0.300 48)',
  popover: 'oklch(0.170 0.108 274)',
  popoverForeground: 'oklch(0.670 0.300 48)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.099 274)',
  secondary: 'oklch(0.170 0.108 274)',
  secondaryForeground: 'oklch(0.670 0.300 48)',
  muted: 'oklch(0.170 0.108 274)',
  mutedForeground: 'oklch(0.640 0.294 17)',
  accent: 'oklch(0.170 0.108 274)',
  accentForeground: 'oklch(0.670 0.300 48)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.108 274)',
  input: 'oklch(0.270 0.108 274)',
  ring: 'oklch(0.640 0.294 17)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(274, 33%, 13%, 1)',
  cardColor: 'hsla(274, 36%, 17%, 1)',
  borderColor: 'hsla(274, 36%, 27%, 1)',
  mainColor: 'hsla(48, 100%, 67%, 1)',
  secondaryColor: 'hsla(17, 98%, 64%, 1)',
};
