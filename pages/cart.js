import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import { callbackify } from 'util';
import { getBeanieBabies } from '../util/database';
import BeanieBaby from './products/[beanieBabyId]';

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
              <th>Total</th>
              <th></th>
              <th></th>
              <th data-test-id="cart-total">{currentSubtotalPriceArray}</th>
              <th>
                <button
                  css={buttonSimpleStyles}
                  // onClick={() => {
                  //   ;
                  // }}
                >
                  {' '}
                  <i className="fa-solid fa-trash-can"></i> {'  '}All
                </button>
              </th>
            </tfoot>
            <tbody>
              {props.currentCart.map((cartItem) => {
                return (
                  <tr
                    css={tableRowDesign}
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
                      <button css={buttonSimpleStyles} onClick={() => {}}>
                        -
                      </button>
                      <span
                        data-test-id={`cart-product-quantity-${cartItem.id}`}
                      >
                        {cartItem.cartCounter}
                      </span>
                      <button
                        css={buttonSimpleStyles}
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
                        css={buttonSimpleStyles}
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
