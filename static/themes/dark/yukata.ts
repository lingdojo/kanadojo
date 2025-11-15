import { ThemeDefinition } from '../types';

export const yukataTheme: ThemeDefinition = {
  id: 'yukata',
  name: 'Yukata',
  description: 'Traditional Japanese summer kimono colors',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","japanese"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.100 0.150 220)',
  foreground: 'oklch(0.620 0.246 350)',
  card: 'oklch(0.140 0.144 220)',
  cardForeground: 'oklch(0.620 0.246 350)',
  popover: 'oklch(0.140 0.144 220)',
  popoverForeground: 'oklch(0.620 0.246 350)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.100 0.150 220)',
  secondary: 'oklch(0.140 0.144 220)',
  secondaryForeground: 'oklch(0.620 0.246 350)',
  muted: 'oklch(0.140 0.144 220)',
  mutedForeground: 'oklch(0.680 0.195 280)',
  accent: 'oklch(0.140 0.144 220)',
  accentForeground: 'oklch(0.620 0.246 350)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.220 0.135 220)',
  input: 'oklch(0.220 0.135 220)',
  ring: 'oklch(0.680 0.195 280)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(220, 50%, 10%, 1)',
  cardColor: 'hsla(220, 48%, 14%, 1)',
  borderColor: 'hsla(220, 45%, 22%, 1)',
  mainColor: 'hsla(350, 82%, 62%, 1)',
  secondaryColor: 'hsla(280, 65%, 68%, 1)',
};
