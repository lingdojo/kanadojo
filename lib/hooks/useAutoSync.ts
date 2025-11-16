/**
 * Hook to handle automatic syncing of data to local drive
 */

import useFileSystemSyncStore from '@/store/useFileSystemSyncStore';

export const useAutoSync = () => {
  const autoSyncEnabled = useFileSystemSyncStore(state => state.autoSyncEnabled);
  const syncOnSessionEnd = useFileSystemSyncStore(state => state.syncOnSessionEnd);
  const syncNow = useFileSystemSyncStore(state => state.syncNow);

  // Trigger sync when enabled
  const triggerSync = async () => {
    if (autoSyncEnabled && syncOnSessionEnd) {
      await syncNow();
    }
  };

  return { triggerSync, autoSyncEnabled, syncOnSessionEnd };
};

// Function to trigger sync from anywhere (not a hook)
export const triggerAutoSync = async () => {
  const state = useFileSystemSyncStore.getState();
  if (state.autoSyncEnabled && state.syncOnSessionEnd) {
    await state.syncNow();
  }
};
