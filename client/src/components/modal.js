import React, { Component } from "react";

class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-body">
        <h2 className="modal-title">{this.props.title}</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button
            className="btn btn-primary toggle-button"
            onClick={this.onClose}
          >
            Close
          </button>
          {this.props.actions}
        </div>
      </div>
    );
  }
}

export default Modal;
