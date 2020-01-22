import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer>
      <h5 className="logo">YOLO</h5>
      <p className="start">Start your next adventure with us</p>

      <h5 className="title title1">
        <a href="#">ABOUT</a>
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

      <h5 className="title title2">
        <a href="#">CONTACT US</a>
      </h5>
      <ul>
        <li className="link link1">
          <a href="#!">contact@yolo.com</a>
        </li>
        <li className="link phone">567-845-9032</li>
      </ul>

      <h5 className="title title3">
        <a href="#">FOR HOST</a>
      </h5>
      <ul>
        <li className="guidelines">
          <a href="#!">Host Guidelines</a>
        </li>
        <li className="apply">
          <a href="#">Apply Now</a>
        </li>
      </ul>

      <h5 className="title title4">
        <a href="#">FOR SHADOWER</a>
      </h5>
      <ul>
        <li className="for-shadower l1">
          <a href="#!">Shadow Guidelines</a>
        </li>
        <li className="for-shadower l2">
          <a href="#">Interest Request</a>
        </li>
      </ul>

      <h5 className="title title5">
        <a href="#">FOLLOW US</a>
      </h5>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Copyright: Yolo. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
