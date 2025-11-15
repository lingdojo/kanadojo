import { ThemeDefinition } from '../types';

export const prairieStarTheme: ThemeDefinition = {
  id: 'prairie-star',
  name: 'Prairie Star',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","green","nature"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.138 220)',
  foreground: 'oklch(0.610 0.279 218)',
  card: 'oklch(0.180 0.144 220)',
  cardForeground: 'oklch(0.610 0.279 218)',
  popover: 'oklch(0.180 0.144 220)',
  popoverForeground: 'oklch(0.610 0.279 218)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.138 220)',
  secondary: 'oklch(0.180 0.144 220)',
  secondaryForeground: 'oklch(0.610 0.279 218)',
  muted: 'oklch(0.180 0.144 220)',
  mutedForeground: 'oklch(0.640 0.276 0)',
  accent: 'oklch(0.180 0.144 220)',
  accentForeground: 'oklch(0.610 0.279 218)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.144 220)',
  input: 'oklch(0.280 0.144 220)',
  ring: 'oklch(0.640 0.276 0)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(220, 46%, 11%, 1)',
  cardColor: 'hsla(220, 48%, 18%, 1)',
  borderColor: 'hsla(220, 48%, 28%, 1)',
  mainColor: 'hsla(218, 93%, 61%, 1)',
  secondaryColor: 'hsla(0, 92%, 64%, 1)',
};
