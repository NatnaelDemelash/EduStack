import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
        <Button>Sign in with GitHub</Button>
      </CardContent>
    </Card>
  );
}
