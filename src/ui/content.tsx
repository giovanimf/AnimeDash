import { ReactNode } from 'react';

export default function Content({ children }: { children: ReactNode }) {
  return (
    <div className='flex-1 flex flex-col gap-5'>{children}</div>
  );
}