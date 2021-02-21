import React from "react";
import ReactDOM from "react-dom";

import "./cardExpDetail.css";

export default class CardExpDetail extends React.Component {
  render() {
    if (this.props.id + (1 % 3) == 0) {
      if (this.props.handleAspectSelect) {
        return (
          <div>
            <div className="col-4">
              <label class="custom-checkbox">
                <input
                  type="checkbox"
                  id={"aspect" + this.props.id}
                  name={"aspect" + this.props.id}
                  onChange={(e) =>
                    this.props.handleAspectSelect(this.props.id, e)
                  }
                  defaultChecked={this.props.aspects[this.props.id]}
                />
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
      if (this.props.handleAspectSelect) {
        return (
          <div className="col-4">
            <label class="custom-checkbox">
              <input
                type="checkbox"
                id={"aspect" + this.props.id}
                name={"aspect" + this.props.id}
                onChange={(e) =>
                  this.props.handleAspectSelect(this.props.id, e)
                }
                defaultChecked={this.props.aspects[this.props.id]}
              />
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
