import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';


class App extends Component {
  static defaultProps = {
    state: {
      count: 1,
      bulletInChamber: 8
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <HelloWorld who={HelloWorld.who}/>
        </div>
        {/* <div>
          <Bomb />
        </div> */}
        <div>
          <RouletteGun bulletInChamber={8} />
        </div>
      </div>
    );
  }
}

export default App;
