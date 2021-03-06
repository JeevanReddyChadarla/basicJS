import React, { Component } from 'react';

class Calculator extends Component {
    state = {
        a: 0,
        b: 0
    }
    render() {

        const add = this.state.a + this.state.b
        const sub = this.state.a - this.state.b

        return (
            <div>
                <h1>Calculator</h1>
                <input onChange={e => {
                    //console.log(e.target.value)
                    this.setState({
                        a: parseInt(e.target.value)
                    })
                }} placeholder='Enter first number' />

                <br />
                <input onChange={e => {
                    this.setState({
                        b: parseInt(e.target.value)
                    })
                }} placeholder='Enter second Number' />
                <h4>Add : {add}</h4>
                <h4>Subtract : {sub} </h4>
            </div>
        )
    }
}

export default Calculator;