import React, {Component} from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      clock: ['tick', 'tock', 'boom']
    }
  }
  
  
  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000)
  }
  
  render() {
    let currentCount = this.state.count;
    return (
      <div>
        <p>
          {currentCount % 2 === 0 && currentCount < 8 ? 'tick' : currentCount % 2 !== 0 && currentCount < 8 ? 'tock' : currentCount >= 8 ? 'BOOM!' : clearInterval(this.interval)}
          {console.log(this.state.count)}
          {console.log(this.interval)}
        </p>
      </div>
    )
  }
  

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
}

export default Bomb;
