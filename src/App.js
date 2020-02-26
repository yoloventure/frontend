import React from "react";
import firebase from "./config/firebase";
import Homepage from "./home/Homepage";
import Explore from "./explore/Explore";
import Login from "./auth/login";
import HostExperience from "./hostExperience/hostExperience"
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({user});
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                localStorage.removeItem('user');
            }
        });
    }


    render() {
        return (
            <Router>
                <div>{this.state.user ? (<div>
                    <Route
                        path="/explore"
                        exact
                        render={() => {
                            return (
                                <Explore/>
                            );
                        }}
                    />
                    <Route
                        path="/hostexperience"
                        exact
                        render={() => {
                            return (
                                <HostExperience/>
                            );
                        }}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => {
                            return (
                                <Homepage/>
                            );
                        }}
                    />
                </div>) : (<Login/>)}
                </div>
            </Router>
        );
    }
}

export default App;
