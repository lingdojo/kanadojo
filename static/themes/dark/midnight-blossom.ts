import { ThemeDefinition } from '../types';

export const midnightBlossomTheme: ThemeDefinition = {
  id: 'midnight-blossom',
  name: 'Midnight Blossom',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","pink","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.140 0.120 265)',
  foreground: 'oklch(0.600 0.225 330)',
  card: 'oklch(0.170 0.120 265)',
  cardForeground: 'oklch(0.600 0.225 330)',
  popover: 'oklch(0.170 0.120 265)',
  popoverForeground: 'oklch(0.600 0.225 330)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.120 265)',
  secondary: 'oklch(0.170 0.120 265)',
  secondaryForeground: 'oklch(0.600 0.225 330)',
  muted: 'oklch(0.170 0.120 265)',
  mutedForeground: 'oklch(0.650 0.180 285)',
  accent: 'oklch(0.170 0.120 265)',
  accentForeground: 'oklch(0.600 0.225 330)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.090 265)',
  input: 'oklch(0.270 0.090 265)',
  ring: 'oklch(0.650 0.180 285)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(265, 40%, 14%, 1)',
  cardColor: 'hsla(265, 40%, 17%, 1)',
  borderColor: 'hsla(265, 30%, 27%, 1)',
  mainColor: 'hsla(330, 75%, 60%, 1)',
  secondaryColor: 'hsla(285, 60%, 65%, 1)',
};
