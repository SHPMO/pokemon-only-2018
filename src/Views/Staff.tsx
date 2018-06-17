import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

import Utils from '../lib/Utils'
import './Staff.css'

class Staff extends Component {

  public componentDidMount() {
    document.title = '反派大集合 - 彩虹火箭队基地'
    Utils.setAppClass('app-staff')
  }

  public render() {
    return (<div className="staff-container">
      <div className="staff-title-container">
        <div className="staff-title">
          <h1>魔都PMO2018</h1>
          <br/>
          <div>
            <h2>工作人员组</h2>
          </div>
        </div>
      </div>
      <div className="staff-teams">
        <Link to="/events/stage" className="staff-team">
          <div className="staff-icon staff-icon-g1"/>
          <div className="staff-name">火箭队：舞台游戏区</div>
        </Link>
        <Link to="/events/venue" className="staff-team">
          <div className="staff-icon staff-icon-g3"/>
          <div className="staff-icon staff-icon-g3-2"/>
          <div className="staff-name">水舰队&熔岩团：心愿墙</div>
        </Link>
        <Link to="/events/venue" className="staff-team">
          <div className="staff-icon staff-icon-g4"/>
          <div className="staff-name">银河团：纪念扭蛋机</div>
        </Link>
        <Link to="/events/lottery" className="staff-team">
          <div className="staff-icon staff-icon-g5"/>
          <div className="staff-name">等离子团：究极幸运大抽奖</div>
        </Link>
        <Link to="/events/battle" className="staff-team">
          <div className="staff-icon staff-icon-g6"/>
          <div className="staff-name">闪焰团：联机对战区、舞台游戏区</div>
        </Link>
        <Link to="/ticket" className="staff-team">
          <div className="staff-icon staff-icon-g7"/>
          <div className="staff-name">骷髅队：守护婚礼、票务相关、打杂</div>
        </Link>
        <Link to="/events/stage" className="staff-team">
          <div className="staff-icon staff-icon-g7-2"/>
          <div className="staff-name">以太基金：舞台游戏区</div>
        </Link>
      </div>
      <div className="staff-rules">
        <div className="staff-rules-inner">
          <div>【彩虹火箭队守则】</div>
          <br/>
          <div><strong>1</strong>.时刻为彩虹火箭队奋斗</div>
          <br/>
          <div><strong>2</strong>.尊重其他组织的理想，不在基地内打架</div>
          <br/>
          <div><strong>3</strong>.注意团队形象，摆POSE时不妨碍其他队员</div>
          <br/>
          <div><strong>4</strong>.保持场地卫生，别把财物和宝可梦忘在地上</div>
          <br/>
          <div><strong>5</strong>.为了保持充沛的体力为彩虹火箭队奋斗，要好好吃饭</div>
        </div>
      </div>
    </div>)
  }
}

export default Staff
