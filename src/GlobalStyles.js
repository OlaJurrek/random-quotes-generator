import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  :root {
    --black: hsl(25, 75%, 9%);
    --grey: hsla(25, 76%, 10%, 11%);
    --lightOrange: hsl(26, 66%, 84%);
    --orange: hsl(25, 74%, 47%);
    --red: hsl(0, 86%, 36%);
    --white: hsl(40, 100%, 99%);
    --borderRadius: 8px;
    --borderWidth: 3px;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Maven Pro Variable', sans-serif;
    color: var(--black);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
