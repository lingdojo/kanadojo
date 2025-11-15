import { ThemeDefinition } from '../types';

export const cobaltLumenTheme: ThemeDefinition = {
  id: 'cobalt-lumen',
  name: 'Cobalt Lumen',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.270 205)',
  foreground: 'oklch(0.670 0.291 193)',
  card: 'oklch(0.180 0.213 210)',
  cardForeground: 'oklch(0.670 0.291 193)',
  popover: 'oklch(0.180 0.213 210)',
  popoverForeground: 'oklch(0.670 0.291 193)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.270 205)',
  secondary: 'oklch(0.180 0.213 210)',
  secondaryForeground: 'oklch(0.670 0.291 193)',
  muted: 'oklch(0.180 0.213 210)',
  mutedForeground: 'oklch(0.620 0.282 299)',
  accent: 'oklch(0.180 0.213 210)',
  accentForeground: 'oklch(0.670 0.291 193)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.213 210)',
  input: 'oklch(0.310 0.213 210)',
  ring: 'oklch(0.620 0.282 299)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(205, 90%, 8%, 1)',
  cardColor: 'hsla(210, 71%, 18%, 1)',
  borderColor: 'hsla(210, 71%, 31%, 1)',
  mainColor: 'hsla(193, 97%, 67%, 1)',
  secondaryColor: 'hsla(299, 94%, 62%, 1)',
};
