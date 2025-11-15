import { ThemeDefinition } from '../types';

export const velvetStarlightTheme: ThemeDefinition = {
  id: 'velvet-starlight',
  name: 'Velvet Starlight',
  creator: {
    name: 'KanaDojo Team',
  },
  tags: ["dark","elegant"],

  // shadcn/ui color properties (oklch format)
  background: 'oklch(0.110 0.117 291)',
  foreground: 'oklch(0.670 0.282 317)',
  card: 'oklch(0.190 0.129 291)',
  cardForeground: 'oklch(0.670 0.282 317)',
  popover: 'oklch(0.190 0.129 291)',
  popoverForeground: 'oklch(0.670 0.282 317)',
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.110 0.117 291)',
  secondary: 'oklch(0.190 0.129 291)',
  secondaryForeground: 'oklch(0.670 0.282 317)',
  muted: 'oklch(0.190 0.129 291)',
  mutedForeground: 'oklch(0.820 0.276 235)',
  accent: 'oklch(0.190 0.129 291)',
  accentForeground: 'oklch(0.670 0.282 317)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(0.320 0.129 291)',
  input: 'oklch(0.320 0.129 291)',
  ring: 'oklch(0.820 0.276 235)',
  radius: '0.625rem',

  // Legacy properties for backwards compatibility
  backgroundColor: 'hsla(291, 39%, 11%, 1)',
  cardColor: 'hsla(291, 43%, 19%, 1)',
  borderColor: 'hsla(291, 43%, 32%, 1)',
  mainColor: 'hsla(317, 94%, 67%, 1)',
  secondaryColor: 'hsla(235, 92%, 82%, 1)',
};
