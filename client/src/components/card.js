import React from "react";

export default class Card extends React.Component {
  render() {
    // const Link = require("react-router-dom").Link;
    return (
      <div className="card-body">
        <span style={{ display: "block" }}>
          <div className="row">
            <img src={this.props.image} />
          </div>
          <div className="row" style={{ color: "black" }}>
            <h3 style={{ fontSize: "150%" }}> {this.props.title} </h3>
          </div>    
          <div className="row">
          <div className="col" style={{ color: "black" }}>
              <h3 style={{ fontSize: "150%" }}> ${this.props.price} </h3>
            </div>
            <div className="col" style={{ color: "black" }}>
              <h3 style={{ fontSize: "150%" }}> {(this.props.durationDays!=undefined && this.props.durationDays!==0)? this.props.durationDays+" days"
                                                  : 
                                                  this.props.durationHours+" hours" 
                                                } 
              </h3>
            </div>
          </div>
          <div className="row" style={{ color: "black" }}>
            <h3 style={{ fontSize: "150%" }}> {this.props.city}, {this.props.state}  </h3>
          </div>
        </span>
      </div>
    );
  }
}
