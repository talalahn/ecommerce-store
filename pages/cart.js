import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import { callbackify } from 'util';
import { getBeanieBabies } from '../util/database';
import BeanieBaby from './products/[beanieBabyId]';

const cartBoxStyles = css`
  width: 80vw;
  height: 85%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #fff;

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
    color: #2f3841;
  }
  > div > h5 {
    font-size: 14px;
    /* font-family: ‘Open Sans’; */
    font-weight: 600;
    color: #e44c4c;
    cursor: pointer;
    border-bottom: 1px solid #e44c4c;
  }
`;

const buttonStyles = css`
  color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  /* width: 50px; */
  transition: all 0.2s linear 0s;
  box-shadow: 2px 2px;
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
`;

const multiply = (num1, num2) => {
  return num1 * num2;
};

export default function Cart(props) {
  if (props.currentCart.length === 0) {
    return (
      <>
        {' '}
        <div> Beanie Basket is empty</div>
        <Link href="/beanie_babies">
          <div>
            <i className="fa-solid fa-heart" />
            Take me to the beanies!
            <i className="fa-solid fa-heart" />
          </div>
        </Link>
      </>
    );
  }
  const currentPriceArray = props.currentCart.map((cartItem) => {
    return props.items.find((item) => {
      return cartItem.id === item.id;
    }).price;
  });

  const currentQuantityArray = props.currentCart.map((cartItem) => {
    return cartItem.cartCounter;
  });

  const currentSubtotalPriceArray = currentQuantityArray.reduce(function (
    r,
    a,
    i,
  ) {
    return r + a * currentPriceArray[i];
  },
  0);

  function checkId(id) {
    return (
      id !==
      props.currentCart.map((cartItem) => {
        return cartItem.id;
      })
    );
  }

  function removeFromBasket() {
    return props.currentCart.filter(checkId);
  }

  // const currentSubtotalPriceArray = props.currentCart.map((cartItem) => {
  //   return props.items.find((item) => {
  //     return multiply(cartItem.cartCounter, (cartItem.id === item.id).price);
  //   });
  // });

  return (
    <div>
      <main />
      <div css={cartBoxStyles}>
        <div>
          <h3>In your Beanie Basket</h3>
          <h5>Remove All</h5>
        </div>
        <table>
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
            <th>Total</th>
            <th></th>
            <th></th>
            <th data-test-id="cart-total">{currentSubtotalPriceArray}</th>
            <th>
              <button
                css={buttonStyles}
                // onClick={() => {
                //   ;
                // }}
              >
                {' '}
                <i className="fa-solid fa-trash-can"></i>All
              </button>
            </th>
          </tfoot>
          <tbody>
            {props.currentCart.map((cartItem) => {
              return (
                <tr
                  key={`cart-${cartItem.id}`}
                  data-test-id={`cart-product-${cartItem.id}`}
                >
                  <td>
                    {
                      props.items.find((item) => {
                        return cartItem.id === item.id;
                      }).name
                    }
                  </td>
                  <td>
                    {
                      props.items.find((item) => {
                        return cartItem.id === item.id;
                      }).price
                    }
                  </td>

                  <td>
                    <button css={buttonStyles} onClick={() => {}}>
                      -
                    </button>
                    <span data-test-id={`cart-product-quantity-${cartItem.id}`}>
                      {cartItem.cartCounter}
                    </span>
                    <button
                      css={buttonStyles}
                      // onClick={() => {
                      //   ;
                      // }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    {multiply(
                      cartItem.cartCounter,
                      props.items.find((item) => {
                        return cartItem.id === item.id;
                      }).price,
                    )}
                  </td>
                  <td>
                    <button
                      data-test-id={`cart-product-remove-${cartItem.id}`}
                      css={buttonStyles}
                      // onClick={() => {
                      //   ;
                      // }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link href="/checkout">
          <button css={buttonStyles} data-test-id="cart-checkout">
            Buy Now
          </button>
        </Link>
      </div>
      <footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const databaseItems = await getBeanieBabies();
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  console.log('currentcart', currentCart);

  return {
    props: {
      currentCart,
      items: databaseItems,
    },
  };
}
