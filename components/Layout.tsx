import React, { ReactNode } from 'react';

import Head from 'next/head';
import Nav from './nav/Nav';

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    {children}
  </div>
)

export default Layout
