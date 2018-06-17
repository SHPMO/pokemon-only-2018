import * as React from 'react'
import {Component} from 'react'
// import {Route, Switch} from 'react-router'
// import {Link} from 'react-router-dom'

import Content from '../../Components/Content'

import Utils from '../../lib/Utils'
// import Items from './Items'
// import SellerView from './Seller'
// import Sellers from './Sellers'

import './Stall.css'

class Stall extends Component {

  public onUpdateEvent: () => any
  public content: Content | null

  constructor(props: any) {
    super(props)
    this.onUpdateEvent = this.onUpdate.bind(this)
    this.content = null
  }

  public componentDidMount() {
    document.title = '现场摊位 - 彩虹火箭队基地'
    Utils.setAppClass('app-stall')
  }

  public onUpdate() {
    if (this.content !== null) {
      this.content.onResize()
    }
  }

  public withUpdate<T extends Component<{ onUpdate: () => any }>>(Comp: any) {
    return (props: any) => <Comp onUpdate={this.onUpdateEvent}/>
  }

  public render() {
    return (<div className="stall-container">
      <Content className="stall-content" contentClassName="stall-content-content" onLeft={false}
               contentTitle={<span>现场<br/><strong>摊位</strong></span>} parent={this}>
        {/*<div className="stall-navs">*/}
          {/*<Link to="/stall">摊位一览</Link>*/}
          {/*<Link to="/stall/items">商品一览</Link>*/}
        {/*</div>*/}
        {/*<Switch>*/}
          {/*<Route exact={true} path="/stall" name="Sellers" render={this.withUpdate(Sellers)}/>*/}
          {/*<Route exact={true} path="/stall/items" name="Items" render={this.withUpdate(Items)}/>*/}
          {/*<Route exact={true} path="/stall/:sellerId" name="Seller" render={this.withUpdate(SellerView)}/>*/}
        {/*</Switch>*/}
        <h1>敬请期待</h1>
      </Content>
      <div className="background-characters stall-characters"/>
      <div className="background-characters stall-characters-2"/>
    </div>)
  }
}

export default Stall
