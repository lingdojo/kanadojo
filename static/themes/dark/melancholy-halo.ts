import { ThemeDefinition } from '../types';

export const melancholyHaloTheme: ThemeDefinition = {
  id: 'melancholy-halo',
  name: 'Melancholy Halo',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.087 222)',
  foreground: 'oklch(0.740 0.282 257)',
  card: 'oklch(0.160 0.090 253)',
  cardForeground: 'oklch(0.740 0.282 257)',
  popover: 'oklch(0.160 0.090 253)',
  popoverForeground: 'oklch(0.740 0.282 257)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.087 222)',
  secondary: 'oklch(0.160 0.090 253)',
  secondaryForeground: 'oklch(0.740 0.282 257)',
  muted: 'oklch(0.160 0.090 253)',
  mutedForeground: 'oklch(0.660 0.288 159)',
  accent: 'oklch(0.160 0.090 253)',
  accentForeground: 'oklch(0.740 0.282 257)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.090 253)',
  input: 'oklch(0.270 0.090 253)',
  ring: 'oklch(0.660 0.288 159)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(222, 29%, 9%, 1)',
  cardColor: 'hsla(253, 30%, 16%, 1)',
  borderColor: 'hsla(253, 30%, 27%, 1)',
  mainColor: 'hsla(257, 94%, 74%, 1)',
  secondaryColor: 'hsla(159, 96%, 66%, 1)',
};
