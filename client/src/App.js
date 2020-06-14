import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from "./home/Homepage";
import Explore from "./explore/Explore";
import ExperienceDetail from "./explore/ExperienceDetail";
import Login from "./auth/login";
import HostExperience from "./hostExperience/HostExperience";
import Register from "./auth/register";
import HostRegister from "./registration/HostRegister"
import FeatureStory from "./story/FeatureStory";
import About from "./about/About";
import HostGuidelines from "./hostExperience/HostGuidelines";
import Dashboard from './HostLoggedIn/Dashboard'
import CreatHostExp from './HostLoggedIn/CreateHostExp.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      auth:{userName: 'Kaixin', isAuthenticated: 0}
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
      <Router>
      <div>
      <Switch>
      <Route
        path="/explore"
        exact
      >
       <Explore auth={this.state.auth}/>;
      </Route>

      <Route

                path='/explore/:handle'
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
          return <HostGuidelines auth={this.state.auth}/>;
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

      <Route
        path="/hostdashboard"
        exact
        render={() => {
          return <Dashboard auth={this.state.auth} />;
        }}
      />

      <Route

                path='/hostdashboard/createhostexp'
                exact
                render={() => {
                  return <CreatHostExp auth={this.state.auth}/>;
                }}
      />


       </Switch>
       </div>
      </Router>
    );

  }
}



export default App;
