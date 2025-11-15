import { ThemeDefinition } from '../types';

export const seraphicAuroraTheme: ThemeDefinition = {
  id: 'seraphic-aurora',
  name: 'Seraphic Aurora',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","elegant"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.120 0.156 217)',
  foreground: 'oklch(0.600 0.300 153)',
  card: 'oklch(0.180 0.168 197)',
  cardForeground: 'oklch(0.600 0.300 153)',
  popover: 'oklch(0.180 0.168 197)',
  popoverForeground: 'oklch(0.600 0.300 153)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.120 0.156 217)',
  secondary: 'oklch(0.180 0.168 197)',
  secondaryForeground: 'oklch(0.600 0.300 153)',
  muted: 'oklch(0.180 0.168 197)',
  mutedForeground: 'oklch(0.740 0.291 273)',
  accent: 'oklch(0.180 0.168 197)',
  accentForeground: 'oklch(0.600 0.300 153)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.280 0.168 197)',
  input: 'oklch(0.280 0.168 197)',
  ring: 'oklch(0.740 0.291 273)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(217, 52%, 12%, 1)',
  cardColor: 'hsla(197, 56%, 18%, 1)',
  borderColor: 'hsla(197, 56%, 28%, 1)',
  mainColor: 'hsla(153, 100%, 60%, 1)',
  secondaryColor: 'hsla(273, 97%, 74%, 1)',
};
