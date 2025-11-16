'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { applyBackup, createBackup, type BackupFile } from '@/lib/backup';
import useFileSystemSyncStore from '@/store/useFileSystemSyncStore';
import { isFileSystemAccessSupported } from '@/lib/fileSystemSync';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  FolderOpenIcon,
  CloudUploadIcon,
  CloudDownloadIcon,
  CheckmarkCircle01Icon,
  AlertCircleIcon,
  Loading01Icon
} from '@hugeicons/core-free-icons';

const Backup: React.FC = () => {
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);

  // File System Sync store
  const autoSyncEnabled = useFileSystemSyncStore(state => state.autoSyncEnabled);
  const syncOnSessionEnd = useFileSystemSyncStore(state => state.syncOnSessionEnd);
  const isSyncing = useFileSystemSyncStore(state => state.isSyncing);
  const lastSyncTime = useFileSystemSyncStore(state => state.lastSyncTime);
  const lastSyncError = useFileSystemSyncStore(state => state.lastSyncError);
  const setSyncOnSessionEnd = useFileSystemSyncStore(state => state.setSyncOnSessionEnd);
  const setupSyncDirectory = useFileSystemSyncStore(state => state.setupSyncDirectory);
  const syncNow = useFileSystemSyncStore(state => state.syncNow);
  const loadFromSync = useFileSystemSyncStore(state => state.loadFromSync);
  const clearSyncSettings = useFileSystemSyncStore(state => state.clearSyncSettings);

  const isSupported = isFileSystemAccessSupported();

  const onExport = () => {
    const data = createBackup();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kanadojo-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Exported to kanadojo-backup.json');
  };

  const onFilePicked = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as BackupFile;
      const ok = applyBackup(parsed);
      setMessage(ok ? 'Imported backup successfully' : 'Import failed');
    } catch {
      setMessage('Invalid file');
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const handleSetupSync = async () => {
    setMessage(null);
    const success = await setupSyncDirectory();
    if (success) {
      setMessage('Sync directory configured successfully!');
      // Automatically sync after setup
      await handleSyncNow();
    } else if (lastSyncError) {
      setMessage(lastSyncError);
    }
  };

  const handleSyncNow = async () => {
    setMessage(null);
    const success = await syncNow();
    if (success) {
      setMessage('Data synced to local drive successfully!');
    } else if (lastSyncError) {
      setMessage(lastSyncError);
    }
  };

  const handleLoadFromSync = async () => {
    setMessage(null);
    const data = await loadFromSync();
    if (data) {
      setMessage('Data loaded from local drive! Please refresh the page to see changes.');
    } else if (lastSyncError) {
      setMessage(lastSyncError);
    }
  };

  const handleDisableSync = async () => {
    await clearSyncSettings();
    setMessage('Auto-sync disabled');
  };

  const formatSyncTime = (time: string | null) => {
    if (!time) return 'Never';
    const date = new Date(time);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Auto-Sync Section */}
      {isSupported && (
        <>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Auto-Sync to Local Drive</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Automatically save your progress to a folder on your computer
              </p>
            </div>

            {!autoSyncEnabled ? (
              <div className="space-y-3">
                <Button onClick={handleSetupSync} className="w-full sm:w-auto">
                  <HugeiconsIcon icon={FolderOpenIcon} size={16} className="mr-2" />
                  Set up Auto-Sync
                </Button>
                <p className="text-xs text-[var(--muted-foreground)]">
                  Choose a folder to automatically save your KanaDojo data. Works in Chrome and Edge.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Status */}
                <div className="flex items-center gap-2 text-sm">
                  {isSyncing ? (
                    <>
                      <HugeiconsIcon icon={Loading01Icon} size={16} className="animate-spin text-[var(--primary)]" />
                      <span className="text-[var(--muted-foreground)]">Syncing...</span>
                    </>
                  ) : lastSyncError ? (
                    <>
                      <HugeiconsIcon icon={AlertCircleIcon} size={16} className="text-[var(--destructive)]" />
                      <span className="text-[var(--destructive)]">Sync error</span>
                    </>
                  ) : (
                    <>
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} className="text-[var(--primary)]" />
                      <span className="text-[var(--muted-foreground)]">
                        Last synced: {formatSyncTime(lastSyncTime)}
                      </span>
                    </>
                  )}
                </div>

                {/* Settings */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sync-session-end" className="text-sm font-normal cursor-pointer">
                      Auto-sync when session ends
                    </Label>
                    <Switch
                      id="sync-session-end"
                      checked={syncOnSessionEnd}
                      onCheckedChange={setSyncOnSessionEnd}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleSyncNow} disabled={isSyncing} size="sm">
                    <HugeiconsIcon icon={CloudUploadIcon} size={16} className="mr-2" />
                    Sync Now
                  </Button>
                  <Button onClick={handleLoadFromSync} disabled={isSyncing} variant="secondary" size="sm">
                    <HugeiconsIcon icon={CloudDownloadIcon} size={16} className="mr-2" />
                    Load from Drive
                  </Button>
                  <Button onClick={handleSetupSync} variant="outline" size="sm">
                    <HugeiconsIcon icon={FolderOpenIcon} size={16} className="mr-2" />
                    Change Folder
                  </Button>
                  <Button onClick={handleDisableSync} variant="outline" size="sm">
                    Disable
                  </Button>
                </div>
              </div>
            )}
          </div>

          <Separator />
        </>
      )}

      {/* Manual Export/Import Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">Manual Backup</h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Download or upload a backup file manually
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={onExport}>Export</Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}>
            Import
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            hidden
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const f = e.target.files?.[0];
              if (f) onFilePicked(f);
            }}
          />
        </div>
      </div>

      {/* Messages */}
      {message && (
        <div className={`text-sm p-3 rounded-md border ${
          message.includes('error') || message.includes('failed') || message.includes('Invalid')
            ? 'border-[var(--destructive)] text-[var(--destructive)] bg-[var(--destructive)]/10'
            : 'border-[var(--border)] text-[var(--muted-foreground)]'
        }`}>
          {message}
        </div>
      )}

      {lastSyncError && !message && (
        <div className="text-sm p-3 rounded-md border border-[var(--destructive)] text-[var(--destructive)] bg-[var(--destructive)]/10">
          {lastSyncError}
        </div>
      )}

      {/* Browser Compatibility Note */}
      {!isSupported && (
        <div className="text-xs text-[var(--muted-foreground)] p-3 rounded-md border border-[var(--border)] bg-[var(--muted)]/30">
          <strong>Note:</strong> Auto-sync to local drive requires Chrome or Edge browser.
          You can still use manual export/import on any browser.
        </div>
      )}

      <p className="text-xs text-[var(--muted-foreground)]">
        Exports preferences, stats, SRS data, and achievements. No account data is included.
      </p>
    </div>
  );
};

export default Backup;
