// Achievements Feature - Barrel Export

// Store - Export useAchievementStore as default for backward compatibility
export { default } from './store/useAchievementStore';
export { default as useAchievementStore } from './store/useAchievementStore';

// Types
export type { Achievement, AchievementRarity, AchievementNotification } from './store/useAchievementStore';

// Constants
export { ACHIEVEMENTS } from './store/useAchievementStore';

// Lib
export { useAchievements, useAchievementTrigger } from './lib/useAchievements';
