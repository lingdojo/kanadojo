import { ThemeDefinition } from '../types';

export const lucidDuskTheme: ThemeDefinition = {
  id: 'lucid-dusk',
  name: 'Lucid Dusk',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.126 246)',
  foreground: 'oklch(0.680 0.243 6)',
  card: 'oklch(0.180 0.135 246)',
  cardForeground: 'oklch(0.680 0.243 6)',
  popover: 'oklch(0.180 0.135 246)',
  popoverForeground: 'oklch(0.680 0.243 6)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.126 246)',
  secondary: 'oklch(0.180 0.135 246)',
  secondaryForeground: 'oklch(0.680 0.243 6)',
  muted: 'oklch(0.180 0.135 246)',
  mutedForeground: 'oklch(0.680 0.300 182)',
  accent: 'oklch(0.180 0.135 246)',
  accentForeground: 'oklch(0.680 0.243 6)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.135 246)',
  input: 'oklch(0.280 0.135 246)',
  ring: 'oklch(0.680 0.300 182)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(246, 42%, 13%, 1)',
  cardColor: 'hsla(246, 45%, 18%, 1)',
  borderColor: 'hsla(246, 45%, 28%, 1)',
  mainColor: 'hsla(6, 81%, 68%, 1)',
  secondaryColor: 'hsla(182, 100%, 68%, 1)',
};
