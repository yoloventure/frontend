import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";
import Explore from "./Explore";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import hostExperience from "./hostExperience/hostExperience"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <Homepage />
                </div>
              );
            }}
          />

          <Route
            path="/explore"
            exact
            render={() => {
              return <Explore />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
