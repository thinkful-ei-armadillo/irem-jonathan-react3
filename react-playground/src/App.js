import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';


class App extends Component {
  static defaultProps = {
    state: {
      count: 1
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <HelloWorld who={HelloWorld.who}/>
        </div>
        <div>
          <Bomb />
        </div>
      </div>
    );
  }
}

export default App;
