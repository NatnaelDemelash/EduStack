import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import Logo from '@/public/logo.png';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col relative min-h-svh justify-center items-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: 'outline',
          className: 'absolute top-4 left-4',
        })}
      >
        <ArrowLeft className="size-4" />
        <span>Back</span>
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center self-center font-medium uppercase"
        >
          <Image src={Logo} alt="Logo" width={60} height={60} />
          EduStack
        </Link>
        {children}
      </div>
    </div>
  );
}
