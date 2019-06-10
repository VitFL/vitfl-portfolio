import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './context/StoreContext';
import App from './App';
import 'bootstrap-scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement,
);
