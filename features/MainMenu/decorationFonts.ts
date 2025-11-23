import localFont from 'next/font/local';

export const zenMaruGothic = localFont({
  src: [
    { path: '../../app/fonts/zen-maru-gothic/zen-maru-gothic-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

export const rampartOne = localFont({
  src: [
    { path: '../../app/fonts/rampart-one/rampart-one-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const kleeOne = localFont({
  src: [
    { path: '../../app/fonts/klee-one/klee-one-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const hachiMaruPop = localFont({
  src: [
    { path: '../../app/fonts/hachi-maru-pop/hachi-maru-pop-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const yujiMai = localFont({
  src: [
    { path: '../../app/fonts/yuji-mai/yuji-mai-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const rocknRollOne = localFont({
  src: [
    { path: '../../app/fonts/rocknroll-one/rocknroll-one-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const delaGothicOne = localFont({
  src: [
    { path: '../../app/fonts/dela-gothic-one/dela-gothic-one-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const yuseiMagic = localFont({
  src: [
    { path: '../../app/fonts/yusei-magic/yusei-magic-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

export const mochiyPopOne = localFont({
  src: [
    { path: '../../app/fonts/mochiy-pop-one/mochiy-pop-one-400-latin.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

const fonts = [
  { name: 'Zen Maru Gothic', font: zenMaruGothic },
  { name: 'Rampart One', font: rampartOne },
  { name: 'Klee One', font: kleeOne },
  { name: 'Hachi Maru Pop', font: hachiMaruPop },
  { name: 'Yuji Mai', font: yujiMai },
  { name: 'RocknRoll One', font: rocknRollOne },
  { name: 'Dela Gothic One', font: delaGothicOne },
  { name: 'Yusei Magic', font: yuseiMagic },
  { name: 'Mochiy Pop One', font: mochiyPopOne }
];

export default fonts;
