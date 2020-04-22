import React, { Component } from "react";

class Page6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

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
      <form onSubmit={this.handleSubmit}>
        <div className="">
          <div className="container-fluid">
            <h3>Set up a password to track your application progress</h3>
            <div className="row">
              <label htmlFor="password1" onChange={this.handleInputChange}>
                Password
              </label>
              <input type="password" />
            </div>

            <div className="row">
              <label htmlFor="password2" onChange={this.handleInputChange}>
                Password
              </label>
              <input type="password" />
            </div>
            <div className="row mt-5 mb-4">
              <div className="col"></div>
              <div className="col">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="Next Step"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Page6;
