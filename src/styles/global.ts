import { injectGlobal } from '@emotion/css';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    min-width: 320px;
    width: 100vw;
    height: 100vh;
  }
`;
