import React from 'react';
import ReactDOM from "react-dom";

export default class Card extends React.Component {

  


  render() {
  return (
      <div className="card-body">
          <div className="row">
            <img src={this.props.image}/>
          </div>
          <div className="row">
            <h3> {this.props.location} </h3>
          </div>
          <div className="row">
            <h3> {this.props.profession} </h3>
          </div>
          <div className="row">
            <div className="col">
            <h3> {this.props.price} </h3>
            </div>
            <div className="col">
            <h3> {this.props.duration} </h3>
            </div>
          </div>
      </div>

  );
}
}
