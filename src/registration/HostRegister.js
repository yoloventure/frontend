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

class HostRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      progress: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleProgressBar = this.handleProgressBar.bind(this);
  }

  handleSubmit(event) {
    if (this.state.counter == 1) {
      this.setState({ progess: 0 });
    } else if (this.state.counter == 2) {
      this.setState({ progess: 25 });
    } else if (this.state.counter == 3) {
      this.setState({ progess: 50 });
    } else if (this.state.counter == 4) {
      this.setState({ progess: 75 });
    } else if (this.state.counter == 5) {
      this.setState({ progess: 95 });
    } else {
      this.setState({ progess: 100 });
    }

    this.setState({ counter: this.state.counter + 1 });
  }

  handlePageRender(counter) {
    if (counter == 1) {
      console.log(this.props.progress);
      const pageToRender = <Page1 />;

      return pageToRender;
    } else if (counter == 2) {
      // this.setState({ progress: 25 });
      return <Page2 />;
    } else if (counter == 3) {
      return <Page3 />;
    } else if (counter == 4) {
      // this.setState({ checkCounter: 5 });
      return <Page4 />;
    } else if (counter == 5) {
      // this.setState({ checkCounter: 6 });
      return <Page5 />;
    } else if (counter == 6) {
      // this.setState({ checkCounter: 7 });
      return <Page6 />;
    } else {
      const pageToRender = <Page7 />;
      return pageToRender;
    }
  }

  // handleProgressBar(counter) {

  // }

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
            <div className="col apply">
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

              <div className="col-sm-10 progress">
                <div
                  className={"progress-bar w-" + this.state.progress}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {this.state.progress}%
                </div>
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
