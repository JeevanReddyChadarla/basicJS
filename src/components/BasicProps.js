import React from 'react';
// props is used to pass properties from child(BasicProps) to parent component(App.js)
function BasicPropsExample(props){
    console.log(props);
    return(
        <div>
                <h1>Hello : {props.Name}, i am a {props.role}</h1>
            {props.children}
        </div>
    )
}

export default BasicPropsExample;