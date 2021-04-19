import React from "react";
import CardExpDetail from "../cardExpDetail";

class Page3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      whatMakesGood: props.data.whatMakesGood,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWhatMakesGood = this.handleWhatMakesGood.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleWhatMakesGood(event) {
    const { value } = event.target;
    this.setState(
      {
        whatMakesGood: value,
      },
      () => {
        this.props.handleWhatMakesGood(this.state.whatMakesGood);
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  What makes you a good shadower for{" "}
                  {this.props.data.experience.host.user.fname}?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col">
                <p>
                  For example, your skills, interests, past experience, etc.
                </p>
                <textarea
                  name="whatMakesGood"
                  onChange={this.handleWhatMakesGood}
                >
                  {this.state.whatMakesGood}
                </textarea>
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

export default Page3;
