import { ThemeDefinition } from '../types';

export const nebulousMawTheme: ThemeDefinition = {
  id: 'nebulous-maw',
  name: 'Nebulous Maw',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.177 252)',
  foreground: 'oklch(0.690 0.300 46)',
  card: 'oklch(0.180 0.195 247)',
  cardForeground: 'oklch(0.690 0.300 46)',
  popover: 'oklch(0.180 0.195 247)',
  popoverForeground: 'oklch(0.690 0.300 46)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.177 252)',
  secondary: 'oklch(0.180 0.195 247)',
  secondaryForeground: 'oklch(0.690 0.300 46)',
  muted: 'oklch(0.180 0.195 247)',
  mutedForeground: 'oklch(0.780 0.297 321)',
  accent: 'oklch(0.180 0.195 247)',
  accentForeground: 'oklch(0.690 0.300 46)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.195 247)',
  input: 'oklch(0.280 0.195 247)',
  ring: 'oklch(0.780 0.297 321)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(252, 59%, 8%, 1)',
  cardColor: 'hsla(247, 65%, 18%, 1)',
  borderColor: 'hsla(247, 65%, 28%, 1)',
  mainColor: 'hsla(46, 100%, 69%, 1)',
  secondaryColor: 'hsla(321, 99%, 78%, 1)',
};
