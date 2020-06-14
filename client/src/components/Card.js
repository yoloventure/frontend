import React from 'react';

import ExperienceDetail from '../explore/ExperienceDetail'


export default class Card extends React.Component {




  render() {
    // const Link = require("react-router-dom").Link;
  return (
      <div className="card-body">


          <span style={{"display": "block"}} >
            <div className="row">
              <img src={this.props.image}/>
            </div>
            <div className="row" style={{color:"black"}}>
              <h3 style={{fontSize:'150%'}}> {this.props.location} </h3>
            </div>
            <div className="row" style={{color:"black"}}>
              <h3 style={{fontSize:'150%'}}> {this.props.profession} </h3>
            </div>
            <div className="row">
              <div className="col" style={{color:"black"}}>
              <h3 style={{fontSize:'150%'}}> {this.props.price} </h3>
              </div>
              <div className="col" style={{color:"black"}}>
              <h3 style={{fontSize:'150%'}}> {this.props.duration} </h3>
              </div>
            </div>
          </span>
      </div>

  );
}
}
