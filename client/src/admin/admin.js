import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import HostApplicationItem from "./hostApplicationItem";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import ShowAllItem from "./showAllItem";

import APIHost from "../api/apiHost";
import APIUser from "../api/apiUser";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // hostApps: []
      hostApps: {},
      appsLoaded:false,

      accepted:{},
      rejected:{},
      pending:{}
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
                  return host.approval.localeCompare('pending')===0 ;
                })
                // this.setState({hostApps: data })
                for(var i = 0; i < data.length; i++){
                  this.setState(prevState=>{
                                          let temp=prevState.hostApps
                                          temp[data[i]._id] = data[i]
                                          let appsLoadedTemp=false

                                          let acceptedTemp=prevState.accepted
                                          let rejectedTemp=prevState.rejected
                                          let pendingTemp=prevState.pending
                                          if(data[i].approval == "Approved"){acceptedTemp[data[i]._id] = data[i]}
                                          if(data[i].approval == "Rejected"){rejectedTemp[data[i]._id] = data[i]}
                                          if(data[i].approval == "pending"){pendingTemp[data[i]._id] = data[i]}

                                          if(i===data.length-1){
                                            appsLoadedTemp=true
                                          }
                                           return {
                                            hostApps:temp, 
                                            appsLoaded:appsLoadedTemp,

                                            accepted:acceptedTemp, 
                                            rejected:rejectedTemp,
                                            pending:pendingTemp,
                                           }
                                           });
                }
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
    })
    .then(response => {
      this.setState(prevState => {
        let temp=prevState.hostApps
        temp[id].approval = "Approved"
        let acceptedTemp=prevState.accepted
        let rejectedTemp=prevState.rejected
        acceptedTemp[id] = temp[id]
        delete rejectedTemp[id]
        return{
          hostApps: temp,
          accepted: acceptedTemp,
          rejected: rejectedTemp
    } })
         response.json().then(data=>{
          console.log(data)

      })
      
      console.log(this.state.hostApps[id].approval)
      // return response.json();
      })
      .catch((err) => {
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
    })
    // .then(response => {
    //   this.setState(prevState =>this.state.hostApps[id].approval = "Rejected")
      
    //      response.json().then(data=>{
    //       console.log(data)

    //   })
     
    
    //   console.log(this.state.hostApps[id].approval)
    //   // return response.json();
    //   })

    .then(response => {
      this.setState(prevState => {
        let temp=prevState.hostApps
        temp[id].approval = "Rejected"
        let acceptedTemp=prevState.accepted
        let rejectedTemp=prevState.rejected
        delete acceptedTemp[id]
        rejectedTemp[id] = temp[id]
        return{
          hostApps: temp,
          accepted: acceptedTemp,
          rejected: rejectedTemp
    } })
         response.json().then(data=>{
          console.log(data)

      })
      
      console.log(this.state.hostApps[id].approval)
      // return response.json();
      })
      
      
      
      .catch((err) => {
          console.log(err);
      });
  }



  render() {
  //  console.log(this.state.accepted);



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

        <div className = "container">
          
       
         {this.state.appsLoaded? console.log(this.state.accepted):""}
         {/* {this.state.appsLoaded? (Object.keys(this.state.accepted).map((item,i)=> <h1>{this.state.hostApps[item]._id}</h1>)):""} */}
         {/* {this.state.appsLoaded? (Object.keys(this.state.rejected).map((item,i)=> <h1>{this.state.hostApps[item]._id}</h1>)):""} */}
         {this.state.appsLoaded? <ShowAllItem 
          acceptedItem = {this.state.accepted} rejectedItem = {this.state.rejected}
          allItem = {this.state.hostApps} acceptHost={this.acceptHost} rejectHost={this.rejectHost}>  </ShowAllItem> : null}
     
       {/* {this.state.appsLoaded? Object.keys(this.state.accepted).map((acceptedItem,i)=> <HostApplicationItem key = {i} 
         acceptedItem = {this.state.accepted} acceptHost={this.acceptHost} rejectHost={this.rejectHost}>  </HostApplicationItem>) : null}
        */}
    
        

      </div>

        <div className="container">
          {/* {this.state.hostApps.map((item, index) =>
            <HostApplicationItem item={item} acceptHost={this.acceptHost} rejectHost={this.rejectHost} key={index} />
          )} */}
          {/* {console.log(this.state.hostApps)} */}
          {/* {this.state.appsLoaded? <HostApplicationItem item = {this.state.hostApps }></HostApplicationItem> 
          :null} */}


     

          {/* {this.state.appsLoaded? Object.keys(this.state.hostApps).map((item,i)=> <HostApplicationItem key = {i} 
          item = {this.state.hostApps[item]} acceptHost={this.acceptHost} rejectHost={this.rejectHost} modify = {true}>  </HostApplicationItem>) : null} */}
        </div>
          {/* return <HostApplicationItem></HostApplicationItem> */}
        <br />
        <div className = "footerpages">
          <FooterPage />
        </div>
      </div>
      
    );
  }
}

export default Admin;