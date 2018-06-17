import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

import Content from '../Components/Content'
import Utils from '../lib/Utils'
import './Schedule.css'

class Schedule extends Component {
  public componentDidMount() {
    document.title = '活动时间与当日行程 - 彩虹火箭队基地'
    Utils.setAppClass('app-schedule')
  }

  public render() {
    return (<div className="schedule-container">
      <Content className="schedule-content" onLeft={true}
               contentTitle={<span>活动<strong>时间</strong>与当日<strong>行程</strong></span>}>
        <Content.Header>基本<br/>信息</Content.Header>
        <h2>彩虹！彩虹色的明天在等待！</h2>
        <table className="schedule-table">
          <tbody>
          <tr>
            <td>主题</td>
            <td>/</td>
            <td>全世代<strong>反派</strong>大集合</td>
          </tr>
          <tr>
            <td>主办方</td>
            <td>/</td>
            <td><strong>彩虹火箭队</strong></td>
          </tr>
          <tr>
            <td>时间</td>
            <td>/</td>
            <td>2018 年 8 月 18 日（周六）</td>
          </tr>
          <tr>
            <td/>
            <td/>
            <td>09:30 ~ 16:30</td>
          </tr>
          <tr>
            <td>地点</td>
            <td>/</td>
            <td><strong>彩虹火箭队基地</strong></td>
          </tr>
          <tr>
            <td/>
            <td/>
            <td>（闵行区星中路 1688 号——诺宝中心酒店一楼兰晶剧场）</td>
          </tr>
          <tr>
            <td colSpan={3} className="schedule-button-place">
              <Link to="/place">
                场地相关请戳这里
              </Link>
            </td>
          </tr>
          </tbody>
        </table>
        <Content.Header>主要<br/>内容</Content.Header>
        <ul className="schedule-list">
          <li>精灵宝可梦系列相关同人物贩售</li>
          <li>舞台区表演 & 互动游戏</li>
          <li>联机对抗赛</li>
          <li>场地活动</li>
          <li>魔都 PMO 五周年纪念</li>
        </ul>
        <Content.Header>当日<br/>行程</Content.Header>
        <table className="schedule-table">
          <tbody>
          <tr>
            <td><strong>08:00</strong></td>
            <td><strong>摊主</strong>入场</td>
          </tr>
          <tr>
            <td><strong>09:30</strong></td>
            <td><strong>游客</strong>入场（09:30 ~ 10:30 工作人员外均不可出场）</td>
          </tr>
          <tr>
            <td><strong>10:00</strong></td>
            <td><strong>战斗区</strong>开始</td>
          </tr>
          <tr>
            <td><strong>11:30</strong></td>
            <td><strong>舞台区</strong>开始</td>
          </tr>
          <tr>
            <td><strong>15:30</strong></td>
            <td><strong>幸运抽奖</strong></td>
          </tr>
          <tr>
            <td><strong>16:00</strong></td>
            <td>会场<strong>清人</strong></td>
          </tr>
          <tr>
            <td><strong>16:30</strong></td>
            <td><strong>闭场</strong></td>
          </tr>
          </tbody>
        </table>
      </Content>
      <div className="background-characters schedule-characters"/>
    </div>)
  }
}

export default Schedule
