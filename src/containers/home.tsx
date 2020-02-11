import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TabList from './tabList';
import ControllBar from './controllBar';
import '../assets/scss/common.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <TabList></TabList>
        {/* <ControllBar></ControllBar> */}
      </div>
    )
  }
}

// ReactDOM.render(
//   <Home></Home>,
//   document.querySelectorAll('.app')[0]
// );
export default Home;
