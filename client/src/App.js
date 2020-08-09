import React from "react";
import Homepage from "./home/Homepage";
import Explore from "./explore/Explore";
import ExperienceDetail from "./explore/ExperienceDetail";
import ShadowerReservation from "./bookExperience/ShadowerReservation";
import Login from "./auth/login";
import HostExperience from "./hostExperience/HostExperience";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Register from "./auth/register";
import HostRegister from "./registration/HostRegister"
import HostRegister_Round2 from "./registration/HostRegister_Round2"
import FeatureStory from "./story/FeatureStory";
import About from "./about/About";
import HostGuidelines from "./hostExperience/HostGuidelines";
import Dashboard from './HostLoggedIn/Dashboard'
import Admin from "./admin/Admin";
import {persistor,store} from './store';
import { Provider } from 'react-redux';
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
        component={Explore}
      />

      <Route
        path='/explore/:id'
        exact
        component={ExperienceDetail}
      />

      <Route
        path='/reserve/:id'
        exact
        component={ShadowerReservation}
      />

      <Route
        path="/hostexperience"
        exact
        component={HostExperience}
      />

      <Route
        path="/hostguidelines"
        exact
        component={HostGuidelines}
      />

      <Route
        path="/register"
        exact
        component={Register}
      />

      <Route
        path="/about"
        exact
        component={About}
      />

      <Route
        path="/login"
        exact
        component={Login}
      />

      <Route
        path="/story"
        exact
        component={FeatureStory}
      />

      <Route
        path="/hostregister"
        exact
        component={HostRegister}
      />

      <Route
        path="/hostregister/round2"
        exact
        component={HostRegister_Round2}
      />

      <Route
        path="/hostguidelines"
        exact
        component={HostGuidelines}
      />

      <Route
        path="/"
        exact
        component={Homepage}
      />

      <Route
        path="/hostdashboard"
        exact
        component={Dashboard}
      />

      <Route
        path="/admin"
        exact
        component={Admin}
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
