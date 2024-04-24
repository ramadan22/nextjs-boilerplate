import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/assets/styes/globals.css';
import NextAuthProvider from '@/lib/providers/nextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Boilerplate',
  description: 'Nextjs Boilerplate',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>
      <NextAuthProvider>
        {children}
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
