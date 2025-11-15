import { ThemeDefinition } from '../types';

export const monkeytypeTheme: ThemeDefinition = {
  id: 'monkeytype',
  name: 'Monkeytype',
  description: 'Inspired by the popular typing practice website',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","popular"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.220 0.015 210)',
  foreground: 'oklch(0.490 0.246 49)',
  card: 'oklch(0.280 0.015 220)',
  cardForeground: 'oklch(0.490 0.246 49)',
  popover: 'oklch(0.280 0.015 220)',
  popoverForeground: 'oklch(0.490 0.246 49)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.220 0.015 210)',
  secondary: 'oklch(0.280 0.015 220)',
  secondaryForeground: 'oklch(0.490 0.246 49)',
  muted: 'oklch(0.280 0.015 220)',
  mutedForeground: 'oklch(0.810 0.042 49)',
  accent: 'oklch(0.280 0.015 220)',
  accentForeground: 'oklch(0.490 0.246 49)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.350 0.015 220)',
  input: 'oklch(0.350 0.015 220)',
  ring: 'oklch(0.810 0.042 49)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(210, 5%, 22%, 1)',
  cardColor: 'hsla(220, 5%, 28%, 1)',
  borderColor: 'hsla(220, 5%, 35%, 1)',
  mainColor: 'hsla(49, 82%, 49%, 1)',
  secondaryColor: 'hsla(49, 14%, 81%, 1)',
};
