/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import "./homepage.css";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import homeArrow from "../photos/homeArrow.png";
import ScrollArrow from "../photos/ScrollForMore.png";
import Background from "../photos/CoverPhoto.png";
import Bottom from "../components/bottom";
import FooterPage from "../components/footer";
import Link from "react-router-dom";
import BrandImage from "../photos/brand_image.png";
import { Helmet } from "react-helmet";
import YoloChat from "../components/yoloChat";
import Modal from "../components/Modal2";


export default class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: ""
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  render() {
    const Link = require("react-router-dom").Link;

    return (
      <div className="section">

        <Helmet>
          <title>
            Yolo Shadow | Transformative job shadowing with small business
            owners
          </title>
          <meta
            property="og:image"
            content={"http://yoloshadow.com" + BrandImage}
          />
        </Helmet>

        <div className="pb-0 mb-0">
          <Navbar textColor={"white"} />
          <div style={{ backgroundImage: "url(" + Background + ")" }}>
            <div className="col-12  pt-4 pl-5"></div>

            <div className="row pt-5">
              <div className="col-lg-9 col-10 offset-1 mt-2 pt-5">
                <h3
                  className="pb-3"
                  style={{
                    fontFamily: "Mplus 1p",
                    fontStyle: "normal",
                    fontSize: "100%",
                    color: "white",
                    letterSpacing: "5px",
                  }}
                >
                  {" "}
                  ARE YOU READY?{" "}
                </h3>
                <h3
                  className="pt-4"
                  style={{
                    lineHeight: "100%",
                    fontSize: "7vw",
                    color: "white",
                    fontWeight: "670",
                  }}
                >
                  Transformative job <br />
                  shadowing
                  <span
                    style={{
                      lineHeight: "100%",
                      paddingBottom: "3%",
                      fontSize: "7vw",
                      fontWeight: "670",
                      color: "#F2C94C",
                    }}
                  >
                    {" "}
                    with small <br /> business owners{" "}
                  </span>{" "}
                </h3>
              </div>
              <div
                className="d-none d-md-block col-lg-2 col-2"
                id="scrollForMore"
              >
                <h3
                  className=""
                  style={{
                    position: "absolute",
                    top: "50%",
                    width: "272px",
                    height: "28px",
                    fontFamily: "Mplus 1p",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: "12.6px",
                    lineHeight: "26px",
                    letterSpacing: "6px",
                    textTransform: "uppercase",
                    color: "#FCFCFC",
                    transform: "rotate(90deg)",
                  }}
                >
                  Scroll For More{" "}
                </h3>

                <a
                  href="#homepageSlider"
                  style={{ position: "absolute", top: "77%", left: "53%" }}
                >
                  {" "}
                  <img src={ScrollArrow}></img>
                </a>
              </div>
            </div>

           

            <div className="  pt-4" style={{ paddingBottom: "6%" }}>
              <Link to="explore" className=" ">
                <div
                  className=" row offset-1 hoverButton"
                  style={{
                    border: "5px solid #ffffff",
                    height: "5%",
                    width: "60%",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="col-sm-10 pt-2">
                    <h2
                      className=""
                      style={{
                        textDecoration: "none",
                        fontFamily: "Mplus 1p",
                        fontStyle: "normal",
                        fontWight: "normal",
                        fontSize: "4vh",
                        lineHeight: "163.35%",
                        alignItems: "center",
                        color: "#FCFCFC",
                      }}
                    >
                      Where is your next adventure going to be?{" "}
                    </h2>
                  </div>

                  <div className="d-none d-md-block col-1  pt-2">
                    <img src={homeArrow}></img>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div id="homepageSlider" className="row mt-5">
            <Slider />
          </div>

          {/* <h1>Hello!! {this.state.name}</h1>
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          Open Modal
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Hello Modal</h2>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal> */}

          <div
            className="container-fluid"
            id="whyYolo"
            style={{ background: "#150433" }}
          >
            <div className="row d-flex justify-content-center pb-3 ">
              <h2
                className="pt-3"
                style={{
                  fontFamily: "Mplus 1p",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "6.5vh",
                  lineHeight: "67px",
                  textAlign: "center",
                  color: "#FCFCFC",
                }}
              >
                {" "}
                Why Yolo Shadow{" "}
              </h2>
            </div>
            <div
              className="row d-flex justify-content-center  "
              style={{ paddingBottom: "4%" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontFamily: "Mplus 1p",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "29px",
                  textAlign: "center",
                  color: "#FCFCFC",
                }}
              >
                {" "}
                Yolo Shadow empowers you in every way.{" "}
              </h3>
            </div>
            <div className="container pt-5  " style={{ paddingBottom: "4%" }}>
              <div className="row">
                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#00F0B5",
                    }}
                  >
                    {" "}
                    Trustworthy{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#FCFCFC",
                    }}
                  >
                    Learn directly from experts who can inspire you to pursue
                    your passions{" "}
                  </h3>
                </div>

                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#F61067",
                    }}
                  >
                    {" "}
                    Adventurous{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#FCFCFC",
                    }}
                  >
                    Yolo Shadow empowers you to become an adventurer{" "}
                  </h3>
                </div>

                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#F2C94C",
                    }}
                  >
                    {" "}
                    Community{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#FCFCFC",
                    }}
                  >
                    {" "}
                    Join a global community of Yolo Shadowers and Hosts{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="container pt-5  " style={{ paddingBottom: "5%" }}>
              <div className="row ">
                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#F67110",
                    }}
                  >
                    {" "}
                    Customizable{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#FCFCFC",
                    }}
                  >
                    Every Yolo Shadow experience is tailored to your needs{" "}
                  </h3>
                </div>

                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#00F0B5",
                    }}
                  >
                    {" "}
                    Accessible{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#F2F2F2",
                    }}
                  >
                    Yolo Shadow strives to make job shadow more accessible to
                    everyone{" "}
                  </h3>
                </div>

                <div className="col-md-4">
                  <h2
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "27px",
                      color: "#F61067",
                    }}
                  >
                    {" "}
                    Impactful{" "}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Mplus 1p",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "18px",
                      lineHeight: "29px",
                      color: "#FCFCFC",
                    }}
                  >
                    {" "}
                    A Yolo Shadow experience opens door for career opportunities{" "}
                  </h3>
                </div>

                <Link
                  to="/explore"
                  style={{ paddingTop: "7%", paddingLeft: "40%" }}
                >
                  <button
                    className="mt-5  learnmore d-flex justify-content-center"
                    style={{
                      background: "#150433",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#FCFCFC",
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pt-5 d-flex justify-content-center">
              <h2
                className="text-center  d-flex justify-content-center"
                style={{
                  fontFamily: "Mplus 1p",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "12.6px",
                  lineHeight: "26px",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  color: "#F61067",
                }}
              >
                {" "}
                WHAT WE DO{" "}
              </h2>
            </div>
            <div className="row d-flex justify-content-center">
              <h3
                className=" text-center d-flex justify-content-center"
                style={{
                  fontFamily: "Mplus 1p",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "7hw",
                  lineHeight: "67px",
                  color: "#30233D",
                }}
              >
                {" "}
                What we do is more than you can imagine{" "}
              </h3>
            </div>

            <div className="row pt-5">
              <div className="col-4 d-flex justify-content-center">
                <h1
                  style={{
                    fontFamily: "Mplus 1p",
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: "8.2vw",
                    lineHeight: "118px",
                    textAlign: "center",
                    color: "#F61067",
                  }}
                >
                  {" "}
                  35{" "}
                </h1>
              </div>

              <div className="col-4">
                <h1
                  style={{
                    fontFamily: "Mplus 1p",
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: "8.2vw",
                    lineHeight: "118px",
                    textAlign: "center",
                    color: "#5E239D",
                  }}
                >
                  {" "}
                  142{" "}
                </h1>
              </div>

              <div className="col-4">
                <h1
                  style={{
                    fontFamily: "Mplus 1p",
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: "8.2vw",
                    lineHeight: "118px",
                    textAlign: "center",
                    color: "#00F0B5",
                  }}
                >
                  {" "}
                  12{" "}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-4 d-flex justify-content-center">
                <h1 style={{ fontSize: "15px" }}> HOSTS </h1>
              </div>

              <div className="col-4 d-flex justify-content-center">
                <h1 style={{ fontSize: "15px" }}> SHADOWERS </h1>
              </div>

              <div className="col-4 d-flex justify-content-center">
                <h1 style={{ fontSize: "15px" }}> COUNTRIES </h1>
              </div>
            </div>
          </div>

          <Bottom />
          <FooterPage />
        </div>
      </div>
    );
  }
}
