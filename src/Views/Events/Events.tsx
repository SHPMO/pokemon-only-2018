import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
import './Events.css'

class Events extends Component {
  public componentDidMount() {
    Utils.setAppClass('app-events')
  }

  public render() {
    return (<div className="events-container">
      <Content className="events-content" onLeft={false} contentTitle={<span>现场<br/><strong>活动</strong></span>}>
        <div className="events-navs">
          <Link className="events-nav" to="/events/battle">
            <div className="events-nav-header">
              <Content.Header>联机<br/>对战</Content.Header>
            </div>
            <div className="events-nav-text">详情请戳</div>
          </Link>
          <Link className="events-nav" to="/events/venue">
            <div className="events-nav-header">
              <Content.Header>场地<br/>活动</Content.Header>
            </div>
            <div className="events-nav-text">详情请戳</div>
          </Link>
          <Link className="events-nav" to="/events/stage">
            <div className="events-nav-header">
              <Content.Header>舞台<br/>游戏</Content.Header>
            </div>
            <div className="events-nav-text">详情请戳</div>
          </Link>
          <Link className="events-nav" to="/events/tcg">
            <div className="events-nav-header">
              <Content.Header>卡牌<br/>专区</Content.Header>
            </div>
            <div className="events-nav-text">详情请戳</div>
          </Link>
          <Link className="events-nav" to="/events/lottery">
            <div className="events-nav-header">
              <Content.Header>幸运<br/>抽奖</Content.Header>
            </div>
            <div className="events-nav-text">详情请戳</div>
          </Link>
        </div>
      </Content>
      <div className="background-characters events-characters"/>
    </div>)
  }
}

export default Events
