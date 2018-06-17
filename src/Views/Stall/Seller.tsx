import * as React from 'react'
import {Component} from 'react'
import {RouteComponentProps, withRouter} from 'react-router'
import API from '../../lib/API'

import Items from './Items'

import './Seller.css'

class SellerView extends Component<RouteComponentProps<{ sellerId: string }> & { onUpdate: () => any }, { seller: any }> {
  constructor(props: RouteComponentProps<{ sellerId: string }> & { onUpdate: () => any }) {
    super(props)
    this.state = {
      seller: null
    }
  }

  public componentDidMount() {
    API.getSeller(this.props.match.params.sellerId, false, (seller: Seller) => {
      document.title = seller.circle_name + ' - 摊位一览 - 现场摊位 - 彩虹火箭队基地'
      this.setState({
        seller
      })
    }, (error, message) => {
      this.setState({
        seller: null
      })
    })
    this.props.onUpdate()
  }

  public componentDidUpdate() {
    this.props.onUpdate()
  }

  public render() {
    const seller = this.state.seller as Seller
    return seller !== null ? (<div className="seller-content">
      <div className="seller-detail">
        <div className="seller-detail-left">
          <div className="seller-cover"
               style={{backgroundImage: 'url(https://www.getdaze.org' + seller.circle_image + ')'}}/>
          <div className="seller-number">摊位号：{seller.seller_id ? seller.seller_id : '未定'}</div>
        </div>
        <div className="seller-detail-right">
          <div className="seller-detail-title">{seller.circle_name}</div>
          <div className="seller-description">{seller.circle_description}</div>
        </div>
      </div>
      <Items onUpdate={this.props.onUpdate} seller_id={seller.id.toString()}/>
    </div>) : <h1>暂无摊位信息</h1>
  }
}

export default withRouter(SellerView)
