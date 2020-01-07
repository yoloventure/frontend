import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer>
      <h5 className="title">YOLO</h5>
      <p>Start your next adventure with us</p>

      <h5 className="title">ABOUT</h5>
      <ul>
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

      <h5 className="title">CONTACT US</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">contact@yolo.com</a>
        </li>
        <li className="list-unstyled">567-845-9032</li>
      </ul>

      <h5 className="title">FOR HOST</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Host Guidelines</a>
        </li>
        <li className="list-unstyled">
          <a href="#">Apply Now</a>
        </li>
      </ul>

      <h5 className="title">FOR HOST</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Shadow Guidelines</a>
        </li>
        <li className="list-unstyled">
          <a href="#">Interest Request</a>
        </li>
      </ul>

      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright: Yolo. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
