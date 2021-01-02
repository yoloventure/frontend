// import React from "./node_modules/reacte_modules/react";
import React, { Component } from "react";
class Page3 extends React.Component {

  handleSubmitPage3Next=()=>{
    // let host=this.props.host
    // if(!host.street|| !host.city ||!host.state){
    //   this.setState({submittedPage2:true, errorPage1:"Please fill all required fields"})
    // }else{
      this.props.setNextTrue()

    // }
  }
  handleSubmitPage3Back=()=>{
    // let host=this.props.host
    // if(!host.street|| !host.city ||!host.state){
    //   this.setState({submittedPage2:true, errorPage1:"Please fill all required fields"})
    // }else{
      this.props.setNextFalse()

    // }
  }

  render() {
    return (
      <div className="">
        <form>
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
                      onClick={this.handleSubmitPage3Back}
                      value="Previous Step"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      className="btn nextBtn"
                      onClick={this.handleSubmitPage3Next}
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
