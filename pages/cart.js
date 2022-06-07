import Link from 'next/link';
import { useState } from 'react';
import { getBeanieBabies } from '../util/database';
import BeanieBaby from './beanie_babies/[beanieBabyId]';

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

  return (
    <div>
      <main />
      <div>
        <h1>In your Beanie Basket</h1>
        <h2>
          {props.currentCart.map((cartItem) => {
            return (
              <div key={`cart-${cartItem.id}`}>
                <ul>
                  <li>
                    Beanie:{' '}
                    {
                      props.items.find((item) => {
                        return cartItem.id === item.id;
                      }).name
                    }
                    <br />
                    AMOUNT: {cartItem.cartCounter}
                    {/* how can I make this button call the function removeFromBasket from the [beanieBabyId] page? */}
                    <button onClick={() => {}}>
                      Remove from Beanie Basket
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </h2>
      </div>
      <footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const databaseItems = await getBeanieBabies();
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  console.log(currentCart);

  // click the remove from basket button
  // -> set props.items.isInCart to false
  // setIsInCart(false);
  // setCartCounter(0);

  return {
    props: {
      currentCart,
      items: databaseItems,
    },
  };
}
