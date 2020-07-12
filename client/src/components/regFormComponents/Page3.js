// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page3 extends React.Component {


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
                  <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>1</p>
                </div>
                <div className="col">
                  <p className="ellipse" style={{height:'75%', width:'30%',background:'transparent'}}>2</p>
                </div>
                <div className="col">
                  <p className="ellipse" style={{height:'75%', width:'30%', background:'transparent'}}>3</p>
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
                    value={this.props.host.offerOne}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="offerTwo"
                    value={this.props.host.offerTwo}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="offerThree"
                    value={this.props.host.offerThree}
                    onChange={this.props.handleInputChange}
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
                    value={this.props.host.moreOne}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="col">
                  <textarea
                    type="text"
                    name="moreTwo"
                    value={this.props.host.moreTwo}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="col">
                  <textarea
                    type="text"
                    name="moreThree"
                    value={this.props.host.moreThree}
                    onChange={this.props.handleInputChange}
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
                    value={this.props.host.otherAspects}
                    onChange={this.props.handleInputChange}
                  />
                </div>
              </div>

              <div className="row mt-5 mb-4">
                  <div className="col-4 offset-4">
                    <input
                      className="btn nextBtn"
                      type="submit"
                      onClick={this.props.setNextFalse}
                      value="Previous Step"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      className="btn nextBtn"
                      type="submit"
                      onClick={this.props.setNextTrue}
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
