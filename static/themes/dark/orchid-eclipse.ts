import { ThemeDefinition } from '../types';

export const orchidEclipseTheme: ThemeDefinition = {
  id: 'orchid-eclipse',
  name: 'Orchid Eclipse',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","purple","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.140 0.072 325)',
  foreground: 'oklch(0.670 0.213 304)',
  card: 'oklch(0.180 0.081 325)',
  cardForeground: 'oklch(0.670 0.213 304)',
  popover: 'oklch(0.180 0.081 325)',
  popoverForeground: 'oklch(0.670 0.213 304)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.072 325)',
  secondary: 'oklch(0.180 0.081 325)',
  secondaryForeground: 'oklch(0.670 0.213 304)',
  muted: 'oklch(0.180 0.081 325)',
  mutedForeground: 'oklch(0.540 0.225 164)',
  accent: 'oklch(0.180 0.081 325)',
  accentForeground: 'oklch(0.670 0.213 304)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.081 325)',
  input: 'oklch(0.280 0.081 325)',
  ring: 'oklch(0.540 0.225 164)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(325, 24%, 14%, 1)',
  cardColor: 'hsla(325, 27%, 18%, 1)',
  borderColor: 'hsla(325, 27%, 28%, 1)',
  mainColor: 'hsla(304, 71%, 67%, 1)',
  secondaryColor: 'hsla(164, 75%, 54%, 1)',
};
