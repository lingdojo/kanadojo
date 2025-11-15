import { ThemeDefinition } from '../types';

export const absoluteDarknessTheme: ThemeDefinition = {
  id: 'absolute-darkness',
  name: 'Absolute Darkness',
  description: 'Deepest darkness for OLED screens',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.040 0.078 264)',
  foreground: 'oklch(0.470 0.246 28)',
  card: 'oklch(0.140 0.042 240)',
  cardForeground: 'oklch(0.470 0.246 28)',
  popover: 'oklch(0.140 0.042 240)',
  popoverForeground: 'oklch(0.470 0.246 28)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.040 0.078 264)',
  secondary: 'oklch(0.140 0.042 240)',
  secondaryForeground: 'oklch(0.470 0.246 28)',
  muted: 'oklch(0.140 0.042 240)',
  mutedForeground: 'oklch(0.600 0.252 272)',
  accent: 'oklch(0.140 0.042 240)',
  accentForeground: 'oklch(0.470 0.246 28)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.220 0.042 240)',
  input: 'oklch(0.220 0.042 240)',
  ring: 'oklch(0.600 0.252 272)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(264, 26%, 4%, 1)',
  cardColor: 'hsla(240, 14%, 14%, 1)',
  borderColor: 'hsla(240, 14%, 22%, 1)',
  mainColor: 'hsla(28, 82%, 47%, 1)',
  secondaryColor: 'hsla(272, 84%, 60%, 1)',
};
