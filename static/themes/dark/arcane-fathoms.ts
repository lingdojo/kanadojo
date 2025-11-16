import { ThemeDefinition } from '../types';

export const arcaneFathomsTheme: ThemeDefinition = {
  id: 'arcane-fathoms',
  name: 'Arcane Fathoms',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.222 207)',
  foreground: 'oklch(0.780 0.180 250)',
  card: 'oklch(0.145 0.240 210)',
  cardForeground: 'oklch(0.760 0.175 248)',
  popover: 'oklch(0.155 0.230 204)',
  popoverForeground: 'oklch(0.770 0.170 252)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.222 207)',
  secondary: 'oklch(0.135 0.210 215)',
  secondaryForeground: 'oklch(0.750 0.165 245)',
  muted: 'oklch(0.150 0.200 208)',
  mutedForeground: 'oklch(0.620 0.150 250)',
  accent: 'oklch(0.140 0.250 200)',
  accentForeground: 'oklch(0.790 0.185 255)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.200 0.222 207)',
  input: 'oklch(0.200 0.222 207)',
  ring: 'oklch(0.800 0.279 281)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(207, 74%, 10%, 1)',
  cardColor: 'hsla(207, 74%, 13%, 1)',
  borderColor: 'hsla(207, 74%, 20%, 1)',
  mainColor: 'hsla(97, 76%, 66%, 1)',
  secondaryColor: 'hsla(281, 93%, 80%, 1)',
};
