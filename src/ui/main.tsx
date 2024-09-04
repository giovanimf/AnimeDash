import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <div className='md:h-auto text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-5 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800'>{children}</div>
  );
}