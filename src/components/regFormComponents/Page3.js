// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offer: "Describe what you can offer to hostees",
      otherAspects:
        "example: perks(company pets,coffee shop,drinks, nap space etc.)"
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
              <h3>What can you offer in a shadowing experience?</h3>
            </div>

            <div className="container-fluid">
              <div className="row">
                <textarea
                  name="offer"
                  value={this.state.offer}
                  onChange={this.handleInputChange}
                />
              </div>
              <h6>What other aspects would you offer?</h6>
              <div className="row">
                <textarea
                  name="otherAspects"
                  value={this.state.otherAspects}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="row submit">
                <input type="submit" value="Next Step" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page3;
