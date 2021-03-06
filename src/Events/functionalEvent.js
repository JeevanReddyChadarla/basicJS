import react from 'react';

function Fevent(props){
    return(
        // <>Hello : {props.children} your age is {this.props.age}</>

        <div>Hello {props.children} your age is {props.age}</div>
    )
}


export default Fevent;