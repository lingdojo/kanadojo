import { ThemeDefinition } from '../types';

export const fujiTheme: ThemeDefinition = {
  id: 'fuji',
  name: 'Fuji',
  description: 'Inspired by Mount Fuji at dawn',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.084 210)',
  foreground: 'oklch(0.750 0.165 200)',
  card: 'oklch(0.150 0.078 210)',
  cardForeground: 'oklch(0.750 0.165 200)',
  popover: 'oklch(0.150 0.078 210)',
  popoverForeground: 'oklch(0.750 0.165 200)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.084 210)',
  secondary: 'oklch(0.150 0.078 210)',
  secondaryForeground: 'oklch(0.750 0.165 200)',
  muted: 'oklch(0.150 0.078 210)',
  mutedForeground: 'oklch(0.920 0 0)',
  accent: 'oklch(0.150 0.078 210)',
  accentForeground: 'oklch(0.750 0.165 200)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.230 0.072 210)',
  input: 'oklch(0.230 0.072 210)',
  ring: 'oklch(0.920 0 0)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(210, 28%, 11%, 1)',
  cardColor: 'hsla(210, 26%, 15%, 1)',
  borderColor: 'hsla(210, 24%, 23%, 1)',
  mainColor: 'hsla(200, 55%, 75%, 1)',
  secondaryColor: 'hsla(0, 0%, 92%, 1)',
};
