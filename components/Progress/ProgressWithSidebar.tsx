'use client';

import clsx from 'clsx';
import Sidebar from '@/components/reusable/Menu/Sidebar';
import Banner from '@/components/reusable/Menu/Banner';
import SimpleProgress from './SimpleProgress';

const ProgressWithSidebar = () => {
  return (
    <div className='min-h-[100dvh] max-w-[100dvw] lg:pr-20 flex gap-4'>
      <Sidebar />
      <div
        className={clsx(
          'flex flex-col gap-4',
          'w-full lg:w-4/5 lg:px-0 px-4 md:px-8',
          'pb-20'
        )}
      >
        <Banner />
        <SimpleProgress />
      </div>
    </div>
  );
};

export default ProgressWithSidebar;