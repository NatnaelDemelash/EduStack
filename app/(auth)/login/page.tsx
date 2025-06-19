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
import { GithubIcon } from 'lucide-react';
import React from 'react';

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your GitHub or Email Account{' '}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full" variant="outline">
          <GithubIcon className="size-4" />
          Sign in with GitHub
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
