import { ThemeDefinition } from '../types';

export const arcticInfernoTheme: ThemeDefinition = {
  id: 'arctic-inferno',
  name: 'Arctic Inferno',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.140 0.132 217)',
  foreground: 'oklch(0.660 0.288 6)',
  card: 'oklch(0.170 0.180 220)',
  cardForeground: 'oklch(0.660 0.288 6)',
  popover: 'oklch(0.170 0.180 220)',
  popoverForeground: 'oklch(0.660 0.288 6)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.132 217)',
  secondary: 'oklch(0.170 0.180 220)',
  secondaryForeground: 'oklch(0.660 0.288 6)',
  muted: 'oklch(0.170 0.180 220)',
  mutedForeground: 'oklch(0.650 0.300 181)',
  accent: 'oklch(0.170 0.180 220)',
  accentForeground: 'oklch(0.660 0.288 6)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.180 220)',
  input: 'oklch(0.270 0.180 220)',
  ring: 'oklch(0.650 0.300 181)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(217, 44%, 14%, 1)',
  cardColor: 'hsla(220, 60%, 17%, 1)',
  borderColor: 'hsla(220, 60%, 27%, 1)',
  mainColor: 'hsla(6, 96%, 66%, 1)',
  secondaryColor: 'hsla(181, 100%, 65%, 1)',
};
