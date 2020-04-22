import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer id="footerOfEachPage" className="row app">
      <div className="col-sm-2 ml-auto">
        <h5 className="logo ">YOLO</h5>
        <p className="start">Start your next adventure with us</p>
      </div>
      <div className="col-sm-2">
        <h5 className="title title1">
          <a href="#">ABOUT</a>
        </h5>
        <ul className="privacy justify-content-center">
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
      <div className="col-sm-2">
        <h5 className="title title2">
          <a href="#">CONTACT US</a>
        </h5>
        <ul>
          <li className="link link1 list-unstyled">
            <a href="#!">contact@yolo.com</a>
          </li>
          <li className="link phone list-unstyled">567-845-9032</li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h5 className="title title3">
          <a href="#">FOR HOST</a>
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
      <div className="col-sm-3">
        <h5 className="title title4">
          <a href="#">FOR SHADOWER</a>
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

      <div className="row ">
        <h5 className="title title5 col-sm order-last ">
          <a href="#">FOLLOW US</a>
        </h5>
        <div className="footer-copyright col-md-10 offset-md-3 ">
          &copy; {new Date().getFullYear()} Copyright: Yolo. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
