import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import HostApplicationItem from "./hostApplicationItem";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";

import APIHost from "../api/apiHost";
import APIUser from "../api/apiUser";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostApps: []
    };

  }

  componentDidMount() {
    try {
      //Only display hosts with pending approval
      let hostApps = APIHost.getAllHosts()
        .then(response => response.filter(host => {
            return host.approval === 'pending';
          })
        )
        .then(data => this.setState({hostApps: data
                  }));

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.hostApps);


    //Check if user is an admin
    let user = APIUser.getCurrentUser();
    console.log(user)
    if (!user.isAdmin) {
      //return "You don't have permission to view this page";
      //don't forget to uncomment
    }

    return (
      <div className="container-fluid app">

        <Helmet>
            <title>Admin | YoloShadow</title> // insert dynamic title
        </Helmet>

        <div className="nav pb-5">
          <Navbar textColor={'black'} />
        </div>

        <div className="container">
          <div className="row mt-3 pt-5 align-items-center">
            <div className="col">
              <h2>Admin page</h2>
            </div>
          </div>
        </div>

        <div className="container">
          {this.state.hostApps.map((item, index) =>
            <HostApplicationItem item={item} key={index} />
          )}
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
