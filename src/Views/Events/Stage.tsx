import * as React from 'react'
import {Component} from 'react'
import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
import './Stage.css'

class Stage extends Component {
  public componentDidMount() {
    document.title = '舞台游戏 - 现场活动 - 彩虹火箭队基地'
    Utils.setAppClass('app-stage')
  }

  public render() {
    return (<div className="stage-container">
      <Content className="stage-content" contentClassName="stage-content-content" onLeft={true}
               contentTitle={<span>舞台<br/><strong>游戏</strong></span>}>
        <h1>本届舞台区由火箭队&以太基金&闪焰团共同出演。</h1>
        <h1>舞台表演：？？？</h1>
        <h1>舞台游戏：？？？</h1>
        <h1>联机对战赛的最终决赛也在舞台表演中决一胜负！</h1>
      </Content>
      <div className="background-characters stage-characters-left"/>
      <div className="background-characters stage-characters-right"/>
    </div>)
  }
}

export default Stage
