import React, { Component } from 'react'
import withCounter from './withCounter'

class CounterClick extends Component {
  render(){
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>button clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(CounterClick)