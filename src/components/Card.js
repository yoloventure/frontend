import React from 'react';
import ReactDOM from "react-dom";
import  Link  from "react-router-dom";

export default class Card extends React.Component {




  render() {
    const Link = require("react-router-dom").Link;
  return (
      <div className="card-body">
        <Link to={{
                      pathname: '/ExperienceDetail/'+this.props.id,

                        // image: this.props.image,
                        // location: this.props.location,
                         profession: this.props.profession
                        // price: this.props.price,
                        // duration: this.props.duration

                    }}>
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
        </Link>
      </div>

  );
}
}
