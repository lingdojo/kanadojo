# Achievement System Documentation

## Overview

The Achievement System is a comprehensive gamification feature that tracks user milestones, learning streaks, and consistency, rewarding users with badges, themes, and visual celebrations.

## Features

### 🏆 Achievement Types

#### Milestone Achievements
- **First Steps** (Common, 10 pts) - Get your first correct answer
- **Century Scholar** (Uncommon, 100 pts) - Answer 100 questions correctly
- **Knowledge Seeker** (Rare, 250 pts) - Answer 500 questions correctly
- **Master Scholar** (Epic, 500 pts) - Answer 1000 questions correctly
- **Legendary Master** (Legendary, 1000 pts) - Answer 5000 questions correctly

#### Streak Achievements
- **Streak Starter** (Common, 25 pts) - Achieve a 5-answer streak
- **Hot Streak** (Uncommon, 50 pts) - Achieve a 10-answer streak
- **Streak Legend** (Rare, 150 pts) - Achieve a 25-answer streak
- **Unstoppable** (Epic, 300 pts) - Achieve a 50-answer streak

#### Consistency Achievements
- **Dedicated Learner** (Common, 75 pts) - Complete 10 training sessions
- **Persistent Student** (Uncommon, 200 pts) - Complete 50 training sessions
- **Training Master** (Rare, 400 pts) - Complete 100 training sessions

#### Mastery Achievements
- **Precision Novice** (Uncommon, 100 pts) - Maintain 80% accuracy over 50 answers
- **Accuracy Expert** (Rare, 250 pts) - Maintain 90% accuracy over 100 answers
- **Perfectionist** (Epic, 500 pts) - Maintain 95% accuracy over 200 answers

### 🎨 Rarity System

Achievements are categorized by rarity levels:

- **Common** (Gray) - Basic milestones
- **Uncommon** (Green) - Regular progress markers
- **Rare** (Blue) - Significant accomplishments
- **Epic** (Purple) - Major achievements
- **Legendary** (Red/Gold) - Exceptional feats

### 🎉 Celebration System

- **Confetti Animations** - Full-screen celebrations with rarity-specific colors
- **Achievement Modals** - Beautiful modal displays with achievement details
- **Notification System** - Subtle in-app notifications for new achievements
- **Progress Tracking** - Visual progress bars for locked achievements

### 📊 Points & Leveling

- **Achievement Points** - Earned by unlocking achievements
- **Level System** - Level up every 500 points
- **Progress Tracking** - Track overall completion percentage

## Technical Implementation

### Store Structure

The achievement system uses Zustand for state management with the following key components:

```typescript
interface AchievementState {
  unlockedAchievements: Record<string, Achievement>;
  notifications: AchievementNotification[];
  totalPoints: number;
  level: number;
  // ... methods
}
```

### Integration Points

1. **Stats Integration** - Automatically checks for achievements when stats update
2. **Game Flow** - Triggers achievement checks after correct/incorrect answers
3. **Session Completion** - Checks achievements when training sessions end
4. **Persistent Storage** - Saves achievement progress locally

### Components

#### Core Components
- `AchievementModal` - Full-screen celebration modal
- `AchievementNotification` - In-app notification system
- `AchievementProgress` - Progress tracking page
- `AchievementBadge` - Navigation badge with notifications

#### Settings & Management
- `AchievementSettings` - Management interface in preferences
- Export/Import functionality for achievement data
- Reset options with confirmation

### Hooks

- `useAchievements` - Main hook for achievement integration
- `useAchievementTrigger` - Trigger achievement checks manually
- Integration with existing `useStats` hook

## Usage

### Adding New Achievements

1. Add achievement definition to `ACHIEVEMENTS` array in `store/useAchievementStore.ts`
2. Define achievement requirements and metadata
3. Achievements are automatically checked based on requirements

```typescript
{
  id: 'new_achievement',
  title: 'Achievement Title',
  description: 'Achievement description',
  icon: '🎯',
  rarity: 'rare',
  points: 100,
  category: 'milestone',
  requirements: { type: 'total_correct', value: 1000 }
}
```

### Triggering Achievement Checks

Achievement checks are automatically triggered:
- After correct/incorrect answers
- When sessions are saved
- When stats are updated

Manual triggering:
```typescript
const { triggerAchievementCheck } = useAchievementTrigger();
const newAchievements = triggerAchievementCheck();
```

### Displaying Achievement Status

```typescript
const { totalPoints, level, unlockedCount, hasUnseenNotifications } = useAchievements();
```

## File Structure

```
store/
  useAchievementStore.ts          # Main achievement store

components/
  Modals/
    AchievementModal.tsx          # Celebration modal
  Progress/
    AchievementProgress.tsx       # Progress tracking page
  Settings/
    Achievements.tsx              # Settings management
  reusable/
    AchievementNotification.tsx   # Notification system
    AchievementBadge.tsx          # Navigation badge
    AchievementIntegration.tsx    # Global integration

hooks/
  useAchievements.ts              # Achievement hooks

app/
  achievements/
    page.tsx                      # Achievements page
```

## Future Enhancements

### Planned Features
- **Reward System** - Unlock exclusive themes and fonts
- **Social Features** - Share achievements
- **Seasonal Events** - Limited-time achievements
- **Character Mastery** - Per-character achievement tracking
- **Dojo Completion** - Complete dojo-specific challenges

### Customization Options
- **Achievement Notifications** - Toggle on/off
- **Celebration Intensity** - Adjust confetti and animations
- **Sound Effects** - Achievement-specific audio feedback

## Best Practices

1. **Performance** - Achievement checks are debounced and optimized
2. **Persistence** - All progress is saved locally with backup/restore options
3. **Accessibility** - Proper ARIA labels and keyboard navigation
4. **Responsive Design** - Works across all device sizes
5. **Integration** - Seamlessly integrates with existing game flow

## Troubleshooting

### Common Issues

1. **Achievements not unlocking** - Check if stats are properly updating
2. **Notifications not showing** - Verify notification container is mounted
3. **Progress not saving** - Check localStorage permissions

### Debug Tools

- Achievement recalculation in settings
- Export/import for data backup
- Console logging for development

## Contributing

When adding new achievements:
1. Follow existing naming conventions
2. Use appropriate rarity levels
3. Test achievement triggers thoroughly
4. Update documentation
5. Consider performance impact

The achievement system is designed to be extensible and maintainable, encouraging continued learning and engagement with the KanaDojo platform.