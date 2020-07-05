import React from "react";

class AboutImage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imageDescription: ""
  //   };
  // }
  render() {
    return (
      <div>
        <img src={this.props.path} className="rounded-circle ellipse" />
      </div>
    );
  }
}

export default AboutImage;
