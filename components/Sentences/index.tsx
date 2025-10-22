'use client';

import { useEffect, useState } from 'react';

const Sentences = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 1000); // Blinking interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Coming Soon
        </h1>
        <p
          className={`text-lg text-gray-600 transition-opacity duration-500 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          This feature is under construction.
        </p>
      </div>
    </div>
  );
};

export default Sentences;
