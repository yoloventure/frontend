import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const registrationFooter = () => {
  return (
    <footer className="app">
      <div className="row align-items-end">
        <div className="footer-copyright col align-self-center">
          &copy; {new Date().getFullYear()} Copyright: Yolo. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default registrationFooter;
