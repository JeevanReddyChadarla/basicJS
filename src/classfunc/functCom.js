import React from 'react';

const User = (props) => {
    return(
        <div>
        Welcome: {props.children} your are {props.age} years old
        </div>
    )
}

export default User;