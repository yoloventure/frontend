import React from "react";

class Page4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accomodations: props.data.accomodations
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAccomodations = this.handleAccomodations.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleAccomodations(event) {
    const {value} = event.target;
    this.setState(
      {
        accomodations: value
      }, () => {
      this.props.handleAccomodations(this.state.accomodations);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  We care about your shadowing experience. How can we better accommodate you?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col">
                <p>
                  For example, wheelchair access, hearing aid, etc.
                </p>
                <textarea name="accomodations" onChange={this.handleAccomodations}>{this.state.accomodations}</textarea>
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
                  value="Next Step"
                  onClick={this.props.goNext}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page4;
