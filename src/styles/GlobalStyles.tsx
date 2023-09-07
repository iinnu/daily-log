import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  #root {
    height: 100%;
    position: relative;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
