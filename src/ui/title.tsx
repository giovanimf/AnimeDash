import { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className='font-bold text-gray-700 text-2xl dark:text-gray-200'>{children}</h2>
  );
}