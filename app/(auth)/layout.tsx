import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col relative min-h-svh justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
    </div>
  );
}
