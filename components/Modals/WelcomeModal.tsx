'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon as XIcon, ColorPickerIcon as PaletteIcon, TextIcon as TypeIcon, ArrowRightIcon as ChevronRightIcon, ArrowLeftIcon as ChevronLeftIcon, AudioBook01Icon as AudioLinesIcon, VolumeMute01Icon as VolumeXIcon, Joystick01Icon as JoystickIcon, DiceIcon as Dice5Icon } from '@hugeicons/core-free-icons';
import useOnboardingStore from '@/store/useOnboardingStore';
import usePreferencesStore from '@/store/usePreferencesStore';
import { useClick } from '@/hooks/useAudio';
import { buttonBorderStyles, cardBorderStyles } from '@/static/styles';
import themeSets from '@/static/themes';
import fonts from '@/static/fonts';

const WelcomeModal = () => {
  const { playClick } = useClick();
  const hasSeenWelcome = useOnboardingStore(state => state.hasSeenWelcome);
  const setHasSeenWelcome = useOnboardingStore(
    state => state.setHasSeenWelcome
  );

  const [step, setStep] = useState<
    'welcome' | 'behavior' | 'themes' | 'fonts' | 'complete'
  >('welcome');
  const [isVisible, setIsVisible] = useState(false);

  const selectedTheme = usePreferencesStore(state => state.theme);
  const setSelectedTheme = usePreferencesStore(state => state.setTheme);

  const currentFont = usePreferencesStore(state => state.font);
  const setFont = usePreferencesStore(state => state.setFont);

  const displayKana = usePreferencesStore(state => state.displayKana);
  const setDisplayKana = usePreferencesStore(state => state.setDisplayKana);

  const silentMode = usePreferencesStore(state => state.silentMode);
  const setSilentMode = usePreferencesStore(state => state.setSilentMode);

  const [localTheme, setLocalTheme] = useState(selectedTheme);
  const [localFont, setLocalFont] = useState(currentFont);
  const [localDisplayKana, setLocalDisplayKana] = useState(displayKana);
  const [localSilentMode, setLocalSilentMode] = useState(silentMode);

  useEffect(() => {
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasSeenWelcome]);

  useEffect(() => {
    setLocalTheme(selectedTheme);
    setLocalFont(currentFont);
    setLocalDisplayKana(displayKana);
    setLocalSilentMode(silentMode);
  }, [selectedTheme, currentFont, displayKana, silentMode]);

  const handleClose = () => {
    playClick();
    setIsVisible(false);
    setHasSeenWelcome(true);
  };

  const handleNext = () => {
    playClick();
    if (step === 'welcome') {
      setStep('behavior');
    } else if (step === 'behavior') {
      setStep('themes');
    } else if (step === 'themes') {
      setStep('fonts');
    } else if (step === 'fonts') {
      setStep('complete');
      setTimeout(() => {
        handleClose();
      }, 10000);
    }
  };

  const handlePrevious = () => {
    playClick();
    if (step === 'fonts') {
      setStep('themes');
    } else if (step === 'themes') {
      setStep('behavior');
    } else if (step === 'behavior') {
      setStep('welcome');
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 'welcome':
        return (
          <div className='text-center space-y-6'>
            <div className='space-y-2'>
              <h2
                id='welcome-modal-title'
                className='text-3xl font-bold text-[var(--foreground)]'
              >
                Welcome to KanaDojo!
              </h2>
              <p className='text-lg text-[var(--muted-foreground)]'>
                Let&apos;s personalize your learning experience
              </p>
            </div>

            <div className='space-y-4 text-left'>
              <div className='flex items-center gap-3 p-3 rounded-lg bg-[var(--background)]'>
                <HugeiconsIcon icon={JoystickIcon} size={24} color="currentColor" className="text-[var(--foreground)] flex-shrink-0" />
                <div>
                  <h3 className='font-semibold text-[var(--foreground)]'>
                    Configure Behavior
                  </h3>
                  <p className='text-sm text-[var(--muted-foreground)]'>
                    Set display language and sound preferences
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 rounded-lg bg-[var(--background)]'>
                <HugeiconsIcon icon={PaletteIcon} size={24} color="currentColor" className="text-[var(--foreground)] flex-shrink-0" />
                <div>
                  <h3 className='font-semibold text-[var(--foreground)]'>
                    Choose Your Theme
                  </h3>
                  <p className='text-sm text-[var(--muted-foreground)]'>
                    Select a theme that matches your style
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 rounded-lg bg-[var(--background)]'>
                <HugeiconsIcon icon={TypeIcon} size={24} color="currentColor" className="text-[var(--foreground)] flex-shrink-0" />
                <div>
                  <h3 className='font-semibold text-[var(--foreground)]'>
                    Select Your Font
                  </h3>
                  <p className='text-sm text-[var(--muted-foreground)]'>
                    Choose the perfect font for characters
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'behavior':
        return (
          <div className='space-y-6'>
            <div className='text-center space-y-2'>
              <h2 className='text-2xl font-bold text-[var(--foreground)] flex items-center justify-center gap-2'>
                <HugeiconsIcon icon={JoystickIcon} size={28} color="currentColor" />
                Configure Behavior
              </h2>
              <p className='text-[var(--muted-foreground)]'>
                Set your display and sound preferences
              </p>
            </div>

            <div className='space-y-6'>
              <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-[var(--foreground)]'>
                  Display Language
                </h3>
                <p className='text-sm text-[var(--muted-foreground)]'>
                  In character selection menus, by default display:
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <button
                    className={clsx(
                      'p-3 rounded-lg border-2 transition-colors duration-200 text-left cursor-pointer',
                      'hover:border-[var(--foreground)]/50',
                      !localDisplayKana
                        ? 'border-[var(--foreground)] bg-[var(--background)]'
                        : 'border-[var(--border)] bg-[var(--card)]'
                    )}
                    onClick={() => {
                      playClick();
                      setLocalDisplayKana(false);
                      setDisplayKana(false);
                    }}
                  >
                    <div className='flex items-center gap-2'>
                      <span className='text-[var(--foreground)]'>
                        {!localDisplayKana && '● '}
                      </span>
                      <span className='font-medium'>
                        Romaji, Translations 🇺🇸
                      </span>
                    </div>
                  </button>

                  <button
                    className={clsx(
                      'p-3 rounded-lg border-2 transition-colors duration-200 text-left cursor-pointer',
                      'hover:border-[var(--foreground)]/50',
                      localDisplayKana
                        ? 'border-[var(--foreground)] bg-[var(--background)]'
                        : 'border-[var(--border)] bg-[var(--card)]'
                    )}
                    onClick={() => {
                      playClick();
                      setLocalDisplayKana(true);
                      setDisplayKana(true);
                    }}
                  >
                    <div className='flex items-center gap-2'>
                      <span className='text-[var(--foreground)]'>
                        {localDisplayKana && '● '}
                      </span>
                      <span className='font-medium'>Kana, Kanji 🇯🇵</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-[var(--foreground)]'>
                  Sound Effects
                </h3>
                <p className='text-sm text-[var(--muted-foreground)]'>
                  Play UI and feedback sound effects:
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <button
                    className={clsx(
                      'p-3 rounded-lg border-2 transition-colors duration-200 cursor-pointer',
                      'hover:border-[var(--foreground)]/50',
                      !localSilentMode
                        ? 'border-[var(--foreground)] bg-[var(--background)]'
                        : 'border-[var(--border)] bg-[var(--card)]'
                    )}
                    onClick={() => {
                      playClick();
                      setLocalSilentMode(false);
                      setSilentMode(false);
                    }}
                  >
                    <div className='flex items-center justify-center gap-2'>
                      <span className='text-[var(--foreground)]'>
                        {!localSilentMode && '● '}
                      </span>
                      <span className='font-medium'>On</span>
                      <HugeiconsIcon icon={AudioLinesIcon} size={20} color="currentColor" />
                    </div>
                  </button>

                  <button
                    className={clsx(
                      'p-3 rounded-lg border-2 transition-colors duration-200 cursor-pointer',
                      'hover:border-[var(--foreground)]/50',
                      localSilentMode
                        ? 'border-[var(--foreground)] bg-[var(--background)]'
                        : 'border-[var(--border)] bg-[var(--card)]'
                    )}
                    onClick={() => {
                      playClick();
                      setLocalSilentMode(true);
                      setSilentMode(true);
                    }}
                  >
                    <div className='flex items-center justify-center gap-2'>
                      <span className='text-[var(--foreground)]'>
                        {localSilentMode && '● '}
                      </span>
                      <span className='font-medium'>Off</span>
                      <HugeiconsIcon icon={VolumeXIcon} size={20} color="currentColor" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'themes':
        return (
          <div className='space-y-6'>
            <div className='text-center space-y-2'>
              <h2 className='text-2xl font-bold text-[var(--foreground)] flex items-center justify-center gap-2'>
                <HugeiconsIcon icon={PaletteIcon} size={28} color="currentColor" />
                Choose Your Theme
              </h2>
              <p className='text-[var(--muted-foreground)]'>
                Select a theme that matches your style
              </p>
            </div>

            <div className='mb-4'>
              <button
                className={clsx(
                  'w-full p-3 rounded-lg border-2 border-black/30 transition-colors duration-200 cursor-pointer',
                  'hover:border-[var(--foreground)] hover:bg-[var(--background)]',
                  buttonBorderStyles,
                  'flex items-center justify-center gap-2 text-[var(--foreground)]'
                )}
                onClick={() => {
                  playClick();
                  const darkThemes =
                    themeSets.find(set => set.name === 'Dark')?.themes || [];
                  if (darkThemes.length > 0) {
                    const randomTheme =
                      darkThemes[Math.floor(Math.random() * darkThemes.length)];
                    setLocalTheme(randomTheme.id);
                    setSelectedTheme(randomTheme.id);
                  }
                }}
              >
                <HugeiconsIcon icon={Dice5Icon} color="currentColor" className="text-[var(--muted-foreground)]" />
                Random Theme
              </button>
            </div>

            <div className='space-y-4 max-h-96 overflow-y-auto px-1'>
              {themeSets.map(themeSet => (
                <div key={themeSet.name} className='space-y-3'>
                  <h3 className='text-lg font-semibold text-[var(--foreground)] flex items-center gap-2'>
                    <HugeiconsIcon icon={themeSet.icon} size={20} color="currentColor" />
                    {themeSet.name}
                  </h3>
                  <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                    {themeSet.themes.map(theme => (
                      <button
                        key={theme.id}
                        className={clsx(
                          'p-1.5 rounded-md border-2 transition-all duration-200 cursor-pointer',
                          'hover:border-[var(--foreground)]/50 active:scale-95 overflow-hidden',
                          'h-12 w-full',
                          localTheme === theme.id
                            ? 'border-[var(--foreground)]'
                            : 'border-transparent hover:border-[var(--border)]'
                        )}
                        style={{
                          backgroundColor: theme.backgroundColor,
                          color: theme.mainColor,
                          borderColor: theme.borderColor
                        }}
                        onClick={() => {
                          playClick();
                          setLocalTheme(theme.id);
                          setSelectedTheme(theme.id);
                        }}
                        title={theme.id}
                      >
                        <div className='text-center'>
                          <div className='text-xs font-medium'>
                            {localTheme === theme.id && '● '}
                            {theme.id === 'long'
                              ? 'long'
                              : theme.id.replace('-', ' ')}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'fonts':
        return (
          <div className='space-y-6'>
            <div className='text-center space-y-2'>
              <h2 className='text-2xl font-bold text-[var(--foreground)] flex items-center justify-center gap-2'>
                <HugeiconsIcon icon={TypeIcon} size={28} color="currentColor" />
                Choose Your Font
              </h2>
              <p className='text-[var(--muted-foreground)]'>
                Choose the perfect font for characters
              </p>
            </div>

            <div className='mb-4'>
              <button
                className={clsx(
                  'w-full p-3 rounded-lg border-2 border-black/30 transition-colors duration-200 cursor-pointer',
                  'hover:border-[var(--foreground)] hover:bg-[var(--background)]',
                  buttonBorderStyles,
                  'flex items-center justify-center gap-2 text-[var(--foreground)]'
                )}
                onClick={() => {
                  playClick();
                  const randomFont =
                    fonts[Math.floor(Math.random() * fonts.length)];
                  setLocalFont(randomFont.name);
                  setFont(randomFont.name);
                }}
              >
                <HugeiconsIcon icon={Dice5Icon} color="currentColor" className="text-[var(--muted-foreground)]" />
                Random Font
              </button>
            </div>

            <div className='space-y-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent p-1'>
              {fonts.map(fontObj => (
                <button
                  key={fontObj.name}
                  className={clsx(
                    'w-full p-3 rounded-lg border-2 transition-colors duration-200 text-left cursor-pointer',
                    'hover:border-[var(--foreground)]/70',
                    localFont === fontObj.name
                      ? 'border-[var(--foreground)] bg-[var(--background)]'
                      : 'border-[var(--border)] bg-[var(--card)]'
                  )}
                  onClick={() => {
                    playClick();
                    setLocalFont(fontObj.name);
                    setFont(fontObj.name);
                  }}
                >
                  <div className={clsx('space-y-1', fontObj.font.className)}>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium text-[var(--foreground)]'>
                        {localFont === fontObj.name && '● '}
                        {fontObj.name}
                        {fontObj.name === 'Zen Maru Gothic' && ' (default)'}
                      </span>
                    </div>
                    <div className='text-lg text-[var(--muted-foreground)]'>
                      かな道場
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'complete':
        return (
          <div className='text-center space-y-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold text-[var(--foreground)]'>
                All Set!
              </h2>
              <p className='text-lg text-[var(--muted-foreground)]'>
                Your KanaDojo is now personalized
              </p>
            </div>

            <div className='space-y-4'>
              <p className='text-[var(--muted-foreground)]'>
                You can always change these settings later in the Preferences.
              </p>
              <p className='text-sm text-[var(--muted-foreground)]'>
                Happy learning!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-[9999] overscroll-none'
        onClick={e => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
        role='dialog'
        aria-modal='true'
        aria-labelledby='welcome-modal-title'
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className={clsx(
            'w-full max-w-3xl max-h-[85vh] overflow-y-auto',
            'rounded-2xl bg-[var(--card)] m-3',
            cardBorderStyles
          )}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className='sticky top-0 bg-[var(--card)] p-3 sm:p-5 border-b border-[var(--border)]/30 z-10'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div
                  className='flex gap-1'
                  role='progressbar'
                  aria-valuenow={
                    [
                      'welcome',
                      'behavior',
                      'themes',
                      'fonts',
                      'complete'
                    ].indexOf(step) + 1
                  }
                  aria-valuemax={5}
                >
                  {['welcome', 'behavior', 'themes', 'fonts', 'complete'].map(
                    (stepName, index) => {
                      const isActive =
                        [
                          'welcome',
                          'behavior',
                          'themes',
                          'fonts',
                          'complete'
                        ].indexOf(step) >= index;
                      return (
                        <div
                          key={stepName}
                          className={clsx(
                            'w-2 h-2 rounded-full transition-all duration-300',
                            isActive
                              ? 'bg-[var(--foreground)] scale-110'
                              : 'bg-[var(--border)] scale-100'
                          )}
                          title={`Step ${index + 1}: ${stepName}`}
                        />
                      );
                    }
                  )}
                </div>
              </div>

              <button
                onClick={handleClose}
                className={clsx(
                  'p-2 rounded-lg transition-colors duration-200 cursor-pointer',
                  'hover:bg-[var(--background)]',
                  'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                )}
              >
                <HugeiconsIcon icon={XIcon} size={20} color="currentColor" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className='p-3 sm:p-5 pb-2'>{renderStepContent()}</div>

          {/* Actions */}
          {step !== 'complete' && (
            <div className='sticky bottom-0 bg-[var(--card)] p-3 sm:p-5 pt-3 border-t border-[var(--border)]/30'>
              <div className='flex justify-between items-center'>
                {step !== 'welcome' ? (
                  <button
                    onClick={handlePrevious}
                    className={clsx(
                      'px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer',
                      'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',
                      'hover:bg-[var(--background)] transition-all duration-200',
                      'text-sm sm:text-base'
                    )}
                  >
                    <HugeiconsIcon icon={ChevronLeftIcon} size={16} color="currentColor" className="sm:w-[18px] sm:h-[18px]" />
                    <span className='hidden sm:inline'>Previous</span>
                    <span className='sm:hidden'>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={handleNext}
                  className={clsx(
                    'px-6 sm:px-8 py-2 sm:py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer',
                    'text-[var(--foreground)] font-medium text-sm sm:text-base',
                    buttonBorderStyles,
                    'hover:bg-[var(--background)] active:scale-98 transition-all duration-200'
                  )}
                >
                  <span>
                    {step === 'welcome'
                      ? 'Get Started'
                      : step === 'fonts'
                      ? 'Finish Setup'
                      : 'Next'}
                  </span>
                  <HugeiconsIcon icon={ChevronRightIcon} size={16} color="currentColor" className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeModal;
