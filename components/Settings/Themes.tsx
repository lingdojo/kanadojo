'use client';
import { createElement } from 'react';
import themeSets from '@/static/themes';
import useThemeStore from '@/store/useThemeStore';
import clsx from 'clsx';
import { useClick, useLong } from '@/lib/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { useState } from 'react';
import { Dice5 } from 'lucide-react';
import { Random } from 'random-js';

const random = new Random();

const Themes = () => {
  const { playClick } = useClick();
  const { playLong } = useLong();

  const selectedTheme = useThemeStore(state => state.theme);
  const setSelectedTheme = useThemeStore(state => state.setTheme);

  const [isHovered, setIsHovered] = useState('');

  const [randomTheme, setRandomTheme] = useState(
    themeSets[2].themes[random.integer(0, themeSets[2].themes.length - 1)]
  );

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-2'>
        <button
          className={clsx(
            'p-6 flex justify-center items-center gap-2 w-full md:w-1/2 flex-1 overflow-hidden',
            buttonBorderStyles
          )}
          onMouseEnter={() => setIsHovered(randomTheme.id)}
          onMouseLeave={() => setIsHovered('')}
          style={{
            color: randomTheme.mainColor,
            backgroundColor:
              isHovered === randomTheme.id
                ? randomTheme.borderColor
                : randomTheme.cardColor,
            borderWidth:
              process.env.NODE_ENV === 'development' ? '2px' : undefined,
            borderColor: randomTheme.borderColor
          }}
          onClick={() => {
            playClick();
            const randomTheme =
              themeSets[2].themes[
                random.integer(0, themeSets[2].themes.length - 1)
              ];
            setRandomTheme(randomTheme);
            setSelectedTheme(randomTheme.id);
          }}
        >
          <span className='mb-0.5'>
            {randomTheme.id === selectedTheme ? '\u2B24 ' : ''}
          </span>
          <Dice5
            style={{
              color: randomTheme.secondaryColor
            }}
          />
          Random Theme
        </button>
        {/*
        <button
          className={clsx(
            'p-4 flex justify-center items-center gap-2',
            buttonBorderStyles
          )}
          onClick={() => {
            playClick();
            setRandomTheme(
              themeSets[2].themes[
                random.integer(0, themeSets[2].themes.length - 1)
              ]
            );
          }}
        >
          <RotateCcw className='text-[var(--secondary-color)] ' />
          reroll
        </button>
        */}
      </div>
      {themeSets.map((themeSet, i) => (
        <div key={i} className='flex flex-col gap-3'>
          <h4 className='text-xl flex flex-row items-center gap-1.5'>
            {createElement(themeSet.icon)}
            <span>{themeSet.name}</span>
          </h4>
          <fieldset
            className={clsx(
              'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            )}
          >
            {themeSet.themes.map(currentTheme => (
              <label 
                key={currentTheme.id}
                style={{
                  color: currentTheme.mainColor,
                  backgroundColor:
                    isHovered === currentTheme.id
                      ? currentTheme.borderColor
                      : currentTheme.backgroundColor,
                  borderWidth:
                    process.env.NODE_ENV === 'development' ? '2px' : undefined,
                  borderColor: currentTheme.borderColor
                }}
                onMouseEnter={() => setIsHovered(currentTheme.id)}
                onMouseLeave={() => setIsHovered('')}
                className={clsx(
                  currentTheme.id === 'long' && 'col-span-full',
                  'py-4 flex justify-center items-center','flex-1 overflow-hidden',
                  buttonBorderStyles
                )}
                onClick={() => {
                  playClick();
                  if (currentTheme.id === 'long') playLong();
                }}
              >
                <input
                  type='radio'
                  name='selectedTheme'
                  onChange={() => {
                    setSelectedTheme(currentTheme.id);
                    // @ts-expect-error gtag fix
                    if (typeof window.gtag === 'function') {
                      // @ts-expect-error gtag fix
                      window.gtag(
                        'event',
                        process.env.NODE_ENV === 'production'
                          ? '(REAL USERS) Theme Button Clicks'
                          : '(Me Testing) Testing Theme Button Clicks',
                        {
                          event_category: 'Theme Change',
                          event_label: currentTheme.id,
                          value: 1
                        }
                      );
                    }
                  }}
                  className='hidden'
                />
                <span className='text-center text-lg flex items-center gap-1.5'>
                  <span>
                    {currentTheme.id === selectedTheme ? '\u2B24 ' : ''}
                  </span>
                  {currentTheme.id === 'long'
                    ? 'long loooooooong theme'
                    : currentTheme.id.split('-').map((themeNamePart, i) => (
                        <span 
                          key={themeNamePart + Math.random() * 9999}
                          style={{
                            color:
                              process.env.NODE_ENV !== 'production'
                                ? i === 0
                                  ? currentTheme.mainColor
                                  : currentTheme.secondaryColor
                                : undefined
                          }}
                        >
                          {i > 0 && ' '}
                          {themeNamePart}
                        </span>
                      ))}
                </span>
              </label>
            ))}
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default Themes;
