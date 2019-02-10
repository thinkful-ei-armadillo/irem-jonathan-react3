import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import HelloWorld from './state-drills/HelloWorld';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`App Component`, () => {
  
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders empty given no seclection', () => {
  const wrapper = shallow(<App />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders with all tabs', () => {
  const wrapper = shallow(<App who={HelloWorld.who} bulletInChamber={8}/>)
  expect(toJson(wrapper)).toMatchSnapshot()
})
})