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
  foreground: 'oklch(0.850 0.120 210)',
  card: 'oklch(0.180 0.150 215)',
  cardForeground: 'oklch(0.830 0.115 212)',
  popover: 'oklch(0.190 0.140 220)',
  popoverForeground: 'oklch(0.840 0.110 208)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.140 0.132 217)',
  secondary: 'oklch(0.200 0.160 10)',
  secondaryForeground: 'oklch(0.820 0.105 215)',
  muted: 'oklch(0.185 0.145 218)',
  mutedForeground: 'oklch(0.620 0.100 210)',
  accent: 'oklch(0.195 0.200 15)',
  accentForeground: 'oklch(0.860 0.125 208)',
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
