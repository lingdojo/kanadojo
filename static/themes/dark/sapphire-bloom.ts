import { ThemeDefinition } from '../types';

export const sapphireBloomTheme: ThemeDefinition = {
  id: 'sapphire-bloom',
  name: 'Sapphire Bloom',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.140 0.123 224)',
  foreground: 'oklch(0.830 0.300 261)',
  card: 'oklch(0.190 0.141 224)',
  cardForeground: 'oklch(0.830 0.300 261)',
  popover: 'oklch(0.190 0.141 224)',
  popoverForeground: 'oklch(0.830 0.300 261)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.123 224)',
  secondary: 'oklch(0.190 0.141 224)',
  secondaryForeground: 'oklch(0.830 0.300 261)',
  muted: 'oklch(0.190 0.141 224)',
  mutedForeground: 'oklch(0.590 0.300 166)',
  accent: 'oklch(0.190 0.141 224)',
  accentForeground: 'oklch(0.830 0.300 261)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.300 0.141 224)',
  input: 'oklch(0.300 0.141 224)',
  ring: 'oklch(0.590 0.300 166)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(224, 41%, 14%, 1)',
  cardColor: 'hsla(224, 47%, 19%, 1)',
  borderColor: 'hsla(224, 47%, 30%, 1)',
  mainColor: 'hsla(261, 100%, 83%, 1)',
  secondaryColor: 'hsla(166, 100%, 59%, 1)',
};
