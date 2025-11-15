import { ThemeDefinition } from '../types';

export const longTheme: ThemeDefinition = {
  id: 'long',
  name: 'Long',
  description: 'Soft pink background with purple accents',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['light', 'pink', 'purple', 'pastel'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.910 0.300 350)',
  foreground: 'oklch(0.650 0.210 270)',
  card: 'oklch(0.900 0.300 350)',
  cardForeground: 'oklch(0.650 0.210 270)',
  popover: 'oklch(0.900 0.300 350)',
  popoverForeground: 'oklch(0.650 0.210 270)',
  primary: 'oklch(0.205 0 0)',
  primaryForeground: 'oklch(0.985 0 0)',
  secondary: 'oklch(0.900 0.300 350)',
  secondaryForeground: 'oklch(0.650 0.210 270)',
  muted: 'oklch(0.900 0.300 350)',
  mutedForeground: 'oklch(0.700 0.300 270)',
  accent: 'oklch(0.900 0.300 350)',
  accentForeground: 'oklch(0.650 0.210 270)',
  destructive: 'oklch(0.577 0.245 27.325)',
  border: 'oklch(0.850 0.300 350)',
  input: 'oklch(0.850 0.300 350)',
  ring: 'oklch(0.700 0.300 270)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsl(350, 100%, 91%)',
  cardColor: 'hsl(350, 100%, 90%)',
  borderColor: 'hsl(350, 100%, 85%)',
  mainColor: ' hsl(270, 70%, 65%)',
  secondaryColor: 'hsl(270, 100%, 70%)',
};
