import React from "react";
import ReactDOM from "react-dom";

import "./cardExpDetail.css";

export default class CardExpDetail extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="col-4"  style={{"fontFamily":"Mplus 1p","fontSize":"100%","fontStyle":"normal","fontWeight":"500","lineHeight":"24px"}}>
        <p
              className="host-reg-ellipse"
              style={{ height: "4rem", width: "4rem", background: "transparent" }}
            >
              {this.props.index+1}
        </p>
        <h4 style={{fontWeight:700}}> {this.props.item.title} </h4>
        <p> {this.props.item.body} </p>
      </div>
    );
  }
}
