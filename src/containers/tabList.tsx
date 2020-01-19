import React, { Component } from 'react';
import { Tabs } from 'antd';
import Commend from '../components/infoMoments/commend';
import Community from '../components/infoMoments/community';
import Personel from '../components/infoMoments/personel';

const { TabPane } = Tabs;
class TabList extends Component {
  render() {
    return (
      <Tabs>
        <TabPane tab="推荐" key="commend">
          <Commend></Commend>
        </TabPane>
        <TabPane tab="社区" key="community">
          <Community></Community>
        </TabPane>
        <TabPane tab="朋友圈" key="personel">
          <Personel></Personel>
        </TabPane>
      </Tabs>
    )
  }
}

export default TabList;
