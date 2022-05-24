import { css } from '@emotion/react';
import Image from 'next/image';

const mainContentStyles = css`
  margin: 10px;
`;

const homepageImageStyles = css`
  border-radius: 4px;
`;

export default function Home() {
  return (
    <div>
      <main css={mainContentStyles}>
        <Image
          css={homepageImageStyles}
          src="/homepage.jpeg"
          alt="wigs"
          width="1440"
          height="1729"
        />
      </main>

      <footer />
    </div>
  );
}
