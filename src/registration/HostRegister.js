import React, { Component } from "react";
import "./hostRegister.css";
import Navbar from "../commons/Navbar";
import registrationFooter from "../components/registrationFooter";
import ortho from "../photos/ortho.png";
import Page1 from "../components/regFormComponents/Page1";
import Page2 from "../components/regFormComponents/Page2";
import Page3 from "../components/regFormComponents/Page3";
import Page4 from "../components/regFormComponents/Page4";
import Page5 from "../components/regFormComponents/Page5";
import Page6 from "../components/regFormComponents/Page6";
import Page7 from "../components/regFormComponents/Page7";

class HostRegister extends React.Component {
  render() {
    return (
      <div className="container-fluid app">
        <div className="nav">
          <Navbar />
        </div>

        <div className="constant">
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
          <form action="" method="POST">
            <div className="row progress">
              <div className="col-sm-2">
                <p>PROGRESS</p>
              </div>
              <div className="progress-bar"></div>
            </div>
            {/*Components go here: replace with components */}
            <div className="insert">
              <Page1 />
            </div>
            {/*Submit button */}
            <div className="row submit">
              <button>
                <a href="">Next Step</a>
              </button>
            </div>
          </form>
        </div>

        <div className="footerpages">
          <registrationFooter />
        </div>
      </div>
    );
  }
}

export default HostRegister;
