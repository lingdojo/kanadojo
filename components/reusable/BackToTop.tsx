"use client";
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls down 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on top-level locale route (e.g. /en or /es) or root
  // Pathname like: '/', '/en', '/en/' or '/en/some/page'
  const pathSegments = (pathname || '').split('/').filter(Boolean);
  const isLocaleRoot = pathSegments.length === 1 || pathname === '/';

  if (!visible || isLocaleRoot) return null;

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Move focus to body for keyboard users after scroll
      // (give the browser a tick so scrolling starts)
      setTimeout(() => {
        (document.body as HTMLElement)?.focus?.();
      }, 300);
    }
  };

  return (
    <button
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
      className={
        'fixed z-[60] right-4 bottom-4 sm:right-6 sm:bottom-8 inline-flex items-center justify-center rounded-full p-2 shadow-md transition-opacity duration-200 ' +
        'bg-[var(--card)] text-[var(--main-color)] hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-ring'
      }
    >
      <ChevronUp size={18} />
    </button>
  );
}
