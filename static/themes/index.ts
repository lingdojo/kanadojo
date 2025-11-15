import { HugeiconsIcon } from '@hugeicons/react';
import { Atom01Icon as AtomIcon, SunIcon, Moon01Icon, CloudIcon as CloudLightningIcon, PineTreeIcon } from '@hugeicons/core-free-icons';
import { ThemeDefinition, ThemeGroup, Theme } from './types';

// Import all themes
import * as base from './base';
import * as light from './light';
import * as dark from './dark';
import * as seasonal from './seasonal';

/**
 * Organized theme groups for UI display
 */
export const themes: ThemeGroup[] = [
  {
    name: 'Base',
    icon: AtomIcon,
    themes: [
      base.lightTheme,
      base.darkTheme,
    ],
  },
  {
    name: 'Light',
    icon: SunIcon,
    themes: [
      light.longTheme,
      light.amethystTheme,
      light.nekokotoLightTheme,
    ],
  },
  {
    name: 'Dark',
    icon: Moon01Icon,
    themes: [
      dark.absoluteDarknessTheme,
      dark.aeroBlossomTheme,
      dark.aizomeTheme,
      dark.amethystNightfallTheme,
      dark.andromedaDreamTheme,
      dark.arcaneFathomsTheme,
      dark.arcticInfernoTheme,
      dark.astralMirageTheme,
      dark.azureMirageTheme,
      dark.azureTwilightTheme,
      dark.blueEmberveilTheme,
      dark.catppuccinTheme,
      dark.celestialGroveTheme,
      dark.celestiteFrostTheme,
      dark.cobaltLumenTheme,
      dark.cosmicCharcoalTheme,
      dark.cosmicPrismTheme,
      dark.cyanicWisdomTheme,
      dark.cyberpunkTheme,
      dark.digitalBloomTheme,
      dark.etherealDawnTheme,
      dark.fathomFrostTheme,
      dark.fujiTheme,
      dark.galaxyOracleTheme,
      dark.gruvboxTheme,
      dark.hauntedLagoonTheme,
      dark.hyperionSkiesTheme,
      dark.incognitoTheme,
      dark.jadeMirageTheme,
      dark.jungleTwilightTheme,
      dark.lapisCascadeTheme,
      dark.lapisSolaraTheme,
      dark.liquidGraphiteTheme,
      dark.londonFogTheme,
      dark.lotusSpecterTheme,
      dark.lucidDuskTheme,
      dark.luminousNebulaTheme,
      dark.luminousTideTheme,
      dark.matrixTheme,
      dark.melancholyHaloTheme,
      dark.midnightBlossomTheme,
      dark.midnightFjordTheme,
      dark.monkeytypeTheme,
      dark.mysticForestTheme,
      dark.nautilusStarTheme,
      dark.nebulaVeilTheme,
      dark.nebulousMawTheme,
      dark.nekokotoDarkTheme,
      dark.neonDuskTheme,
      dark.neonTokyoTheme,
      dark.noirTheme,
      dark.nordTheme,
      dark.nycMidnightTheme,
      dark.oceanicAuroraTheme,
      dark.oldLibraryTheme,
      dark.opalineZodiacTheme,
      dark.orchidEclipseTheme,
      dark.parisMetroTheme,
      dark.polarisVeilTheme,
      dark.prairieStarTheme,
      dark.rainforestMistTheme,
      dark.roseNebulaTheme,
      dark.sapphireBloomTheme,
      dark.sapphireFrostTheme,
      dark.seraphicAuroraTheme,
      dark.silicaDuskTheme,
      dark.synthwaveNightTheme,
      dark.topazDriftTheme,
      dark.twilightOracleTheme,
      dark.ultravioletOracleTheme,
      dark.vaporpopTheme,
      dark.velvetAbyssTheme,
      dark.velvetCitrusDreamTheme,
      dark.velvetNightTheme,
      dark.velvetNightshadeTheme,
      dark.velvetStarlightTheme,
      dark.vortexRequiemTheme,
      dark.yukataTheme,
      dark.zephyriteDreamTheme,
    ],
  },
  {
    name: 'Halloween',
    icon: CloudLightningIcon,
    themes: [
      seasonal.pumpkinNightTheme,
      seasonal.spookyGlowTheme,
    ],
  },
  {
    name: 'Christmas',
    icon: PineTreeIcon,
    themes: [
      seasonal.santaNightTheme,
      seasonal.winterWonderlandTheme,
      seasonal.christmasEveTheme,
      seasonal.northernLightsTheme,
    ],
  },
];

/**
 * Flatten all themes into a map for easy lookup
 */
const themeMap = new Map<string, ThemeDefinition>();
themes.forEach(group => {
  group.themes.forEach(theme => {
    themeMap.set(theme.id, theme);
  });
});

/**
 * Apply a theme to the document root
 * Uses shadcn/ui CSS custom properties
 */
export function applyTheme(themeId: string) {
  const themeDefinition = themeMap.get(themeId);

  if (!themeDefinition) {
    console.error(`Theme "${themeId}" not found`);
    return;
  }

  const root = document.documentElement;

  // Apply shadcn/ui color properties
  root.style.setProperty('--background', themeDefinition.background);
  root.style.setProperty('--foreground', themeDefinition.foreground);
  root.style.setProperty('--card', themeDefinition.card);
  root.style.setProperty('--card-foreground', themeDefinition.cardForeground);
  root.style.setProperty('--popover', themeDefinition.popover);
  root.style.setProperty('--popover-foreground', themeDefinition.popoverForeground);
  root.style.setProperty('--primary', themeDefinition.primary);
  root.style.setProperty('--primary-foreground', themeDefinition.primaryForeground);
  root.style.setProperty('--secondary', themeDefinition.secondary);
  root.style.setProperty('--secondary-foreground', themeDefinition.secondaryForeground);
  root.style.setProperty('--muted', themeDefinition.muted);
  root.style.setProperty('--muted-foreground', themeDefinition.mutedForeground);
  root.style.setProperty('--accent', themeDefinition.accent);
  root.style.setProperty('--accent-foreground', themeDefinition.accentForeground);
  root.style.setProperty('--destructive', themeDefinition.destructive);
  root.style.setProperty('--border', themeDefinition.border);
  root.style.setProperty('--input', themeDefinition.input);
  root.style.setProperty('--ring', themeDefinition.ring);

  // Apply chart colors if defined
  if (themeDefinition.chart1) root.style.setProperty('--chart-1', themeDefinition.chart1);
  if (themeDefinition.chart2) root.style.setProperty('--chart-2', themeDefinition.chart2);
  if (themeDefinition.chart3) root.style.setProperty('--chart-3', themeDefinition.chart3);
  if (themeDefinition.chart4) root.style.setProperty('--chart-4', themeDefinition.chart4);
  if (themeDefinition.chart5) root.style.setProperty('--chart-5', themeDefinition.chart5);

  // Apply radius if defined
  if (themeDefinition.radius) {
    root.style.setProperty('--radius', themeDefinition.radius);
  }

  // Legacy: Apply old properties for backwards compatibility if they exist
  if (themeDefinition.backgroundColor) {
    root.style.setProperty('--background-color', themeDefinition.backgroundColor);
  }
  if (themeDefinition.cardColor) {
    root.style.setProperty('--card-color', themeDefinition.cardColor);
  }
  if (themeDefinition.borderColor) {
    root.style.setProperty('--border-color', themeDefinition.borderColor);
  }
  if (themeDefinition.mainColor) {
    root.style.setProperty('--main-color', themeDefinition.mainColor);
  }
  if (themeDefinition.secondaryColor) {
    root.style.setProperty('--secondary-color', themeDefinition.secondaryColor);
  }

  root.setAttribute('data-theme', themeDefinition.id);
}

/**
 * Get a specific theme by ID
 */
export function getTheme(themeId: string): ThemeDefinition | undefined {
  return themeMap.get(themeId);
}

/**
 * Get all available theme IDs
 */
export function getAllThemeIds(): string[] {
  return Array.from(themeMap.keys());
}

/**
 * Get themes by tag
 */
export function getThemesByTag(tag: string): ThemeDefinition[] {
  const allThemes: ThemeDefinition[] = [];
  themes.forEach(group => {
    group.themes.forEach(theme => {
      if (theme.tags?.includes(tag)) {
        allThemes.push(theme);
      }
    });
  });
  return allThemes;
}

/**
 * Search themes by name or description
 */
export function searchThemes(query: string): ThemeDefinition[] {
  const lowerQuery = query.toLowerCase();
  const allThemes: ThemeDefinition[] = [];

  themes.forEach(group => {
    group.themes.forEach(theme => {
      const matchesName = theme.name.toLowerCase().includes(lowerQuery);
      const matchesDescription = theme.description?.toLowerCase().includes(lowerQuery);
      const matchesTags = theme.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));

      if (matchesName || matchesDescription || matchesTags) {
        allThemes.push(theme);
      }
    });
  });

  return allThemes;
}

// Export types
export type { Theme, ThemeDefinition, ThemeGroup, ThemeCreator } from './types';

// Export default for backward compatibility
export default themes;
