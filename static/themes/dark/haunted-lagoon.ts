import { ThemeDefinition } from '../types';

export const hauntedLagoonTheme: ThemeDefinition = {
  id: 'haunted-lagoon',
  name: 'Haunted Lagoon',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.240 194)',
  foreground: 'oklch(0.560 0.243 168)',
  card: 'oklch(0.140 0.141 177)',
  cardForeground: 'oklch(0.560 0.243 168)',
  popover: 'oklch(0.140 0.141 177)',
  popoverForeground: 'oklch(0.560 0.243 168)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.240 194)',
  secondary: 'oklch(0.140 0.141 177)',
  secondaryForeground: 'oklch(0.560 0.243 168)',
  muted: 'oklch(0.140 0.141 177)',
  mutedForeground: 'oklch(0.640 0.117 117)',
  accent: 'oklch(0.140 0.141 177)',
  accentForeground: 'oklch(0.560 0.243 168)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.141 177)',
  input: 'oklch(0.270 0.141 177)',
  ring: 'oklch(0.640 0.117 117)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(194, 80%, 9%, 1)',
  cardColor: 'hsla(177, 47%, 14%, 1)',
  borderColor: 'hsla(177, 47%, 27%, 1)',
  mainColor: 'hsla(168, 81%, 56%, 1)',
  secondaryColor: 'hsla(117, 39%, 64%, 1)',
};
