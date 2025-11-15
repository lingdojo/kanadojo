import { ThemeDefinition } from '../types';

export const noirTheme: ThemeDefinition = {
  id: 'noir',
  name: 'Noir',
  description: 'Pure black and white, film noir aesthetic',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","minimal"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.000 0 0)',
  foreground: 'oklch(1.000 0 0)',
  card: 'oklch(0.050 0 0)',
  cardForeground: 'oklch(1.000 0 0)',
  popover: 'oklch(0.050 0 0)',
  popoverForeground: 'oklch(1.000 0 0)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.000 0 0)',
  secondary: 'oklch(0.050 0 0)',
  secondaryForeground: 'oklch(1.000 0 0)',
  muted: 'oklch(0.050 0 0)',
  mutedForeground: 'oklch(0.750 0 0)',
  accent: 'oklch(0.050 0 0)',
  accentForeground: 'oklch(1.000 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.200 0 0)',
  input: 'oklch(0.200 0 0)',
  ring: 'oklch(0.750 0 0)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(0, 0%, 0%, 1)',
  cardColor: 'hsla(0, 0%, 5%, 1)',
  borderColor: 'hsla(0, 0%, 20%, 1)',
  mainColor: 'hsla(0, 0%, 100%, 1)',
  secondaryColor: 'hsla(0, 0%, 75%, 1)',
};
