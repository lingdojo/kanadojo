'use client';
import clsx from 'clsx';
import TopBar from '@/components/reusable/Menu/TopBar';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/reusable/Menu/Sidebar';
import Info from '@/components/reusable/Menu/Info';
import GameModes from '@/components/reusable/Menu/GameModes';
import KanaCards from '@/components/Dojo/Kana/KanaCards';
import Banner from '@/components/reusable/Menu/Banner';
import CollectionSelector from '@/components/reusable/Menu/CollectionSelector';
import Subgroup from '@/components/Dojo/Kanji';
import { usePathname } from 'next/navigation';
import WordClass from '@/components/Dojo/Vocab';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useClick } from '@/lib/hooks/useAudio';
import useThemeStore from '@/store/useThemeStore';

const DojoMenu = () => {
  const pathname = usePathname();

  const [showGameModes, setShowGameModes] = useState(false);

  // use persistent sidebar state from zustand
  const sidebarCollapsed = useThemeStore(state => state.sidebarCollapsed);
  const setSidebarCollapsed = useThemeStore(state => state.setSidebarCollapsed);

  const { playClick } = useClick();

  useEffect(() => {
    // clearKanji();
    // clearWords();
  }, []);

  return (
    <div className='min-h-[100dvh] max-w-[100dvw] lg:pr-20 flex gap-4'>
      <Sidebar collapsed={sidebarCollapsed} />
      {/* Desktop toggle */}
      <div className="hidden lg:flex items-start">
        <button
          aria-label={sidebarCollapsed ? 'Open sidebar' : 'Collapse sidebar'}
          onClick={() => {
            playClick();
            setSidebarCollapsed(!sidebarCollapsed);
          }}
          className={clsx(
            'h-12 w-10 rounded-md ml-0 mt-4',
            'flex items-center justify-center',
            'bg-[var(--card-color)] hover:bg-[var(--border-color)]',
            'text-[var(--secondary-color)] hover:text-[var(--text-color)]',
            'duration-200'
          )}
        >
          {sidebarCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* Main content area: flex-1 and centered inner container so content stays centered
          regardless of collapsed sidebar width */}
      <div className='flex-1 flex justify-center transition-all duration-300 ease-in-out'>
        <div
          className={clsx(
            'flex flex-col gap-4',
            'w-full max-w-[1200px] lg:px-0 px-4 md:px-8 ',
            'pb-20'
          )}
        >
          <Banner />

          <Info />
          {(pathname === '/kanji' || pathname === '/vocabulary') && (
            <CollectionSelector />
          )}
          <TopBar
            showGameModes={showGameModes}
            setShowGameModes={setShowGameModes}
            currentDojo='kana'
          />
          {showGameModes && <GameModes />}

          {pathname === '/kana' ? (
            <KanaCards />
          ) : pathname === '/kanji' ? (
            <Subgroup />
          ) : pathname === '/vocabulary' ? (
            <WordClass />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DojoMenu;
