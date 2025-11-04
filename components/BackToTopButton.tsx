'use client';
import BackToTopButton from '@/components/BackToTopButton';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  // 🧭 Suppress Next.js router sticky/fixed console spam
  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Skipping auto-scroll behavior')
      ) {
        return; // Ignore this specific warning
      }
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  // 💡 Toggle button visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🧩 Scroll to top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ❌ Don’t render if not visible
  if (!visible) return null;

  // 🎨 Styled button (Tailwind + dark mode + animation)
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg 
                 hover:bg-primary/90 transition duration-300 ease-in-out 
                 dark:bg-primary dark:hover:bg-primary/80 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
