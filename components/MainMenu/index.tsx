'use client';
import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { HugeiconsIcon } from '@hugeicons/react';
import {
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
import BottomNav from '@/components/reusable/BottomNav';
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
import { Tabs, TabsContent } from '@/components/ui/tabs';
import themeSets, { getTheme, applyTheme } from '@/static/themes';
import KanaCards from '@/components/Dojo/Kana/KanaCards';
import KanjiCards from '@/components/Dojo/Kanji';
import VocabCards from '@/components/Dojo/Vocab';
import { removeLocaleFromPath } from '@/lib/pathUtils';

const MainMenu = () => {
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  const theme = usePreferencesStore(state => state.theme);
  const setTheme = usePreferencesStore(state => state.setTheme);
  const { playClick } = useClick();

  const version = '0.1.1';

  // Determine active tab based on route
  const activeTab = pathWithoutLocale === '/kanji' ? 'kanji'
    : pathWithoutLocale === '/vocabulary' ? 'vocabulary'
    : 'kana';

  const handleThemeChange = (themeId: string) => {
    playClick();
    setTheme(themeId);
    applyTheme(themeId);
    setThemeDialogOpen(false);
  };

  const currentTheme = getTheme(theme);
  const themeName = currentTheme?.name || theme;

  return (
    <div className="flex flex-col min-h-[100dvh] w-full overflow-x-hidden relative">
      {/* Top Header - Logo and Actions */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left - Logo */}
          <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-base md:text-lg font-semibold">KanaDojo</span>
            <span className="text-xs md:text-sm text-[var(--muted-foreground)]" lang="ja">かな道場</span>
          </Link>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile - Icon-only buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={() => {
                  playClick();
                  window.open('https://ko-fi.com/kanadojo', '_blank');
                }}
              >
                <HugeiconsIcon icon={CoffeeIcon} size={20} />
              </button>
              <button
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={() => {
                  playClick();
                  window.open('https://www.patreon.com/kanadojo', '_blank');
                }}
              >
                <HugeiconsIcon icon={HeartIcon} size={20} className="fill-current" />
              </button>
              <button
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={() => {
                  playClick();
                  setThemeDialogOpen(true);
                }}
              >
                <HugeiconsIcon icon={ThemeIcon} size={20} />
              </button>
            </div>

            <LanguageSelector />

            {/* Desktop - Full buttons */}
            <div className="hidden md:flex items-center gap-2">
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
              <button
                className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                onClick={() => {
                  playClick();
                  setThemeDialogOpen(true);
                }}
              >
                <HugeiconsIcon icon={ThemeIcon} size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 pt-[65px] pb-[73px] md:pb-12 overflow-y-auto">
        <Tabs value={activeTab} className="w-full h-full">
          <TabsContent value="kana" className="mt-0 h-full">
            <KanaCards />
          </TabsContent>

          <TabsContent value="kanji" className="mt-0 px-4 md:px-8 h-full">
            <div className="max-w-7xl mx-auto">
              <KanjiCards />
            </div>
          </TabsContent>

          <TabsContent value="vocabulary" className="mt-0 px-4 md:px-8 h-full">
            <div className="max-w-7xl mx-auto">
              <VocabCards />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation Bar - Mobile App Style */}
      <BottomNav />

      {/* Desktop Footer - Hidden on Mobile */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-30 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left - Social and Legal */}
          <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
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

          {/* Right - Theme and Version */}
          <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
            <button
              className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
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
        </div>
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
