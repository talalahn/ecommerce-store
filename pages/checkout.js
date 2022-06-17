import { css } from '@emotion/react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { setStringifiedCookies } from '../util/cookies';
import { getBeanieBabies } from '../util/database';
import { Props } from './products';

const beanieBabyInfoBox = css`
  background-color: #d3d3d3;
  border: 2px solid #828282;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border-radius: 20px;

  > h1,
  h2,
  h3 {
    text-align: center;
  }
  > div:nth-child(4) {
    margin: 0 auto;
  }
`;

const beanieBabyTakeMeBackLink = css`
  color: black;
  padding: 10px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  width: 130px;
  transition: all 0.2s linear 0s;
  box-shadow: 4px 4px;
  background-color: #efefef;

  :hover {
    z-index: 2;
    background-image: linear-gradient(
      to right,
      #e7484f,
      #e7484f 16.65%,
      #f68b1d 16.65%,
      #f68b1d 33.3%,
      #fced00 33.3%,
      #fced00 49.95%,
      #009e4f 49.95%,
      #009e4f 66.6%,
      #00aac3 66.6%,
      #00aac3 83.25%,
      #732982 83.25%,
      #732982 100%,
      #e7484f 100%
    );
    animation: slide 5s linear infinite;
    animation: slide 5s linear infinite;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(0.25em);
    transition: 0.3s;
  }
`;

const formStyles = css`
  margin: 0 auto;

  > div > div > label {
    float: left;
    text-align: right;
    margin-right: 15px;
    width: 120px;
    margin: 3px;
  }

  > div > div > input {
    width: 200px;
    border: 1px solid black;
    border-radius: 2px;
    height: 20px;
    margin: 3px;
  }

  > div :nth-child(1) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  > div :last-child {
    padding-bottom: 15px;
  }
`;

const buttonsStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > div > h4 {
    margin: 5px;
  }
  > div > button {
    border: 1px black solid;
    border-radius: 8px;
    font-size: 20px;
    width: 30px;
    height: 30px;
    box-shadow: 4px 4px;
    :hover {
      box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
      transform: translateY(0.25em);
      transition: 0.3s;
    }
  }

  > button {
    padding: 10px;
    border: 1px black solid;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 4px 4px;
  }
  > button :last-of-type {
    font-size: 16px;
  }
  > button :hover {
    z-index: 2;
    background-image: linear-gradient(
      to right,
      #e7484f,
      #e7484f 16.65%,
      #f68b1d 16.65%,
      #f68b1d 33.3%,
      #fced00 33.3%,
      #fced00 49.95%,
      #009e4f 49.95%,
      #009e4f 66.6%,
      #00aac3 66.6%,
      #00aac3 83.25%,
      #732982 83.25%,
      #732982 100%,
      #e7484f 100%
    );
    animation: slide 5s linear infinite;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(0.25em);
    transition: 0.3s;
  }

  @keyframes slide {
    to {
      background-position: 20vw;
    }
  }
`;

export default function Checkout(props) {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/thank_you').catch(() => {});
    setStringifiedCookies('cart', []);
    props.setCartState([]);
  };

  return (
    <div>
      <div css={beanieBabyInfoBox}>
        <div css={beanieBabyTakeMeBackLink}>
          <Link href="/cart">
            <div>
              <i className="fa-solid fa-backward" /> Take Me Back
            </div>
          </Link>
        </div>
        <h1>Checkout</h1>
        <form css={formStyles} onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="checkout-first-name">First Name:</label>
              <input
                id="checkout-first-name"
                data-test-id="checkout-first-name"
                type="text"
                required
                placeholder="Hans"
              />
              <div></div>
              <label htmlFor="checkout-last-name">Last Name:</label>
              <input
                data-test-id="checkout-last-name"
                id="checkout-last-name"
                type="text"
                required
                placeholder="Schwarzenegger"
              />
            </div>
            <div>
              <label htmlFor="checkout-email">Email:</label>
              <input
                id="checkout-email"
                data-test-id="checkout-email"
                type="text"
                required
                placeholder="h.schwarzenegger@yahoo.com"
              />
            </div>
            <div>
              <label htmlFor="checkout-address">Address:</label>
              <input
                id="checkout-address"
                data-test-id="checkout-address"
                type="text"
                required
                placeholder="Jungstrasse 27/3/25"
              />
            </div>

            <div>
              <label htmlFor="checkout-city">City:</label>
              <input
                id="checkout-city"
                data-test-id="checkout-city"
                type="text"
                required
                placeholder="Vienna"
              />
            </div>
            <div>
              <label htmlFor="checkout-postal-code">Postal Code:</label>
              <input
                id="checkout-postal-code"
                data-test-id="checkout-postal-code"
                type="text"
                required
                placeholder="1020"
              />
            </div>
            <div>
              <label htmlFor="checkout-country">Country:</label>
              <input
                id="checkout-country"
                data-test-id="checkout-country"
                type="text"
                required
                placeholder="Austria"
              />
            </div>
            <div>
              <label htmlFor="checkout-credit-card">Credit Card:</label>
              <input
                id="checkout-credit-card"
                data-test-id="checkout-credit-card"
                type="text"
                required
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>

            <div>
              <label htmlFor="checkout-expiration-date">Expiration Date:</label>
              <input
                id="checkout-expiration-date"
                data-test-id="checkout-expiration-date"
                type="text"
                required
                placeholder="09/23"
              />
            </div>
            <div>
              <label htmlFor="checkout-security-code">Security Code:</label>
              <input
                id="checkout-security-code"
                data-test-id="checkout-security-code"
                type="text"
                required
                placeholder="123"
              />
            </div>
          </div>
          <div css={buttonsStyles}>
            <button type="submit" data-test-id="checkout-confirm-order">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // cart cookie
  //   const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  //   return { props: { currentCart } };
  // }
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  const allBeanies = await getBeanieBabies();
  const foundBeanies = [];

  for (const beanie of currentCart) {
    const beanieData = allBeanies.find((beanieItem) => {
      return beanieItem.id === beanie.id;
    });
    if (!beanieData) {
      context.res.statusCode = 404;
    }

    const superBeanie = { ...beanieData, ...beanie };

    foundBeanies.push(superBeanie);
  }

  return {
    props: {
      foundBeanies,
    },
  };
}
