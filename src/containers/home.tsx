import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component {
  render() {
    return (
      <div>主页</div>
    )
  }
}

ReactDOM.render(
  <Home></Home>,
  document.querySelectorAll('.app')[0]
);
