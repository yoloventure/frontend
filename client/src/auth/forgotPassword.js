import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import PropTypes from "prop-types";
import { resetAttempt } from "../actions/authActions";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      submitted: false,
      errorMessage: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email} = this.state;

    const user = {
      email
    };

    this.props.resetAttempt(user);
    if(!this.props.isAuthenticated){
      console.log('authenticated fail')
    
      this.setState({errorMessage:"No Account associate to this email"})
    }else{
      this.setState({errorMessage:""})
    
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.submitted) {
      if (nextProps.auth.attemptDone) {
        if (nextProps.auth.isAuthenticated) {
          return { errorMessage: "", redirect: true };
        } else {
          console.log("authenticated fail");
          return { errorMessage: "Username or Password was incorrect." };
        }
        //this.props.resetAttempt();
      }
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      var link = "/";
      return <Redirect to={link} />;
    }
  };

  render() {
    const { email,submitted, errorMessage } = this.state;

    return (
      <div className="container-fluid app p-0 m-0">
        <Helmet>
          <title>Forgot Passwordttt89 | YoloShadow</title>
        </Helmet>
        <div className="nav">
          <Navbar textColor={"black"} />
        </div>

        <div className="experience-fig-1 row align-items-center">
          <div className="col-md-2"></div>
          <h2>
            <em>Forgot Password</em>
          </h2>
        </div>
        <MDBContainer>
          <div className="col-md-6 col-md-offset-3">
            <p className="text-danger">{errorMessage}</p>

            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !email ? " has-error" : "")
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email && (
                  <div className="help-block">Email is required</div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </MDBContainer>

        <div className="col offset-.5 footerpage p-0 m-0">
          <FooterPage />
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, //item represents the entire state
});

export default compose(withRouter, connect(mapStateToProps, { resetAttempt }))(ForgotPassword);
