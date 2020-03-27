import React, { Component } from 'react'

class CounterClickPure extends Component {
  constructor(proprs){
    super(props)
  }

  render(){
    return (
      <button onClick={this.props.handleClick}>button clicked {this.props.Counter}</button>
    )
  }
}

export default CounterClickPure