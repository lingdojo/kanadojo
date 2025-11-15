import { ThemeDefinition } from '../types';

export const lapisSolaraTheme: ThemeDefinition = {
  id: 'lapis-solara',
  name: 'Lapis Solara',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.090 0.189 226)',
  foreground: 'oklch(0.770 0.300 57)',
  card: 'oklch(0.180 0.207 208)',
  cardForeground: 'oklch(0.770 0.300 57)',
  popover: 'oklch(0.180 0.207 208)',
  popoverForeground: 'oklch(0.770 0.300 57)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.090 0.189 226)',
  secondary: 'oklch(0.180 0.207 208)',
  secondaryForeground: 'oklch(0.770 0.300 57)',
  muted: 'oklch(0.180 0.207 208)',
  mutedForeground: 'oklch(0.820 0.291 259)',
  accent: 'oklch(0.180 0.207 208)',
  accentForeground: 'oklch(0.770 0.300 57)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.300 0.207 208)',
  input: 'oklch(0.300 0.207 208)',
  ring: 'oklch(0.820 0.291 259)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(226, 63%, 9%, 1)',
  cardColor: 'hsla(208, 69%, 18%, 1)',
  borderColor: 'hsla(208, 69%, 30%, 1)',
  mainColor: 'hsla(57, 100%, 77%, 1)',
  secondaryColor: 'hsla(259, 97%, 82%, 1)',
};
