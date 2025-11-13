'use client';
import { SignIn } from '@/components/SignIn';
import AuthPageWrapper from '@/components/AuthPageWrapper';

export default function SignInPage() {
  return (
    <AuthPageWrapper>
      <div className='signin'>
        <SignIn />
      </div>
    </AuthPageWrapper>
  );
}