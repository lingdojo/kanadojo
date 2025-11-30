'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Keyboard, Heart, Palette, GitBranch } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/shared/hooks';
import usePreferencesStore from '@/features/Preferences';
import useCrazyModeStore from '@/features/CrazyMode/store/useCrazyModeStore';

const APP_VERSION = '0.1.5 (alpha)';

const MobileBottomBar = () => {
  const { playClick } = useClick();
  const theme = usePreferencesStore(state => state.theme);

  // Crazy Mode Integration
  const isCrazyMode = useCrazyModeStore(state => state.isCrazyMode);
  const activeThemeId = useCrazyModeStore(state => state.activeThemeId);

  const effectiveTheme = isCrazyMode && activeThemeId ? activeThemeId : theme;

  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-50',
        'max-md:hidden', // Only visible on screens bigger than md
        'bg-[var(--background-color)] border-t-1 border-[var(--border-color)]',
        'px-4 py-1',
        'flex items-center justify-between'
      )}
    >
      {/* Left side - Social links */}
      <div className='flex items-center gap-3'>
        <FontAwesomeIcon
          icon={faGithub}
          size='sm'
          className={clsx(
            'hover:cursor-pointer duration-250 ',
            'active:scale-100 active:duration-225',
            'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
          )}
          onClick={() => {
            playClick();
            window.open('https://github.com/lingdojo/kana-dojo', '_blank');
          }}
        />
        <FontAwesomeIcon
          icon={faDiscord}
          size='sm'
          className={clsx(
            'hover:cursor-pointer duration-250 ',
            'active:scale-100 active:duration-225',
            'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
          )}
          onClick={() => {
            playClick();
            window.open('https://discord.gg/CyvBNNrSmb', '_blank');
          }}
        />
        <Keyboard
          size={16}
          className={clsx(
            'hover:cursor-pointer duration-250 ',
            'active:scale-100 active:duration-225',
            'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
          )}
          onClick={() => {
            playClick();
            window.open('https://monkeytype.com', '_blank');
          }}
        />
        <Heart
          size={16}
          className={clsx(
            'hover:cursor-pointer duration-250',
            'active:scale-100 active:duration-225',
            // 'text-[var(--main-color)] hover:text-[var(--main-color)]',
            'motion-safe:animate-pulse',
            'text-red-500 fill-current'
          )}
          onClick={() => {
            playClick();
            window.open('https://ko-fi.com/kanadojo', '_blank');
          }}
        />
      </div>

      {/* Right side - Theme name and version */}
      <div className='flex items-center gap-2 text-xs text-[var(--secondary-color)]'>
        <span className='flex gap-1'>
          <Palette size={16} />
          {effectiveTheme.replace('-', ' ')}
        </span>
        <span>~</span>
        <span className='flex gap-1'>
          <GitBranch size={16} />v{APP_VERSION}
        </span>
      </div>
    </div>
  );
};

export default MobileBottomBar;
