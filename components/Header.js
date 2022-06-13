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

  > div :nth-child(2) {
    display: flex;
    width: 300px;
    margin-right: 330px;
  }
  > div > div > a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    padding: 40px;
    width: 130px;
    display: flex;
    align-items: center;
  }
  > div > div {
    width: 130px;
    display: flex;
    align-items: center;
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
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link data-test-id="products-link" href="/products">
              Beanie Babies
            </Link>
          </div>
          <div>
            <a href="/cart" data-test-id="cart-link">
              <span>
                <i className="fa-solid fa-basket-shopping"></i>
                <span data-test-id="cart-count">{cartTotal}</span>
                {console.log('pageProps.cartTotal', props.cartTotal)}
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
