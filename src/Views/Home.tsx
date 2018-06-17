import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

import Utils from '../lib/Utils'
import './Home.css'

class Home extends Component {

  public componentDidMount() {
    document.title = '首页 - 彩虹火箭队基地'
    Utils.setAppClass('app-home')
  }

  public render() {
    return (<div className="home-container">
      <div className="home-title">
        <div className="home-title-inner">
          <h1>POKEMON ONLY</h1>
          <br/>
          <div className="home-title-h2-inner">
            <h2>I N &nbsp; S H A N G H A I &nbsp; 2 0 1 8</h2>
          </div>
        </div>
      </div>
      <div className="home-news">
        <a href="https://weibo.com/SHPMO" target="_blank" className="home-news-button">
          最新动态
        </a>
      </div>
      <div className="home-navs">
        <Link to="/schedule">当日行程</Link>
        <Link to="/place">场地信息</Link>
        <Link to="/prize">奖品一览</Link>
        <Link to="/ticket">票务信息</Link>
        <Link to="/events">现场活动</Link>
        <Link to="/stall">现场摊位</Link>
      </div>
      <div className="home-staff">
        <Link to="/staff">反 派 大 合 集</Link>
      </div>
    </div>)
  }
}

export default Home
