import React from 'react';
import ReactDOM from 'react-dom';
import './Index.module.scss';
import Container from "../src/components/PostCat/PostCat"

ReactDOM.render(
  <React.StrictMode>
    <h1>Post-cards</h1>
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);
