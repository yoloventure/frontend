import React from "react";

class Page5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleJSON = this.handleJSON.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    return;
  }
  handleJSON(jsonText) {
    var host = JSON.parse(JSON.stringify(jsonText));
    return (
      <div className="container">
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              1
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>userId</b>: {host.hostId}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              2
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>first name:</b> {host.fname}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              2
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>lirst name:</b> {host.lname}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              3
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>gender:</b> {host.gender}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              4
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>title:</b> {host.title}{" "}
            </p>
          </div>
        </div>

        {host.isIndividual === false ? (
          <div className="row mb-2">
            <div className="col-2">
              <p
                className="host-reg-ellipse"
                style={{
                  height: "75%",
                  width: "50%",
                  background: "transparent",
                }}
              >
                5
              </p>
            </div>
            <div className="col-6">
              <p className="mt-2">
                {" "}
                <b>company:</b> {host.company}{" "}
              </p>
            </div>
          </div>
        ) : null}
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              5
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>Experience Description:</b> {host.description}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              5
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>What I Do:</b> {host.whatIDo}{" "}
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              5
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>industry:</b> {host.industry}{" "}
            </p>
          </div>
        </div>
        {host.twitterProfile ? (
          <div className="row mb-2">
            <div className="col-2">
              <p
                className="host-reg-ellipse"
                style={{
                  height: "75%",
                  width: "50%",
                  background: "transparent",
                }}
              >
                5
              </p>
            </div>
            <div className="col-6">
              <p className="mt-2">
                {" "}
                <b>Twitter:</b> {host.twitterProfile}{" "}
              </p>
            </div>
          </div>
        ) : null}
        {host.linkedInProfile ? (
          <div className="row mb-2">
            <div className="col-2">
              <p
                className="host-reg-ellipse"
                style={{
                  height: "75%",
                  width: "50%",
                  background: "transparent",
                }}
              >
                5
              </p>
            </div>
            <div className="col-6">
              <p className="mt-2">
                {" "}
                <b>LinkedIn:</b> {host.linkedInProfile}{" "}
              </p>
            </div>
          </div>
        ) : null}
        {host.instagramProfile ? (
          <div className="row mb-2">
            <div className="col-2">
              <p
                className="host-reg-ellipse"
                style={{
                  height: "75%",
                  width: "50%",
                  background: "transparent",
                }}
              >
                5
              </p>
            </div>
            <div className="col-6">
              <p className="mt-2">
                {" "}
                <b>Instagram:</b> {host.instagramProfile}{" "}
              </p>
            </div>
          </div>
        ) : null}
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              6
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>email:</b> {host.email}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              7
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>phone:</b> {host.phone}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              8
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>street:</b> {host.street}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              9
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>city:</b> {host.city}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              10
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>state:</b> {host.state}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              11
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>website:</b> {host.website}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              12
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>expertise:</b> {host.expertise}{" "}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <p
              className="host-reg-ellipse"
              style={{ height: "75%", width: "50%", background: "transparent" }}
            >
              13
            </p>
          </div>
          <div className="col-6">
            <p className="mt-2">
              {" "}
              <b>description:</b> {host.description}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <h3>Host Application Review/Summary</h3>
            <div className="">
              <p className="mt-2">{this.handleJSON(this.props.host)}</p>
            </div>

            <div className="row mt-5 mb-4">
              <div className="col-4 offset-4">
                <input
                  className="btn nextBtn"
                  type="submit"
                  onClick={this.props.setNextFalse}
                  value="Previous Step"
                />
              </div>
              <div className="col-4">
                <input
                  className="btn nextBtn"
                  type="submit"
                  onClick={this.props.setNextTrue}
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
