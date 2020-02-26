import React from 'react';
import ReactDOM from "react-dom"
import Homepage from "./home/Homepage"
import Explore from "./explore//Explore"
import { BrowserRouter as Router, Route} from 'react-router-dom'





class App extends React.Component {
  render(){
  return (
    <Router>
    <div >

      <Route path="/" exact render={ ()=>
      { return(
          <div>< Homepage/>


              </div>
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
