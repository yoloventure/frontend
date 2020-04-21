import React, { Component } from "react";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Full name",
      contact: "Enter your contact information",
      gender: "female",
      title: "ex: Recruiter",
      stage: "career stage",
      company: "example: YoloShadow",
      email: "user@gmail.com",
      phone: "22-22-222",
      website: "website url",
      category: "Health",
      description: "I work for the government"
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
    this.setState({ whatToRender: 2 });
    return data;
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
              <div className="col-sm-2">
                <i className="">insert icon</i>
              </div>

              <p>import from LinkedIn</p>
            </div>
            <div className="container-fluid">
              <div className="row mb-n2">
                <div className="col ml-n3 ">
                  <label>Name</label>
                </div>
                <div className="col ml-n3">
                  <label>Email</label>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-6">
                  <div className="row">
                    <input
                      type="text"
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
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
                    <input
                      name="gender"
                      value={this.state.gender}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <input
                      name="phone"
                      value={this.state.phone}
                      type="tel"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 mb-n2">
                <label htmlFor="title">Title</label>
              </div>
              <div className="row">
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  type="text"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="row mt-3 mb-n2">
                <div className="col">
                  <div className="row mb-n2">
                    <label htmlFor="">Career Stage</label>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="stage"
                      value={this.state.stage}
                      type="text"
                      onChange={this.handleInputChange}
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
                      value={this.state.company}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="row mt-3 mb-n2">
                    <label>Company website</label>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="website"
                      value={this.state.website}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="row"></div>
                </div>
                <div className="col">
                  <label htmlFor="">One line to describe what you do</label>
                  <textarea></textarea>
                </div>
              </div>

              <div className="row mt-5 mb-4">
                <div className="col"></div>
                <div className="col">
                  <input
                    class="btn btn-danger"
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
