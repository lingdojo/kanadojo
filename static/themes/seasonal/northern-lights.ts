import { ThemeDefinition } from '../types';

export const northernLightsTheme: ThemeDefinition = {
  id: 'northern-lights',
  name: 'Northern Lights',
  description: 'Aurora borealis inspired winter theme',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'christmas', 'seasonal', 'green', 'purple', 'aurora'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.090 200)',
  foreground: 'oklch(0.550 0.270 165)',
  card: 'oklch(0.160 0.105 200)',
  cardForeground: 'oklch(0.550 0.270 165)',
  popover: 'oklch(0.160 0.105 200)',
  popoverForeground: 'oklch(0.550 0.270 165)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.090 200)',
  secondary: 'oklch(0.160 0.105 200)',
  secondaryForeground: 'oklch(0.550 0.270 165)',
  muted: 'oklch(0.160 0.105 200)',
  mutedForeground: 'oklch(0.650 0.255 280)',
  accent: 'oklch(0.160 0.105 200)',
  accentForeground: 'oklch(0.550 0.270 165)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.250 0.105 200)',
  input: 'oklch(0.250 0.105 200)',
  ring: 'oklch(0.650 0.255 280)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(200, 30%, 10%, 1)',
  cardColor: 'hsla(200, 35%, 16%, 1)',
  borderColor: 'hsla(200, 35%, 25%, 1)',
  mainColor: 'hsla(165, 90%, 55%, 1)',
  secondaryColor: 'hsla(280, 85%, 65%, 1)',
};
