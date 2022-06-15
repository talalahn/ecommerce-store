import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header cartState={props.cartState} setCartState={props.setCartState} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
