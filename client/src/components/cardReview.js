import React from "react";
import ReactDOM from "react-dom";

export default class CardReview extends React.Component {
  render() {
    return (
      <div className="card-body">
        <div className="row" style={{ color: "black" }}>
          <h3> {this.props.body} </h3>
        </div>
        <div className="row" style={{ color: "black" }}>
          <h3>
            {" "}
            {this.props.firstName}-{this.props.reviewDate}{" "}
          </h3>
        </div>
      </div>
    );
  }
}
