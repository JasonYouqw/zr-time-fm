import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import TabList from './tabList';
import ControllBar from './controllBar';
import '../assets/scss/common.scss';

class Home extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div className="za-time-fm-container">
          <TabList></TabList>
          <ControllBar></ControllBar>
        </div>
      </ConfigProvider>
    )
  }
}

ReactDOM.render(
  <Home></Home>,
  document.querySelectorAll('.app')[0]
);
