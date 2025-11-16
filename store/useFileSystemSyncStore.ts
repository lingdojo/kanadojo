import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  isFileSystemAccessSupported,
  requestDirectoryAccess,
  saveToFileSystem,
  loadFromFileSystem,
  verifyPermission,
  exportToDownload,
  SyncData
} from '@/lib/fileSystemSync';

interface FileSystemSyncState {
  // Settings (persisted to localStorage)
  autoSyncEnabled: boolean;
  lastSyncTime: string | null;
  syncOnSessionEnd: boolean;

  // Runtime state (not persisted)
  isSyncing: boolean;
  lastSyncError: string | null;
  dirHandle: FileSystemDirectoryHandle | null;

  // Actions
  setAutoSyncEnabled: (enabled: boolean) => void;
  setSyncOnSessionEnd: (enabled: boolean) => void;
  setupSyncDirectory: () => Promise<boolean>;
  syncNow: () => Promise<boolean>;
  loadFromSync: () => Promise<SyncData | null>;
  exportData: () => void;
  clearSyncSettings: () => void;

  // Internal
  setDirHandle: (handle: FileSystemDirectoryHandle | null) => void;
  setIsSyncing: (syncing: boolean) => void;
  setLastSyncError: (error: string | null) => void;
}

// IndexedDB helper for storing directory handle
const DB_NAME = 'kanadojo-sync';
const STORE_NAME = 'directory-handles';
const HANDLE_KEY = 'sync-directory';

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

const saveDirHandleToIndexedDB = async (
  handle: FileSystemDirectoryHandle
): Promise<void> => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, 'readwrite');
  const store = transaction.objectStore(STORE_NAME);
  store.put(handle, HANDLE_KEY);

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
};

const loadDirHandleFromIndexedDB = async (): Promise<FileSystemDirectoryHandle | null> => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(HANDLE_KEY);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to load directory handle from IndexedDB:', err);
    return null;
  }
};

const clearDirHandleFromIndexedDB = async (): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.delete(HANDLE_KEY);

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (err) {
    console.error('Failed to clear directory handle from IndexedDB:', err);
  }
};

const useFileSystemSyncStore = create<FileSystemSyncState>()(
  persist(
    (set, get) => ({
      // Persisted settings
      autoSyncEnabled: false,
      lastSyncTime: null,
      syncOnSessionEnd: true,

      // Runtime state
      isSyncing: false,
      lastSyncError: null,
      dirHandle: null,

      setAutoSyncEnabled: (enabled: boolean) => {
        set({ autoSyncEnabled: enabled });
      },

      setSyncOnSessionEnd: (enabled: boolean) => {
        set({ syncOnSessionEnd: enabled });
      },

      setupSyncDirectory: async (): Promise<boolean> => {
        if (!isFileSystemAccessSupported()) {
          set({
            lastSyncError: 'File System Access API not supported in this browser. Please use Chrome or Edge.'
          });
          return false;
        }

        try {
          const handle = await requestDirectoryAccess();

          if (!handle) {
            set({ lastSyncError: 'No directory selected' });
            return false;
          }

          // Verify we have write permission
          const hasPermission = await verifyPermission(handle, true);

          if (!hasPermission) {
            set({ lastSyncError: 'Write permission denied' });
            return false;
          }

          // Save to IndexedDB
          await saveDirHandleToIndexedDB(handle);

          set({
            dirHandle: handle,
            lastSyncError: null,
            autoSyncEnabled: true
          });

          return true;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          set({ lastSyncError: errorMessage });
          return false;
        }
      },

      syncNow: async (): Promise<boolean> => {
        const state = get();

        if (!state.dirHandle) {
          // Try to load from IndexedDB
          const handle = await loadDirHandleFromIndexedDB();

          if (!handle) {
            set({ lastSyncError: 'No sync directory configured' });
            return false;
          }

          // Verify permission
          const hasPermission = await verifyPermission(handle, true);

          if (!hasPermission) {
            set({ lastSyncError: 'Permission denied. Please reconfigure sync directory.' });
            return false;
          }

          set({ dirHandle: handle });
        }

        set({ isSyncing: true, lastSyncError: null });

        try {
          // Gather all store data
          const syncData: SyncData = {
            stats: localStorage.getItem('kanadojo-stats'),
            preferences: localStorage.getItem('theme-storage'),
            srs: localStorage.getItem('kanadojo-srs'),
            achievements: localStorage.getItem('kanadojo-achievements'),
            onboarding: localStorage.getItem('welcome-storage'),
            kana: localStorage.getItem('kana-storage'),
            kanji: localStorage.getItem('kanji-storage'),
            vocab: localStorage.getItem('vocab-storage'),
            goalTimers: localStorage.getItem('goal-timers-storage'),
            timestamp: new Date().toISOString(),
            version: '0.1.1'
          };

          const success = await saveToFileSystem(state.dirHandle!, syncData);

          if (success) {
            set({
              lastSyncTime: new Date().toISOString(),
              lastSyncError: null
            });
          } else {
            set({ lastSyncError: 'Failed to save to file system' });
          }

          return success;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          set({ lastSyncError: errorMessage });
          return false;
        } finally {
          set({ isSyncing: false });
        }
      },

      loadFromSync: async (): Promise<SyncData | null> => {
        const state = get();

        if (!state.dirHandle) {
          // Try to load from IndexedDB
          const handle = await loadDirHandleFromIndexedDB();

          if (!handle) {
            set({ lastSyncError: 'No sync directory configured' });
            return null;
          }

          set({ dirHandle: handle });
        }

        try {
          const data = await loadFromFileSystem(state.dirHandle!);

          if (data) {
            // Restore all stores from the loaded data
            if (data.stats) localStorage.setItem('kanadojo-stats', data.stats as string);
            if (data.preferences) localStorage.setItem('theme-storage', data.preferences as string);
            if (data.srs) localStorage.setItem('kanadojo-srs', data.srs as string);
            if (data.achievements) localStorage.setItem('kanadojo-achievements', data.achievements as string);
            if (data.onboarding) localStorage.setItem('welcome-storage', data.onboarding as string);
            if (data.kana) localStorage.setItem('kana-storage', data.kana as string);
            if (data.kanji) localStorage.setItem('kanji-storage', data.kanji as string);
            if (data.vocab) localStorage.setItem('vocab-storage', data.vocab as string);
            if (data.goalTimers) localStorage.setItem('goal-timers-storage', data.goalTimers as string);

            set({ lastSyncError: null });
          }

          return data;
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          set({ lastSyncError: errorMessage });
          return null;
        }
      },

      exportData: () => {
        const syncData: SyncData = {
          stats: localStorage.getItem('kanadojo-stats'),
          preferences: localStorage.getItem('theme-storage'),
          srs: localStorage.getItem('kanadojo-srs'),
          achievements: localStorage.getItem('kanadojo-achievements'),
          onboarding: localStorage.getItem('welcome-storage'),
          kana: localStorage.getItem('kana-storage'),
          kanji: localStorage.getItem('kanji-storage'),
          vocab: localStorage.getItem('vocab-storage'),
          goalTimers: localStorage.getItem('goal-timers-storage'),
          timestamp: new Date().toISOString(),
          version: '0.1.1'
        };

        exportToDownload(syncData);
      },

      clearSyncSettings: async () => {
        await clearDirHandleFromIndexedDB();
        set({
          autoSyncEnabled: false,
          dirHandle: null,
          lastSyncError: null,
          lastSyncTime: null
        });
      },

      setDirHandle: (handle: FileSystemDirectoryHandle | null) => {
        set({ dirHandle: handle });
      },

      setIsSyncing: (syncing: boolean) => {
        set({ isSyncing: syncing });
      },

      setLastSyncError: (error: string | null) => {
        set({ lastSyncError: error });
      }
    }),
    {
      name: 'kanadojo-filesync',
      partialize: (state) => ({
        autoSyncEnabled: state.autoSyncEnabled,
        lastSyncTime: state.lastSyncTime,
        syncOnSessionEnd: state.syncOnSessionEnd
      })
    }
  )
);

export default useFileSystemSyncStore;
