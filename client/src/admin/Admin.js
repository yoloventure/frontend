import React, { Component } from "react";
import HostApplicationCard from "./HostApplicationCard";
import Navbar from "../components/Navbar";
import FooterPage from "../components/footer";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    let hostApps = [
      // Sample applications
      {
        applicant_name: "Sam Smith",
        company_name: "Smith inc.",
        location: "Rochester, NY",
        duration: "2 days",
      },
      {
        applicant_name: "Lind Taylor",
        company_name: "L inc.",
        location: "Tokyo, Japan",
        duration: "1 day",
      },
      {
        applicant_name: "William Brown",
        company_name: "ABC inc.",
        location: "Los Angeles, CA",
        duration: "4 days",
      },
    ];

    this.state = {
      hostApps: hostApps,
    };

  }



  render() {
    let hostApps = this.state.hostApps.map((item, index) => <HostApplicationCard item={item} key={index} />);

    return (
      <div className="container-fluid app">
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
