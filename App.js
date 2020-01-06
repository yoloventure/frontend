import React from 'react';
import Homepage from "./Homepage"
import Explore from "./Explore"
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render(){
  return (
    <Router>
    <div >

      <Route path="/" exact render={ ()=>
      { return(
          < Homepage/>
       );
      }
      }/>

      <Route path="/explore" exact render={ ()=>
      { return(
          < Explore/>
       );
      }
      }/>

    </div>



    </Router>
  );
}
}

export default App;
