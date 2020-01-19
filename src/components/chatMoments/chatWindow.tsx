import React, { Component } from 'react';
import ChatBar from './chatBar';
import ChatLeftMenu from './chatLeftMenu';
import ChatInputArea from './chatInputArea';
import ChatHeader from './chatHeader';
import ChatItemList from './chatItemList';
import ChatSubmit from './chatSubmit';
import ChatInfoList from './chatInfoList';
import PersonalInfo from './personalInfo';

class GroupChat extends Component {
  render() {
    return (
      <>
        <ChatLeftMenu></ChatLeftMenu>
        <ChatItemList></ChatItemList>
        <div>
          <ChatHeader></ChatHeader>
          <ChatInfoList></ChatInfoList>
          <ChatBar></ChatBar>
          <ChatInputArea></ChatInputArea>
          <ChatSubmit></ChatSubmit>
        </div>
        <PersonalInfo></PersonalInfo>
      </>
    )
  }
}

export default GroupChat;
