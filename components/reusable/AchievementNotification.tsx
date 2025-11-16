'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import useAchievementStore, {
  type AchievementNotification as NotificationType
} from '@/store/useAchievementStore';
import { achievementToast } from '@/components/ui/sonner';
import { cardBorderStyles } from '@/static/styles';

// Container component for managing achievement notifications with Sonner
export const AchievementNotificationContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const notifications = useAchievementStore(state => state.unseenNotifications);
  const markNotificationSeen = useAchievementStore(
    state => state.markNotificationSeen
  );
  const [selectedAchievement, setSelectedAchievement] = useState<
    NotificationType['achievement'] | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const processedNotifications = useRef<Set<string>>(new Set());

  // Client-side only initialization
  useEffect(() => {
    setIsClient(true);
    // Initialize computed properties
    useAchievementStore.getState().updateComputedProperties();
  }, []);

  // Show Sonner toast for new notifications
  useEffect(() => {
    if (!isClient) return;

    notifications.forEach((notification) => {
      // Only show toast if we haven't processed this notification yet
      if (!processedNotifications.current.has(notification.id)) {
        processedNotifications.current.add(notification.id);

        achievementToast({
          title: notification.achievement.title,
          description: notification.achievement.description,
          icon: notification.achievement.icon,
          points: notification.achievement.points,
          onClick: () => {
            setSelectedAchievement(notification.achievement);
            setShowModal(true);
            markNotificationSeen(notification.id);
          }
        });

        // Auto-mark as seen after 8 seconds
        setTimeout(() => {
          markNotificationSeen(notification.id);
        }, 8000);
      }
    });
  }, [notifications, isClient, markNotificationSeen]);

  if (!isClient) {
    return null;
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAchievement(null);
  };

  return (
    <>
      {/* Achievement Modal */}
      {showModal && selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]'
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={clsx(
              'w-full max-w-md p-6 text-center',
              'bg-[var(--card)]',
              cardBorderStyles
            )}
            onClick={e => e.stopPropagation()}
          >
            <div className='text-4xl mb-4'>{selectedAchievement.icon}</div>
            <h3 className='text-xl font-bold text-[var(--foreground)] mb-2'>
              {selectedAchievement.title}
            </h3>
            <p className='text-[var(--muted-foreground)] mb-4'>
              {selectedAchievement.description}
            </p>
            <div className='text-sm text-yellow-600 font-medium mb-4'>
              +{selectedAchievement.points} Achievement Points
            </div>
            <button
              onClick={handleCloseModal}
              className={clsx(
                'px-6 py-2 rounded-lg',
                'bg-[var(--background)] text-[var(--foreground)]',
                'hover:bg-[var(--border)] transition-colors duration-200'
              )}
            >
              Continue Learning
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AchievementNotificationContainer;
