import React, { Component } from 'react';
import {
  Cell
} from 'zarm';
import '../../assets/scss/chatMoments.scss';
// 可收缩
class ChatItemList extends Component {
  toChatWindow = () => {
    window.location.href = '#/chatWindow'
  }
  getChatItem = () => {
    return (
      <div className="za-time-fm-chatMoment">
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar"></div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">2020-02-02 22:22:22</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar"></div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">2020-02-02 22:22:22</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar"></div>
          <div className="chat-content">
            <p className="chat-content-item">据悉，这一次并不是高盛第一次与大型科技公司合作，而近年来这家拥有150年历史的投资银行频频出手，成为美国投资金融科技企业最多的公司。</p>
            <p className="chat-content-time">2020-02-02 22:22:22</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar"></div>
          <div className="chat-content">
            <p className="chat-content-item">据悉，这一次并不是高盛第一次与大型科技公司合作，而近年来这家拥有150年历史的投资银行频频出手，成为美国投资金融科技企业最多的公司。据悉，这一次并不是高盛第一次与大型科技公司合作，而近年来这家拥有150年历史的投资银行频频出手，成为美国投资金融科技企业最多的公司。</p>
            <p className="chat-content-time">2020-02-02 22:22:22</p>
          </div>
        </Cell>
      </div>
    )
  }
  render() {
    return (
      <>
        <div>
          {this.getChatItem()}
        </div>
      </>
    )
  }
}

export default ChatItemList;
