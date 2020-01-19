import React, { Component } from 'react';
import {
  Icon
} from 'antd';
import '../assets/scss/controllBar.scss'

class ControllBar extends Component {
  constructor(props: any) {
    super(props);
  }
  toHome() {
    window.location.href = '#/home';
  }
  toChat() {
    window.location.href = '#/chat';
  }
  toPublish() {
    window.location.href = '#/publish';
  }
  toSetting() {
    window.location.href = '#/settings';
  }
  render() {
    return (
      <div className="za-controll-bar">
        <div className="controll-bar-item" onClick={this.toHome}>
          <Icon className="bar-icon" type="home" />
          <div>主页</div>
        </div>
        <div className="controll-bar-item" onClick={this.toChat}>
          <Icon className="bar-icon" type="message" />
          <div>聊天</div>
        </div>
        <div className="controll-bar-item" onClick={this.toPublish}>
          <Icon className="bar-icon" type="fire" />
          <div>发布</div>
        </div>
        <div className="controll-bar-item" onClick={this.toSetting}>
          <Icon className="bar-icon" type="user" />
          <div>我</div>
        </div>
      </div>
    )
  }
}

export default ControllBar;