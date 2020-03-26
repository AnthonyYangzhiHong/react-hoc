import React, { Component } from 'react'

class CounterHover extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0 
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    console.log("button clicked")
    this.setState(prevState => {
      return {counter: prevState.counter+1}
    })
  }

  render(){
    const { counter } = this.state
    return (
      <div>
        <h2 onMouseOver={this.handleHover}>Hovered {counter} times</h2>
      </div>
    )
  }
}

export default CounterHover