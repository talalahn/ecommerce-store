import '@fortawesome/fontawesome-free/css/all.css';
import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookies } from '../util/cookies';

function MyApp({ Component, pageProps }) {
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    const currentCart = Cookies.get('cart') ? getParsedCookies('cart') : [];
    setCartState(currentCart);
  }, []);

  return (
    <>
      <Head>
        <title>Buy a Beanie Baby</title>
        <meta
          name="description"
          content="Buy a Beanie Baby is the top online Beanie Baby store for collectors of all ages. Shop for rabbit, bear, dog, and monkey stuffed animals from the 90s."
        />
        <link rel="icon" href="/red-heart.png" />
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

      <Layout cartState={cartState} setCartState={setCartState}>
        <Component
          {...pageProps}
          cartState={cartState}
          setCartState={setCartState}
        />
      </Layout>
    </>
  );
}

export default MyApp;
