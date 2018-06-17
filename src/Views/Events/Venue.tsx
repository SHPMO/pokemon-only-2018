import * as React from 'react'
import {Component} from 'react'
import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
import './Venue.css'

class Venue extends Component {
  public componentDidMount() {
    document.title = '场地活动 - 现场活动 - 彩虹火箭队基地'
    Utils.setAppClass('app-venue')
  }

  public render() {
    return (<div className="venue-container">
      <Content className="venue-content" contentClassName="venue-content-content" onLeft={true}
               contentTitle={<span>场地<br/><strong>活动</strong></span>}>
        <h1>☆做宝可梦.jpg【又名：心愿墙】</h1>
        <p>本活动由水舰队&熔岩团负责。</p>
        <p>训练师可以凭门票领取心愿卡。将自己的心愿写在正面，联系方式写在背面后，将心愿卡贴在墙上。同时也可以撕下别人的心愿卡帮助他人完成心愿。</p>
        <p>*每人仅可写一张心愿卡，也仅可撕下一张别人的心愿卡。</p>
        <p>*本活动主要为交友目的，假如有特别要求请一定要具体写在心愿卡上！（例如一个人逛展想找陪同需要限定性别的话也请写清楚~）</p>
        <p>*请不要写不良内容与过于私密的个人情报，由此造成任何后果主办方概不负责</p>

        <h1>☆幸福的花束【又名：库库伊?芭内特合影立牌】</h1>
        <p>本活动由骷髅队负责。</p>
        <p>快来跟新郎新娘合个影，为这对新人献上最诚挚的祝福！</p>
        <p>（骷髅队友情提醒：请不要擅自移动立牌和装饰YO！弟兄们都是文明人YO！）</p>

        <h1>☆扭一扭，不能舔，不能泡【又名：特别纪念扭蛋机】</h1>
        <p>本活动由银河团负责。</p>
        <p>凭魔都PMO历届门票可在官摊上游玩扭蛋机，一张门票可扭一次。扭蛋机内为本届/往届PMO的纪念品或彩虹火箭队队员提供的小礼品。（数量有限，先到先得）</p>
        <p>抽到特别奖品将会额外附赠一份魔都PMO组委会成员的感谢色纸。</p>

        <h1>☆绝对零度可能还不够【又名：宝可梦冷笑话】</h1>
        <p>本活动由彩虹火箭队负责，水舰熔岩团代理。</p>
        <p>本届活动场地的墙上也有 Pokemon 问答题，猜出答案后可以至心愿墙区域告诉水舰队or熔岩团成员，第一个回答正确的训练家可以领取小礼品一份。</p>

        <h1>☆我仿佛听到了山的呼唤【又名：寻找登山男】</h1>
        <p>本活动由彩虹火箭队负责，水舰熔岩代理。</p>
        <p>在基地内寻找所有的登山男（纸片人）并合影，合影结束后至心愿墙区域出示给水舰队or熔岩团成员，全部集齐可以领取小礼品一份。（数量有限，先到先得）</p>
      </Content>
      <div className="background-characters venue-characters-left"/>
      <div className="background-characters venue-characters-right"/>
    </div>)
  }
}

export default Venue
