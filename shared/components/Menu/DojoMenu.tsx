'use client';
import clsx from 'clsx';
import TopBar from '@/shared/components/Menu/TopBar';
import { useState, useEffect } from 'react';
import Sidebar from '@/shared/components/Menu/Sidebar';
import Info from '@/shared/components/Menu/Info';
import GameModes from '@/shared/components/Menu/GameModes';
import KanaCards from '@/features/Kana/components/KanaCards';
import Banner from '@/shared/components/Menu/Banner';
import CollectionSelector from '@/shared/components/Menu/CollectionSelector';
import KanjiCards from '@/features/Kanji/components';
import { usePathname } from 'next/navigation';
import VocabCards from '@/features/Vocabulary/components';
import { removeLocaleFromPath } from '@/shared/lib/pathUtils';

const DojoMenu = () => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocaleFromPath(pathname);

  const [showGameModes, setShowGameModes] = useState(true);

  useEffect(() => {
    // clearKanji();
    // clearWords();
  }, []);

  // Hotkey support: Enter or Space to toggle GameModes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger on Kanji/Vocab pages
      if (pathWithoutLocale !== '/kanji' && pathWithoutLocale !== '/vocabulary')
        return;

      // Ignore if user is typing in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setShowGameModes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathWithoutLocale]);

  return (
    <div className="min-h-[100dvh] max-w-[100dvw] lg:pr-20 flex gap-4">
      <Sidebar />
      <div
        className={clsx(
          'flex flex-col gap-4',
          'w-full lg:w-4/5 lg:px-0 px-4 md:px-8 ',
          'pb-20'
        )}
      >
        <Banner />

        <Info />
        {(pathWithoutLocale === '/kanji' ||
          pathWithoutLocale === '/vocabulary') && <CollectionSelector />}
        <TopBar currentDojo={pathWithoutLocale.slice(1)} />
        {showGameModes && <GameModes />}

        {pathWithoutLocale === '/kana' ? (
          <KanaCards />
        ) : pathWithoutLocale === '/kanji' ? (
          <KanjiCards />
        ) : pathWithoutLocale === '/vocabulary' ? (
          <VocabCards />
        ) : null}
      </div>
    </div>
  );
};

export default DojoMenu;
