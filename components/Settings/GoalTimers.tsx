'use client';

import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Delete02Icon as Trash2Icon, Add01Icon as PlusIcon, VolumeHighIcon as Volume2Icon, VolumeMute01Icon as VolumeXIcon, SparklesIcon } from '@hugeicons/core-free-icons';;
import clsx from 'clsx';
import { useGoalTimersStore } from '@/store/useGoalTimersStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

// Settings component for Goal Timers feature
export default function GoalTimers() {
  const {
    templates,
    settings,
    history,
    addTemplate,
    removeTemplate,
    updateSettings,
    getTotalAchievements,
    getMostUsedTemplate,
  } = useGoalTimersStore();

  // Component state for adding new templates
  const [isAdding, setIsAdding] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newMinutes, setNewMinutes] = useState(5);
  const [newIcon, setNewIcon] = useState('⏱️');

  // Get stats
  const totalAchievements = getTotalAchievements();
  const mostUsedTemplate = getMostUsedTemplate();

  // Calculate count for most used template
  const mostUsedCount = mostUsedTemplate
    ? history.filter((h) => h.goalId === mostUsedTemplate.id).length
    : 0;

  // Toggle sound on/off
  const toggleSound = () => {
    updateSettings({ defaultPlaySound: !settings.defaultPlaySound });
  };

  // Toggle animation on/off
  const toggleAnimation = () => {
    updateSettings({ defaultShowAnimation: !settings.defaultShowAnimation });
  };

  // Add new custom template
  const handleAddTemplate = () => {
    if (!newLabel.trim()) return;

    addTemplate({
      label: newLabel,
      targetSeconds: newMinutes * 60,
      category: 'custom',
      icon: newIcon,
      color: 'var(--foreground)',
    });

    // Reset form
    setNewLabel('');
    setNewMinutes(5);
    setNewIcon('⏱️');
    setIsAdding(false);
  };

  // Toggle template as default (show in quick-add)
  const toggleDefaultTemplate = (templateId: string) => {
    const isDefault = settings.defaultTemplates.includes(templateId);

    if (isDefault) {
      // Remove from defaults
      updateSettings({
        defaultTemplates: settings.defaultTemplates.filter(
          (id) => id !== templateId
        ),
      });
    } else {
      // Add to defaults
      updateSettings({
        defaultTemplates: [...settings.defaultTemplates, templateId],
      });
    }
  };

  // Custom templates only (can be deleted)
  const customTemplates = templates.filter((t) => t.category === 'custom');

  // Built-in templates (cannot be deleted)
  const builtInTemplates = templates.filter((t) => t.category !== 'custom');

  return (
    <div className="flex flex-col gap-6">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Achievements</CardDescription>
            <CardTitle className="text-3xl">{totalAchievements}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Most Used Template</CardDescription>
            <CardTitle className="text-xl">
              {mostUsedTemplate ? (
                <span>
                  {mostUsedTemplate.icon} {mostUsedTemplate.label}
                </span>
              ) : (
                'N/A'
              )}
            </CardTitle>
            {mostUsedTemplate && (
              <CardDescription className="text-xs mt-1">
                {mostUsedCount} times
              </CardDescription>
            )}
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Recent Activity</CardDescription>
            <CardTitle className="text-xl">
              {history.length > 0 ? (
                <>Last {Math.min(10, history.length)} achievements</>
              ) : (
                'No activity yet'
              )}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Audio Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Audio Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Sound toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm">Play sound when goal reached</label>
            <Switch
              checked={settings.defaultPlaySound}
              onCheckedChange={toggleSound}
              aria-label="Toggle play sound"
            />
          </div>

          {/* Volume slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm">Volume</label>
              <span className="text-sm text-muted-foreground">
                {settings.soundVolume}%
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSound}
                className="h-8 w-8"
              >
                {settings.defaultPlaySound ? (
                  <HugeiconsIcon icon={Volume2Icon} color="currentColor" className="w-5 h-5" />
                ) : (
                  <HugeiconsIcon icon={VolumeXIcon} color="currentColor" className="w-5 h-5" />
                )}
              </Button>
              <Slider
                min={0}
                max={100}
                step={1}
                value={[settings.soundVolume]}
                onValueChange={(values) => updateSettings({ soundVolume: values[0] })}
                disabled={!settings.defaultPlaySound}
                className="flex-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animation Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Visual Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={SparklesIcon} color="currentColor" className="w-5 h-5" />
              <label className="text-sm text-muted-foreground">
                Show confetti animation when goal reached
              </label>
            </div>
            <Switch
              checked={settings.defaultShowAnimation}
              onCheckedChange={toggleAnimation}
              aria-label="Toggle confetti animation"
            />
          </div>
        </CardContent>
      </Card>

      {/* Built-in Templates */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Built-in Templates</h4>
        <p className="text-sm text-[var(--muted-foreground)] mb-4">
          Select which templates appear in quick-add
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {builtInTemplates.map((template) => {
            const isDefault = settings.defaultTemplates.includes(template.id);

            return (
              <button
                key={template.id}
                onClick={() => toggleDefaultTemplate(template.id)}
                className={clsx(
                  'p-3 rounded-lg border-2 transition-colors text-left hover:cursor-pointer',
                  isDefault
                    ? 'border-[var(--foreground)] bg-[var(--foreground)] bg-opacity-10'
                    : 'border-[var(--border)] hover:bg-[var(--card)]'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{template.icon}</span>
                    <div>
                      <p
                        className={clsx(
                          'font-medium ',
                          isDefault
                            ? 'text-[var(--background)]'
                            : 'text-[var(--foreground)]'
                        )}
                      >
                        {template.label}
                      </p>
                      <p
                        className={clsx(
                          'text-xs',
                          isDefault
                            ? 'text-[var(--card)]'
                            : 'text-[var(--muted-foreground)]'
                        )}
                      >
                        {Math.floor(template.targetSeconds / 60)} minutes
                      </p>
                    </div>
                  </div>
                  {isDefault && (
                    <span className="text-xs text-[var(--card)] font-medium">
                      Default
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Templates */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-semibold">Your Custom Templates</h4>
          {!isAdding && (
            <Button
              variant="outline"
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2"
            >
              <HugeiconsIcon icon={PlusIcon} color="currentColor" className="w-4 h-4" />
              New Template
            </Button>
          )}
        </div>

        {/* Add template form */}
        {isAdding && (
          <Card className="mb-4">
            <CardContent className="pt-6 space-y-3">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Emoji icon (e.g., 📚)"
                  value={newIcon}
                  onChange={(e) => setNewIcon(e.target.value)}
                  maxLength={2}
                  className="w-20 text-center text-2xl"
                />
                <Input
                  type="text"
                  placeholder="Template name"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
              </div>

              <div className="flex gap-3 items-center">
                <Input
                  type="number"
                  min="1"
                  max="120"
                  value={newMinutes}
                  onChange={(e) => setNewMinutes(parseInt(e.target.value) || 1)}
                  className="w-24"
                />
                <span className="text-sm text-muted-foreground">
                  minutes
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleAddTemplate}
                  className="flex-1"
                >
                  Create Template
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsAdding(false)}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Custom templates list */}
        {customTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {customTemplates.map((template) => {
              const isDefault = settings.defaultTemplates.includes(template.id);

              return (
                <div
                  key={template.id}
                  className={clsx(
                    'p-3 rounded-lg border-2',
                    isDefault
                      ? 'border-[var(--foreground)] bg-[var(--foreground)] bg-opacity-10'
                      : 'border-[var(--border)]'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleDefaultTemplate(template.id)}
                      className="flex items-center gap-2 flex-1 text-left"
                    >
                      <span className="text-2xl">{template.icon}</span>
                      <div>
                        <p
                          className={clsx(
                            'font-medium ',
                            isDefault
                              ? 'text-[var(--background)]'
                              : 'text-[var(--foreground)]'
                          )}
                        >
                          {template.label}
                        </p>
                        <p
                          className={clsx(
                            'text-xs',
                            isDefault
                              ? 'text-[var(--card)]'
                              : 'text-[var(--muted-foreground)]'
                          )}
                        >
                          {Math.floor(template.targetSeconds / 60)} minutes
                          {isDefault && ' • Default'}
                        </p>
                      </div>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTemplate(template.id)}
                      className="h-8 w-8 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                      title="Delete template"
                    >
                      <HugeiconsIcon icon={Trash2Icon} color="currentColor" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-[var(--muted-foreground)] text-center py-8">
            No custom templates yet. Create one to get started!
          </p>
        )}
      </div>
    </div>
  );
}
