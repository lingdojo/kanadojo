import { ThemeDefinition } from '../types';

export const lotusSpecterTheme: ThemeDefinition = {
  id: 'lotus-specter',
  name: 'Lotus Specter',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.144 322)',
  foreground: 'oklch(0.720 0.297 291)',
  card: 'oklch(0.160 0.159 322)',
  cardForeground: 'oklch(0.720 0.297 291)',
  popover: 'oklch(0.160 0.159 322)',
  popoverForeground: 'oklch(0.720 0.297 291)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.144 322)',
  secondary: 'oklch(0.160 0.159 322)',
  secondaryForeground: 'oklch(0.720 0.297 291)',
  muted: 'oklch(0.160 0.159 322)',
  mutedForeground: 'oklch(0.670 0.300 53)',
  accent: 'oklch(0.160 0.159 322)',
  accentForeground: 'oklch(0.720 0.297 291)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.159 322)',
  input: 'oklch(0.290 0.159 322)',
  ring: 'oklch(0.670 0.300 53)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(322, 48%, 11%, 1)',
  cardColor: 'hsla(322, 53%, 16%, 1)',
  borderColor: 'hsla(322, 53%, 29%, 1)',
  mainColor: 'hsla(291, 99%, 72%, 1)',
  secondaryColor: 'hsla(53, 100%, 67%, 1)',
};
