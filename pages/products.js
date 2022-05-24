import { css } from '@emotion/react';
import { wigsDatabase } from '../util/database';

const wigsList = css`
  background-color: #af9;
  border: 2px solid #f54;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border-radius: 4px;
`;

export default function Wigs(props) {
  return (
    <div>
      <main />
      {props.wigs.map((wig) => {
        return (
          <div key={`wig-${wig.id}`} css={wigsList}>
            <div>Name: {wig.name}</div>
            <div>Color: {wig.color}</div>
            <div>Price: {wig.price}€</div>
          </div>
        );
      })}
      <footer />
    </div>
  );
}

export function getServerSideProps() {
  console.log(wigsDatabase);
  return {
    props: {
      wigs: wigsDatabase,
    },
  };
}
