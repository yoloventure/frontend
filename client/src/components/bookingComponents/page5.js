import React from "react";

class Page5 extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3>
            Request Summary
          </h3>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <ol>
              <li>
                <b>Availability: </b>{this.props.data.availableRanges.startDate.toString()} - {this.props.data.availableRanges.endDate.toString()}
              </li>
              <li>
                <b>Aspects: </b>{this.props.data.otherAspects}
              </li>
              <li>
                <b>About you: </b>{this.props.data.whatMakesGood}
              </li>
              <li>
                <b>Accomodations: </b>{this.props.data.accomodations}
              </li>
            </ol>
            <p>
              Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col text-right">
            <input
              className="btn nextBtn"
              type="submit"
              value="Previous Step"
              onClick={this.props.goPrev}
            />
          </div>
          <div className="col text-left">
            <input
              className="btn nextBtn"
              type="submit"
              value="Submit"
              onClick={this.props.goNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page5;
