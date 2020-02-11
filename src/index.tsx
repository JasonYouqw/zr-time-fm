import React, { Component } from 'react';
import ReactDom from 'react-dom';
import getRouter from './router/index';
import 'zarm/dist/zarm.min.css';

ReactDom.render(
  getRouter(),
  document.querySelectorAll('.app')[0]
);