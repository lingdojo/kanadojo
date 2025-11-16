/**
 * File System Access API utilities for syncing app data to local drive
 * Supports Chrome, Edge (not Safari/Firefox yet)
 */

export interface SyncData {
  stats: unknown;
  preferences: unknown;
  srs: unknown;
  achievements: unknown;
  onboarding: unknown;
  kana: unknown;
  kanji: unknown;
  vocab: unknown;
  goalTimers: unknown;
  timestamp: string;
  version: string;
}

// Check if File System Access API is supported
export const isFileSystemAccessSupported = (): boolean => {
  return typeof window !== 'undefined' && 'showDirectoryPicker' in window;
};

// Request directory access from user
export const requestDirectoryAccess = async (): Promise<FileSystemDirectoryHandle | null> => {
  if (!isFileSystemAccessSupported()) {
    throw new Error('File System Access API is not supported in this browser');
  }

  try {
    const dirHandle = await window.showDirectoryPicker({
      mode: 'readwrite',
      startIn: 'documents'
    });
    return dirHandle;
  } catch (err) {
    // User cancelled or denied permission
    console.error('Directory access denied:', err);
    return null;
  }
};

// Save data to local file system
export const saveToFileSystem = async (
  dirHandle: FileSystemDirectoryHandle,
  data: SyncData
): Promise<boolean> => {
  try {
    // Create or get the backup file
    const fileHandle = await dirHandle.getFileHandle('kanadojo-backup.json', {
      create: true
    });

    // Create a writable stream
    const writable = await fileHandle.createWritable();

    // Write the data
    await writable.write(JSON.stringify(data, null, 2));

    // Close the file
    await writable.close();

    console.log('Data saved to file system successfully');
    return true;
  } catch (err) {
    console.error('Failed to save to file system:', err);
    return false;
  }
};

// Load data from local file system
export const loadFromFileSystem = async (
  dirHandle: FileSystemDirectoryHandle
): Promise<SyncData | null> => {
  try {
    // Get the backup file
    const fileHandle = await dirHandle.getFileHandle('kanadojo-backup.json');

    // Read the file
    const file = await fileHandle.getFile();
    const text = await file.text();

    // Parse and return the data
    const data = JSON.parse(text) as SyncData;
    console.log('Data loaded from file system successfully');
    return data;
  } catch (err) {
    // File doesn't exist yet or other error
    console.error('Failed to load from file system:', err);
    return null;
  }
};

// Verify permissions are still valid
export const verifyPermission = async (
  dirHandle: FileSystemDirectoryHandle,
  readWrite: boolean = true
): Promise<boolean> => {
  const options: FileSystemHandlePermissionDescriptor = {
    mode: readWrite ? 'readwrite' : 'read'
  };

  // Check if permission was already granted
  if ((await dirHandle.queryPermission(options)) === 'granted') {
    return true;
  }

  // Request permission
  if ((await dirHandle.requestPermission(options)) === 'granted') {
    return true;
  }

  return false;
};

// Export all data to a downloadable file (fallback method)
export const exportToDownload = (data: SyncData): void => {
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `kanadojo-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

// Import data from uploaded file (fallback method)
export const importFromFile = async (file: File): Promise<SyncData | null> => {
  try {
    const text = await file.text();
    const data = JSON.parse(text) as SyncData;
    return data;
  } catch (err) {
    console.error('Failed to import file:', err);
    return null;
  }
};
