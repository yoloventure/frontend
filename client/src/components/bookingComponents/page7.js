import React from "react";
import { Link } from "react-router-dom";

class Page7 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3>Reservation fee</h3>
        </div>
        <div className="row mt-5 mb-5"></div>
        <div className="row mt-5 mb-4">
          <div className="col text-center">
            <Link className="btn nextBtn" to="/">
              Done
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Page7;
