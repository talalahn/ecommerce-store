import { css } from '@emotion/react';

const footerStyles = css`
  border-radius: 10px;
  background-color: #c9c0bb;
  padding: 20px 10px;
  color: #fff;
  display: flex;
  justify-content: center;

  > div > a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
  }
`;

export default function Footer(props) {
  return (
    <div>
      <footer css={footerStyles}>BeMyBaby™</footer>
    </div>
  );
}
