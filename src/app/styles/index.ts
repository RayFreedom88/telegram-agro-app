import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import sfProTextRegular from "shared/assets/fonts/SFProText-Regular.ttf";
import sfProTextBolt from "shared/assets/fonts/SFProText-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  /* You can continue writing global styles here */

  ${normalize}

  @font-face {
    font-family: "SF Pro Text";
    src: url(${sfProTextRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url(${sfProTextBolt}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    /* font vars*/
    --fonts-sf-pro-text: "SF Pro Text", sans-serif;

    /* color vars*/
    --color-dark: #242424;
    --color-primary: #108ee9;
    --ui-01: #d1d1d1;
    --primary: #ff3d00;
    --blue-sky: #c6dee5;
    --green-light: #d0e5c6;
    // color text
    --helper-text-01: rgba(0, 0, 0, 0.50);
    --tertiary-text: #14ae5c;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    background-color: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
    font-family: var(--fonts-sf-pro-text);
    font-style: normal;
    font-size: 10px;
    line-height: 10px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    max-width: 479px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: var(--tg-theme-link-color);
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px
  }

  p {
    margin: 0;
  }

  button {
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--tg-theme-secondary-bg-color);
    color: var(--tg-theme-button-text-color);
    cursor: pointer;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
