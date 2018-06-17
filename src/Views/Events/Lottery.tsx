import * as React from 'react'
import {Component} from 'react'
import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
import './Lottery.css'

class Lottery extends Component {
  public componentDidMount() {
    Utils.setAppClass('app-lottery')
  }

  public render() {
    return (<div className="lottery-container">
      <Content className="lottery-content" contentClassName="lottery-content-content" onLeft={false}
               contentTitle={<span>究极幸运<strong>大抽奖</strong></span>}>
        <p>本届抽奖环节由等离子团负责。</p>
        <p>本届活动奖品由彩虹火箭队、魔都PMO组委会、到场的所有训练师们共同提供，希望训练师们能贡献礼物一起组成魔都PMO五周年彩虹火箭队特供大大大礼包！</p>

        <p>可提供的礼物：</p>
        <p>官方周边or有完整使用权的同人制品。可以使用社团名义也可以使用个人名义提供。</p>
        <p>现场会设有等离子团基地，由两名等离子团队员负责收取奖品并登记提供者。</p>
        <p>抽奖时，将会先公布奖品列表与提供者名单，再进行抽奖。</p>
        <p>中奖人30秒内没有回应则视为放弃，重新抽选。将会反复抽到有人领取为止。</p>
        <p>*本届参展社团及摊位不含抽奖券。</p>
        <p>*奖品收集时间</p>
        <p>8:30~9:20（基地外心愿墙处）<br/>
          9:30~14:30（基地内舞台区侧）</p>
      </Content>
      <div className='background-characters lottery-characters'/>
    </div>)
  }
}

export default Lottery
