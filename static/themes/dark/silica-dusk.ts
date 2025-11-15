import { ThemeDefinition } from '../types';

export const silicaDuskTheme: ThemeDefinition = {
  id: 'silica-dusk',
  name: 'Silica Dusk',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","night"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.080 0.087 19)',
  foreground: 'oklch(0.780 0.285 359)',
  card: 'oklch(0.140 0.051 29)',
  cardForeground: 'oklch(0.780 0.285 359)',
  popover: 'oklch(0.140 0.051 29)',
  popoverForeground: 'oklch(0.780 0.285 359)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.080 0.087 19)',
  secondary: 'oklch(0.140 0.051 29)',
  secondaryForeground: 'oklch(0.780 0.285 359)',
  muted: 'oklch(0.140 0.051 29)',
  mutedForeground: 'oklch(0.690 0.264 186)',
  accent: 'oklch(0.140 0.051 29)',
  accentForeground: 'oklch(0.780 0.285 359)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.240 0.051 29)',
  input: 'oklch(0.240 0.051 29)',
  ring: 'oklch(0.690 0.264 186)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(19, 29%, 8%, 1)',
  cardColor: 'hsla(29, 17%, 14%, 1)',
  borderColor: 'hsla(29, 17%, 24%, 1)',
  mainColor: 'hsla(359, 95%, 78%, 1)',
  secondaryColor: 'hsla(186, 88%, 69%, 1)',
};
