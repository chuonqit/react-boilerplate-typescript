import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 1.4rem;
    text-align: left;
    color: #212121;
  }
`;
