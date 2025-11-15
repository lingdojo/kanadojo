import { ThemeDefinition } from '../types';

export const azureTwilightTheme: ThemeDefinition = {
  id: 'azure-twilight',
  name: 'Azure Twilight',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.111 219)',
  foreground: 'oklch(0.580 0.291 187)',
  card: 'oklch(0.160 0.117 219)',
  cardForeground: 'oklch(0.580 0.291 187)',
  popover: 'oklch(0.160 0.117 219)',
  popoverForeground: 'oklch(0.580 0.291 187)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.111 219)',
  secondary: 'oklch(0.160 0.117 219)',
  secondaryForeground: 'oklch(0.580 0.291 187)',
  muted: 'oklch(0.160 0.117 219)',
  mutedForeground: 'oklch(0.780 0.222 261)',
  accent: 'oklch(0.160 0.117 219)',
  accentForeground: 'oklch(0.580 0.291 187)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.117 219)',
  input: 'oklch(0.270 0.117 219)',
  ring: 'oklch(0.780 0.222 261)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(219, 37%, 11%, 1)',
  cardColor: 'hsla(219, 39%, 16%, 1)',
  borderColor: 'hsla(219, 39%, 27%, 1)',
  mainColor: 'hsla(187, 97%, 58%, 1)',
  secondaryColor: 'hsla(261, 74%, 78%, 1)',
};
