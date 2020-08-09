import React from "react";

class Page4 extends React.Component {
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

  handleFileUpload(event) {
    this.setState({
      selectedFile: event.target.files[0],
      fileName: event.target.files[0].name,
      //loaded: 0,
    }, () => {
      //console.log(event.target.files[0]);
      this.props.handleFileUpload(this.state.selectedFile, 0);
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
                  We care about your shadowing experience How can we better accommodate you?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <textarea name="accomodations"></textarea>
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
