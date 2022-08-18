import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './firebase';

import { PortfolioApp } from './PortfolioApp';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
