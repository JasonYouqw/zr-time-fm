import React, { Component } from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/index';

ReactDom.render(
  <div>
    {getRouter()}
  </div>,
  document.querySelectorAll('.app')[0]
);