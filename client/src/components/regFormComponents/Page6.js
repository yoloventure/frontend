import React, { Component } from "react";

class Page6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit();
    return ;
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="">
          <div className="container-fluid">
            <h3>Set up a password to track your application progress</h3>
            <div className="row">
              <div className='col-3'>
              <label htmlFor="password1" onChange={this.handleInputChange}>
                Password
              </label>
              </div>

              <div className='col'>
              <input type="password" />
              </div>

            </div>

            <div className="row pt-3">
              <div className='col-3'>
              <label htmlFor="password2">
                Confirm Password
              </label>
              </div>
              <div className='col'>
              <input type="password"
              value={this.props.host.password}
              onChange={this.props.handleInputChange}  />
              </div>

            </div>
            <div className="row mt-5 mb-4">
              <div className="col"></div>
              <div className="col">
                <input
                  className="btn nextBtn"
                  type="submit"
                  value="submit"
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
