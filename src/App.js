import React from 'react';
import Calculator from './component/Calculator';
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            calculator:false
        }
    }

    handleClick = () =>{
        this.setState({calculator: !this.state.calculator})
    }

    render(){
        return(
            <div className='root-div'>
                <button className='mode-button' onClick={this.handleClick} >{this.state.calculator ? 'TIPS':'CALCULATOR'}</button>
                {this.state.calculator ? <Calculator /> : <p>Tip: there are six type of operations: +, -, *, /,^(for squares) and ?(as the square root). Use key board to input directly and hit Enter when finished.</p>}
            </div>
        )
    }
}

export default App