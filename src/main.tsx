import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GlobalStyle } from 'app/styles';


const container = document.querySelector('#root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
