import React from 'react';
import ReactDOM from "react-dom";

import "./cardExpDetail.css";

export default class CardExpDetail extends React.Component {

  render() {
    if (this.props.key % 3 == 0) {
      if (this.props.handleSelect) {
        return (
          <div>
            <div className="col-4">
              <label class="custom-checkbox">
                <input type="checkbox" id={"aspect" + this.props.key} name={"aspect" + this.props.key} />
                <span className="checkmark"></span>
              </label>
              <h4> {this.props.item.title} </h4>
              <p> {this.props.item.body} </p>
            </div>
            <div className="w-100"></div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="col-4">
              <h4> {this.props.item.title} </h4>
              <p> {this.props.item.body} </p>
            </div>
            <div className="w-100"></div>
          </div>
        );
      }
    } else {
      if (this.props.handleSelect) {
        return (
          <div className="col-4">
            <label class="custom-checkbox">
              <input type="checkbox" id={"aspect" + this.props.key} name={"aspect" + this.props.key} />
              <span className="checkmark"></span>
            </label>
            <h4> {this.props.item.title} </h4>
            <p> {this.props.item.body} </p>
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
}
