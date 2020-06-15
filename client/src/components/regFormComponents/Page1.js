import React, { Component } from "react";

class Page1 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ whatToRender: 2 });
    return;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-1 mb-3">
              <h3>Tell us about what you do.</h3>
            </div>
            <div className="row mb-1">
              <div className="col-sm-2">
                <h6>Personal</h6>
              </div>
              {/*
              <div className="col-sm-2">
                <i className="">insert icon</i>
              </div>

              <p>import from LinkedIn</p>
              */}
            </div>
            <div className="container-fluid">
              <div className="row mb-n2">
                <div className="col ml-n3 ">
                  <label>First Name</label>
                </div>
                <div className="col ml-n3 ">
                  <label>Last Name</label>
                </div>
                <div className="col ml-n3">
                  <label>Email</label>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="row">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      value={this.props.host.fname}
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={this.props.host.lname}
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <input
                      placeholder="user@email.com"
                      name="email"
                      value={this.props.host.email}
                      onChange={this.props.handleInputChange}
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 mb-n2">
                <div className="col-sm-6 ml-n3">
                  <label>Gender</label>
                </div>
                <div className="col-sm-6">
                  <label>Phone</label>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <select
                      name="gender"
                      value={this.props.host.gender}
                      onChange={this.props.handleInputChange}
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="nonbinary">Non-binary</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <input
                      placeholder="+1 222-222-2222"
                      name="phone"
                      value={this.props.host.phone}
                      type="tel"
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 mb-n2">
                <label htmlFor="title">Title</label>
              </div>
              <div className="row">
                <input
                  name="title"
                  placeholder="ex: Recruiter"
                  value={this.props.host.title}
                  type="text"
                  onChange={this.props.handleInputChange}
                  />
              </div>
              <div className="row mt-3 mb-n2">
                <div className="col">
                  <div className="row mb-n2">
                    <label htmlFor="">
                      Years of experience in current industry
                    </label>
                  </div>
                  <div className="row">
                    <input
                      type="number"
                      placeholder="10+ years"
                      name="stage"
                      value={this.props.host.stage}
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                  <div className="row mt-3 mb-n3">
                    <label htmlFor="">
                      <label htmlFor="">Company</label>
                    </label>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="company"
                      placeholder="ex: YoloShadow"
                      value={this.props.host.company}
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                  <div className="row mt-3 mb-n2">
                    <label>Company website</label>
                  </div>
                  <div className="row">
                    <input
                      placeholder="website url"
                      name="website"
                      value={this.props.host.website}
                      type="text"
                      onChange={this.props.handleInputChange}
                    />
                  </div>
                  <div className="row"></div>
                </div>
                <div className="col">
                  <label htmlFor="">One line to describe what you do</label>
                  <textarea name="description"
                      value={this.props.host.description}
                      onChange={this.props.handleInputChange}
                      ></textarea>
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

export default Page1;
