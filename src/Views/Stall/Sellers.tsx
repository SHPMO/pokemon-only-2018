import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import API from '../../lib/API'

import './Sellers.css'

class Sellers extends Component<{ onUpdate: () => any }, { sellers: any }> {
  constructor(props: { onUpdate: () => any }) {
    super(props)
    this.state = {
      sellers: {}
    }
  }

  public componentDidMount() {
    document.title = '摊位一览 - 现场摊位 - 彩虹火箭队基地'
    API.getSellers(false, sellers => {
      this.setState({
        sellers
      })
    }, (error, message) => {
      this.setState({
        sellers: {}
      })
    })
    this.props.onUpdate()
  }

  public componentDidUpdate() {
    this.props.onUpdate()
  }

  public render() {
    const sellerIds = Object.keys(this.state.sellers)
    return (<div className="seller-list">
      {sellerIds.length > 0 ? sellerIds.map((sellerId, i: number) => {
        const seller = this.state.sellers[sellerId] as Seller
        return (<Link to={'/stall/' + sellerId} key={i} className="seller-display">
          <div className="seller-cover"
               style={{backgroundImage: 'url(https://www.getdaze.org' + seller.circle_image + ')'}}/>
          <div className="seller-title">{seller.circle_name}</div>
        </Link>)
      }) : <h1>暂无摊位信息</h1>}
    </div>)
  }
}

export default Sellers
