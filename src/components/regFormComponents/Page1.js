import React, { Component } from "react";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Full name",
      contact: "Enter your contact information",
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
            <div className="row">
              <h3>Tell us about what you do.</h3>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="">insert icon</i>
              </div>

              <p>import from LinkedIn</p>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <label>Name</label>
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
                    <label>Contact</label>
                    <input
                      name="contact"
                      value={this.state.contact}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <label>Company</label>
                    <input
                      name="company"
                      value={this.state.company}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <label>Email</label>
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      type="email"
                    />
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={this.state.phone}
                      type="tel"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <label>Company Website/Social Media</label>
                    <input
                      name="website"
                      value={this.state.website}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <label>Category</label>
                    <input
                      name="category"
                      value={this.state.category}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <label>One line to describe what you do</label>
                    <input
                      name="description"
                      value={this.state.description}
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
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

export default Page1;
