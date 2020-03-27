import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import CounterClick from './CounterClick';
import CounterHover from './CounterHover';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Components using HOC</h1>
          <CounterClick />
          <CounterHover />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
