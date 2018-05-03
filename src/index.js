import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './Components/App';
// import Home from '../Home'
// import Genre from '../Genre'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
