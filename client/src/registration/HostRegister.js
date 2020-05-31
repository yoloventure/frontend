import React, { Component } from "react";
import "./hostRegister.css";
import Navbar from "../components/Navbar";
import RegistrationFooter from "../components/registrationFooter";
import ortho from "../photos/ortho.png";
import Page1 from "../components/regFormComponents/Page1";
import Page2 from "../components/regFormComponents/Page2";
import Page3 from "../components/regFormComponents/Page3";
import Page4 from "../components/regFormComponents/Page4";
import Page5 from "../components/regFormComponents/Page5";
import Page6 from "../components/regFormComponents/Page6";
import Page7 from "../components/regFormComponents/Page7";
import APIAuth from "../api/APIAuth";

class HostRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host : {
        userId: "",
        name: "",
        gender: "",
        title: "",
        stage: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        category: "Health",
        location: "",
        description: "I work for the government",
        offerOne: "",
        offerTwo: "",
        offerThree: "",
        moreOne: "",
        moreTwo: "",
        moreThree: "",
        otherAspects: "",
        expertise: "",
        password:""
      },
      counter: 1,
      progress: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const { host } = this.state;
    this.setState({
        host: {
            ...host,
            [name]: value
        }
    });
    console.log(this.state.host);
  }

  handleSubmit(event) {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.progress < 100) {
      this.setState({ progress: this.state.progress + 25 });
    }
    var host = this.state.host;
    var user = {
      fname: host.fname,
      lname: host.lname,
      email: host.email,
      password: host.password,
      job_interests: host.job_interests
    }
    var newUser = null;
    APIAuth.register(user).then(data => {
      newUser = data;
    });
  }

  handlePageRender(counter) {
    if (counter == 1) {
      const pageToRender = <Page1 handleInputChange={this.handleInputChange} host={this.state.host}/>;
      return pageToRender;
    } else if (counter == 2) {
      return <Page2 handleInputChange={this.handleInputChange} host={this.state.host}/>;
    } else if (counter == 3) {
      return <Page3 handleInputChange={this.handleInputChange} host={this.state.host}/>;
    } else if (counter == 4) {
      return <Page4 handleInputChange={this.handleInputChange}c host={this.state.host}/>;
    } else if (counter == 5) {
      return <Page5 handleInputChange={this.handleInputChange} host={this.state.host}/>;
    } else if (counter == 6) {
      return <Page6 handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} host={this.state.host}/>;
    } else {
      const pageToRender = <Page7 handleInputChange={this.handleInputChange}  host={this.state.host}/>;
      return pageToRender;
    }
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="nav">
          <Navbar textColor={"black"} />
        </div>

        <div className="container mt-5 mb-5">
          <div className="top row">
            <div className="col-md-4">
              <img
                src={ortho}
                alt="photo of orthodontist"
                className="chefimage"
              />
            </div>
            <div className="col apply ml-5">
              <p>Apply To Be A Host</p>
            </div>
          </div>
        </div>

        <div className="main container">
          {/*Progress Bar*/}

          <div onSubmit={this.handleSubmit}>
            <div className="row mt-5">
              <div className="col-sm-2">
                <p>PROGRESS</p>
              </div>

              <div className="col-sm-10 progress" style={{ height: "2px" }}>
                <div
                  className={"progress-bar  w-" + this.state.progress}
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/*Components go here: replace with components */}

            <div className="insert">
              {this.handlePageRender(this.state.counter)}
            </div>
          </div>
        </div>

        <div className="footerpages">
          <RegistrationFooter />
        </div>
      </div>
    );
  }
}

export default HostRegister;
