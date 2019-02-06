import React, {Component} from 'react';


class RouletteGun extends Component {
    constructor(props){
        super(props);
        this.state={
            chamber: null,
            spinningTheChamber: false,
        };
        this.handleButtonClick=()=> {
            this.setState({spinningTheChamber: !this.state.spinningTheChamber});
            this.timeout();
        }
        this.timeout=()=>{
            let min = Math.ceil(1);
            let max = Math.floor(8);
            // console.log(Math.floor(Math.random()*(max-min+1))+min);
            let timeout = setTimeout(Math.floor(Math.random()*(max-min+1))+min, 2000);
            this.setState({chamber: timeout});
            console.log(timeout);
            this.setState({spinningTheChamber: !this.state.spinningTheChamber});
        }
    }
 

    render(){
        return (
            <div>
                <p>
                    {this.state.spinningTheChamber? 'spinning the chamber and pulling the trigger! ...': ''}
                    {/* {console.log(this.props.bulletInChamber)} */}
                    {this.state.chamber === this.props.bulletInChamber ? ' you\'re safe!': 'BANG!!!!'}
                </p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        );
    };
}

export default RouletteGun;
