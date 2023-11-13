import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Chakra Template' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>Your catchphrase or a brief description goes here.</p>
          {/* Add any other elements like buttons or links */}
        </div>
      </section>
      <section className="main-content">
        {children}
        {/* Add additional content specific to the landing page */}
      </section>
    </main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>

    <style jsx>{`
      .hero {
        background: url('/hero-background.jpg') center/cover;
        color: #fff;
        text-align: center;
        padding: 100px 0;
      }

      .hero-content {
        max-width: 600px;
        margin: 0 auto;
      }

      .main-content {
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Layout;
