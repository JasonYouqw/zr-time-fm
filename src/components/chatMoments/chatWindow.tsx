import React, { Component } from 'react';
import ChatBar from './chatBar';
import ChatInputArea from './chatInputArea';
import ChatHeader from './chatHeader';
import ChatSubmit from './chatSubmit';
import ChatInfoList from './chatInfoList';

class GroupChat extends Component {
  render() {
    return (
      <>
        <ChatHeader></ChatHeader>
        <ChatInfoList></ChatInfoList>
        <ChatBar></ChatBar>
        <ChatInputArea></ChatInputArea>
        <ChatSubmit></ChatSubmit>
      </>
    )
  }
}

export default GroupChat;
