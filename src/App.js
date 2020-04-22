import React from "react";
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
import hostGuidelines from "./hostExperience/hostGuidelines";
import APIExperience from "./api/APIExperience";

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        console.log(APIExperience.getAllExperiences());
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <Router>
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
