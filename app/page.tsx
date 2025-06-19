import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';

export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto mt-12 p-4">
      <h1>Modern LMS Platform</h1>
      <p className="my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae labore
        nesciunt consequuntur fugiat laudantium dolor optio corporis ipsam, at
        molestiae similique vel, itaque, sequi molestias nam laborum temporibus
        quibusdam amet.
      </p>

      <ModeToggle />
    </div>
  );
}
