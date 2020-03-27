import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import CounterClick from './CounterClick';
import CounterHover from './CounterHover';
import CounterClickPure from './CounterClickPure';
import CounterHoverPure from './CounterHoverPure';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      clickCounter: 0,
      hoverCounter: 0
    };
  }

  incrementCounter(){
    
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div>
          <h1>Components using seperate logics</h1>
          <CounterClick />
          <CounterHover />
        </div>
        <div>
          <h1>Components using common logics</h1>
          <CounterClickPure 
            handleClick={this.}
          />
          <CounterHoverPure 
          
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
