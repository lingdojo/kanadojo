import { ThemeDefinition } from '../types';

export const andromedaDreamTheme: ThemeDefinition = {
  id: 'andromeda-dream',
  name: 'Andromeda Dream',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","space"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.153 264)',
  foreground: 'oklch(0.820 0.180 305)',
  card: 'oklch(0.150 0.170 270)',
  cardForeground: 'oklch(0.800 0.175 308)',
  popover: 'oklch(0.165 0.160 258)',
  popoverForeground: 'oklch(0.810 0.170 310)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.153 264)',
  secondary: 'oklch(0.175 0.145 280)',
  secondaryForeground: 'oklch(0.790 0.165 305)',
  muted: 'oklch(0.155 0.155 265)',
  mutedForeground: 'oklch(0.660 0.200 310)',
  accent: 'oklch(0.170 0.190 252)',
  accentForeground: 'oklch(0.830 0.185 307)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.159 264)',
  input: 'oklch(0.270 0.159 264)',
  ring: 'oklch(0.690 0.300 194)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(264, 51%, 10%, 1)',
  cardColor: 'hsla(264, 53%, 16%, 1)',
  borderColor: 'hsla(264, 53%, 27%, 1)',
  mainColor: 'hsla(312, 76%, 72%, 1)',
  secondaryColor: 'hsla(194, 100%, 69%, 1)',
};
