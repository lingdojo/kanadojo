'use client';
import { Fragment, lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Banner from './Banner';
import Info from '@/components/reusable/Menu/Info';
import NightlyBanner from '@/components/Modals/NightlyBanner';
import {
  ScrollText,
  FileLock2,
  Cookie,
  Sun,
  Moon,
  Heart,
  Sparkle,
  Keyboard
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import { useClick } from '@/hooks/useAudio';
import usePreferencesStore from '@/store/usePreferencesStore';
import { useMediaQuery } from 'react-responsive';
import { buttonBorderStyles } from '@/static/styles';
import { Button } from '@/components/ui/button';

const Decorations = lazy(() => import('./Decorations'));

const MainMenu = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isLG = useMediaQuery({ minWidth: 1024 });

  const theme = usePreferencesStore(state => state.theme);
  const setTheme = usePreferencesStore(state => state.setTheme);

  const { playClick } = useClick();

  const [expandDecorations, setExpandDecorations] = useState(false);

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Check if the user has already dismissed the banner
    const hasDismissed = localStorage.getItem('nightly_banner_dismissed');

    // Only show if they haven't dismissed it yet
    if (!hasDismissed) {
      setShowBanner(true);
    }
  }, []);

  const handleSwitch = () => {
    console.log('Redirecting to Nightly build...');
  };

  const handleDismiss = () => {
    console.log('User dismissed the banner.');
    localStorage.setItem('nightly_banner_dismissed', 'true');
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const links = [
    {
      name_en: 'Kana',
      name_ja: 'あ',
      href: '/kana'
    },
    {
      name_en: 'Vocabulary',
      name_ja: '語',
      href: '/vocabulary'
    },
    {
      name_en: 'Kanji',
      name_ja: '字',
      href: '/kanji'
    }

    // {
    //   name_en: 'Sentences',
    //   name_ja: '文',
    //   href: '/sentences'
    // }
  ];

  const legalLinks = [
    { name: 'terms', href: '/terms', icon: ScrollText },
    { name: 'privacy', href: '/privacy', icon: Cookie },
    { name: 'security', href: '/security', icon: FileLock2 }
    // { name: 'patch notes', href: '/patch-notes', icon: FileDiff }
  ];

  // Animation variants for smooth entry animations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  };

  const fadeInRotate = {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-row justify-center max-w-[100dvw] min-h-[100dvh]'
      )}
    >
      {isMounted && isLG && (
        <Suspense fallback={<></>}>
          {process.env.NODE_ENV === 'production' && (
            <Decorations expandDecorations={expandDecorations} />
          )}
          <Button
            variant='secondary'
            size='icon'
            className={clsx(
              'fixed top-4 right-8 z-50 opacity-90',
              buttonBorderStyles,
              'transition-transform duration-250 active:scale-95'
            )}
            onClick={() => {
              playClick();
              setExpandDecorations(expandDecorations => !expandDecorations);
            }}
          >
            <Sparkle />
          </Button>
          <Button
            variant='secondary'
            size='icon'
            className={clsx(
              'fixed top-4 left-4 z-50 opacity-90',
              buttonBorderStyles,
              'transition-transform duration-250 active:scale-95'
            )}
            onClick={() => {
              playClick();
            }}
          >
            <a href='https://monkeytype.com/' rel='noopener' target='_blank'>
              <Keyboard />
            </a>
          </Button>
        </Suspense>
      )}
      <div
        className={clsx(
          'max-md:pt-4 pb-16 flex flex-col items-center md:justify-center gap-4 px-4 w-full sm:w-3/4 lg:w-1/2 3xl:w-2/5 ',
          'opacity-90 z-50',
          expandDecorations && 'hidden'
        )}
      >
        <motion.div
          className='flex flex-row justify-between items-center w-full px-1 gap-2'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Banner />
          <motion.div
            className='flex flex-row justify-end gap-2 w-1/2 md:w-1/3'
            initial='initial'
            animate='animate'
            variants={container}
          >
            <motion.div variants={fadeInRotate}>
              {theme === 'dark' ? (
                <Moon
                  size={32}
                  onClick={() => {
                    playClick();
                    setTheme('light');
                  }}
                  className={clsx(
                    'hover:cursor-pointer duration-250 hover:scale-120',
                    'active:scale-100 active:duration-225',
                    'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
                  )}
                />
              ) : (
                <Sun
                  size={32}
                  onClick={() => {
                    playClick();
                    setTheme('dark');
                  }}
                  className={clsx(
                    'hover:cursor-pointer duration-250 hover:scale-120',
                    'active:scale-100 active:duration-225',
                    'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
                  )}
                />
              )}
            </motion.div>
            {/* <Settings
              size={32}
              className={clsx(
                'hover:cursor-pointer duration-250 hover:scale-120',
                'active:scale-100 active:duration-225'
              )}
              onClick={() => {
                playClick();
                window.open('/settings', '_self');
              }}
            /> */}

            <motion.div variants={fadeInScale}>
              <FontAwesomeIcon
                icon={faDiscord}
                size='2x'
                className={clsx(
                  'hover:cursor-pointer duration-250 hover:scale-120',
                  'active:scale-100 active:duration-225',
                  'md:hidden',
                  'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
                )}
                onClick={() => {
                  playClick();
                  window.open('https://discord.gg/CyvBNNrSmb', '_blank');
                }}
              />
            </motion.div>
            <motion.div variants={fadeInScale}>
              <FontAwesomeIcon
                icon={faGithub}
                size='2x'
                className={clsx(
                  'hover:cursor-pointer duration-250 hover:scale-120',
                  'active:scale-100 active:duration-225',
                  'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
                )}
                onClick={() => {
                  playClick();
                  window.open(
                    'https://github.com/lingdojo/kana-dojo',
                    '_blank'
                  );
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Heart
                size={32}
                className={clsx(
                  'hover:cursor-pointer duration-250 hover:scale-120',
                  'active:scale-100 active:duration-225',
                  'fill-current animate-bounce text-red-500'
                )}
                onClick={() => {
                  playClick();
                  window.open('https://ko-fi.com/kanadojo', '_blank');
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <Info />
        </motion.div>
        <motion.div
          className={clsx(
            'rounded-2xl bg-[var(--card-color)]',
            'duration-250',
            'transition-all ease-in-out',
            'flex flex-col md:flex-row',
            'w-full'
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          {links.map((link, i) => (
            <Fragment key={i}>
              <Link href={link.href} className={clsx('w-full overflow-hidden')}>
                <motion.button
                  className={clsx(
                    'flex w-full h-full text-2xl',
                    ' justify-center items-center gap-1.5',
                    'py-8',
                    'group',
                    i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
                    i === links.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
                    'hover:cursor-pointer',
                    'hover:bg-[var(--border-color)]'
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + i * 0.1,
                    ease: 'easeOut'
                  }}
                  onClick={() => playClick()}
                >
                  <span
                    lang='ja'
                    className='font-normal text-[var(--secondary-color)]'
                  >
                    {link.name_ja}
                  </span>
                  <span lang='en' className=''>
                    {link.name_en}
                  </span>
                </motion.button>
              </Link>

              {i < links.length - 1 && (
                <div
                  className={clsx(
                    'md:border-l-1 md:h-auto md:w-0',
                    'border-[var(--border-color)]',
                    'border-t-1 w-full border-[var(--border-color)]'
                  )}
                />
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
      <motion.div
        className={clsx(
          'fixed bottom-3 flex flex-row gap-2',
          'max-md:bg-[var(--card-color)] rounded-xl z-50',
          expandDecorations && 'hidden'
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        {legalLinks.map((link, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.6 + i * 0.08,
              ease: 'easeOut'
            }}
          >
            <Link
              href={link.href}
              className='p-2 text-sm hover:cursor-pointer rounded-2xl flex flex-row gap-1 items-center text-[var(--secondary-color)] hover:text-[var(--main-color)]'
              onClick={() => playClick()}
            >
              <link.icon className='size-4' />
              <span>{link.name}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {showBanner && (
        <NightlyBanner onSwitch={handleSwitch} onDismiss={handleDismiss} />
      )}
    </div>
  );
};

export default MainMenu;
