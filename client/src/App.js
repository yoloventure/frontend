import React, {PropTypes} from "react";

import firebase from "./config/firebase";

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
      user: null,
      auth:{userName: 'Kaixin', isAuthenticated: 1}
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
            return <Explore auth={this.state.auth}/>;
          }}
        />
        <Route

          path='/ExperienceDetail/:handle'
          exact
          render={() => {
            return <ExperienceDetail auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/hostexperience"
          exact
          render={() => {
            return <HostExperience auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/hostguidelines"
          exact
          render={() => {
            return <hostGuidelines auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/register"
          exact
          render={() => {
            return <Register auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/about"
          exact
          render={() => {
            return <About auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/login"
          exact
          render={() => {
            return <Login auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/story"
          exact
          render={() => {
            return <FeatureStory auth={this.state.auth}/>;
          }}
        />
        <Route
          path="/hostregister"
          exact
          render={() => {
            return <HostRegister auth={this.state.auth}/>;
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
            return <Homepage auth={this.state.auth} />;
          }}
        />
      </Router>
    );
  }
}



export default App;
