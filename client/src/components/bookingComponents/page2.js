import React from "react";
import CardExpDetail from "../cardExpDetail";

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aspects: props.data.aspects,
      otherAspects: props.data.otherAspects,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAspectSelect = this.handleAspectSelect.bind(this);
    this.handleOtherAspects = this.handleOtherAspects.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleAspectSelect(key, event) {
    const { checked } = event.target;
    const key_val = key;
    this.setState(
      (prevState) => {
        prevState.aspects[key_val] = checked;
        return {
          aspects: prevState.aspects,
        };
      },
      () => {
        this.props.handleAspectSelect(this.state.aspects);
      }
    );
  }

  handleOtherAspects(event) {
    const { value } = event.target;
    this.setState(
      {
        otherAspects: value,
      },
      () => {
        this.props.handleOtherAspects(this.state.otherAspects);
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
                <h3>What aspects are you most interested in shadowing?</h3>
              </div>
            </div>
            <div className="row offset-1">
              {this.props.data.experience.whatICanOffer.map((item, index) => (
                <CardExpDetail
                  item={item}
                  index={index}
                  id={index}
                  handleAspectSelect={this.handleAspectSelect}
                  aspects={this.state.aspects}
                />
              ))}
            </div>
            <div className="row mt-5 mb-5">
              <div className="col">
                <p>What other aspects do you want to learn?</p>
                <textarea
                  name="otherAspects"
                  onChange={this.handleOtherAspects}
                >
                  {this.state.otherAspects}
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

export default Page2;
