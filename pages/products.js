import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getBeanieBabies } from '../util/database';

const headingTextStyles = css`
  margin: 0 auto;
  text-align: center;
`;
const titleHeadingStyles = css`
  text-align: center;
  padding-bottom: 10px; ;
`;

const mainContentStyles = css`
  margin: 10px;
  /* position: absolute; */
`;
const animalIconStyles = css`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  /* margin: 16px 0; */
  border-radius: 20px;

  > div {
    background-color: #d3d3d3;
    align-content: center;
    justify-items: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div :nth-child(1) {
    background-color: #fced00;
    border-top-left-radius: 20px;
  }
  > div :nth-child(2) {
    background-color: #009e4f;
    border-top-right-radius: 20px;
  }
  > div :nth-child(3) {
    background-color: #f68b1d;
    border-bottom-left-radius: 20px;
  }
  > div :nth-child(4) {
    background-color: #00aac3;
    border-bottom-right-radius: 20px;
  }
`;

const singleProductStyles = css`
  align-content: center;
  justify-items: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3,
  h2 {
    color: black;
  }

  > h3 > a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function BeanieBaby(props) {
  return (
    <div>
      <h1 css={titleHeadingStyles}>The Beanies</h1>
      <div>
        <main css={mainContentStyles}>
          <div css={animalIconStyles}>
            {props.beanieBabies.map((beanieBaby) => {
              return (
                <>
                  <Link
                    data-test-id="product-<beanieBaby.id>"
                    href={`./products/${beanieBaby.id}`}
                  >
                    <div
                      key={`beaniebaby-${beanieBaby.id}`}
                      id={`beaniebaby-${beanieBaby.id}`}
                      css={singleProductStyles}
                    >
                      <h2>{beanieBaby.name}</h2>
                      <h3>Color: {beanieBaby.color}</h3>
                      <h3>Price: {beanieBaby.price}€</h3>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </main>
      </div>
      <footer />
    </div>
  );
}

export async function getServerSideProps() {
  const beanieBabies = await getBeanieBabies();

  // console.log(beanieBabyDatabase);
  return {
    props: {
      beanieBabies: beanieBabies,
    },
  };
}
