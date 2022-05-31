import { css } from '@emotion/react';
import Link from 'next/link';
import { getBeanieBabies } from '../util/database';

const beanieBabyList = css`
  background-color: #828282;
  border: 2px solid #d3d3d3;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100px;
  margin: 16px 0;
  border-radius: 4px;

  > div > a {
    text-decoration: none;
    color: black;
  }
`;

export default function BeanieBaby(props) {
  return (
    <div>
      <main />
      {props.beanieBabies.map((beanieBaby) => {
        return (
          <div key={`beaniebaby-${beanieBaby.id}`} css={beanieBabyList}>
            <div>{beanieBaby.name}</div>
            <div>Color: {beanieBaby.color}</div>
            <div>Price: {beanieBaby.price}€</div>
            <div>
              <Link href={`./beanie_babies/${beanieBaby.id}`}>
                Click for Details
              </Link>
            </div>
          </div>
        );
      })}
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
