import React, { Component } from "react";
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

    /*
    let hostApps = [
      // Sample applications
      // Discuss data model with Andrew
      {
        user: {
          fname: "Sam",
          lname: "Smith",
          email: "sam.smith@email.com",
        },

        gender: "Male",
        phone: 5851234567,
        title: "CEO",
        company: {
          name: "ABC Inc.",
          website: "abc.com",
          location: {
            street: "123 abc st.",
            city: "Rochester",
            state: "NY",
            country: "USA",
            zip: 14627,
          },
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        location: {
          street: "123 abc st.",
          city: "Rochester",
          state: "NY",
          country: "USA",
          zip: 14627,
        },

        offering: [
          "Lorem",
          "ipsum",
        ],
        moreOffering: [
          "dolor",
          "sit",
          "amet",
        ],
        expertise: [
          "Lorem",
          "ipsum",
        ],
        experiences: [
          {},
        ],
        approval: false,
      },

      {
        user: {
          fname: "Lind",
          lname: "Taylor",
          email: "lind.taylor@email.com",
        },

        gender: "Prefer not to say",
        phone: 9991234567,
        title: "Detective",
        company: {
          name: "L Inc.",
          website: "l.com",
          location: {
            street: "123 abc st.",
            city: "Tokyo",
            state: "Kanto",
            country: "Japan",
            zip: 1600022,
          },
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        location: {
          street: "123 abc st.",
          city: "Tokyo",
          state: "Kanto",
          country: "Japan",
          zip: 1600022,
        },

        offering: [
          "Lorem",
          "ipsum",
        ],
        moreOffering: [
          "dolor",
          "sit",
          "amet",
        ],
        expertise: [
          "Lorem",
          "ipsum",
        ],
        experiences: [
          {},
        ],
        approval: false,
      },
    ];
    */

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
