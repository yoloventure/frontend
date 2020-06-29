import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./hostRegister.css";
import "../components/regFormComponents/imgSubmit.css";
import Navbar from "../components/Navbar";
import RegistrationFooter from "../components/RegistrationFooter";
import ortho from "../photos/ortho.png";
import Round2_Page1 from "../components/regFormComponents/Round2_Page1";
import Round2_Page2 from "../components/regFormComponents/Round2_Page2";
import Round2_Page3 from "../components/regFormComponents/Round2_Page3";
import Round2_Page4 from "../components/regFormComponents/Round2_Page4";
import Page7 from "../components/regFormComponents/Page7";
import APIHostApp from "../api/APIHostApp";

class HostRegister_Round2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: null,
      counter: 1,
      progress: 25
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
    //console.log(this.state.host);
  }

  handleSubmit(event) {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.progress < 100) {
      this.setState({ progress: this.state.progress + 25 });
    }

    var host = this.state.host;
    //APIHostApp.submitApp(host);

    window.scrollTo(0, 0);
  }

  handlePageRender(counter) {
    if (counter == 1) {
      const pageToRender = <Round2_Page1 handleInputChange={this.handleInputChange} host={this.state.host}/>;
      return pageToRender;
    } else if (counter == 2) {
      return <Round2_Page2 handleInputChange={this.handleInputChange} host={this.state.host}/>;
    } else if (counter == 3) {
      return <Round2_Page3 handleInputChange={this.handleInputChange} host={this.state.host}/>;
    } else {
      const pageToRender = <Round2_Page4 handleInputChange={this.handleInputChange}  host={this.state.host}/>;
      return pageToRender;
    }
  }

  render() {
    return (
      <div className="container-fluid app">

        <Helmet>
            <title>Apply to be a host | YoloShadow</title>
        </Helmet>

        <div className="nav pb-5">
          <Navbar textColor={"black"} />
        </div>

        <div className="container pt-5 mt-5 mb-5">
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
              <div className="col-sm-2" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"140%","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
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

export default HostRegister_Round2;
