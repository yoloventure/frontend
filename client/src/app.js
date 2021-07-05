import React from "react";
import Homepage from "./home/homepage";
import Explore from "./explore/explore";
import ExperienceDetail from "./explore/experienceDetail";
import ShadowerReservation from "./bookExperience/shadowerReservation";
import Login from "./auth/login";
import ForgotPassword from "./auth/forgotPassword";
import ResetPassword from "./auth/resetPassword";
import HostExperience from "./hostExperience/hostExperience";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./auth/register";
import HostRegister from "./hostRegistration/hostRegister";
import HostRegister_Round2 from "./hostRegistration/hostRegister_Round2";
import FeatureStory from "./story/featureStory";
import About from "./about/about";
import HostGuidelines from "./hostExperience/hostGuidelines";
import Dashboard from "./hostInterface/dashboard";
import ShadowerDashboard from "./shadowerInterface/shadowerDashboard";
import Admin from "./admin/admin";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
                <Route path="/explore" exact component={Explore} />
                {/*custom urls forcertain host experiences*/}
                <Route path="/explore/markEdwardHarris" exact 
                render={(props) => <ExperienceDetail {...props} customLinkExpID="604e121843b96b001764168b"/>} 
                />
                 <Route path="/explore/rebeccaWind" exact 
                render={(props) => <ExperienceDetail {...props} customLinkExpID="60572d13fbddf10017793c06"/>} 
                />
                 <Route path="/explore/marisaKrol" exact 
                render={(props) => <ExperienceDetail {...props} customLinkExpID="60572d0ffbddf10017793c05"/>} 
                />
                {/*End of custom urls forcertain host experiences*/}
                
                 <Route path="/explore/:id" exact component={ExperienceDetail} />

                <Route
                  path="/reserve/:id"
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

                <Route path="/register" exact component={Register} />

                <Route path="/about" exact component={About} />

                <Route path="/login" exact component={Login} />

                <Route path="/forgot" exact component={ForgotPassword} />
                <Route path="/reset/:id" exact component={ResetPassword} />

                <Route path="/story" exact component={FeatureStory} />

                <Route path="/hostregister" exact component={HostRegister} />

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

                <Route path="/" exact component={Homepage} />

                <Route path="/hostdashboard" exact component={Dashboard} />

                <Route
                  path="/shadowerdashboard"
                  exact
                  component={ShadowerDashboard}
                />

                <Route path="/admin" exact component={Admin} />
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
