import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import {
  MDBContainer
} from "mdbreact";
import Navbar from "../components/Navbar";
import FooterPage from "../components/Footer";
import { Link, Redirect,withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            job_interests:[]
        },
        submitted: false,
        errorMessage: '',
        redirect:false

      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

handleSubmit(event) {

    event.preventDefault();

    this.setState({ submitted: true });
    var user = this.state.user;
    if (user.fname && user.lname && user.email && user.password) {
        this.props.register(user);
        setTimeout(this.setState({errorMessage:"Username or Password was incorrect"}), 4000)

   }


}


componentWillReceiveProps(nextprops){
  if(nextprops.isAuthenticated){
    this.setState({errorMessage:"", redirect:true})


  }else{
    console.log('authenticated fail')

    this.setState({errorMessage:"There is already a user associated with this email."})

  }
}
renderRedirect = () => {
  if (this.state.redirect) {
      var link="/";
      return <Redirect to={link}/>
  }

};
  render() {
    const { user, submitted, errorMessage} = this.state;
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Register | YoloShadow</title>
        </Helmet>
        {this.renderRedirect()}
        <div className="nav">
          <Navbar textColor={"black"}  />
        </div>

        <div className="experience-fig-1 row align-items-center">
          <div className="col-md-2"></div>
          <h2><em>Register</em></h2>
        </div>
        <MDBContainer >
          <div className="col-md-6 col-md-offset-3">
            <p className="text-danger">{errorMessage}</p>
            <form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !user.fname ? ' has-error' : '')}>
                <label htmlFor="fname">First Name</label>
                <input type="text" className="form-control" name="fname" value={user.fname} onChange={this.handleChange} />
                {submitted && !user.fname &&
                  <div className="help-block">First Name is required</div>
                }
              </div>
              <div className={'form-group' + (submitted && !user.lname ? ' has-error' : '')}>
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control" name="lname" value={user.lname} onChange={this.handleChange} />
                {submitted && !user.lname &&
                  <div className="help-block">Last Name is required</div>
                }
              </div>
              <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                {submitted && !user.email &&
                  <div className="help-block">Email is required</div>
                }
              </div>
              <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                }
              </div>
              <div className="form-group">

                <button className="btn btn-primary">Register</button>

                {/*
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                */}
                <Link to="/login" className="btn btn-warning">Go to login</Link>
              </div>
            </form>
          </div>
        </MDBContainer >

        <div className="col offset-.5 footerpage p-0 m-0">
          <FooterPage />
        </div>
      </div>
    );
  }
}



Register.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated, //item represents the entire state
    error: state.error
});

export default compose(
  withRouter,
  connect(mapStateToProps,  {register, clearErrors})
)(Register);
