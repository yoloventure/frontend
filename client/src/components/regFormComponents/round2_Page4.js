import React from "react";
import { Link } from "react-router-dom";

class Round2_Page4 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3>
            We are in the process of reviewing your application. You'll hear back
            from us soon!
          </h3>
        </div>
        <div className="row mt-5 mb-5"></div>
        <div className="row mt-5 mb-4">
          <div className="col text-center">
            <Link className="btn nextBtn" to="/">Done</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Round2_Page4;