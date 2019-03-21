import React from 'react';
import './Calculator.css';

const validateInput = ( value ) =>{
    const operation = ['+','-','*','/','^','?',''];
    if((value.split(' ').length === 1) && ((operation.indexOf(value) !== -1) || value.match(/^[0-9]+[.]?[0-9]*$/))){
        return true
    }
    return false
}




class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentInput:'',
            operation:'',
            firstInput:0,
            secondInput:'',
            operationList:['+','-','*','/','^','?'],
            errorMessage:''
        }
    }

    setFirstInput = (value) => {
        this.setState({firstInput:value})
    }

    handleInput = ( value ) => {
        //if the input is a number
        if(this.state.operationList.indexOf(value) === -1 && value){
            if(!this.state.operation){
                this.setState({firstInput:value})
            }else
            {
                this.setState({secondInput:value})
            }
        }
        //if the input is an operation
        else {
            (!this.state.firstInput || this.state.firstInput === Infinity) && this.setState({firstInput:0})
            if(this.state.secondInput || value ===''){
                this.showResult();
            }
            this.setState({operation:value})
        }
    }

    calculatorResult = () => {
        let firstNumber = parseFloat(this.state.firstInput) ? parseFloat(this.state.firstInput):0;
        let secondNumber = this.state.secondInput ? parseFloat(this.state.secondInput) : firstNumber;
        switch(this.state.operation){
            case '+':
                return firstNumber + secondNumber;
            case '-':
                return firstNumber - secondNumber;
            case '*':
                return firstNumber * secondNumber;
            case '/':
                return firstNumber / secondNumber;
            case '^':
                return Math.pow(firstNumber,secondNumber);
            case '?':
                let secondInputForSquareRoot = this.state.secondInput ? parseFloat(this.state.secondInput) : 1;
                return Math.sqrt(firstNumber) * secondInputForSquareRoot;
            default:
                return firstNumber ? firstNumber : 0;
        }
    }

    handleChange = (e) => {
        this.setState({
            currentInput:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({errorMessage:''})
        let input = this.state.currentInput;
        if(validateInput(input)){
            this.handleInput(input)
        }else{
            this.setState({errorMessage:'invalid input'})
        }
        this.setState({currentInput:''})
    }

    showResult = () => {
        let result = this.calculatorResult()
        this.setState({
            firstInput:result,
            secondInput:'',
            operation:'',
            errorMessage:''
        })
    }

    resetAll = () =>{
        this.setState({
            currentInput:'',
            firstInput:0,
            secondInput:'',
            operation:'',
            errorMessage:''
        })
    }


    render(){
        return (
            <div className='calculator'>
                <h2 className='header'>SIMPLE CALCULATOR</h2>
                <p className='output-paragraph'>{this.state.firstInput} {this.state.operation} {this.state.secondInput}</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='form-input'
                           type='text' 
                           placeholder='please input'
                           onChange={this.handleChange}
                           value={this.state.currentInput}>
                        
                    </input>
                </form>
                <p className='error-paragraph'>{this.state.errorMessage && <span>error: {this.state.errorMessage}</span>}</p>
                <button className='operation-button' onClick={this.showResult}>Result</button>
                <button className='operation-button' onClick={this.resetAll}>Reset</button>
            </div>
        )
    }

}

export default Calculator;