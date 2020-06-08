import React, { Component } from "react";

class HostApplicationCard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <ul>
            <li><strong>Applicant name: </strong>{this.props.item.applicant_name}</li>
            <li><strong>Company name: </strong>{this.props.item.company_name}</li>
            <li><strong>Location: </strong>{this.props.item.location}</li>
            <li><strong>Duration: </strong>{this.props.item.duration}</li>
          </ul>
        </div>
        <div className="col">
          <input className="btn btn-success" type="button" value="Accept" />
          <input className="btn btn-danger" type="button" value="Reject" />
        </div>
      </div>
    );
  }
}

export default HostApplicationCard;
