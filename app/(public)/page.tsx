import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight capitalize">
            Elevate your learning experience
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            Discover new way to learn with our modern and interactive learning
            platform. Access high quality courses anytime anywhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: 'lg',
              })}
              href="/courses"
            >
              Explore Courses
            </Link>

            <Link
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
