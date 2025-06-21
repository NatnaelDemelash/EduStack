'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Home() {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  async function SignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
          toast.success('Signed Out Successfully');
        },
      },
    });
  }

  return (
    <div className="max-w-[1000px] mx-auto mt-12 p-4">
      <h1>Modern LMS Platform</h1>
      <p className="my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae labore
        nesciunt consequuntur fugiat laudantium dolor optio corporis ipsam, at
        molestiae similique vel, itaque, sequi molestias nam laborum temporibus
        quibusdam amet.
      </p>

      {session ? (
        <div className="flex gap-x-4 items-center">
          Hello {session.user.name}!<Button onClick={SignOut}>Logout</Button>
        </div>
      ) : (
        <Button>Login</Button>
      )}

      <ModeToggle />
    </div>
  );
}
