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
  foreground: 'oklch(0.660 0.228 97)',
  card: 'oklch(0.130 0.222 207)',
  cardForeground: 'oklch(0.660 0.228 97)',
  popover: 'oklch(0.130 0.222 207)',
  popoverForeground: 'oklch(0.660 0.228 97)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.222 207)',
  secondary: 'oklch(0.130 0.222 207)',
  secondaryForeground: 'oklch(0.660 0.228 97)',
  muted: 'oklch(0.130 0.222 207)',
  mutedForeground: 'oklch(0.800 0.279 281)',
  accent: 'oklch(0.130 0.222 207)',
  accentForeground: 'oklch(0.660 0.228 97)',
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
