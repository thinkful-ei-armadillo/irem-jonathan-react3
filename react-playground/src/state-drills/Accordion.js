import React, {Component} from 'react';

class Accordion extends Component {

  constructor(props) {
    super(props)

    this.sections = {
      title: props.title,
      content: props.content
    }

    this.state = {
      showContent: false
    }

  
    this.handleButtonClick = () => {
      this.setState({ showContent: !this.state.showContent })
    }
  }

  
  render() {
    return (
      <ul>
        <li>
          <button onClick={this.handleButtonClick} className="title">{this.sections.title}</button>
          <p className="content">
            {this.state.showContent ? this.sections.content : ''}
          </p>
        </li>
      </ul>
    )
  }

}

export default Accordion;