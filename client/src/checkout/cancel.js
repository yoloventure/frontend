import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./checkout.css";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import Bottom from "../components/bottom";

class checkoutCancel extends Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Checkout Canceled</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} auth={this.props.auth} />
        </div>

        <div className="messageDiv">
          <p className="message">Forgot to add something to your cart? Shop around then come back to pay!</p>
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

export default checkoutCancel;