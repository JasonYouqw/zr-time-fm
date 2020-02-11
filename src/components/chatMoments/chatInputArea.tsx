import React, { Component } from 'react';
import {
  Input
} from 'zarm';
import '../../assets/scss/chatMoments.scss';

class ChatInputArea extends Component {
  render() {
    return (
      <div className="chat-window-inputarea">
        <Input autoFocus type="text"></Input>
      </div>
    )
  }
}

export default ChatInputArea;
