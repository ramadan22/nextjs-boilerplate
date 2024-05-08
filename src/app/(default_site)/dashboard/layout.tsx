import type { Metadata } from 'next';
import Head from 'next/head';

import NextAuthProvider from '@/lib/providers/nextAuthProvider';
import NavbarUI from '@/ui/cms/navbar';
import SidebarUI from '@/ui/cms/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <body>
      <NextAuthProvider>
        <div className="flex flex-wrap">
          <div className="basis-1/6 grow h-screen">
            <SidebarUI />
          </div>
          <div className="basis-5/6 grow">
            <NavbarUI />
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
