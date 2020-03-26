import React, { Component } from 'react'

class CounterClick extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0 
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("button clicked")
    this.setState(prevState => {
      return {counter: prevState.counter+1}
    })
  }

  render(){
    const { counter } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>button clicked {counter} times</button>
      </div>
    )
  }
}

export default CounterClick