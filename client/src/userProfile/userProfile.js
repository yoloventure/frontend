import React from "react";
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Navbar from "../components/navbar";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <div>
        <Helmet>
            <title>Profile | YoloShadow</title> // insert dynamic title
        </Helmet>


      </div>
    );
  }
}

export default withRouter(UserProfile);
