import React from "react";
import Homepage from "./home/Homepage";
import Explore from "./explore/Explore";
import ExperienceDetail from "./explore/ExperienceDetail";
import Login from "./auth/login";
import HostExperience from "./hostExperience/HostExperience";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Register from "./auth/register";
import HostRegister from "./registration/HostRegister"
import FeatureStory from "./story/FeatureStory";
import About from "./about/About";
import HostGuidelines from "./hostExperience/HostGuidelines";
import Dashboard from './HostLoggedIn/Dashboard'
import Admin from "./admin/Admin";
import {persistor,store} from './store';
import { Provider } from 'react-redux';
// import { loadUser } from './actions/authActions';
import { PersistGate } from 'redux-persist/integration/react'

class App extends React.Component {
  constructor(props) {
     super(props);
    // this.state = {
    //   user: null,
    //   auth:{userName: 'Kaixin', isAuthenticated: 1}
    // };
    // this.authListener = this.authListener.bind(this);
  }

//   componentDidMount() { //Load user every time App is rendered
//   store.dispatch(loadUser());
// }

  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <Router>
      <div>
      <Switch>
      <Route
        path="/explore"
        exact
      >
       <Explore   />;
      </Route>

      <Route

                path='/explore/:handle'
                exact
                render={() => {
                  return <ExperienceDetail   />;
                }}
              />



      <Route
        path="/hostexperience"
        exact
        render={() => {
          return <HostExperience   />;
        }}
      />
      <Route
        path="/hostguidelines"
        exact
        render={() => {
          return <HostGuidelines   />;
        }}
      />
      <Route
        path="/register"
        exact
        render={() => {
          return <Register   />;
        }}
      />
      <Route
        path="/about"
        exact
        render={() => {
          return <About   />;
        }}
      />
      <Route
        path="/login"
        exact
        render={() => {
          return <Login   />;
        }}
      />
      <Route
        path="/story"
        exact
        render={() => {
          return <FeatureStory   />;
        }}
      />
      <Route
        path="/hostregister"
        exact
        render={() => {
          return <HostRegister   />;
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
          return <Homepage    />;
        }}
      />
      <Route
        path="/hostdashboard"
        exact
        render={() => {
          return <Dashboard    />;
        }}
      />

      <Route
        path="/admin"
        exact
        render={() => {
          return <Admin   />;
        }}
      />
       </Switch>
       </div>
      </Router>
        </PersistGate>
      </Provider>

    );
  }
}



export default App;
