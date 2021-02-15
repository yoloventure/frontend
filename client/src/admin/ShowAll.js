import React, { Component } from "react";
import showAllItem from "./showAllItem";



class showAll extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
        appsLoaded: false,
        accepted:{},
        rejected:{},
        pending:{}
    }
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
              //  console.log(data)

                //Only display hosts with pending approval
                // data.filter(host => {
                //   console.log(host.approval)
                //   return host.approval === 'Accepted';
                  
                // })

                
                  data.filter(function(host) {
                    return host.approval === 'Accepted';
                  });
              

                data.filter(host => {
                  console.log(host.approval)
                  return host.approval === 'Accepted';
              });
                
                for(var i = 0; i < data.length; i++){
                  this.setState(prevState=>{
                    let acceptedTemp=prevState.accepted
                    let rejectedTemp=prevState.rejected
                    let pendingTemp=prevState.pending
                    if(data[i].approval == "Approved"){acceptedTemp[data[i]._id] = data[i]}
                    if(data[i].approval == "Rejected"){rejectedTemp[data[i]._id] = data[i]}
                    if(data[i].approval == "pending"){pendingTemp[data[i]._id] = data[i]}
                    
                    let appsLoadedTemp=false
                    if(i===data.length-1){
                      appsLoadedTemp=true
                    }
                      return {
                      accepted:acceptedTemp, 
                      rejected:rejectedTemp,
                      pending:pendingTemp,
                      appsLoaded:appsLoadedTemp
                      }
                                           });
                }
              console.log(this.state.accepted)
            })
            // return response.json();
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {

// this.state.appsLoaded?console.log(this.state.accepted["5f14aba6e1d046aa0894f3c3"].approval): console.log("")
   return (
      <div className="container-fluid app">
      <div className="container">

      
        {this.state.appsLoaded? Object.keys(this.state.accepted).map((item,i)=> <showAllItem key = {i} 
          item = {this.state.accepted[item]} > </showAllItem>) : null}
      {    this.state.appsLoaded?console.log(this.state.accepted["5f14aba6e1d046aa0894f3c3"].approval): console.log("")}
        {/* {this.state.appsLoaded? Object.keys(this.state.rejected).map((item,i)=> <showAllItem key = {i} 
        item = {this.state.rejected[item]} >   </showAllItem>) : null} 
        <showAllItem item = {"hello"}></showAllItem> */}
        
     
        
        </div>
      </div>
    )
  }
}
 export default showAll;