import * as React from 'react'
import {Component} from 'react'
import Content from '../Components/Content'

import Utils from '../lib/Utils'
import './Ticket.css'

class Ticket extends Component {
  public componentDidMount() {
    document.title = '票务信息 - 彩虹火箭队基地'
    Utils.setAppClass('app-ticket')
  }

  public render() {
    return (<div className="ticket-container">
      <div className="ticket-content-container">
        <Content className="ticket-content" contentClassName="ticket-content-content" onLeft={false}
                 contentTitle={<span><strong>票务</strong><br/>信息</span>}>
          <h1>入场票信息</h1>
          <p>本次门票分为三种<br/>
            【普通入场票】【含舞台坐席入场票】【vip入场票】
          </p>
          <div className="ticket-table">
            <div className="ticket-table-left">
              <div>【普通入场票】</div>
              ：
            </div>
            <div className="ticket-table-right">入场门票一份<br/>（预售 45 RMB/张，现场 65 RMB/张）</div>
          </div>
          <div className="ticket-table">
            <div className="ticket-table-left">
              <div>【含舞台坐席入场票】</div>
              ：
            </div>
            <div className="ticket-table-right">入场门票一份 + 舞台坐席区整理券一张<br/>
              （仅网络预售 45r，每个 WWID 最多可拍付 3 份）
            </div>
          </div>
          <div className="ticket-table">
            <div className="ticket-table-left">
              <div>【VIP 入场票】</div>
              ：
            </div>
            <div className="ticket-table-right">入场门票一份 + 优先入场 + 舞台坐席区第一排固定座位 + VIP 限定特典入场门票一份<br/>
              （仅网络预售 81.8r，每个 WWID 最多可拍付 3 份）
            </div>
          </div>
          <h2>*二次入场相关</h2>
          <p>本届所有入场票可反复进出场（9:00 ~ 10:30不可出场）。<br/>
            请所有训练家务必戴上彩虹火箭队提供的一次性腕带，手腕上没有腕带的训练家将不被允许进入基地。<br/>
            腕带兑换方式：请同时出示磁卡与磁卡背卡进行兑换。<br/>
            兑换地点：售票处（全天），基地出口处火箭队成员/以太基金成员处（8:30 ~ 10:30）</p>
          <h2>*舞台坐席区相关</h2>
          <p>持有舞台坐席整理券的训练家请于 11:20 ~ 11:30 进入坐席区就坐，11:40 仍未就坐的训练家座位将会被释放给现场其余的训练家。中途离场的训练家座位也会被释放。<br/>
            同时拍下的舞台坐席区票子为连坐。每个 WWID 最多只能购买 3 张舞台坐席入场券。<br/>
            VIP 入场票内附带的坐席为固定座位，不进行释放。</p>
          <h2>*优先入场相关</h2>
          <p>本届可优先入场，优先入场时间为 9:00 ~ 9:30。<br/>
            本届可享受优先入场人群为：① VIP 入场票持有者。②第一届魔都 PMO VIP 特典硬卡（幼年 N）持有者</p>
          <h2>*参加对战的训练师</h2>
          <p>持有门票和参赛 ID 的训练师可在 9:30 从冠军之路签到入场。<br/>
            （特别提醒：优先入场与对战签到两者冲突，请参赛人员自选其一）<br/>
            （持有 VIP 入场票或第一届魔都 PMO VIP 特典硬卡的参赛选手可在 8 月上旬在魔都 PMO 对战咨询群中与主办方进行沟通）</p>
          <h1>购买方式</h1>
          <p>【线上预售】6月24日晚20:00起至8月4日晚23:59<br/>
            <a href="https://item.taobao.com/item.htm?id=571639427028" target="_blank">魔都 PMO 官方淘宝店 - 魔都 PMO 2018 入场票（全4种）</a></p>
          <p>【线下预售】6月23日卡店开店起 至8月12日卡店打烊<br/>
            实体店名：JE 集换式卡牌商店<br/>
            地址：<a href="http://f.amap.com/3RoGb_0354YPR" target="_blank">上海市黄浦区广西北路 256-258 号百米香榭 212 室</a>
            <br/>营业时间：周二 - 周五14:00~，周末13:00~<br/>
            *实体店仅出售普通入场票</p>
          <p>【现场】8月18日早 8:30 起 基地入口处贩售</p>
          <p>☆本届活动票务信息由骷髅队负责。</p>
        </Content>
        <Content className="ticket-purchase" contentClassName="ticket-content-content ticket-purchase-content"
                 onLeft={true}
                 contentTitle={<span>点此<br/><strong>购票</strong></span>}>
          <div>【线上预售】</div>
          <div className="ticket-purchase-link">
            <a href="https://item.taobao.com/item.htm?id=571639427028" target="_blank">魔都 PMO 官方淘宝店</a>
          </div>
          <div>【线下预售】</div>
          <div className="ticket-purchase-link">
            <a href="http://f.amap.com/3RoGb_0354YPR" target="_blank">JE 集换式卡牌商店</a>
          </div>
        </Content>
      </div>
      <div className='background-characters ticket-characters'/>
    </div>)
  }
}

export default Ticket
