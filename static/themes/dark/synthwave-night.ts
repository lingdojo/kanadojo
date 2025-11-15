import { ThemeDefinition } from '../types';

export const synthwaveNightTheme: ThemeDefinition = {
  id: 'synthwave-night',
  name: 'Synthwave Night',
  description: 'Retro 80s synthwave vibes',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","neon","cyber","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.078 265)',
  foreground: 'oklch(0.660 0.276 314)',
  card: 'oklch(0.200 0.078 265)',
  cardForeground: 'oklch(0.660 0.276 314)',
  popover: 'oklch(0.200 0.078 265)',
  popoverForeground: 'oklch(0.660 0.276 314)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.078 265)',
  secondary: 'oklch(0.200 0.078 265)',
  secondaryForeground: 'oklch(0.660 0.276 314)',
  muted: 'oklch(0.200 0.078 265)',
  mutedForeground: 'oklch(0.600 0.291 173)',
  accent: 'oklch(0.200 0.078 265)',
  accentForeground: 'oklch(0.660 0.276 314)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.078 265)',
  input: 'oklch(0.310 0.078 265)',
  ring: 'oklch(0.600 0.291 173)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(265, 26%, 13%, 1)',
  cardColor: 'hsla(265, 26%, 20%, 1)',
  borderColor: 'hsla(265, 26%, 31%, 1)',
  mainColor: 'hsla(314, 92%, 66%, 1)',
  secondaryColor: 'hsla(173, 97%, 60%, 1)',
};
