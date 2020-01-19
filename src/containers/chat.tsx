import React, { Component } from 'react';
import ChatBar from '../components/chatMoments/chatBar';
import ChatLeftMenu from '../components/chatMoments/chatLeftMenu';
import ChatInputArea from '../components/chatMoments/chatInputArea';
import ChatHeader from '../components/chatMoments/chatHeader';
import ChatItemList from '../components/chatMoments/chatItemList';
import ChatSubmit from '../components/chatMoments/chatSubmit';
import ChatInfoList from '../components/chatMoments/chatInfoList';
import PersonalInfo from '../components/chatMoments/personalInfo';

class Chat extends Component {
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

export default Chat;
