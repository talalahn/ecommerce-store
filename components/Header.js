import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #df0000,
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
  padding: 10px 10px;
  margin: 0px 10px 30px 30px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  > div {
    margin-right: 60px;
  }
  > div > a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    margin-right: 40px;
  }
`;

const heartStyles = css`
  background-color: #f00;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  position: relative;
  top: -2px;
  right: 30px;
  transform: rotate(-45deg) scale(2);
  width: 30px;

  ::before,
  ::after {
    content: '';
    background-color: red;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }

  ::before {
    top: -15px;
    left: 0;
  }

  ::after {
    left: 15px;
    top: 0;
  }
`;

export default function Header(props) {
  const cartTotal = props.cartTotal;
  return (
    <div>
      <header css={headerStyles}>
        <div>
          <span css={heartStyles}></span>
          {/* <i className="fa-solid fa-heart" /> */}
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/beanie_babies">Beanie Babies</Link>
          <Link href="/cart">Cart</Link>
          <span>
            Total In Cart: {cartTotal}
            {console.log('pageProps.cartTotal', props.cartTotal)}
          </span>
        </div>
        <div>{/* <i className="fa-solid fa-heart" /> */}</div>
      </header>
    </div>
  );
}
