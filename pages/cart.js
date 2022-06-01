import { getParsedCookies } from '../util/cookies';

export default function Cart(props) {
  return (
    <div>
      <main />
      <div>
        <h1>In your Beanie Basket</h1>
        <div></div>
      </div>
      <footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  console.log(currentCart);
  // const beanieBaby = await getBeanieBaby(context.query.beanieBabyId);

  return {
    props: {},
  };
}
