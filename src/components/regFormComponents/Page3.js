// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerOne: "",
      offerTwo: "",
      offerThree: "",
      moreOne: "",
      moreTwo: "",
      moreThree: "",
      otherAspects: ""
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
                <div className="col">
                  <p className="ellipse">1</p>
                </div>
                <div className="col">
                  <p className="ellipse">2</p>
                </div>
                <div className="col">
                  <p className="ellipse">3</p>
                </div>
              </div>

              <div className="row mb-n2">
                <div className="col ">
                  <p>One aspect you can offer</p>
                </div>
                <div className="col">
                  <p>Another aspect you can offer</p>
                </div>
                <div className="col">
                  <p>Another aspect you can offer</p>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <input
                    type="text"
                    name="offerOne"
                    placeholder="e.g., Dentist-patient communication techniques"
                    value={this.state.offerOne}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="offerTwo"
                    value={this.state.offerTwo}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="offerThree"
                    value={this.state.offerThree}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="row mt-3 mb-n3">
                <div className="col">
                  <p>Tell us more</p>
                </div>
                <div className="col">
                  <p>Tell us more</p>
                </div>
                <div className="col">
                  <p>Tell us more</p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <textarea
                    placeholder="e.g., I’ll show you how I pace my speech, use radiograph to explain, and apply other techniques routinely to communicate effectively with my patients."
                    type="text"
                    name="moreOne"
                    value={this.state.moreOne}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col">
                  <textarea
                    type="text"
                    name="moreTwo"
                    value={this.state.moreTwo}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col">
                  <textarea
                    type="text"
                    name="moreThree"
                    value={this.state.moreThree}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="container mt-3">
                <div className="row">
                  <h6>What other aspects would you offer?</h6>
                </div>
                <div className="row">
                  <textarea
                    placeholder="example: perks(company pets,coffee shop,drinks, nap space etc.)"
                    name="otherAspects"
                    value={this.state.otherAspects}
                    onChange={this.handleInputChange}
                  />
                </div>
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
      </div>
    );
  }
}

export default Page3;
