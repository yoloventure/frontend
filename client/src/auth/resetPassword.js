import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import PropTypes from "prop-types";
import { login, resetPassword } from "../actions/authActions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
      password: "",
      userId :this.props.location.pathname.substring(7),
    },
      submitted: false,
      errorMessage: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    console.log(this.props.location.pathname.substring(7));
    e.preventDefault();

    this.setState({ user:{userId:this.props.location.pathname.substring(8)},submitted: true });
     var user = this.state.user;
     this.props.resetPassword(user);
    // if(!this.props.isAuthenticated){
    //   console.log('authenticated fail')
    //
    //   this.setState({errorMessage:"Username or Password was incorrect"})
    // }else{
    //   this.setState({errorMessage:"", redirect:true})
    //
    // }
    if(this.state.user.password==""){
      this.setState({errorMessage:"A Password is Required"});
    }else{
      this.setState({errorMessage:"Your Password Has Been Successfully Reset"});
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
        this.props.resetPassword(user);
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
    const { email, password, submitted, errorMessage } = this.state;
    return (
      <div className="container-fluid app p-0 m-0">
        <Helmet>
          <title>Reset Password | YoloShadow</title>
        </Helmet>
        <div className="nav">
          <Navbar textColor={"black"} />
        </div>

        <div className="experience-fig-1 row align-items-center">
          <div className="col-md-2"></div>
          <h2>
            <em>Reset Password</em>
          </h2>
        </div>
        <MDBContainer>
          <div className="col-md-6 col-md-offset-3">
            <p className="text-danger">{errorMessage}</p>

            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !password ? " has-error" : "")
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Reset</button>
                {/*
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                */}
                <Link to="/login" className="btn btn-warning">
                  Log In
                </Link>
                <Link to="/forgot" className="btn btn-warning">
                   Forgot Password
                </Link>
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

ResetPassword.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, //item represents the entire state
});

export default compose(withRouter, connect(mapStateToProps, { resetPassword }))(ResetPassword);