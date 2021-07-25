import React from "react";

export default class Card extends React.Component {
  render() {
    // const Link = require("react-router-dom").Link;
    return (
      <div>
        <span>
          <div className="row">
            <img src={this.props.image} width="450rem" />
          </div>
          <div
            className="row  "
            style={{
              color: "black",
              padding: "0px",
              margin: "0px",
              height: "3rem",
            }}
          >
            <h3 style={{ fontSize: "140%", fontWeight: "400" }}>
              {this.props.remote
                ? "Remote"
                : " " +
                  this.props.city +
                  (this.props.state !== "" && this.props.state
                    ? ", " + this.props.state + " "
                    : null)}
            </h3>
          </div>

          <div
            className="row  "
            style={{ color: "black", padding: "0px", margin: "0px" }}
          >
            <h3
              style={{
                fontSize: "120%",
                letterSpacing: "0.1rem",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              {" "}
              {this.props.title}{" "}
            </h3>
          </div>

          <div
            className="row "
            style={{
              padding: "0px",
              margin: "0px",
              height: "3rem",
              color: "black",
            }}
          >
            <div className="col-6">
              <h3 style={{ fontSize: "160%", fontWeight: "500" }}>
                {" "}
                ${this.props.price}{" "}
              </h3>
            </div>
            <div className="col-6">
              <h3 style={{ fontSize: "160%", fontWeight: "400" }}>
                {" "}
                {this.props.durationDays != undefined &&
                this.props.durationDays !== 0
                  ? this.props.durationDays === 1
                    ? this.props.durationDays + " day"
                    : this.props.durationDays + " days"
                  : this.props.durationHours != undefined &&
                    this.props.durationHours !== 0
                  ? this.props.durationHours === 1
                    ? this.props.durationHours + " hour"
                    : this.props.durationHours + " hours"
                  : null}
              </h3>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
