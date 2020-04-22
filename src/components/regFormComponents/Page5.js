import React from "react";

class Page5 extends React.Component {
  constructor(props) {
    super(props);
    const applicationSummary = props.applicationSummary;

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = JSON.stringify(this.state);
    console.log(data);
    return data;
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <h3>Host Application Review/Summary</h3>
            <div className="row">
              <p>{this.props.applicationSummary}</p>
            </div>

            <div className="row mt-5 mb-4">
              <div className="col"></div>
              <div className="col">
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="Next Step"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page5;
