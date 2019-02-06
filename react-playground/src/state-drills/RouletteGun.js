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
        this.timeout=()=> {
            let min = Math.ceil(1);
            let max = Math.floor(8);
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
            console.log(randomNum);
            setTimeout(this.setState({ chamber: randomNum }), 2000);
            console.log({chamber: randomNum});
            console.log(this.state.chamber)
            this.setState({spinningTheChamber: !this.state.spinningTheChamber});
        } 
    }
    
    componentDidMount() {
        this.timeOut = setTimeout(this.timeout())
    }

    render(){
        return (
            <div>
                <p>
                    {this.state.spinningTheChamber ? 'spinning the chamber and pulling the trigger! ...' : this.state.chamber === this.props.bulletInChamber ? ' BANG!!!!' : 'you\'re safe'}
                </p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        );
    };

    componentWillUnmount(){
        clearTimeout(this.timeOut)
    }

}

export default RouletteGun;
