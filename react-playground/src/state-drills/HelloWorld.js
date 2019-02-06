import React, {Component} from 'react';


class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state={who: 'world'};
        
    this.handleWorldButton=()=>{this.setState({who: 'World!'});}
    this.handleFriendButton=()=>{this.setState({who: 'Friend!'});}
    this.handleReactButton=()=>{this.setState({who: 'React!'});}
}

    render(){
        return (
        <div className="Buttons">
            <p>Hello {this.state.who}</p>
            <button className="worldButton" onClick={this.handleWorldButton}>World</button>
            <button className="friendButton" onClick={this.handleFriendButton}>Friend</button>
            <button className="reactButton" onClick={this.handleReactButton}>React</button>
        </div>
        );
    }

}

export default HelloWorld;
