'use client';
import { useState, useEffect } from 'react';
import { getRandomFact } from '@/shared/data/japanFacts';
import { Lightbulb } from 'lucide-react';

/**
 * Component that displays a random fact about Japan or the Japanese language
 * The fact changes each time the component mounts (page reload/visit)
 */
const RandomFact = () => {
  const [fact, setFact] = useState<string>('');

  useEffect(() => {
    // Get a random fact when component mounts
    setFact(getRandomFact());
  }, []);

  if (!fact) return null;

  return (
    <div className='mt-3 pt-3 border-t border-[var(--border-color)]'>
      <div className='flex items-start gap-2'>
        <Lightbulb className='size-4 flex-shrink-0 text-[var(--main-color)]' />
        <p className='text-xs md:text-sm text-[var(--secondary-color)] italic'>
          {fact}
        </p>
      </div>
    </div>
  );
};

export default RandomFact;
