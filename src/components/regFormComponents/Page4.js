// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expertise:
        "What expertise do you have? List as many as possible. Examples can include: Artificial Intelligence, Geographic Information System, Woodmaking."
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
            <h3>Expertise</h3>
            <div className="row container">
              <p>
                We love who you are as a person (a.k.a: no matter what skill
                sets you have, we at Yolo will always love you). Please only
                select the skill sets that you are able to confidently show
                during your job shadow experience
              </p>
            </div>

            <div className="container-fluid">
              <div className="row">
                <textarea
                  name="expertise"
                  value={this.state.expertise}
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
        </form>
      </div>
    );
  }
}

export default Page4;
