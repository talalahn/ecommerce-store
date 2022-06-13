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

export default function ThankYou() {
  return (
    <div>
      <div css={beanieBabyInfoBox}>
        <div css={beanieBabyTakeMeBackLink}>
          <Link href="/">
            <div>
              <i className="fa-solid fa-backward" /> Take Me Back
            </div>
          </Link>
        </div>
        <h1>Thank you for your order!</h1>
      </div>
    </div>
  );
}
