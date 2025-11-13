'use client';
import { SignUp } from '@/components/SignUp';
import AuthPageWrapper from '@/components/AuthPageWrapper';

export default function SignUpPage() {
  return (
    <AuthPageWrapper>
      <div className='signup'>
        <SignUp />
      </div>
    </AuthPageWrapper>
  );
}