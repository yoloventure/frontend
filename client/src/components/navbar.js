/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import logoWhite from "../photos/Logo_white.png";
import logoColored from "../photos/Logo_colored.png";
import {Link, BrowserRouter as Router } from "react-router-dom";
import './navbar.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

// import APIAuth from "../api/APIAuth";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.logout = this.logout.bind(this);
        this.state={
            navBackgroundStyle: {}
        }
    }
    // logout() {
    //   APIAuth.logout().then();
    // }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        if(window.scrollY<0.1 && this.props.textColor !== "black"){
            this.setState(
                { navBackgroundStyle: {background:'transparent'} },
            )
        }else if (this.props.textColor !== "black") {
            this.setState(
                { navBackgroundStyle: {background:'#150433', opacity:'92%',  boxShadow: '0px 3px #888888', height:'12%'} },
            )
        }

    }

    logout=()=>{
        this.props.logout()
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        let fname='noOne'
        try {

            fname=user.fname

        }
        catch(err) {
            // console.log(err)
        }
        const styles = {
            color: "",

        };
        const styleLi = {
            marginLeft:'7%',
            marginRight:'7%'

        };
        const styles2 = {
            // marginLeft:'12%',  Comment this line so "contact us" and "host an experience" can be aligned with other texts when the window becomes smaller
            marginRight:'12%',
            whiteSpace:'pre'

        };
        let classVal=""
        let logoValue=[]
        if (this.props.textColor === "black") {
            styles.color = "black";
            styles2.color = "black";
            classVal = "navbar navbar-expand-lg fixed-top navbar-light bg "
            this.state.navBackgroundStyle= {background:'#ffffff'}
            logoValue.push(<img src={logoColored} />)
        } else {
            styles.color = "white";
            styles2.color = "white";
            classVal = "navbar navbar-expand-lg fixed-top navbar-dark bg "
            this.state.navBackgroundStyle= {background:'#150433',opacity:'92%'}
            logoValue.push(<img src={logoWhite} />)
        }

        let loginColorClass=""
        let userNameStyles={}
        if (this.props.textColor === "black") {
            loginColorClass="btn btn-outline-dark dropdown-toggle"
            userNameStyles={color:'black',marginTop:'65%',marginLeft:"120%","fontSize":"15px","opacity":"0.75"}
        } else {
            loginColorClass="btn btn-outline-light dropdown-toggle"
            userNameStyles={color:'white',marginTop:'65%',marginLeft:"120%",fontSize:'15px',"opacity":"0.75"}

        }



        return (
           
            <div>
           
                <nav id='nav' className={classVal} style={this.state.navBackgroundStyle}>

                    <a className="navbar-brand" href="/" style={{ color: "#F2C94C" }}>
                        {logoValue}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" style={styleLi}>
                                <a className="nav-link" style={styles} href="/explore">
                                    Explore
                                </a>
                            </li>
                            <li className="nav-item active" style={styleLi}>
                                <a className="nav-link" style={styles} href="/story">
                                    Story
                                </a>
                            </li>
                            <li className="nav-item active" style={styleLi}>
                                <a className="nav-link " style={styles2} href="/hostexperience">
                                    Host an Experience
                                </a>
                            </li>
                            <li className="nav-item active" style={styleLi}>
                                <a className="nav-link " style={styles} href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item active" style={styleLi}>
                                <a className="nav-link " style={styles2} href="#footerOfEachPage">
                                    Contact Us
                                </a>
                            </li>

                            {!isAuthenticated ?
                                <React.Fragment>

                                    <li className="nav-item active" style={styleLi}>
                                        <a className="nav-link "  href="/login">Login</a>
                                    </li>
                                    <li className="nav-item active" style={styleLi}>
                                        <a className="nav-link " href="/register">Register</a>
                                    </li>
                                </React.Fragment>

                                :
                                <React.Fragment>
                                    <li  className="nav-item active" style={styleLi}>
                                        <img style={{borderRadius: '50%'}} src='http://via.placeholder.com/60x60'/>
                                    </li>

                                    <li  className="nav-item active" style={{marginTop:'3%'}}>


                                        <li class="dropdown order-1">
                                            <button type="button" id="dropdownMenu1" data-toggle="dropdown" className={loginColorClass}>{fname} <span class="caret"></span></button>
                                            <ul class="dropdown-menu dropdown-menu-right mt-2">
                                                <li class="px-3 py-2">
                                                    <form class="form" role="form">
                                                        <Link to="/">
                                                            <div class="form-group">
                                                                <button type="submit" onClick={this.logout} class="btn btn-primary btn-block">Sign Out</button>
                                                            </div>
                                                        </Link>
                                                    </form>
                                                </li>

                                            </ul>

                                        </li>


                                    </li>





                                </React.Fragment>
                            }










                        </ul>



                    </div>
                </nav>
                <div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3>Forgot password</h3>
                                <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <p>Reset your password..</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                <button class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

                

        );
    }
}


Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, {logout})(Navbar);