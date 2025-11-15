import { ThemeDefinition } from '../types';

export const londonFogTheme: ThemeDefinition = {
  id: 'london-fog',
  name: 'London Fog',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","city"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.150 0.027 203)',
  foreground: 'oklch(0.690 0.087 75)',
  card: 'oklch(0.210 0.027 203)',
  cardForeground: 'oklch(0.690 0.087 75)',
  popover: 'oklch(0.210 0.027 203)',
  popoverForeground: 'oklch(0.690 0.087 75)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.150 0.027 203)',
  secondary: 'oklch(0.210 0.027 203)',
  secondaryForeground: 'oklch(0.690 0.087 75)',
  muted: 'oklch(0.210 0.027 203)',
  mutedForeground: 'oklch(0.740 0.258 207)',
  accent: 'oklch(0.210 0.027 203)',
  accentForeground: 'oklch(0.690 0.087 75)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.027 203)',
  input: 'oklch(0.310 0.027 203)',
  ring: 'oklch(0.740 0.258 207)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(203, 9%, 15%, 1)',
  cardColor: 'hsla(203, 9%, 21%, 1)',
  borderColor: 'hsla(203, 9%, 31%, 1)',
  mainColor: 'hsla(75, 29%, 69%, 1)',
  secondaryColor: 'hsla(207, 86%, 74%, 1)',
};
