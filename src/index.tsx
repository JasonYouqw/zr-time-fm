import React, { Component } from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/index';

ReactDom.render(
  getRouter(),
  document.querySelectorAll('.app')[0]
);