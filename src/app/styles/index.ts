import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { fonts } from "shared/assets";

export const GlobalStyle = createGlobalStyle`
  /* You can continue writing global styles here */

  ${normalize}

  @font-face {
    font-family: "SF Pro Text";
    src: url(${fonts.SFPro.Regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url(${fonts.SFPro.Bolt}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    /* font vars*/
    --fonts-sf-pro-text: "SF Pro Text", sans-serif;

    /* telegram vars */
    /* --tg-theme-bg-color: #ffffff;
    --tg-theme-secondary-bg-color: #ededed;
    --tg-theme-text-color: #000000;
    --tg-theme-button-color: #3390ec; */

    /* color vars*/
    --tertiary-fill-background: rgb(123 123 123 / 24%);
    --color-dark: #242424;
    --color-primary: #108ee9;
    --ui-01: #d1d1d1;
    --ui-04: #f1f1f1;
    --primary: #ff3d00;
    --blue-sky: #c6dee5;
    --sky: #dee1e7;
    --green-light: #d0e5c6;
    // color text
    --helper-text-01: rgba(0, 0, 0, 0.50);
    --text-01: #161616;
    --text-02: #ffffff;
    --text-03: #707070;
    --text-04: #c5c5c5;
    --tertiary-text: #14ae5c;

    /* spacing */
    --spacing-01: 2px;
    --spacing-02: 4px;
    --spacing-03: 8px;
    --spacing-04: 12px;
    --spacing-05: 16px;
  }

  :root[data-color-scheme="dark"] {
    --tertiary-fill-background: rgba(118, 118, 128, 0.24);
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
    background-color: var(--tg-theme-secondary-bg-color);
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

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%; /* 20px */
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
    background-color: var(--tg-theme-bg-color);
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

  .ant-spin.overlay {
    z-index: 9999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--tg-theme-bg-color);
  }
`;
