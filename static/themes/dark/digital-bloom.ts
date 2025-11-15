import { ThemeDefinition } from '../types';

export const digitalBloomTheme: ThemeDefinition = {
  id: 'digital-bloom',
  name: 'Digital Bloom',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","neon","cyber"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.130 0.048 308)',
  foreground: 'oklch(0.550 0.270 93)',
  card: 'oklch(0.200 0.048 308)',
  cardForeground: 'oklch(0.550 0.270 93)',
  popover: 'oklch(0.200 0.048 308)',
  popoverForeground: 'oklch(0.550 0.270 93)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.130 0.048 308)',
  secondary: 'oklch(0.200 0.048 308)',
  secondaryForeground: 'oklch(0.550 0.270 93)',
  muted: 'oklch(0.200 0.048 308)',
  mutedForeground: 'oklch(0.660 0.285 207)',
  accent: 'oklch(0.200 0.048 308)',
  accentForeground: 'oklch(0.550 0.270 93)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.310 0.048 308)',
  input: 'oklch(0.310 0.048 308)',
  ring: 'oklch(0.660 0.285 207)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(308, 16%, 13%, 1)',
  cardColor: 'hsla(308, 16%, 20%, 1)',
  borderColor: 'hsla(308, 16%, 31%, 1)',
  mainColor: 'hsla(93, 90%, 55%, 1)',
  secondaryColor: 'hsla(207, 95%, 66%, 1)',
};
