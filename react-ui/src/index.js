import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './context/StoreContext';
import './styles/_custom-bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import MainView from './components/MainView/MainView';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <MainView />
  </StoreProvider>,
  rootElement,
);
