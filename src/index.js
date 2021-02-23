import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import Top from './assets/images/bg-pattern-top.svg';
import Bottom from './assets/images/bg-pattern-bottom.svg';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <img src={Top} className="pattern-top position-absolute" alt="Top design pattern" />
    <img src={Bottom} className="pattern-bottom position-absolute" alt="Bottom design pattern" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);