import React, { Component } from 'react';
import ChatBar from './chatBar';
import ChatInputArea from './chatInputArea';
import ChatHeader from './chatHeader';
import ChatSubmit from './chatSubmit';
import ChatInfoList from './chatInfoList';
import '../../assets/scss/chatMoments.scss';

class GroupChat extends Component {
  render() {
    return (
      <div className="zr-time-fm-chat-window">
        <ChatHeader></ChatHeader>
        <ChatInfoList></ChatInfoList>
        <ChatBar></ChatBar>
        <ChatInputArea></ChatInputArea>
        <ChatSubmit></ChatSubmit>
      </div>
    )
  }
}

export default GroupChat;
