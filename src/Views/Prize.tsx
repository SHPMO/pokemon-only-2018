import * as React from 'react'
import {Component} from 'react'
import Content from '../Components/Content'

import Utils from '../lib/Utils'
import './Prize.css'

class Prize extends Component {
  public componentDidMount() {
    Utils.setAppClass('app-prize')
  }

  public render() {
    return (<div className="prize-container">
      <Content className="prize-content" onLeft={false} contentTitle={<span><strong>奖品</strong><br/>一览</span>}>
        <p>（待更新）</p>
      </Content>
      <div className="background-characters prize-characters"/>
    </div>)
  }
}

export default Prize
