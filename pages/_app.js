import '@fortawesome/fontawesome-free/css/all.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';

const cookieBannerStyles = (isOpen) => css`
  height: ${isOpen ? '50px' : 0};
  overflow: hidden;
  transition: all ease-in 200ms;
`;

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  console.log(pageProps);
  // trying something out
  // const [isInCart, setIsInCart] = useState('cartCounter' in props.beanieBaby);
  // const [cartCounter, setCartCounter] = useState(
  //   props.beanieBaby.cartCounter || 0,
  // );
  // export function removeFromBasket() {
  //   setCartCounter(0);
  //   setIsInCart(false);
  // }
  // until here
  function cookieBannerButtonHandler() {
    // 2. set the value for the cookie banner
    window.localStorage.setItem('areCookiesAccepted', JSON.stringify(true));
    setAreCookiesAccepted(true);
  }
  // this is your function you created

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
        <title>Buy a Beanie Baby</title>
        <meta
          name="description"
          content="Buy a Beanie Baby is the top online Beanie Baby store for collectors of all ages. Shop for rabbit, bear, dog, and monkey stuffed animals from the 90s."
        />
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

      <Layout {...pageProps} cartTotal={pageProps.cartTotal}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
