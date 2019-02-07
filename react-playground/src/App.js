import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';




class App extends Component {
  static defaultProps = {
    state: {
      count: 1,
      bulletInChamber: 8
    }
  }


  render() {
    const sections = [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      }
    ]
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
        <div>
          {sections.map((section, i) => (
            <Accordion 

            key={i}
            title={section.title}
            content={section.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
