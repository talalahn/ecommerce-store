import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getParsedCookies, setStringifiedCookies } from '../../util/cookies';
import { getBeanieBaby } from '../../util/database';

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

const beanieBabyInfoPic = css`
  margin: 0 auto;
  border-radius: 50%;
  border: 10px white solid;
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

export default function BeanieBaby(props) {
  const [beanieAmount, setBeanieAmount] = useState(1);

  if (!props.beanieBaby.price) {
    return (
      <>
        <div> Beanie Baby not found</div>
        <div>
          {' '}
          <Link href="/products">
            <div>
              <i className="fa-solid fa-backward" /> Take Me Back{'  '}
            </div>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div>
      <div css={beanieBabyInfoBox}>
        <div css={beanieBabyTakeMeBackLink}>
          <Link href="/products">
            <div>
              <i className="fa-solid fa-backward" /> Take Me Back{'  '}
            </div>
          </Link>
        </div>
        <h1>{props.beanieBaby.name}</h1>
        <h2>The {props.beanieBaby.animal}</h2>
        <h3>Birthday: {props.beanieBaby.birthday}</h3>
        <div css={beanieBabyInfoPic}>
          <Image
            css={beanieBabyInfoPic}
            src={`/${props.beanieBaby.id}.jpeg`}
            alt={`beanie baby ${props.beanieBaby.name}`}
            width="302"
            height="403"
            data-test-id="product-image"
          />
        </div>
        <h3>
          Price:{' '}
          <span data-test-id="product-price">{props.beanieBaby.price}€</span>
        </h3>

        <div css={buttonsStyles}>
          <div>
            <button
              onClick={() => {
                beanieAmount > 1
                  ? setBeanieAmount(beanieAmount - 1)
                  : setBeanieAmount(beanieAmount);
              }}
            >
              -
            </button>
            <h4 data-test-id="product-quantity">{beanieAmount}</h4>
            <button
              onClick={() => {
                setBeanieAmount(beanieAmount + 1);
              }}
            >
              +
            </button>
          </div>
          <br />
          <button
            data-test-id="product-add-to-cart"
            onClick={() => {
              // 1. get the original array ( Cookies.get)

              const currentCart = getParsedCookies('cart')
                ? getParsedCookies('cart')
                : [];

              const selectedBeanie = currentCart.find(
                (beanieBabyInCart) =>
                  props.beanieBaby.id === beanieBabyInCart.id,
              );
              setBeanieAmount(1);
              if (selectedBeanie) {
                selectedBeanie.cartCounter =
                  Number(selectedBeanie.cartCounter) + Number(beanieAmount);
                const newCart = [
                  ...currentCart,
                  {
                    id: props.beanieBaby.id,
                    cartCounter: beanieAmount,
                  },
                ];
                console.log(newCart);
                setStringifiedCookies('cart', currentCart);
                props.setCartState(newCart);
              } else {
                const newCart = [
                  ...currentCart,
                  { id: props.beanieBaby.id, cartCounter: beanieAmount },
                ];

                setStringifiedCookies('cart', newCart);
                props.setCartState(newCart);
              }
            }}
          >
            Add to Beanie Basket
          </button>
          <br />
          <Link href="/cart">
            <button>Beanie Basket</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const beanieBaby = await getBeanieBaby(context.query.beanieBabyId);
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      beanieBaby: beanieBaby || {},
    },
  };
}
