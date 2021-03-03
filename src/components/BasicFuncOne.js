import React from 'react';

function BasicFuncOne(){
    return(
       // React.createElement('div',null, React.createElement('h1',null,'This is an element in create react element'))
        React.createElement('div',{id:'jeevan'},'this is a create element page')
       )
}

export default BasicFuncOne;