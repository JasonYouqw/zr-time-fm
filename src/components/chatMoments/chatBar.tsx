import React, { Component } from 'react';
import {
  Button
} from 'zarm';
import '../../assets/scss/chatMoments.scss';

class ChatBar extends Component {
  render() {
    return (
      <div className="chat-window-bar">
        <Button theme="default" size="xs">图片</Button>
        <Button theme="primary" size="xs">表情</Button>
        <Button theme="primary" size="xs">视频</Button>
      </div>
    )
  }
}

export default ChatBar;
