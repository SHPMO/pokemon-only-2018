import * as React from 'react'
import {Component} from 'react'

import './Items.css'

class Items extends Component<{ onUpdate: () => any }, { sellers: any }> {
  constructor(props: { onUpdate: () => any }) {
    super(props)
    this.state = {
      sellers: {}
    }
  }

  public render() {
    return (<div/>)
  }
}

export default Items
