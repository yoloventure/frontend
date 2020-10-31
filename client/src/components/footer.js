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
                  <a className="title title1" href="#">ABOUT</a>
                </h5>
                <ul className="privacy">
                  <li className="list-unstyled">
                    <a href="#!">Terms</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Privacy Statement</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Site map</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-2 mt-4 mt-md-2 offset-1 offset-md-0">
                <h5 className="title title2 mb-md-5 ">
                  <a className="title title1" href="#">CONTACT US</a>
                </h5>
                <ul>
                  <li className="link link1 list-unstyled">
                    <a href="#!">yoloshadower@gmail.com</a>
                  </li>
                  <li className="link phone list-unstyled">+1 585-284-0150</li>
                </ul>
              </div>

              <div className="col-sm-2 pt-2 offset-1  offset-md-0">
                <h5 className="title title3 mb-md-5">
                  <a className="title title1" href="#">FOR HOST</a>
                </h5>
                <ul>
                  <li className="guidelines list-unstyled">
                    <a href="#!">Host Guidelines</a>
                  </li>
                  <li className="apply list-unstyled">
                    <a href="#">Apply Now</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-2 pt-2 offset-1 offset-md-0">
                <h5 className="title title4 mb-md-5">
                  <a className="title title1" href="#">FOR SHADOWER</a>
                </h5>
                <ul>
                  <li className="for-shadower l1 list-unstyled">
                    <a href="#!">Shadow Guidelines</a>
                  </li>
                  <li className="for-shadower l2 list-unstyled">
                    <a href="#">Interest Request</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt-5">
              <h5 className="col text-center follow mt-5">
                <a href="#">F O L L O W  U S</a>
              </h5>
            </div>

            <div className="row justify-content-center">
              <div className="text-center">
                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/yoloshadow"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/yolo-shadow/"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon" href="https://www.instagram.com/yolo.shadow/"><i className="fa fa-instagram"></i></a>
              </div>
            </div>

            <div className="row">
              <div className="footer-copyright ml-auto mr-auto">
                &copy; {new Date().getFullYear()} Copyright: Yolo. All rights reserved.
              </div>

            </div>



      </footer>
  );
};

export default Footer;
