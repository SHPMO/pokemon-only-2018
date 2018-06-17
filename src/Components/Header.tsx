import * as React from 'react'
import {Component} from 'react'
import {RouteComponentProps} from 'react-router'
import {Link, withRouter} from 'react-router-dom'
import logo from '../Images/logo.png'

import './Header.css'

class Header extends Component<RouteComponentProps<any>> {
  constructor(props: RouteComponentProps<any>) {
    super(props)
  }

  public render() {
    return (<header className="App-header">
      <div>
        {this.props.location.pathname === '/' ? [] : [
          <Link key={0} className="App-header-navs" to="/schedule">当日行程</Link>,
          <Link key={1} className="App-header-navs" to="/place">场地信息</Link>,
          <Link key={2} className="App-header-navs" to="/prize">奖品一览</Link>
        ]}
        <Link className="App-header-logo" to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
        {this.props.location.pathname === '/' ? [] : [
          <Link key={0} className="App-header-navs" to="/ticket">票务信息</Link>,
          <Link key={1} className="App-header-navs" to="/events">现场活动</Link>,
          <Link key={2} className="App-header-navs" to="/stalls">现场摊位</Link>
        ]}
      </div>
    </header>)
  }
}

export default withRouter(Header)