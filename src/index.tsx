import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Routes from './router/index';
import 'zarm/dist/zarm.min.css';

ReactDom.render(
  Routes(),
  document.getElementById('app')
);


// ReactDom.render(<Routes />, document.getElementById('app'));