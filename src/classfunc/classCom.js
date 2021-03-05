import React, {Component} from 'react'
import User from './functCom';


// class Users extends Component{
//     render(){
//         return(
//             <div>
//                <User age='20'>Jeevan</User>
//                <User age='30'>rakesh</User>
//                <User age='40'>Chadarla</User>
//             </div>
//         )
//     }
// }

// export default Users;



class Users extends Component{
    state={
        details:[
            {name:'jeevan' , age:20}, 
            {name:'Rakesh' , age:30}, 
            {name:'Chadarla' , age:60}

        ],
        title: 'Users List'
    }
    newdetails = () => {
        const newState = this.state.details.map((each)=>{
            const Forevery = each;
            Forevery.age -=10;
                return Forevery.age
        });
        this.setState({
            newState
        });
        console.log(this.state.details);
     }
    render(){
        return(
            <div>
            <h3>{this.state.title}</h3>
            <button onClick={this.newdetails}>change details</button>
            {
                this.state.details.map((every) => {
                    return <User age={every.age}>{every.name}</User>
                })
            }
               {/* <User age={this.state.details[0].age}>{this.state.details[0].name}</User>
               <User age={this.state.details[1].age}>{this.state.details[1].name}</User>
               <User age={this.state.details[2].age}>{this.state.details[2].name}</User> */}
            </div>
        )
    }
}

export default Users;