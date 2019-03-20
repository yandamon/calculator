import React from 'react';
import Calculator from './component/Calculator';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            calculator:true
        }
    }

    handleClick = () =>{
        this.setState({calculator: !this.state.calculator})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Calculator</button>
                {this.state.calculator ? <Calculator /> : <p>Tip: </p>}
            </div>
        )
    }
}

export default App