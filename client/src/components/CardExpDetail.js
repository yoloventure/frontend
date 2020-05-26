import React from 'react';
import ReactDOM from "react-dom";

export default class CardExpDetail extends React.Component {




  render() {
  
  return (
      <div className="card-body">
            <div className="row" style={{color:"black"}}>
              <h3> {this.props.title} </h3>
            </div>
            <div className="row" style={{color:"black"}}>
              <h3> {this.props.body} </h3>
            </div>

      </div>

  );
}
}
