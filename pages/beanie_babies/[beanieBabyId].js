// import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getParsedCookies, setStringifiedCookies } from '../../util/cookies';
import { getBeanieBaby } from '../../util/database';

const beanieBabyInfoBox = css`
  background-color: #d3d3d3;
  border: 2px solid #828282;
  padding: 10px;
  /* display: flex;
  flex-direction: column; */
  margin: 16px 0;
  border-radius: 4px;

  > div > a {
    text-decoration: none;
    color: inherit;
    border: 1px solid black;
    padding: 4px;
    border-radius: 8px;
  }
`;

const beanieBabyTakeMeBackLink = css`
  color: #696969;
  margin: 0 auto;
`;

const beanieBabyInfoPic = css`
  border-radius: 4px;
  filter: grayscale();
`;
export default function BeanieBaby(props) {
  // check if the beanie baby is inside the diet by checking the property cartCounter
  const [isInCart, setIsInCart] = useState('cartCounter' in props.beanieBaby);
  // initialize the cartCounter with the value of the cookie or 0
  const [cartCounter, setCartCounter] = useState(
    props.beanieBaby.cartCounter || 0,
  );

  if (!props.beanieBaby.price) {
    return <div> Beanie Baby not found</div>;
  }

  // getBeanieBaby(context.query.beanieBabyId);

  return (
    <div>
      <div css={beanieBabyInfoBox}>
        <div css={beanieBabyTakeMeBackLink}>
          <Link href="/beanie_babies">
            <div>
              <i className="fa-solid fa-heart" />
              Take Me Back
              <i className="fa-solid fa-heart" />
            </div>
          </Link>
        </div>
        <h1> {props.beanieBaby.name}</h1>
        <h1>Color: {props.beanieBaby.color}</h1>
        <h1>Price: {props.beanieBaby.price}</h1>
        <Image
          css={beanieBabyInfoPic}
          src={`/${props.beanieBaby.id}.jpeg`}
          alt={`beanie baby ${props.beanieBaby.name}`}
          width="500"
          height="500"
        />
        <div>
          <button
            onClick={() => {
              // 1. get the original array ( Cookies.get)
              const currentCart = Cookies.get('cart')
                ? getParsedCookies('cart')
                : [];
              console.log(currentCart);

              let newCart;

              if (
                currentCart.find(
                  (beanieBabyInCart) =>
                    props.beanieBaby.id === beanieBabyInCart.id,
                )
              ) {
                newCart = currentCart.filter(
                  (beanieBabyInCart) =>
                    beanieBabyInCart.id !== props.beanieBaby.id,
                );
                setIsInCart(false);
                setCartCounter(0);
              } else {
                // 2. add the value (spread operator)
                newCart = [
                  ...currentCart,
                  { id: props.beanieBaby.id, cartCounter: 0 },
                ];
                setIsInCart(true);
              }
              // 3. set the cookies to the new value

              Cookies.set('cart', JSON.stringify(newCart));
            }}
          >
            {isInCart ? 'Remove from Beanie Basket' : 'Add to Beanie Basket'}
          </button>
          {isInCart ? cartCounter : ''}
          {isInCart ? (
            <>
              <button
                onClick={() => {
                  cartCounter > 0
                    ? setCartCounter(cartCounter - 1)
                    : setCartCounter(cartCounter);

                  // get cookie
                  const currentCart = Cookies.get('cart')
                    ? getParsedCookies('cart')
                    : [];
                  // get the beanie baby
                  const currentBeanieBabyInCart = currentCart.find(
                    (beanieBabyInCart) =>
                      props.beanieBaby.id === beanieBabyInCart.id,
                  );
                  // update the counter
                  currentBeanieBabyInCart.cartCounter -= 1;
                  // set the new cookie
                  //  to row below: don't need because of cookies to stringify each time
                  // Cookies.set('cart', JSON.stringify(currentCart));
                  setStringifiedCookies('cart', currentCart);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  setCartCounter(cartCounter + 1);

                  // get cookie
                  const currentCart = Cookies.get('cart')
                    ? getParsedCookies('cart')
                    : [];
                  // get the beanie baby
                  const currentBeanieBabyInCart = currentCart.find(
                    (beanieBabyInCart) =>
                      props.beanieBaby.id === beanieBabyInCart.id,
                  );
                  // update the counter
                  currentBeanieBabyInCart.cartCounter += 1;
                  // set the new cookie
                  //  to row below: don't need because of cookies to stringify each time
                  // Cookies.set('cart', JSON.stringify(currentCart));
                  setStringifiedCookies('cart', currentCart);
                }}
              >
                +
              </button>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // 1. get the value of the  cookie from the request object
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  // console.log(currentCart);

  // 2. get the id from the url and use it to match the single beanie baby id
  // const foundBeanieBaby = beanieBabyDatabase.find((beanieBaby) => {
  //   return beanieBaby.id === context.query.beanieBabyId;
  // });

  const beanieBaby = await getBeanieBaby(context.query.beanieBabyId);
  // console.log(typeof context.query);

  // if (typeofbeanieBaby !== object) {
  //   context.res.statusCode = 404;
  // }

  // if (beanieBabyId) {
  //   context.res.statusCode = 404;
  // }
  // // 3. find the object that represents the beanie baby in the url
  // const currentBeanieBabyInCart = currentCart.find(
  //   (beanieBabyInCart) => foundBeanieBaby.id === beanieBabyInCart.id,
  // );

  // // 4. create a new object adding the properties from the cookie object to the beanie baby in the database
  // const superBeanieBaby = { ...foundBeanieBaby, ...currentBeanieBabyInCart };
  // console.log(superBeanieBaby);

  return {
    props: {
      beanieBaby: beanieBaby || {}, // used to be superBeanieBaby
    },
  };
}
