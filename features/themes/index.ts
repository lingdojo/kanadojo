// Themes Feature - Barrel Export

// Store - Export usePreferencesStore as default for backward compatibility
export { default } from './store/usePreferencesStore';
export { default as usePreferencesStore } from './store/usePreferencesStore';
export { useCustomThemeStore } from './store/useCustomThemeStore';
export { default as useGoalTimersStore } from './store/useGoalTimersStore';

// Components
export { default as Settings } from './components';

// Data
export { default as themes, getTheme, applyTheme, applyThemeObject } from './data/themes';
export { default as fonts } from './data/fonts';

// Re-export defaults for compatibility
export { default as themeSets } from './data/themes';
export { default as fontsData } from './data/fonts';
