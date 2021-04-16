import React from "react";

export default class Card extends React.Component {
  render() {
    // const Link = require("react-router-dom").Link;
    return (
      <div  >
        <span >
          <div className="row">
            <img src={this.props.image} />
          </div>
          <div className="row  " style={{ color: "black",padding:'0px',margin:'0px', height:'3rem' }}>
            <h3 style={{ fontSize: "140%", fontWeight:'400' }}> {this.props.city}{ (this.props.state!=="" && this.props.state)?", "+ this.props.state :null}  </h3>
          </div>

          <div className="row  " style={{ color: "black",padding:'0px',margin:'0px', height:'3rem' }}>
            <h3 style={{ fontSize: "120%",letterSpacing:"0.25rem", fontWeight:"700",textTransform:"uppercase" }}> {this.props.title} </h3>
          </div>    

          <div className="row " style={{padding:'0px',margin:'0px', height:'3rem',color:'black'}}>
          <div className="col-3" >
              <h3 style={{ fontSize: "160%",fontWeight:'500' }}> ${this.props.price} </h3>
            </div>
            <div className="col-3" >
              <h3 style={{ fontSize: "160%",fontWeight:'400' }}> {(this.props.durationDays!=undefined && this.props.durationDays!==0)? this.props.durationDays+" days"

                                                  : 
                                                  this.props.durationHours+" hours" 
                                                } 
              </h3>
            </div>
          </div>

        </span>
      </div>
    );
  }
}
