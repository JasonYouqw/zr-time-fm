import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
class TabList extends Component {
  render() {
    return (
      <Tabs>
        <TabPane tab="推荐" key="commend">
          commend
        </TabPane>
        <TabPane tab="社区" key="community">
          community
        </TabPane>
        <TabPane tab="朋友圈" key="personel">
          personel
        </TabPane>
      </Tabs>
    )
  }
}

export default TabList;
