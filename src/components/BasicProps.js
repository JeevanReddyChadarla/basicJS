import React from 'react';
// props is used to pass properties from child(BasicProps) to parent component(App.js)
// function BasicPropsExample(props){
//     console.log(props);
//     return(
//         <div>
//                 <h1>Hello : {props.Name}, i am a {props.role}</h1>
//             {props.children}
//         </div>
//     )
// }

function BasicPropsExample({name,age}){
    return(
        <div>
        <h1>Hello this is a function {name} and age is {age} </h1>
        </div>
    )
}

export default BasicPropsExample;