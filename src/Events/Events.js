import React , {Component} from 'react';
import Fevent from './functionalEvent';


class Event extends Component{

    state={
        details: [
            {name : 'jeevan', age: 22},
            {name : 'rakesh', age: 30},
            {name : 'chadarla', age: 42},

            
        ],
        title: 'Hello React list students'
    }

   
    render(){
        return(
            <>
            <h1>{this.state.title}</h1>
                <Fevent age={this.state.details[0].age}> {this.state.details[0].name} </Fevent>
            
                <Fevent age={this.state.details[1].age}> {this.state.details[1].name} </Fevent>
                <Fevent age={this.state.details[2].age}> {this.state.details[2].name} </Fevent>

            
            </>
        )
    }
}

export default Event;