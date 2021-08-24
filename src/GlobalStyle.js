import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
  }

`;
