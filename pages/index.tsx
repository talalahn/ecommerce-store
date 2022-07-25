import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const titleHeadingStyles = css`
  text-align: center;
  padding-bottom: 10px; ;
`;

const mainContentStyles = css`
  margin: 10px;
`;
const animalIconStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  height: 100vh;

  margin: 16px 0;
  border-radius: 20px;
  > div {
    background-color: #d3d3d3;
    align-content: center;
    justify-items: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > div :nth-of-type(1) {
    background-color: #fced00;
    border-top-left-radius: 20px;
  }
  > div :nth-of-type(2) {
    background-color: #009e4f;
    border-top-right-radius: 20px;
  }
  > div :nth-of-type(3) {
    background-color: #f68b1d;
    border-bottom-left-radius: 20px;
  }
  > div :nth-of-type(4) {
    background-color: #00aac3;
    border-bottom-right-radius: 20px;
  }
`;
export default function Home() {
  return (
    <div>
      <h1 css={titleHeadingStyles}>Buy A Beanie Baby</h1>
      <main css={mainContentStyles}>
        <Link href="/products">
          <div css={animalIconStyles}>
            <div>
              <Image src="/../public/bear.png" width={400} height={400} />
            </div>
            <div>
              <Image src="/../public/dog.png" width={400} height={400} />
            </div>
            <div>
              <Image src="/../public/monkey.png" width={400} height={400} />
            </div>
            <div>
              <Image src="/../public/rabbit.png" width={400} height={400} />
            </div>
          </div>
        </Link>
      </main>

      <footer />
    </div>
  );
}
