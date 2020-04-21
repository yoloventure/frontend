// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: " City/State/Country"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = JSON.stringify(this.state);
    console.log(data);
    return data;
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <h3 className="join">Join a global community of hosts</h3>
            </div>
            <div className="row">
              <h3 className="where">Where are you based?</h3>
            </div>
            <div className="container-fluid">
              <textarea
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
                className="mt-3"
              />
            </div>

            <div className="row mt-5 mb-4">
              <div className="col"></div>
              <div className="col">
                <input class="btn btn-danger" type="submit" value="Next Step" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page2;
