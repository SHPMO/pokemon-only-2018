import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

import API from '../../lib/API'

import './Items.css'

class Items extends Component<{ onUpdate: () => any, seller_id?: string }, { items: any }> {
  constructor(props: { onUpdate: () => any }) {
    super(props)
    this.state = {
      items: {}
    }
  }

  public componentDidMount() {
    if (!this.props.seller_id) {
      document.title = '商品一览 - 现场摊位 - 彩虹火箭队基地'
    }
    API.getItems(this.props.seller_id ? this.props.seller_id : null, false, (items) => {
      this.setState({
        items
      })
    }, (error, message) => {
      this.setState({
        items: {}
      })
    })
    this.props.onUpdate()
  }

  public componentDidUpdate() {
    this.props.onUpdate()
  }

  public render() {
    const itemIds = Object.keys(this.state.items)
    return (<div>
      <div className="item-list">
        {itemIds.length > 0 ? itemIds.map((itemId, i: number) => {
          const item = this.state.items[itemId] as Item
          const url = '/stall/items/' + itemId
          return (<div key={i} className="item-display">
            <div className="item-left">
              <Link to={url} className="item-cover"
                    style={{backgroundImage: 'url(https://www.getdaze.org' + item.cover_image + ')'}}/>
            </div>
            <div className="item-right">
              <Link to={url} className="item-name">{item.name}</Link>
              <div className="item-price">价格：{item.price === -1 ? '未定' : (item.price.toFixed(2) + ' 元')}</div>
              <div className="item-circle">出品社团：{item.circle}</div>
              <div className="item-intro">简介：{item.introduction}</div>
            </div>
          </div>)
        }) : <h1>暂无商品信息</h1>}
      </div>
    </div>)
  }
}

export default Items
