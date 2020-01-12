// 主页、聊天、我
import React, { Component } from 'react';
import {
  Icon
} from 'antd';
import '../assets/scss/controllBar.scss'

class ControllBar extends Component {
  render() {
    return (
      <div className="za-controll-bar">
        <div className="controll-bar-item">
          <Icon className="bar-icon" type="home" />
          <div>主页</div>
        </div>
        <div className="controll-bar-item">
          <Icon className="bar-icon" type="message" />
          <div>聊天</div>
        </div>
        <div className="controll-bar-item">
          <Icon className="bar-icon" type="user" />
          <div>我</div>
        </div>
      </div>
    )
  }
}

export default ControllBar;