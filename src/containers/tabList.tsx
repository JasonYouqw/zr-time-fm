import React, { Component } from 'react';
import { Tabs } from 'zarm';
import Commend from '../components/infoMoments/commend';
import Community from '../components/infoMoments/community';
import Personel from '../components/infoMoments/personel';

const { Panel } = Tabs;

class TabList extends Component {
  state = {
    tabValue: 0
  }
  onChange = (tabValue: any) => {
    console.log(`tabValue:${tabValue}`);
    this.setState({
      tabValue,
    });
  }
  render() {
    return (
      <Tabs>
        <Panel title="推荐" key="commend">
          <Commend></Commend>
        </Panel>
        <Panel title="社区" key="community">
          <Community></Community>
        </Panel>
        <Panel title="朋友圈" key="personel">
          <Personel></Personel>
        </Panel>
      </Tabs>
    )
  }
}

export default TabList;
