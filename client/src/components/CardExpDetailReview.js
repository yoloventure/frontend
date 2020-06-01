import React from 'react';
import ReactDOM from "react-dom";

export default class CardExpDetail extends React.Component {




  render() {

  return (
      <div className="container">
            <div className="row">
              <h3  style={{color:"black", "fontStyle":"normal","fontWeight":"500","fontSize":"30px","lineHeight":"100%"}}> {this.props.body} </h3>
            </div>
            <div className="row" >
              <h3 style={{color:"black", "fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"300","fontSize":"22px","lineHeight":"163.35%"}}> {this.props.footer} </h3>
            </div>

      </div>

  );
}
}
