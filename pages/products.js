import { css } from '@emotion/react';
import Link from 'next/link';
import { getBeanieBabies } from '../util/database';

const headingTextStyles = css`
  margin: 0 auto;
  text-align: center;
`;
const beanieBabyListStyles = css`
  background-color: #828282;
  border: 2px solid #d3d3d3;
  /* padding: 10px; */
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  border-radius: 4px;
  height: 100vh;
  align-items: stretch;
  /* gap: 5px; */
`;
const singleProductStyles = css`
  background-color: white;
  align-content: center;
  justify-items: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3,
  h2 {
    color: gray;
  }

  > h3 > a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function BeanieBaby(props) {
  return (
    <div>
      <h1 css={headingTextStyles}>The Beanies:</h1>
      <div css={beanieBabyListStyles}>
        <main />

        {props.beanieBabies.map((beanieBaby) => {
          return (
            <>
              <Link
                data-test-id="product-<beanieBaby.id>"
                href={`./products/${beanieBaby.id}`}
              >
                <div
                  key={`beaniebaby-${beanieBaby.id}`}
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
