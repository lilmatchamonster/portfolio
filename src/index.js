import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle  = createGlobalStyle`
    @import url('../fonts/densmore.ttf');
    @import url('../fonts/crabmeal.ttf');
    .name {
        font-family: 'densmore'
    }
    .whiteName {
      font-family: 'crabmeal'
    }

`;

ReactDOM.render(
  <>
  <GlobalStyle />
  <Router>
      <Route render={props => <App {...props} />} />
  </Router>
  </>,
  document.getElementById('root'),
);
