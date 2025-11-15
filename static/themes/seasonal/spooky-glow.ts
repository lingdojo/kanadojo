import { ThemeDefinition } from '../types';

export const spookyGlowTheme: ThemeDefinition = {
  id: 'spooky-glow',
  name: 'Spooky Glow',
  description: 'Neon green slime with purple accents',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'halloween', 'seasonal', 'green', 'purple', 'neon'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.050 0.030 210)',
  foreground: 'oklch(0.650 0.255 90)',
  card: 'oklch(0.120 0.045 210)',
  cardForeground: 'oklch(0.650 0.255 90)',
  popover: 'oklch(0.120 0.045 210)',
  popoverForeground: 'oklch(0.650 0.255 90)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.050 0.030 210)',
  secondary: 'oklch(0.120 0.045 210)',
  secondaryForeground: 'oklch(0.650 0.255 90)',
  muted: 'oklch(0.120 0.045 210)',
  mutedForeground: 'oklch(0.700 0.270 270)',
  accent: 'oklch(0.120 0.045 210)',
  accentForeground: 'oklch(0.650 0.255 90)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.220 0.045 210)',
  input: 'oklch(0.220 0.045 210)',
  ring: 'oklch(0.700 0.270 270)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(210, 10%, 5%, 1)',
  cardColor: 'hsla(210, 15%, 12%, 1)',
  borderColor: 'hsla(210, 15%, 22%, 1)',
  mainColor: 'hsla(90, 85%, 65%, 1)',
  secondaryColor: 'hsla(270, 90%, 70%, 1)',
};
