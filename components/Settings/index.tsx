'use client';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChartIncreaseIcon as ProgressIcon,
  Award01Icon as TrophyIcon,
  Home01Icon as HomeIcon,
  FavouriteIcon as HeartIcon,
  PaintBoardIcon as ThemeIcon,
  InformationCircleIcon as InfoIcon,
  Coffee01Icon as CoffeeIcon,
  Joystick01Icon as JoystickIcon,
  ColorPickerIcon as PaletteIcon,
  Target01Icon as TargetIcon,
  Database01Icon as BackupIcon,
} from '@hugeicons/core-free-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useClick } from '@/hooks/useAudio';
import usePreferencesStore from '@/store/usePreferencesStore';
import { LanguageSelector } from '@/components/reusable/LanguageSelector';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import themeSets, { getTheme, applyTheme } from '@/static/themes';
import Themes from './Themes';
import Fonts from './Fonts';
import Behavior from './Behavior';
import Backup from './Backup';
import GoalTimers from './GoalTimers';

const Settings = () => {
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);

  const theme = usePreferencesStore(state => state.theme);
  const setTheme = usePreferencesStore(state => state.setTheme);
  const { playClick } = useClick();

  const version = '0.1.1';

  const handleThemeChange = (themeId: string) => {
    playClick();
    setTheme(themeId);
    applyTheme(themeId);
    setThemeDialogOpen(false);
  };

  const currentTheme = getTheme(theme);
  const themeName = currentTheme?.name || theme;

  return (
    <div className="flex flex-col min-h-[100dvh] max-w-[100dvw] relative">
      {/* Top Left - Logo and Icons */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3">
        <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
          <span className="text-lg font-semibold">KanaDojo</span>
          <span className="text-sm text-[var(--muted-foreground)]" lang="ja">かな道場</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/">
            <HugeiconsIcon
              icon={HomeIcon}
              size={20}
              className="hover:text-[var(--foreground)] text-[var(--muted-foreground)] hover:cursor-pointer transition-colors"
              onClick={playClick}
            />
          </Link>
          <Link href="/progress">
            <HugeiconsIcon
              icon={ProgressIcon}
              size={20}
              className="hover:text-[var(--foreground)] text-[var(--muted-foreground)] hover:cursor-pointer transition-colors"
              onClick={playClick}
            />
          </Link>
          <Link href="/achievements">
            <HugeiconsIcon
              icon={TrophyIcon}
              size={20}
              className="hover:text-[var(--foreground)] text-[var(--muted-foreground)] hover:cursor-pointer transition-colors"
              onClick={playClick}
            />
          </Link>
        </div>
      </div>

      {/* Top Right - Language Selector and Support Buttons */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <LanguageSelector />
        <Button
          size="sm"
          onClick={() => {
            playClick();
            window.open('https://ko-fi.com/kanadojo', '_blank');
          }}
        >
          <HugeiconsIcon icon={CoffeeIcon} size={16} />
          Ko-fi
        </Button>
        <Button
          size="sm"
          onClick={() => {
            playClick();
            window.open('https://www.patreon.com/kanadojo', '_blank');
          }}
        >
          <HugeiconsIcon icon={HeartIcon} size={16} className="fill-current" />
          Patreon
        </Button>
      </div>

      {/* Content Area with Tabs */}
      <div className="w-full pt-20 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">
            <span className="text-[var(--muted-foreground)]" lang="ja">設</span>
            {' '}Preferences
          </h1>
        </div>

        <Tabs defaultValue="behavior" className="w-full">
          {/* Navigation Tabs */}
          <div className="flex justify-start mb-8">
            <TabsList>
              <TabsTrigger
                value="behavior"
                onClick={() => playClick()}
              >
                <HugeiconsIcon icon={JoystickIcon} size={16} className="mr-1.5" />
                Behavior
              </TabsTrigger>
              <TabsTrigger
                value="display"
                onClick={() => playClick()}
              >
                <HugeiconsIcon icon={PaletteIcon} size={16} className="mr-1.5" />
                Display
              </TabsTrigger>
              <TabsTrigger
                value="goals"
                onClick={() => playClick()}
              >
                <HugeiconsIcon icon={TargetIcon} size={16} className="mr-1.5" />
                Goal Timers
              </TabsTrigger>
              <TabsTrigger
                value="backup"
                onClick={() => playClick()}
              >
                <HugeiconsIcon icon={BackupIcon} size={16} className="mr-1.5" />
                Backup
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="behavior" className="mt-0">
            <div className="space-y-6">
              <Behavior />
            </div>
          </TabsContent>

          <TabsContent value="display" className="mt-0">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Themes</h3>
                <Themes />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Fonts</h3>
                <Fonts />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="mt-0">
            <div className="space-y-6">
              <GoalTimers />
            </div>
          </TabsContent>

          <TabsContent value="backup" className="mt-0">
            <div className="space-y-6">
              <Backup />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Left - Social and Legal Links */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
        <FontAwesomeIcon
          icon={faDiscord}
          className="hover:text-[var(--foreground)] hover:cursor-pointer transition-colors"
          onClick={() => {
            playClick();
            window.open('https://discord.gg/CyvBNNrSmb', '_blank');
          }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="hover:text-[var(--foreground)] hover:cursor-pointer transition-colors"
          onClick={() => {
            playClick();
            window.open('https://github.com/lingdojo/kana-dojo', '_blank');
          }}
        />
        <Link href="/terms" className="hover:text-[var(--foreground)] transition-colors" onClick={playClick}>
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors" onClick={playClick}>
          Privacy
        </Link>
        <Link href="/security" className="hover:text-[var(--foreground)] transition-colors" onClick={playClick}>
          Security
        </Link>
      </div>

      {/* Bottom Right - Theme Switcher and Version */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
        <button
          className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors hover:cursor-pointer"
          onClick={() => {
            playClick();
            setThemeDialogOpen(true);
          }}
        >
          <HugeiconsIcon icon={ThemeIcon} size={14} />
          {themeName}
        </button>
        <span className="flex items-center gap-1.5">
          <HugeiconsIcon icon={InfoIcon} size={14} />
          v{version}
        </span>
      </div>

      {/* Theme Switcher Dialog */}
      <Dialog open={themeDialogOpen} onOpenChange={setThemeDialogOpen}>
        <DialogContent className="p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <VisuallyHidden>
            <DialogTitle>Select Theme</DialogTitle>
          </VisuallyHidden>
          <Command className="animate-none">
            <CommandInput placeholder="Search themes..." />
            <CommandList>
              <CommandEmpty>No themes found.</CommandEmpty>
              {themeSets.map((group) => (
                <CommandGroup key={group.name} heading={group.name}>
                  {group.themes.map((themeItem) => (
                    <CommandItem
                      key={themeItem.id}
                      value={`${themeItem.name} ${themeItem.tags?.join(' ') || ''}`}
                      onSelect={() => handleThemeChange(themeItem.id)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{themeItem.name}</span>
                        <div className="flex gap-1 ml-4">
                          <div
                            className="w-3 h-3 rounded-full border border-[var(--border)]"
                            style={{ background: themeItem.foreground }}
                          />
                          <div
                            className="w-3 h-3 rounded-full border border-[var(--border)]"
                            style={{ background: themeItem.primary }}
                          />
                          <div
                            className="w-3 h-3 rounded-full border border-[var(--border)]"
                            style={{ background: themeItem.chart1 || themeItem.destructive }}
                          />
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;
