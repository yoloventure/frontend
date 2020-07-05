import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { MDBContainer } from 'mdbreact';
import Navbar from "../components/Navbar";
import FooterPage from "../components/Footer";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { login } from '../actions/authActions';



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            errorMessage: '',
            redirect:false
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
        const { email, password } = this.state;

         const user = {
             email,
             password
         }

         this.props.login(user);
         // if(!this.props.isAuthenticated){
         //   console.log('authenticated fail')
         //
         //   this.setState({errorMessage:"Username or Password was incorrect"})
         // }else{
         //   this.setState({errorMessage:"", redirect:true})
         //
         // }
    }

    componentWillReceiveProps(nextprops){
      if(nextprops.auth.isAuthenticated){
        this.setState({errorMessage:"", redirect:true})


      }else{
        console.log('authenticated fail')

        this.setState({errorMessage:"Username or Password was incorrect."})

      }
    }

    renderRedirect = () => {
      if (this.state.redirect) {
          var link="/";
          return <Redirect to={link}/>
      }
  };

    render() {
        const { email, password, submitted, errorMessage } = this.state;

        return (
            <div className="container-fluid app p-0 m-0">

                <Helmet>
                    <title>Login | YoloShadow</title>
                </Helmet>
                {this.renderRedirect()}
                <div className="nav">
                    <Navbar textColor={"black"}  />
                </div>

                <div className="experience-fig-1 row align-items-center">
                    <div className="col-md-2"></div>
                    <h2><em>Login</em></h2>
                </div>
                <MDBContainer >

                    <div className="col-md-6 col-md-offset-3">
                        <p className="text-danger">{errorMessage}</p>

                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                {submitted && !email &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {/*
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                */}
                                <Link to="/register" className="btn btn-warning">Register</Link>
                            </div>
                        </form>
                    </div>
                </MDBContainer>

                <div className="col offset-.5 footerpage p-0 m-0">
                    <FooterPage />
                </div>
            </div>
        )
    }
}



Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
    auth:state.auth //item represents the entire state
});

export default compose(
  withRouter,
  connect(mapStateToProps,  {login})
)(Login);
