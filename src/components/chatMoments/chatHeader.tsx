import React, { Component } from 'react';
import {
  Button
} from 'zarm';
import '../../assets/scss/chatMoments.scss';

class ChatHeader extends Component {
  render() {
    return (
      <div className="chat-window-header">
        <Button theme="default" size="xs">返回</Button>
        <Button theme="default" size="xs">分享</Button>
      </div>
    )
  }
}

export default ChatHeader;
