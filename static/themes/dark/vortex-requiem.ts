import { ThemeDefinition } from '../types';

export const vortexRequiemTheme: ThemeDefinition = {
  id: 'vortex-requiem',
  name: 'Vortex Requiem',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.153 290)',
  foreground: 'oklch(0.640 0.300 192)',
  card: 'oklch(0.180 0.123 227)',
  cardForeground: 'oklch(0.640 0.300 192)',
  popover: 'oklch(0.180 0.123 227)',
  popoverForeground: 'oklch(0.640 0.300 192)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.153 290)',
  secondary: 'oklch(0.180 0.123 227)',
  secondaryForeground: 'oklch(0.640 0.300 192)',
  muted: 'oklch(0.180 0.123 227)',
  mutedForeground: 'oklch(0.620 0.300 292)',
  accent: 'oklch(0.180 0.123 227)',
  accentForeground: 'oklch(0.640 0.300 192)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.290 0.123 227)',
  input: 'oklch(0.290 0.123 227)',
  ring: 'oklch(0.620 0.300 292)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(290, 51%, 10%, 1)',
  cardColor: 'hsla(227, 41%, 18%, 1)',
  borderColor: 'hsla(227, 41%, 29%, 1)',
  mainColor: 'hsla(192, 100%, 64%, 1)',
  secondaryColor: 'hsla(292, 100%, 62%, 1)',
};
