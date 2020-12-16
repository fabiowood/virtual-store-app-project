import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans Condensed";
    padding: 20px 50px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  * {
    box-sizing: border-box;
  }
`