'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { authClient } from '@/lib/auth-client';
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { toast } from 'sonner';

export default function VerifyRequest() {
  const [emailPending, startTransition] = useTransition();
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email') as string;
  const isOtpCompleted = otp.length === 6;

  function verifyAccount() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Email Verified Successfully!');
            router.push('/');
          },

          onError: () => {
            toast.error('Error Verifing Email!');
          },
        },
      });
    });
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please Check Your Email!</CardTitle>
        <CardDescription>
          We have sent you an email, check your inbox and copy the code/otp here
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center gap-3">
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <div>
          <p className="text-xs text-muted-foreground font-semibold">
            Enter the OTP number here
          </p>
        </div>
        <Button
          className="w-full"
          disabled={emailPending || !isOtpCompleted}
          onClick={verifyAccount}
        >
          {emailPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />{' '}
              <span>Loading...</span>
            </>
          ) : (
            <span> Verify Your Account</span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
