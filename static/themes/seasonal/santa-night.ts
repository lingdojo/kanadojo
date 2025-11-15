import { ThemeDefinition } from '../types';

export const santaNightTheme: ThemeDefinition = {
  id: 'santa-night',
  name: 'Santa Night',
  description: 'Festive Christmas theme with red and gold',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'christmas', 'seasonal', 'red', 'gold'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.150 220)',
  foreground: 'oklch(0.550 0.255 355)',
  card: 'oklch(0.180 0.165 220)',
  cardForeground: 'oklch(0.550 0.255 355)',
  popover: 'oklch(0.180 0.165 220)',
  popoverForeground: 'oklch(0.550 0.255 355)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.150 220)',
  secondary: 'oklch(0.180 0.165 220)',
  secondaryForeground: 'oklch(0.550 0.255 355)',
  muted: 'oklch(0.180 0.165 220)',
  mutedForeground: 'oklch(0.550 0.300 45)',
  accent: 'oklch(0.180 0.165 220)',
  accentForeground: 'oklch(0.550 0.255 355)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.165 220)',
  input: 'oklch(0.250 0.165 220)',
  ring: 'oklch(0.550 0.300 45)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(220, 50%, 12%, 1)',
  cardColor: 'hsla(220, 55%, 18%, 1)',
  borderColor: 'hsla(220, 55%, 25%, 1)',
  mainColor: 'hsla(355, 85%, 55%, 1)',
  secondaryColor: 'hsla(45, 100%, 55%, 1)',
};
