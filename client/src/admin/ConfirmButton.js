import React, { Component } from "react";
class ConfirmButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      label: props.label||'Unlabelled',
      question: props.question||'Confirm?',
      confirmed: false,
      className: props.className?'btn '+props.className:'btn'
    }
  }
  render() {
    return (
      <div>
        {
          this.state.confirmed!==true&&
          <button 
            type="button"
            className={this.state.className}
            onClick={()=>{this.setState({confirmed:true})}}>
            {this.state.label}
          </button>
          ||
          (
            <div>
              <span className="mr-3">{this.state.question}</span>
              <button 
                name={this.props.name}
                type="button"
                className="btn btn-success mr-3"
                onClick={(event)=>{
                  this.props.onClick(event)
                  this.setState({confirmed:false})
                }}>
                Yes
              </button>
              <button 
                type="button"
                className="btn btn-danger"
                onClick={()=>{this.setState({confirmed:false})}}>
                No
              </button>
            </div>
          )
        }
      </div>
    )
  }
}
 export default ConfirmButton;