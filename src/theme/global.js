import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    font-family: Inter sans-serif;
    min-width: 100%;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
  }
`;

export default GlobalStyle;
