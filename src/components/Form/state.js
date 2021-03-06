import React, {Component} from 'react'

class Sample extends Component {

    state={
        a: 10,
        b: 20,
        flag : false
    }

    setA = (e) => {
        this.setState({
            a : parseInt(e.target.value)
        })
    }

    setB = (e) =>{
        this.setState({
            b: parseInt(e.target.value)
        })
    }

    setToTrue = () => {
        this.setState({
            flag: true
        })
    }

    render(){
        return(
            <div>
                <input onChange = {this.setA}
                     placeholder='First Number'/>
                <br />
                <input onChange = {this.setB} 
                    placeholder='Second number' />
                
                <button onClick={this.setToTrue}>Result</button>

                {
                    this.state.flag ? (
                    <div>
                    <h4>Add : {this.state.a + this.state.b}</h4>
                    <h4>Subtract: {this.state.a - this.state.b} </h4>
                    <h4>Multiply: {this.state.a * this.state.b}</h4>
                    </div>
                ) : (
                    <div>CLick Here</div>
                )}

                
            </div>
        )
    }
}


export default Sample;