import React from 'react';
import BasiclassComp from './components/BasicClass';
import BasicFunc from './components/BasicFunc';
import BasicFuncOne from './components/BasicFuncOne';
import BasicPropsExample from './components/BasicProps';

function App() {
return(
<div className="App">
<BasicFunc></BasicFunc>
<BasiclassComp />
<BasicFuncOne />
<BasicPropsExample Name='Jeevan' role='react dev'> 
  <p>tirupati  jeevan</p>
 </BasicPropsExample>
<BasicPropsExample Name='rakesh' role='front end dev'></BasicPropsExample>

  </div>
)
}

export default App;
