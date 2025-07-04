'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.png';
import { ModeToggle } from '@/components/mode-toggle';
import { authClient } from '@/lib/auth-client';
import { buttonVariants } from '@/components/ui/button';
import { UserDropdown } from './UserDropdown';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Course', href: '/course' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60 px-8 py-3">
      <div className="min-h-16 flex items-center gap-x-6  container mx-auto px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-14 h-14" />
          <p className="text-2xl font-medium text-yellow-600">EduStack </p>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex md:justify-between md:items-center md:flex-1">
          <div className="flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4 items-center">
            <ModeToggle />

            <div className="flex space-x-4">
              {isPending ? null : session ? (
                <UserDropdown
                  name={session.user.name}
                  email={session.user.email}
                  image={session.user.image || ''}
                />
              ) : (
                <>
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: 'secondary' })}
                  >
                    Login
                  </Link>
                  <Link href="/login" className={buttonVariants()}>
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
