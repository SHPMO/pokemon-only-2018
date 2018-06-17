import * as React from 'react'
import {Component} from 'react'
import Content from '../../Components/Content'
import API from '../../lib/API'

import Utils from '../../lib/Utils'
import './Stalls.css'

class Stalls extends Component {
  public componentDidMount() {
    Utils.setAppClass('app-stalls')
    API.requestStallAPI('get_seller', null, (sellers) => {
      // tslint:disable-next-line:no-console
      console.log(sellers)
    }, (e, msg) => {
      // tslint:disable-next-line:no-console
      console.log(e)
      // tslint:disable-next-line:no-console
      console.log(msg)
    })
  }

  public render() {
    return (<div className="stalls-container">
      <Content className="stalls-content" onLeft={false} contentTitle={<span>现场<br/><strong>摊位</strong></span>}>
        <div className="seller-list">
          TODO
        </div>
      </Content>
      <div className="background-characters stalls-characters"/>
      <div className="background-characters stalls-characters-2"/>
    </div>)
  }
}

export default Stalls
