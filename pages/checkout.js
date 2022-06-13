import { css } from '@emotion/react';
import Link from 'next/link';

const beanieBabyInfoBox = css`
  background-color: #d3d3d3;
  border: 2px solid #828282;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border-radius: 20px;

  > h1,
  h2,
  h3 {
    text-align: center;
  }
  > div:nth-child(4) {
    margin: 0 auto;
  }
`;

const beanieBabyTakeMeBackLink = css`
  color: black;
  padding: 10px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  width: 130px;
  transition: all 0.2s linear 0s;
  box-shadow: 4px 4px;
  background-color: #efefef;

  :hover {
    z-index: 2;
    background-image: linear-gradient(
      to right,
      #e7484f,
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
    animation: slide 5s linear infinite;
    animation: slide 5s linear infinite;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(0.25em);
    transition: 0.3s;
  }
`;

const beanieBabyInfoPic = css`
  border-radius: 50%;
  filter: grayscale();
  margin: 0 auto;
`;

const buttonsStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > div > h4 {
    margin: 5px;
  }
  > div > button {
    border: 1px black solid;
    border-radius: 8px;
    font-size: 20px;
    width: 30px;
    height: 30px;
    box-shadow: 4px 4px;
    :hover {
      box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
      transform: translateY(0.25em);
      transition: 0.3s;
    }
  }

  > button {
    padding: 10px;
    border: 1px black solid;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 4px 4px;
  }
  > button :last-of-type {
    font-size: 16px;
  }
  > button :hover {
    z-index: 2;
    background-image: linear-gradient(
      to right,
      #e7484f,
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
    animation: slide 5s linear infinite;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(0.25em);
    transition: 0.3s;
  }

  @keyframes slide {
    to {
      background-position: 20vw;
    }
  }
`;

export default function Checkout() {
  return (
    <div>
      <div css={beanieBabyInfoBox}>
        <div css={beanieBabyTakeMeBackLink}>
          <Link href="/cart">
            <div>
              <i className="fa-solid fa-backward" /> Take Me Back
            </div>
          </Link>
        </div>
        <h1>Checkout</h1>
        <form>
          <label>
            First Name:
            <input
              data-test-id="checkout-first-name"
              type="text"
              required
              placeholder="Hans"
            />
            <br />
          </label>
          <label>
            Last Name:
            <input
              data-test-id="checkout-last-name"
              type="text"
              required
              placeholder="Schwarzenegger"
            />
            <br />
          </label>
          <label>
            Email:
            <input
              data-test-id="checkout-email"
              type="text"
              required
              placeholder="h.schwarzenegger@yahoo.com"
            />
            <br />
          </label>
          <label>
            Address:
            <input
              data-test-id="checkout-address"
              type="text"
              required
              placeholder="Jungstrasse 27/3/25"
            />
            <br />
          </label>
          <label>
            City:
            <input
              data-test-id="checkout-city"
              type="text"
              required
              placeholder="Vienna"
            />
            <br />
          </label>
          <label>
            Postal Code:
            <input
              data-test-id="checkout-postal-code"
              type="text"
              required
              placeholder="1020"
            />
            <br />
          </label>
          <label>
            Country:
            <input
              data-test-id="checkout-country"
              type="text"
              required
              placeholder="Austria"
            />
          </label>
          <br />
          <label>
            Credit Card:
            <input
              data-test-id="checkout-credit-card"
              type="text"
              required
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </label>
          <br />
          <label>
            Expiration Date:
            <input
              data-test-id="checkout-expiration-date"
              type="text"
              required
              placeholder="09/23"
            />
          </label>
          <br />
          <label>
            Security Code:
            <input
              data-test-id="checkout-security-code"
              type="text"
              required
              placeholder="123"
            />
          </label>
          <br />
          <div css={buttonsStyles}>
            <Link href="/thank_you">
              <button type="submit" data-test-id="checkout-confirm-order">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
