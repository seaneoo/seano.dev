import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Sean O&apos;Connor</title>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
      </Head>
    </React.Fragment>
  );
}
