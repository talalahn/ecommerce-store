import '@fortawesome/fontawesome-free/css/all.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const headerStyles = css`
  border-radius: 10px;
  background-color: #f54;
  padding: 20px 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;

  > div > a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Beanie Baby for Days</title>
        <meta name="description" content="SEO description content" />
        {/* ICON FOR BROWSER TAB */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 10px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      />
      <header css={headerStyles}>
        <div>
          <i className="fa-solid fa-heart" />
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/beanie_babies">Beanie Babies</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div>
          <i className="fa-solid fa-heart" />
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
