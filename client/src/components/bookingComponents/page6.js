import React from "react";

class Page6 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3>The host will get in touch with you soon!</h3>
        </div>
        <div className="row mt-5 mb-5"></div>
        <div className="row mt-5 mb-4">
          <div className="col text-center">
            <input
              className="btn nextBtn"
              type="submit"
              value="Payment"
              onClick={this.props.goNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page6;
