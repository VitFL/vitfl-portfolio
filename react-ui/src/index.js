import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './context/StoreContext';
import './styles/_custom-bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement,
);
