import { ThemeDefinition } from '../types';

export const azureMirageTheme: ThemeDefinition = {
  id: 'azure-mirage',
  name: 'Azure Mirage',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","blue"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.070 0.300 191)',
  foreground: 'oklch(0.720 0.297 271)',
  card: 'oklch(0.160 0.279 191)',
  cardForeground: 'oklch(0.720 0.297 271)',
  popover: 'oklch(0.160 0.279 191)',
  popoverForeground: 'oklch(0.720 0.297 271)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.070 0.300 191)',
  secondary: 'oklch(0.160 0.279 191)',
  secondaryForeground: 'oklch(0.720 0.297 271)',
  muted: 'oklch(0.160 0.279 191)',
  mutedForeground: 'oklch(0.690 0.300 52)',
  accent: 'oklch(0.160 0.279 191)',
  accentForeground: 'oklch(0.720 0.297 271)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.270 0.279 191)',
  input: 'oklch(0.270 0.279 191)',
  ring: 'oklch(0.690 0.300 52)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(191, 100%, 7%, 1)',
  cardColor: 'hsla(191, 93%, 16%, 1)',
  borderColor: 'hsla(191, 93%, 27%, 1)',
  mainColor: 'hsla(271, 99%, 72%, 1)',
  secondaryColor: 'hsla(52, 100%, 69%, 1)',
};
