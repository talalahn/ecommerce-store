// import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { beanieBabyDatabase } from '../../util/database';

const beanieBabyInfoBox = css`
  background-color: #af9;
  border: 2px solid #f54;
  padding: 10px;
  display: flex;
  flex-direction: column;
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
  color: #f54;
  margin: 0 auto;
`;

const beanieBabyInfoPic = css`
  border-radius: 4px;
`;
export default function BeanieBaby(props) {
  // const router = useRouter();
  // const { beanieBabyId } = router.query;

  if (!props.beanieBaby) {
    return <div> Beanie Baby not found</div>;
  }

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
          width="1440"
          height="1729"
        />
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundBeanieBaby = beanieBabyDatabase.find((beanieBaby) => {
    return beanieBaby.id === context.query.beanieBabyId;
  });

  if (!foundBeanieBaby) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      beanieBaby: foundBeanieBaby || null,
    },
  };
}
