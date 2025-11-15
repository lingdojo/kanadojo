import { ThemeDefinition } from '../types';

export const lightTheme: ThemeDefinition = {
  id: 'light',
  name: 'Light',
  description: 'Clean and minimal light theme with shadcn/ui colors',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ['light', 'minimal', 'default'],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(1 0 0)', // Pure white
  foreground: 'oklch(0.145 0 0)', // Near black
  card: 'oklch(1 0 0)', // Pure white
  cardForeground: 'oklch(0.145 0 0)', // Near black
  popover: 'oklch(1 0 0)', // Pure white
  popoverForeground: 'oklch(0.145 0 0)', // Near black
  primary: 'oklch(0.205 0 0)', // Dark gray
  primaryForeground: 'oklch(0.985 0 0)', // Off-white
  secondary: 'oklch(0.97 0 0)', // Light gray
  secondaryForeground: 'oklch(0.205 0 0)', // Dark gray
  muted: 'oklch(0.97 0 0)', // Light gray
  mutedForeground: 'oklch(0.556 0 0)', // Medium gray
  accent: 'oklch(0.97 0 0)', // Light gray
  accentForeground: 'oklch(0.205 0 0)', // Dark gray
  destructive: 'oklch(0.577 0.245 27.325)', // Red
  border: 'oklch(0.922 0 0)', // Light gray
  input: 'oklch(0.922 0 0)', // Light gray
  ring: 'oklch(0.708 0 0)', // Medium gray

  // Chart colors
  chart1: 'oklch(0.646 0.222 41.116)',
  chart2: 'oklch(0.6 0.118 184.704)',
  chart3: 'oklch(0.398 0.07 227.392)',
  chart4: 'oklch(0.828 0.189 84.429)',
  chart5: 'oklch(0.769 0.188 70.08)',

  // Border radius
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(210, 17%, 100%, 1)',
  cardColor: 'hsla(210, 17%, 91%, 1)',
  borderColor: 'hsla(210, 17%, 76%, 1)',
  mainColor: 'hsla(0, 0%, 0%, 1)',
  secondaryColor: 'hsla(0, 0%, 35%, 1)',
};
