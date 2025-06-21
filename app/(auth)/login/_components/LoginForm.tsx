'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { GithubIcon, Loader } from 'lucide-react';
import React, { useTransition } from 'react';
import { toast } from 'sonner';

export default function LoginForm() {
  const [githubPending, startGithubTransition] = useTransition();

  async function signInWithGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/',
        fetchOptions: {
          onSuccess: () => {
            toast.success('SignedIn with Github, redirecting....');
          },
          onError: () => {
            toast.error('Internal Server Error');
          },
        },
      });
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your GitHub or Email Account{' '}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full" variant="outline" onClick={signInWithGithub}>
          {githubPending ? (
            <>
              <Loader className="size-4" /> <span>Loading..</span>
            </>
          ) : (
            <>
              <GithubIcon className="size-4" /> <span>Sign in with GitHub</span>
            </>
          )}
        </Button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-grow h-px bg-muted" />
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            Or continue with
          </span>
          <div className="flex-grow h-px bg-muted" />
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" placeholder="email@example.com" />
          </div>

          <Button>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
