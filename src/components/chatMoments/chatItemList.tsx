import React, { Component } from 'react';
import {
  List
} from 'antd-mobile';

const ChatItem = List.Item;
// 可收缩
class ChatItemList extends Component {
  getChatItem = () => {
    return (
      <div>
        <ChatItem>
          <div>头像</div>
          <div>内容</div>
          <div>时间</div>
        </ChatItem>
      </div>
    )
  }
  render() {
    return (
      <div>聊天信息列表</div>,
      getChatItem()
    )
  }
}

export default ChatItemList;
