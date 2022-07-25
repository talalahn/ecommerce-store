import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import { getParsedCookies, setStringifiedCookies } from '../util/cookies';
import { getBeanieBabies } from '../util/database';

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
`;

const cartBoxStyles = css`
  width: 80vw;
  height: 85%;
  margin: 0 auto;
  /* background-color: #ffffff; */
  border-radius: 20px;
  /* box-shadow: 0px 25px 40px ; */

  > div {
    margin: auto;
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div > h3 {
    font-size: 20px;
    /* font-family: ‘Open Sans’; */
    font-weight: 700;

    color: black;
    margin: 20px auto;
  }
`;

const buttonStyles = css`
  width: 100%;
  > button {
    color: black;
    padding: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 26px;
    border: 1px solid black;
    border-radius: 10px;
    /* width: 50px; */
    transition: all 0.2s linear 0s;
    box-shadow: 2px 2px;
    margin: 20px auto;
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
    @keyframes slide {
      to {
        background-position: 20vw;
      }
    }
  }
`;
const buttonSimpleStyles = css`
  color: black;
  padding: 10px;
  margin: 0 10px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  /* width: 50px; */
  transition: all 0.2s linear 0s;
  box-shadow: 2px 2px;
  :hover {
    z-index: 2;

    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(0.25em);
    transition: 0.3s;
  }
`;

const tableDesign = css`
  width: 80vw;
  padding: 20px;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 2px solid #ddd;
  }
  th {
    background-color: #efefef;
    padding: 30px 5px;
  }
`;

const tableRowDesign = css`
  padding: 10px;
`;

export default function Cart(props) {
  const [beanieCart, setBeanieCart] = useState(props.foundBeanies);

  const totalPrice = beanieCart.map((cartItem) => {
    const beaniePrice = Number(cartItem.price);
    const beanieCounter = Number(cartItem.cartCounter);
    const beaniePriceTotal = beaniePrice * beanieCounter;
    return beaniePriceTotal;
  });

  function add(accumulator, a) {
    return accumulator + a;
  }

  const sum = totalPrice.reduce(add, 0);

  if (beanieCart.length === 0) {
    return (
      <div>
        <div css={beanieBabyInfoBox}>
          <div css={beanieBabyTakeMeBackLink}>
            <Link href="/products">
              <div>
                <i className="fa-solid fa-backward" /> Take Me Back
              </div>
            </Link>
          </div>
          <h1>Your Beanie Basket Is Empty!</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <main />
      <div css={beanieBabyInfoBox}>
        <div css={cartBoxStyles}>
          <div>
            <h3>In your Beanie Basket</h3>
          </div>
          <table css={tableDesign}>
            <thead>
              <tr>
                <th>Beanie</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>Total</td>
                <td />
                <td />
                <td data-test-id="cart-total">{sum}</td>
                <td />
              </tr>
            </tfoot>
            <tbody>
              {beanieCart.map((cartItem) => {
                const beaniePrice = Number(cartItem.price);
                const beanieCounter = Number(cartItem.cartCounter);
                const beaniePriceTotal = beaniePrice * beanieCounter;
                return (
                  <tr
                    css={tableRowDesign}
                    key={`cart-${cartItem.id}`}
                    data-test-id={`cart-product-${cartItem.id}`}
                  >
                    <td>
                      {/* {
                        props.items.find((item) => {
                          return cartItem.id === item.id;
                        }).name
                      } */}
                      {cartItem.name}
                    </td>
                    <td>
                      {/* {
                        props.items.find((item) => {
                          return cartItem.id === item.id;
                        }).price
                      } */}
                      {cartItem.price}
                    </td>

                    <td>
                      <button
                        css={buttonSimpleStyles}
                        onClick={() => {
                          const newCartCounter =
                            cartItem.cartCounter > 1
                              ? cartItem.cartCounter - 1
                              : 1;

                          const updatedArray = beanieCart.map((total) =>
                            total.id === cartItem.id
                              ? { ...total, cartCounter: newCartCounter }
                              : total,
                          );
                          setBeanieCart(updatedArray);
                          const currentCart = getParsedCookies('cart');

                          const currentBeanie = currentCart.find(
                            (beanieInCart) => cartItem.id === beanieInCart.id,
                          );
                          // eslint-disable-next-line no-unused-expressions
                          currentBeanie.cartCounter > 1
                            ? (currentBeanie.cartCounter -= 1)
                            : (currentBeanie.cartCounter = 1);
                          setStringifiedCookies('cart', currentCart);
                          props.setCartState(updatedArray);
                        }}
                      >
                        -
                      </button>
                      <span
                        data-test-id={`cart-product-quantity-${cartItem.id}`}
                      >
                        {cartItem.cartCounter}
                      </span>
                      <button
                        data-test-id="increase-button"
                        css={buttonSimpleStyles}
                        onClick={() => {
                          const newCartCounter = cartItem.cartCounter + 1;
                          const updatedArray = beanieCart.map((total) =>
                            total.id === cartItem.id
                              ? { ...total, cartCounter: newCartCounter }
                              : total,
                          );
                          setBeanieCart(updatedArray);
                          const currentCart = getParsedCookies('cart');
                          const currentBeanie = currentCart.find(
                            (beanieInCart) => cartItem.id === beanieInCart.id,
                          );
                          currentBeanie.cartCounter += 1;
                          setStringifiedCookies('cart', currentCart);
                          props.setCartState(updatedArray);
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td>{beaniePriceTotal}</td>
                    <td>
                      <button
                        data-test-id={`cart-product-remove-${cartItem.id}`}
                        css={buttonSimpleStyles}
                        onClick={() => {
                          cartItem.cartCounter = 0;
                          const updateArray = beanieCart.filter(
                            (beanieRemove) => beanieRemove.cartCounter !== 0,
                          );

                          setBeanieCart(updateArray);
                          const currentCart = getParsedCookies('cart');
                          const currentBeanie = currentCart.find(
                            (beanieInCart) => cartItem.id === beanieInCart.id,
                          );

                          currentBeanie.cartCounter = 0;
                          const updatedCart = currentCart.filter(
                            (currentBeanieInCart) =>
                              currentBeanieInCart.cartCounter !== 0,
                          );

                          props.setCartState(updatedCart);
                          setStringifiedCookies('cart', updatedCart);
                        }}
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div css={buttonStyles}>
            <Link href="/checkout">
              <button data-test-id="cart-checkout">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <footer />
    </div>
  );
}

export async function getServerSideProps(context) {
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
