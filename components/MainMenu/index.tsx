'use client';
import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ChartIncreaseIcon as ProgressIcon,
  Award01Icon as TrophyIcon,
  Settings02Icon as SettingsIcon,
  FavouriteIcon as HeartIcon,
  PaintBoardIcon as ThemeIcon,
  InformationCircleIcon as InfoIcon,
  Coffee01Icon as CoffeeIcon,
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
import KanaCards from '@/components/Dojo/Kana/KanaCards';
import KanjiCards from '@/components/Dojo/Kanji';
import VocabCards from '@/components/Dojo/Vocab';

const MainMenu = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);

  const theme = usePreferencesStore(state => state.theme);
  const setTheme = usePreferencesStore(state => state.setTheme);
  const { playClick } = useClick();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          <Link href="/preferences">
            <HugeiconsIcon
              icon={SettingsIcon}
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
      <div className="w-full pt-20 pb-20">
        <Tabs defaultValue="kana" className="w-full">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger
                value="kana"
                onClick={() => playClick()}
              >
                <span lang="ja" className="mr-1.5">かな</span>
                Kana
              </TabsTrigger>
              <TabsTrigger
                value="kanji"
                onClick={() => playClick()}
              >
                <span lang="ja" className="mr-1.5">漢字</span>
                Kanji
              </TabsTrigger>
              <TabsTrigger
                value="vocabulary"
                onClick={() => playClick()}
              >
                <span lang="ja" className="mr-1.5">語彙</span>
                Vocabulary
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="kana" className="mt-0">
            <KanaCards />
          </TabsContent>

          <TabsContent value="kanji" className="mt-0">
            <KanjiCards />
          </TabsContent>

          <TabsContent value="vocabulary" className="mt-0">
            <VocabCards />
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

export default MainMenu;
