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
          fetch('api/host/', {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            credentials: "include"
          }).then(response => {
               response.json().then(data=>{
                console.log(data)

                //Only display hosts with pending approval
                data.filter(host => {
                  return host.approval === 'pending';
                })
                this.setState({hostApps: data })
                console.log(data)
            })
            // return response.json();
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  acceptHost=id=>{
    console.log('api/host/'+id)
    let path='api/host/'+id
    fetch(path, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify({"approval":"Approved"}),
    }).then(response => {
         response.json().then(data=>{
          console.log(data)

      })
      // return response.json();
      }).catch((err) => {
          console.log(err);
      });
  }
  rejectHost=id=>{
    console.log('api/host/'+id)
    let path='api/host/'+id
    fetch(path, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify({"approval":"Rejected"}),
    }).then(response => {
         response.json().then(data=>{
          console.log(data)
        

      })
      // return response.json();
      }).catch((err) => {
          console.log(err);
      });
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
            <HostApplicationItem item={item} acceptHost={this.acceptHost} rejectHost={this.rejectHost} key={index} />
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
