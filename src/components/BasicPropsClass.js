import React , {Component} from 'react';


class ClassProps extends Component{
   render(){
       return(
           <div>
           <h1>Hello this is a class props {this.props.name}</h1>
           </div>
       )
   } 
}

export default ClassProps;