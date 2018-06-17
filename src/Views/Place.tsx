import * as React from 'react'
import {Component} from 'react'
import Content from '../Components/Content'

import Utils from '../lib/Utils'
import './Place.css'

class Place extends Component {
  public componentDidMount() {
    document.title = '场地信息 - 彩虹火箭队基地'
    Utils.setAppClass('app-place')
  }

  public render() {
    return (<div className="place-container">
      <Content className="place-content" onLeft={false} contentTitle={<span><strong>场地</strong><br/>信息</span>}>
        <div><strong>彩虹火箭队基地</strong>（闵行区星中路 1688 号——诺宝中心酒店一楼兰晶剧场）</div>
        <a className="place-map" href="http://f.amap.com/ZePN_0DA4VY1" target="_blank"/>
      </Content>
      <div className="background-characters place-characters"/>
    </div>)
  }
}

export default Place
