import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./checkout.css";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import Bottom from "../components/bottom";

class checkoutSuccess extends Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Thanks for your order!</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} auth={this.props.auth} />
        </div>

        <div className="messageDiv">
          <p className="message">Thanks for your order!</p>
        </div>

        <div>
          <Bottom />
          <br />
          <br />
        </div>

        <div className="col offset-.5 footerpage p-0 m-0">
          <FooterPage />
        </div>

      </div>
    )
  }
}

export default checkoutSuccess;