import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import HostApplicationItem from "./HostApplicationItem";
import Navbar from "../components/Navbar";
import FooterPage from "../components/Footer";

import APIHost from "../api/APIHost";
import APIUser from "../api/APIUser";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    //Only display hosts with pending approval
    let hostApps = APIHost.getAllHosts().then((response) => {
      return response.filter(host => {
        return host.approval == 'pending';
      });
    });

    this.state = {
      hostApps: hostApps,
    };

  }


  render() {
    let hostApps = this.state.hostApps.map((item, index) => <HostApplicationItem item={item} key={index} />);

    //Check if user is an admin
    let user = APIUser.getCurrentUser();
    if (!user.isAdmin) {
      return "You don't have permission to view this page";
    }

    return (
      <div className="container-fluid app">

        <Helmet>
            <title>Admin | YoloShadow</title> // insert dynamic title
        </Helmet>

        <Navbar textColor={'black'} auth={this.props.auth} />

        <div className="row mt-3 pt-5 align-items-center">
          <div className="col">
            <h2>Admin page</h2>
          </div>
        </div>

        <br />

        <div className="container">
          {hostApps}
        </div>

        <br />

        <div className="footerpages">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default Admin;
