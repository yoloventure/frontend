/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import logoWhite from "../photos/Logo_white.png";
import logoColored from "../photos/Logo_colored.png";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Navbar.css'
import NavbarLoginOrProfile from './NavbarLoginOrProfile'
import APIAuth from "../api/APIAuth";

class Navbar extends React.Component {
  constructor(props) {
   super(props);
   this.logout = this.logout.bind(this);
   this.state={
     navBackgroundStyle: {}
   }
  }
  logout() {
    APIAuth.logout().then();
  }
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
            { navBackgroundStyle: {background:'#150433', opacity:'92%',  boxShadow: '0px 3px #888888'} },
          )
    }

  }



  render() {
    const styles = {
      color: "",

    };
    const styleLi = {
      marginLeft:'12%',
      marginRight:'12%'

    };
    const styles2 = {
      color: "",
      whiteSpace: "pre"

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
      logoValue.push(<img src={logoWhite} />)
    }

    return (
      <div>
      <nav  id='nav' className={classVal} style={this.state.navBackgroundStyle}>

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
                Explore <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active" style={styleLi}>
              <a className="nav-link" style={styles} href="story">
                Story
              </a>
            </li>
            {/*   <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
             <a className="dropdown-item" href="#">Another action</a>
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </li> */}
            <li className="nav-item active" style={styleLi}>
              <a className="nav-link " style={styles2} href="hostexperience">
                Host an Experience
              </a>
            </li>
            <li className="nav-item active" style={styleLi}>
              <a className="nav-link " style={styles} href="about">
                About
              </a>
            </li>
            <li className="nav-item active" style={styleLi}>
              <a className="nav-link " style={styles2} href="#footerOfEachPage">
                Contact Us
              </a>
            </li>



            <NavbarLoginOrProfile auth={this.props.auth} textColor={this.props.textColor} />


            <li className="nav-item active" style={styleLi}>
              <a className="nav-link " style={styles2} href="register">Register</a>
            </li>






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

export default Navbar;
