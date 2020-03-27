import React, { Component } from 'react'

class CounterHoverPure extends Component {
  constructor(proprs){
    super(props)
  }

  render(){
    return (
      <h2 onMouseOver={this.props.handleHover}>button clicked {this.props.Counter}</h2>
    )
  }
}

export default CounterHoverPure