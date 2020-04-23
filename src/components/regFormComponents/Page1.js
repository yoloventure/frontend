import React, { Component } from "react";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      gender: "",
      title: "",
      stage: "",
      company: "",
      email: "",
      phone: "",
      website: "",
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
                      placeholder="Full name"
                      value={this.state.userName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <input
                      placeholder="user@email.com"
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
                    <select
                      value={this.state.gender}
                      onChange={this.handleChange}
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
                  placeholder="ex: Recruiter"
                  value={this.state.title}
                  type="text"
                  onChange={this.handleInputChange}
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
                      type="text"
                      placeholder="10+ years"
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
                      placeholder="ex: YoloShadow"
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
                      placeholder="website url"
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
