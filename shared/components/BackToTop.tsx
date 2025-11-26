'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // target the container in ClientLayout and store it in ref
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    container.current = document.querySelector(
      '[data-scroll-restoration-id="container"]'
    );

    if (!container.current) return;

    const onScroll = () => {
      // Show after user scrolls down 300px
      setVisible(container.current!.scrollTop > 300);
    };

    // attach scroll listener to the container, not window
    container.current.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    onScroll();

    return () => container.current?.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hide on top-level locale route (e.g. /en or /es) or root
  // Pathname like: '/', '/en', '/en/' or '/en/some/page'
  const pathSegments = (pathname || '').split('/').filter(Boolean);
  const isLocaleRoot = pathSegments.length === 1 || pathname === '/';

  if (!visible || isLocaleRoot) return null;

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      container.current?.scrollTo({ top: 0, behavior: 'smooth' });
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
      className={clsx(
        'fixed z-[60] right-4 bottom-4 sm:right-6 sm:bottom-8 ',
        'inline-flex items-center justify-center rounded-full ',
        'p-3 shadow-lg transition-all duration-200 ',
        'bg-[var(--card-color)] text-[var(--main-color)] ',
        'hover:bg-[var(--border-color)] hover:scale-110 ',
        'focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:ring-offset-2 ',
        'border-2 border-[var(--border-color)]'
      )}
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  );
}
