import { ThemeDefinition } from '../types';

export const darkTheme: ThemeDefinition = {
  id: 'dark',
  name: 'Dark',
  description: 'Clean and minimal dark theme with shadcn/ui colors',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['dark', 'minimal', 'default'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.145 0 0)', // Near black
  foreground: 'oklch(0.985 0 0)', // Off-white
  card: 'oklch(0.205 0 0)', // Dark gray
  cardForeground: 'oklch(0.985 0 0)', // Off-white
  popover: 'oklch(0.205 0 0)', // Dark gray
  popoverForeground: 'oklch(0.985 0 0)', // Off-white
  primary: 'oklch(0.922 0 0)', // Light gray
  primaryForeground: 'oklch(0.205 0 0)', // Dark gray
  secondary: 'oklch(0.269 0 0)', // Medium dark gray
  secondaryForeground: 'oklch(0.985 0 0)', // Off-white
  muted: 'oklch(0.269 0 0)', // Medium dark gray
  mutedForeground: 'oklch(0.708 0 0)', // Medium gray
  accent: 'oklch(0.269 0 0)', // Medium dark gray
  accentForeground: 'oklch(0.985 0 0)', // Off-white
  destructive: 'oklch(0.704 0.191 22.216)', // Red
  border: 'oklch(1 0 0 / 10%)', // Translucent white
  input: 'oklch(1 0 0 / 15%)', // Translucent white
  ring: 'oklch(0.556 0 0)', // Medium gray

  // Chart colors
  chart1: 'oklch(0.488 0.243 264.376)',
  chart2: 'oklch(0.696 0.17 162.48)',
  chart3: 'oklch(0.769 0.188 70.08)',
  chart4: 'oklch(0.627 0.265 303.9)',
  chart5: 'oklch(0.645 0.246 16.439)',

  // Border radius
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(0, 0%, 11%, 1)',
  cardColor: 'hsla(0, 0%, 16%, 1)',
  borderColor: 'hsla(0, 0%, 30%, 1)',
  mainColor: 'hsla(0, 0%, 100%, 1)',
  secondaryColor: 'hsla(0, 0%, 75%, 1)',
};
