import React, { Component } from "react";

class Page6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {submittedPage6:false, errorPage6:''};

  }


  handleSubmitPage6Next=()=>{
    let host=this.props.host
    if(!host.password|| !host.confirmPassword){
      this.setState({submittedPage6:true, errorPage6:"Please fill all required fields"})
    }else if(host.password.localeCompare(host.confirmPassword)===0){

      this.props.setNextTrue()

    }else{
      this.setState({submittedPage6:true})

    }
  }
  handleSubmitPage6Back=()=>{

    this.props.setNextBack()


  }

  render() {
    return (
      <form >
        <div className="">
          <div className="container-fluid">
            <h3>Set up a password to track your application progress</h3>
            <p className="text-danger">{this.state.errorPage6}</p>

            <div className="row">
              <div className='col-3'>
              <label htmlFor="password1" onChange={this.handleInputChange}>
                Password
              </label>
              </div>

              <div className='col'>
              <input type="password" name="password"   value={this.props.host.password}
                onChange={this.props.handleInputChange}  />
              {this.state.submittedPage6 && !this.props.host.password?
                  <div className="row ml-2">Password is required</div>
                  :null
              }
              </div>

            </div>

            <div className="row pt-3">
              <div className='col-3'>
              <label htmlFor="password2">
                Confirm Password
              </label>
              </div>
              <div className='col'>
              <input type="password" name="confirmPassword"
              value={this.props.host.confirmPassword}
              onChange={this.props.handleInputChange}  />
              {this.state.submittedPage6 && this.props.host.password.localeCompare(this.props.host.confirmPassword)!==0?
                  <div className="row ml-2">Passwords do not match</div>
                  :this.state.submittedPage6 && !this.props.host.confirmPassword?
                      <div className="row ml-2">Please enter your password here</div>
                      :null
              }

              </div>

            </div>
            <div className="row mt-5 mb-4">
                    <div className="col-4 offset-4">
                      <input
                        className="btn nextBtn"
                        onClick={this.handleSubmitPage6Back}

                        value="Previous Step"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        className="btn nextBtn"
                        onClick={this.handleSubmitPage6Next}

                        value="Next Step"
                      />
                    </div>

            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Page6;
