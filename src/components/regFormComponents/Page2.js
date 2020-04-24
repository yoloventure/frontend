// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    return ;
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
                placeholder=" City/State/Country"
                name="location"
                value={this.props.host.location}
                onChange={this.props.handleInputChange}
                className="mt-3"
              />
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
        </form>
      </div>
    );
  }
}

export default Page2;
