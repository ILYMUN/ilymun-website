import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";

import { BrowserRouter } from 'react-router-dom';

import './application.js';

ReactDOM.render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();