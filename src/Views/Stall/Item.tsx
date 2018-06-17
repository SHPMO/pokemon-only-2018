import * as React from 'react'
import {Component} from 'react'
import {RouteComponentProps, withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import API from '../../lib/API'

import './Item.css'

class ItemView extends Component<RouteComponentProps<{ itemId: string }> & { onUpdate: () => any },
  { item: Item | null, preview: string | null, seller: Seller | null }> {
  constructor(props: RouteComponentProps<{ itemId: string }> & { onUpdate: () => any }) {
    super(props)
    this.state = {
      item: null,
      preview: null,
      seller: null
    }
  }

  public componentDidMount() {
    API.getItem(this.props.match.params.itemId, false, (item: Item) => {
      API.getSeller(item.seller_id.toString(), false, (seller: Seller) => {
        document.title = item.name + ' - 商品一览 - 现场摊位 - 彩虹火箭队基地'
        this.setState({
          item,
          seller
        })
      }, (error, message) => {
        this.setState({
          item: null,
          seller: null
        })
      })
    }, (error, message) => {
      this.setState({
        item: null,
        seller: null
      })
    })
    this.props.onUpdate()
  }

  public componentDidUpdate() {
    this.props.onUpdate()
  }

  public showImage(url: string) {
    return () => {
      this.setState({
        preview: url
      })
    }
  }

  public hideImage() {
    return () => {
      this.setState({
        preview: null
      })
    }
  }

  public render() {
    const item = this.state.item as Item
    const seller = this.state.seller as Seller
    return item !== null ? (<div className="item-content">
        <div id="item-metas">
          <div id="item-meta-left" className="item-meta">
            <div id="item-cover" style={{backgroundImage: 'url(https://www.getdaze.org' + item.cover_image + ')'}}/>
          </div>
          <div id="item-meta-right" className="item-meta">
            <div id="item-name">{item.name}</div>
            <div id="item-type" className="item-meta-value">种类：{item.item_type}</div>
            <div id="item-content" className="item-meta-value">内容：{item.content}</div>
            <div id="item-price"
                 className="item-meta-value">价格：{item.price === -1 ? '未定' : (item.price.toFixed(2) + ' 元')}</div>
            <div id="item-url" className="item-meta-value">链接：{
              item.url ? <a href={item.url} className="maintext-href"
                            target="_blank">{item.url}</a> : <span>无</span>
            }</div>
            <div id="item-from" className="item-meta-value">来自：<Link
              to={'/stall/' + item.seller_id}>{seller.circle_name}</Link>
            </div>
          </div>
        </div>
        <ul id="item-others">
          <li id="item-circle" className="item-others-value">
            <span>出品社团：</span>
            <span>{item.circle}</span>
          </li>
          <li id="item-introduction" className="item-others-multiline">
            <span>简介：</span>
            <div>{item.introduction}</div>
          </li>
          <li id="item-authors" className="item-others-multiline">
            <span>作者名单：</span>
            <div>{item.authors}</div>
          </li>
          <li id="item-forto" className="item-others-value">
            <span>面向人群：</span>
            <span>{item.forto}</span>
          </li>
          <li id="item-is_restricted" className="item-others-value">
            <span>限制级是否：</span>
            <span>{item.is_restricted}</span>
          </li>
          <li id="item-is_started_with" className="item-others-value">
            <span>是否首发：</span>
            <span>{item.is_started_with ? '是' : '否'}</span>
          </li>
        </ul>
        <div id="item-images" className="item-others-multiline clear-group">
          <span>相关图像：</span>
          <div>
            {item.item_pictures.map((x, i) =>
              <div key={i} className="item-image-thumb" onClick={this.showImage(x)}>
                <div style={{backgroundImage: 'url(https://www.getdaze.org' + x + ')'}}/>
              </div>
            )}
          </div>
        </div>
        {this.state.preview !== null ?
          <div className="image-preview" style={{
            backgroundImage: 'url(https://www.getdaze.org' + this.state.preview + ')'
          }} onClick={this.hideImage()}/> : []}
      </div>
    ) : <h1>暂无商品信息</h1>
  }
}

export default withRouter(ItemView)
