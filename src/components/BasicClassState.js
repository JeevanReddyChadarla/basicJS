import React , {Component} from 'react';


class BasicClassState extends Component{

    constructor(){
        super();
        this.state={
            topic: 'JavaScript'
        }
    }
    changedTopic(){
        this.setState({
            topic:'React JS'
        })
    }
   oldState = ()=>{ 
       this.setState({
           topic: 'Python'
       })
    }
    render(){
        return(
            <div>
            <h1>Hello, {this.state.topic}</h1>
            <button onClick={()=> this.changedTopic()}>Click</button>
            <button onClick={this.oldState}>Back</button>
            </div>
        )
    }
}


export default BasicClassState;
