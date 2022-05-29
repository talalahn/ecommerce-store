import '@fortawesome/fontawesome-free/css/all.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const headerStyles = css`
  border-radius: 10px;
  background-color: #c9c0bb;
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

const cookieBannerStyles = (isOpen) => css`
  height: ${isOpen ? '50px' : 0};
  overflow: hidden;
  transition: all ease-in 200ms;
`;

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  function cookieBannerButtonHandler() {
    // 2. set the value for the cookie banner
    window.localStorage.setItem('areCookiesAccepted', JSON.stringify(true));
    setAreCookiesAccepted(true);
  }

  useEffect(() => {
    // 1. is there a value for the cookie banner?
    if (window.localStorage.getItem('areCookiesAccepted')) {
      setAreCookiesAccepted(
        JSON.stringify(window.localStorage.getItem('areCookiesAccepted')),
      );
    }
  }, []);

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
      <div css={cookieBannerStyles(!areCookiesAccepted)}>
        Accept Cookies
        <button
          onClick={() => {
            setAreCookiesAccepted(true);
            cookieBannerButtonHandler();
          }}
        >
          Yes
        </button>
      </div>
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
