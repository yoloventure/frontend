import React from 'react';
import ReactDOM from "react-dom";

import "./CardExpDetail.css";

export default class CardExpDetail extends React.Component {

  render() {
    if (this.props.key % 3 == 0) {
      return (
        <div>
          <div className="col-4">
            <h4> {this.props.item.title} </h4>
            <p> {this.props.item.body} </p>
          </div>
          <div class="w-100"></div>
        </div>
      );
    } else {
      return (
        <div className="col-4">
          <h4> {this.props.item.title} </h4>
          <p> {this.props.item.body} </p>
        </div>
      );
    }
  }
}
