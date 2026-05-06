import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pressure Washing</title>
        <meta name='description' content='Your Trusted Cleaning Service' />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
