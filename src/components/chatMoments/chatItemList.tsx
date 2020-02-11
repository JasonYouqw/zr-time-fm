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
          <div className="chat-atavar">头像</div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">时间</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar">头像</div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">时间</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar">头像</div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">时间</p>
          </div>
        </Cell>
        <Cell onClick={this.toChatWindow} className="chat-moment">
          <div className="chat-atavar">头像</div>
          <div className="chat-content">
            <p className="chat-content-item">内容</p>
            <p className="chat-content-time">时间</p>
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
