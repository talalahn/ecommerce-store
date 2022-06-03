import { getBeanieBabies } from '../util/database';

export default function Cart(props) {
  return (
    <div>
      <main />
      <div>
        <h1>In your Beanie Basket</h1>
        <h2>
          {props.currentCart.map((cartItem) => {
            return (
              <div>
                <ul key={`cart-${cartItem.id}`}>
                  <li>
                    Beanie:
                    {
                      props.items.find((item) => {
                        return cartItem.id === item.id;
                      }).name
                    }
                    <br />
                    AMOUNT: {cartItem.cartCounter}
                  </li>
                </ul>
              </div>
            );
          })}

          {/* {props.currentCart.map((id) => {
            return <h2>{props.currentCart.id}</h2>; */}
          {/* })} */}
        </h2>
        {/* <h3>{props.currentCart.id}</h3> */}

        {/* {props.currentCart.map((cartItem) => {
          return props.cartItem.find(
            (beanie) => props.currentCart.id === beanieBaby.name, */}
        {/* ); */}
        {/* })} */}
      </div>
      <footer />
    </div>
  );
}

// const currentBeanieBabyInCart = currentCart.find(
//   //   (beanieBabyInCart) => foundBeanieBaby.id === beanieBabyInCart.id,

export async function getServerSideProps(context) {
  const databaseItems = await getBeanieBabies();

  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  console.log(currentCart);
  // now current cart is the object with cart item Id and cartCounter

  // now we need to map the currentCart to only return the id of the cart item

  // const beanieBabyInCart = beanieBabies.find((beanie) => {
  //   return beanie.id === cartItem.id;
  // });
  // return getBeanieBaby(cartItem.id) === cartItem.id;

  // const cartItem = getBeanieBab(beanieBaby).find((singleBeanieBaby) => {
  //   return cartItem.id === beanieBabyId;
  // });
  // const beanieBabyId = await getBeanieBaby(id);

  // const beanieBaby = await getBeanieBaby(context.query.beanieBabyId);
  // 1. map the currentBeanieBabyInCart
  // currentCart.map((singleBeanieBaby) => {
  //   return singleBeanieBaby.id;
  // });

  // 2. find the id from the cookies and match with database properties
  // const singleBeanieBaby = beanieBabyDatabase.find((beanieBaby) => {
  //   return beanieBaby.id === context.query.beanieBabyId;
  // });
  // console.log(beanieBabyDatabase.id);
  // create new object adding the properties from the cookie object to the beanieBaby in the database

  // const allBeanieBabiesInCart = { ...singleBeanieBaby, ...currentCart };

  return {
    props: {
      currentCart,
      items: databaseItems,
    },
  };
}

// 1. map the currentBeanieBabyInCart

// 2. find the id from the cookies and match with database properties

// create new object adding the properties from the cookie object to the beanieBaby in the database
