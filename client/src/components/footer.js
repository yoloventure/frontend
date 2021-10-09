import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app container-fluid">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-sm-2 pt-2 offset-1">
          <h5 className="logo">YOLO</h5>
          <p className="start">Start your next adventure with us</p>
        </div>

        <div className="col-sm-2 pt-2 offset-1 offset-md-0">
          <h5 className="title title1">
            <a style={{color:"#fcfcfc"}}  className="title title1" href="https://yoloshadow.com/about">
              ABOUT
            </a>
          </h5>
          <ul className="privacy">
            <li style={{color:"#fcfcfc"}} className="list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="/termofservice">Terms</a>
            </li>
            <li style={{color:"#fcfcfc"}} className="list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="/privacyagreement">Privacy Agreement</a>
            </li>
            <li style={{color:"#fcfcfc"}} className="list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="#!">Site map</a>
            </li>
          </ul>
        </div>

        <div className="col-sm-2 mt-4 mt-md-2 offset-1 offset-md-0">
          <h5 className="title title2 mb-md-5 ">
            <a style={{color:"#fcfcfc"}}  className="title title1" href="#">
              CONTACT US
            </a>
          </h5>
          <ul>
            <li style={{color:"#fcfcfc"}} className="footer-link footer-link1">
              <a style={{color:"#fcfcfc"}}  href="#!">yoloshadower@gmail.com</a>
            </li>
            <li style={{color:"#fcfcfc"}} className="footer-link footer-phone">+1 585-284-0150</li>
          </ul>
        </div>

        <div className="col-sm-2 pt-2 offset-1  offset-md-0">
          <h5 className="title title3 mb-md-5">
            <a style={{color:"#fcfcfc"}}  className="title title1" href="https://yoloshadow.com/hostexperience">
              FOR HOST
            </a>
          </h5>
          <ul>
            <li style={{color:"#fcfcfc"}} className="guidelines list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="https://yoloshadow.com/hostguidelines">Host Guidelines</a>
            </li>
            <li style={{color:"#fcfcfc"}} className="apply list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="https://yoloshadow.com/hostregister">Apply Now</a>
            </li>
          </ul>
        </div>

        <div className="col-sm-2 pt-2 offset-1 offset-md-0">
          <h5 className="title title4 mb-md-5">
            <a style={{color:"#fcfcfc"}}  className="title title1" href="https://yoloshadow.com/explore">
              FOR SHADOWER
            </a>
          </h5>
          <ul>
            <li style={{color:"#fcfcfc"}} className="for-shadower l1 list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="#!">Shadow Guidelines</a>
            </li>
            <li style={{color:"#fcfcfc"}} className="for-shadower l2 list-unstyled">
              <a style={{color:"#fcfcfc"}}  href="#">Interest Request</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <h5 className="col text-center mt-5" style={{ whiteSpace: "pre" }}>
          <a style={{color:"#fcfcfc"}}  href="#">F O L L O W U S</a>
        </h5>
      </div>

      <div className="row justify-content-center">
        <div className="text-center">
          <a style={{color:"#fcfcfc"}} 
            className="btn btn-social-icon "
            href="https://www.facebook.com/yoloshadow"
          >
            <i className="fa fa-facebook" style={{ color: "white" }}></i>
          </a>
          <a style={{color:"#fcfcfc"}} 
            className="btn btn-social-icon "
            href="https://www.footer-linkedin.com/company/yolo-shadow/"
          >
            <i className="fa fa-footer-linkedin" style={{ color: "white" }}></i>
          </a>
          <a style={{color:"#fcfcfc"}} 
            className="btn btn-social-icon"
            href="https://www.instagram.com/yolo.shadow/"
          >
            <i className="fa fa-instagram" style={{ color: "white" }}></i>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="footer-copyright ml-auto mr-auto">
          &copy; {new Date().getFullYear()} Copyright: Yolo. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
