'use client';

import { signOut } from 'next-auth/react';

import Button from '@/components/button';

const LoggedPage = () => (
  <div className="flex flex-col gap-y-5 w-[300px] items-center mx-auto my-10">
    <div>you are logged</div>
    <Button
      className="w-full"
      type="button"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  </div>
);

export default LoggedPage;
