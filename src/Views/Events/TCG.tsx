import * as React from 'react'
import {Component} from 'react'
import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
import './TCG.css'

class TCG extends Component {
  public componentDidMount() {
    Utils.setAppClass('app-tcg')
  }

  public render() {
    return (<div className="tcg-container">
      <Content className="tcg-content" contentClassName="tcg-content-content" onLeft={false}
               contentTitle={<span><strong>卡牌</strong>体验专区</span>}>
        <h2>本届卡牌体验专区亦由闪焰团负责。</h2>
        <h2>具体详情待公布。</h2>
      </Content>
      <div className="background-characters tcg-characters"/>
    </div>)
  }
}

export default TCG
