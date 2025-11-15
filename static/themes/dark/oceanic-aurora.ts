import { ThemeDefinition } from '../types';

export const oceanicAuroraTheme: ThemeDefinition = {
  id: 'oceanic-aurora',
  name: 'Oceanic Aurora',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","ocean"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.201 204)',
  foreground: 'oklch(0.620 0.276 162)',
  card: 'oklch(0.170 0.210 204)',
  cardForeground: 'oklch(0.620 0.276 162)',
  popover: 'oklch(0.170 0.210 204)',
  popoverForeground: 'oklch(0.620 0.276 162)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.201 204)',
  secondary: 'oklch(0.170 0.210 204)',
  secondaryForeground: 'oklch(0.620 0.276 162)',
  muted: 'oklch(0.170 0.210 204)',
  mutedForeground: 'oklch(0.760 0.234 280)',
  accent: 'oklch(0.170 0.210 204)',
  accentForeground: 'oklch(0.620 0.276 162)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.210 204)',
  input: 'oklch(0.270 0.210 204)',
  ring: 'oklch(0.760 0.234 280)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(204, 67%, 12%, 1)',
  cardColor: 'hsla(204, 70%, 17%, 1)',
  borderColor: 'hsla(204, 70%, 27%, 1)',
  mainColor: 'hsla(162, 92%, 62%, 1)',
  secondaryColor: 'hsla(280, 78%, 76%, 1)',
};
