import React, { Component } from 'react';
import {
  Button
} from 'zarm';
import '../../assets/scss/chatMoments.scss';

class ChatSubmit extends Component {
  render() {
    return (
      <div className="chat-window-submit">
        <Button theme="default" size="xs">取消</Button>
        <Button theme="primary" size="xs">发送</Button>
      </div>
    )
  }
}

export default ChatSubmit;
