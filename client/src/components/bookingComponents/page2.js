import React from "react";
import CardExpDetail from "../CardExpDetail";

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aspects: props.data.aspects
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleAspectSelect(event) {
    /*
    this.setState({
      selectedFile: event.target.files[0],
      fileName: event.target.files[0].name,
      //loaded: 0,
    }, () => {
      //console.log(event.target.files[0]);
      this.props.handleFileUpload(this.state.selectedFile, 0);
    });
    */
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  What aspects are you most interested in shadowing?
                </h3>
              </div>
            </div>
            <div className='row offset-1'>
              {this.props.data.exp.whatICanOffer.map((item, index) =>
                <CardExpDetail item={item} key={index} handleSelect={this.handleAspectSelect} />
              )}
            </div>
            <div className="row mt-5 mb-4">
              <div className="col">
                <p>
                  What other aspects do you want to learn?
                </p>
                <textarea name="otherAspects"></textarea>
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
