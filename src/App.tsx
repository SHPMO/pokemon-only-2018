import * as React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Header from './Components/Header'
import Utils from './lib/Utils'
import Battle from './Views/Events/Battle'
import Events from './Views/Events/Events'
import Lottery from './Views/Events/Lottery'
import Stage from './Views/Events/Stage'
import TCG from './Views/Events/TCG'
import Venue from './Views/Events/Venue'
import Home from './Views/Home'
import Place from './Views/Place'
import Prize from './Views/Prize'
import Schedule from './Views/Schedule'
import Staff from './Views/Staff'
import Stall from './Views/Stall/Stall'
import Ticket from './Views/Ticket'


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
    document.title = '彩虹火箭队基地'
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
          <Header/>
          <Switch>
            <Route exact={true} path="/" name="Home" component={Home}/>
            <Route exact={true} path="/schedule" name="Schedule" component={Schedule}/>
            <Route exact={true} path="/place" name="Place" component={Place}/>
            <Route exact={true} path="/prize" name="Prize" component={Prize}/>
            <Route exact={true} path="/ticket" name="Ticket" component={Ticket}/>
            <Route exact={true} path="/events" name="Events" component={Events}/>
            <Route exact={true} path="/events/battle" name="Battle" component={Battle}/>
            <Route exact={true} path="/events/venue" name="Venue" component={Venue}/>
            <Route exact={true} path="/events/stage" name="Stage" component={Stage}/>
            <Route exact={true} path="/events/tcg" name="TCG" component={TCG}/>
            <Route exact={true} path="/events/lottery" name="Lottery" component={Lottery}/>
            <Route path="/stall" name="Stall" component={Stall}/>
            <Route exact={true} path="/staff" name="Staff" component={Staff}/>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
