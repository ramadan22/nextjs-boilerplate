'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

const NextAuthProvider = ({
  children,
}: Props) => (
  <SessionProvider>
    {children}
  </SessionProvider>
);

export default NextAuthProvider;
