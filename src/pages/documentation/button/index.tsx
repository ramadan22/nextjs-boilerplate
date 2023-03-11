import Head from 'next/head';
import Documentation from '@/documentation/features/button';

const DocumentationPage = () => (
  <>
    <Head>
      <title>Documentation UI - Button</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet" />
    </Head>
    <Documentation />
  </>
);

export default DocumentationPage;
