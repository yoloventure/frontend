import React from "react";
import Homepage from "./home/Homepage";
import Explore from "./explore/Explore";
import ExperienceDetail from "./explore/ExperienceDetail";
import Login from "./auth/login";
import HostExperience from "./hostExperience/hostExperience";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./auth/register";
import HostRegister from "./registration/HostRegister"
import FeatureStory from "./story/FeatureStory";
import About from "./about/About";
import HostGuidelines from "./hostExperience/hostGuidelines";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {

  
  }

  render() {
    return (
      <Router >
        <Route
          path="/explore"
          exact
          render={() => {
            return <Explore />;
          }}
        />
        <Route

          path='/ExperienceDetail/:handle'
          exact
          render={() => {
            return <ExperienceDetail />;
          }}
        />
        <Route
          path="/hostexperience"
          exact
          render={() => {
            return <HostExperience />;
          }}
        />
        <Route
          path="/hostguidelines"
          exact
          render={() => {
            return <hostGuidelines />;
          }}
        />
        <Route
          path="/register"
          exact
          render={() => {
            return <Register />;
          }}
        />
        <Route
          path="/about"
          exact
          render={() => {
            return <About />;
          }}
        />
        <Route 
          path="/login"
          exact
          render={() => {
            return <Login />;
          }}
        />
        <Route
          path="/story"
          exact
          render={() => {
            return <FeatureStory />;
          }}
        />
        <Route
          path="/hostregister"
          exact
          render={() => {
            return <HostRegister />;
          }}
        />
        <Route
          path="/hostguidelines"
          exact
          render={() => {
            return <HostGuidelines />;
          }}
        />
        <Route
          path="/"
          exact
          render={() => {
            return <Homepage />;
          }}
        />
      </Router>
    );
  }
}

export default App;
