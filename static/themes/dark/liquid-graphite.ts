import { ThemeDefinition } from '../types';

export const liquidGraphiteTheme: ThemeDefinition = {
  id: 'liquid-graphite',
  name: 'Liquid Graphite',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.036 222)',
  foreground: 'oklch(0.630 0.210 195)',
  card: 'oklch(0.180 0.036 222)',
  cardForeground: 'oklch(0.630 0.210 195)',
  popover: 'oklch(0.180 0.036 222)',
  popoverForeground: 'oklch(0.630 0.210 195)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.036 222)',
  secondary: 'oklch(0.180 0.036 222)',
  secondaryForeground: 'oklch(0.630 0.210 195)',
  muted: 'oklch(0.180 0.036 222)',
  mutedForeground: 'oklch(0.590 0.300 29)',
  accent: 'oklch(0.180 0.036 222)',
  accentForeground: 'oklch(0.630 0.210 195)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.036 222)',
  input: 'oklch(0.310 0.036 222)',
  ring: 'oklch(0.590 0.300 29)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(222, 12%, 9%, 1)',
  cardColor: 'hsla(222, 12%, 18%, 1)',
  borderColor: 'hsla(222, 12%, 31%, 1)',
  mainColor: 'hsla(195, 70%, 63%, 1)',
  secondaryColor: 'hsla(29, 100%, 59%, 1)',
};
