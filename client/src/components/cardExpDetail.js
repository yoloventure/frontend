import React from "react";
import ReactDOM from "react-dom";

import "./cardExpDetail.css";

export default class CardExpDetail extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="col-4">
        <p
              className="host-reg-ellipse"
              style={{ height: "40%", width: "20%", background: "transparent" }}
            >
              {this.props.index+1}
        </p>
        <h4 style={{fontWeight:700}}> {this.props.item.title} </h4>
        <p> {this.props.item.body} </p>
      </div>
    );
  }
}
