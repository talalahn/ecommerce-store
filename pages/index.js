import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const mainContentStyles = css`
  margin: 10px;
  /* background-image: url('/../public/groupBeanies.jpg'); */

  > div {
    color: grey;
    font-size: 20px;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    text-justify: center;
    text-align: center;
    border: 2px grey solid;
    justify-items: center;
    display: block;
    margin: auto;
  }
  > div > h2 {
    padding-top: 100px;
  }

  > div > h2 > a {
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <div>
      <main css={mainContentStyles}>
        <Link href="/beanie_babies">
          <div>
            <h2>Meet the Beanies</h2>
          </div>
        </Link>
      </main>

      <footer />
    </div>
  );
}
