import React from "react";
import ReactDOM from "react-dom";

import "./cardExpDetailReview.css";

export default class CardExpDetailReview extends React.Component {
  render() {
    if (this.props.key % 2 == 0) {
      return (
        <div>
          <div className="col-6">
            <p className="text"> {this.props.item.body} </p>
            <p>
              <span className="name"> {this.props.item.author} </span>
              <span className="date">
                {" "}
                &#8212; {this.props.item.publishDate}{" "}
              </span>
            </p>
          </div>
          <div class="w-100"></div>
        </div>
      );
    } else {
      return (
        <div className="col-6">
          <p className="text"> {this.props.item.body} </p>
          <p>
            <span className="name"> {this.props.item.author} </span>
            <span className="date">
              {" "}
              &#8212; {this.props.item.publishDate}{" "}
            </span>
          </p>
        </div>
      );
    }
  }
}
