import * as React from 'react'
import {HashRouter, Link, Route, Switch} from 'react-router-dom'

import './App.css'
import logo from './Images/logo.png'
import Utils from './lib/Utils'
import Home from './Views/Home'
import Schedule from './Views/Schedule'


class App extends React.Component<any, { appClass: string, landscape: boolean }> {

  constructor(props: any) {
    super(props)
    Utils.initialize(this)
    this.state = {
      appClass: '',
      landscape: window.innerWidth / window.innerHeight >= 16 / 9
    }
    window.onresize = () => {
      this.setState({landscape: window.innerWidth / window.innerHeight >= 16 / 9})
    }
  }

  public setClass(name: string) {
    this.setState({
      appClass: name
    })
  }

  public render() {
    return (
      <HashRouter>
        <div
          className={'App ' + this.state.appClass + ' App-background-' +
          (this.state.landscape ? 'landscape' : 'portrait')}>
          <header className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
          </header>
          <Switch>
            <Route exact={true} path="/" name="Home" component={Home}/>
            <Route exact={true} path="/schedule" name="Schedule" component={Schedule}/>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
