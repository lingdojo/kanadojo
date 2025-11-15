import { ThemeDefinition } from '../types';

export const celestiteFrostTheme: ThemeDefinition = {
  id: 'celestite-frost',
  name: 'Celestite Frost',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.129 196)',
  foreground: 'oklch(0.850 0.300 196)',
  card: 'oklch(0.190 0.150 196)',
  cardForeground: 'oklch(0.850 0.300 196)',
  popover: 'oklch(0.190 0.150 196)',
  popoverForeground: 'oklch(0.850 0.300 196)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.129 196)',
  secondary: 'oklch(0.190 0.150 196)',
  secondaryForeground: 'oklch(0.850 0.300 196)',
  muted: 'oklch(0.190 0.150 196)',
  mutedForeground: 'oklch(0.760 0.258 314)',
  accent: 'oklch(0.190 0.150 196)',
  accentForeground: 'oklch(0.850 0.300 196)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.150 196)',
  input: 'oklch(0.290 0.150 196)',
  ring: 'oklch(0.760 0.258 314)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(196, 43%, 13%, 1)',
  cardColor: 'hsla(196, 50%, 19%, 1)',
  borderColor: 'hsla(196, 50%, 29%, 1)',
  mainColor: 'hsla(196, 100%, 85%, 1)',
  secondaryColor: 'hsla(314, 86%, 76%, 1)',
};
