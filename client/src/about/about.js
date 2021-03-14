import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import hostbackground from "../photos/hostbackground.jpg";
import "./about.css";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";
import Bottom from "../components/bottom";
import Team from "../components/team";

class About extends React.Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>About | YoloShadow</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} auth={this.props.auth} />
        </div>

        <div className="experience-fig-1 row align-items-center">
          <div className="about col-md-2"></div>
          <h2>About</h2>
        </div>

        <br />
        <br />
        <div className="container">
          <p className="text-left mt-5 mb-5">
            Yolo is a job shadowing marketplace that connects locals and
            travelers for authentic job shadow experiences. Locals can earn
            extra income for hosting job shadow experiences that are unique to
            their culture and tradition. Travelers get to experience working in
            a new city or a new field for a short period of time (1-3 days).
            Yolo is a job shadowing marketplace for two parties to exchange work
            experience, culture and knowledge. 
          </p>
          <br />
          <br />

          <div className="row align-items-center">
            {/* <h3 className="why-yolo col-4 text-center offset-3 mb-1 mt-2"> */}
            <h3 className="why-yolo text-center offset-4 mb-1 mt-2">
              Why Yolo Shadow
            </h3>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col ">
              <h4 className ="text-center mt-3 mb-3">WHY HOST</h4>
              <div className="mt-4 mb-4 ml-4 mr-4">
                <p>Demonstrate your values
                <li></li>
                  Show your openness, dedication to diversity & inclusion, and
                  willingness to give back.
                </p>
              

              <p>Get a new perspective
              <li></li>
                Infuse your business with a different point of view and
                innovative ideas.
              </p>

              <p>Grow your brand
              <li></li>
                Bring people along on your business journey and create a
                community of fans and advocates and get rewarded for it.
              </p>
              </div>
            </div>

            <div className="col">
              <h4 className ="text-center mt-3 mb-3">WHY SHADOW</h4>
              <div className="mt-4 mb-4 ml-4 mr-4">
              <p>Learn and grow
              <li></li>
                Learn directly from experts who can inspire you to pursue your
                passions.
              </p>
              
              <p>Try before you commit
              <li></li>
                Starting or changing career is daunting, we make it easy to
                sample new industries and companies before committing.
              </p>
              <p>Grow your brand
              <li></li>
                Connect with inspiring professionals across a variety of
                industries.
              </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="team d-flex flex-column container-lg-fluid h-50 d-inline-block">
          <div className="d-flex justify-content-end">
            <h3 className="our-team">OUR TEAM</h3>
          </div>

          <Team />
          {/*
          <div className="d-flex row justify-content-around">
            <div className="d-flex justify-content-center">
              <img src={shawn} alt="" className="ellipse" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={carolina} alt="" className="ellipse" />
            </div>
          </div>
          */}
          {/*
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex row justify-content-around">
              <div className="d-flex justify-content-center">
                <img src={peiyu} alt="" className="ellipse" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="ellipse  d-flex align-items-center">
                <div className="d-flex flex-column">
                  <h3 className="shell">Shelley Chen</h3>
                  <p className="ceo">CEO</p>
                  <p className="paragraph">
                    Shelley serves as CEO of Yolo. She has participated in two
                    business accelerator programs and has experience working as
                    a venture capital analyst in Malaysia.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <img src={yawo} alt="" className="ellipse" />
            </div>
          </div>*/}
          {/*
          <div className="d-flex justify-content-center">
            <img src={may} alt="" className="ellipse" />
          </div>*/}
        </div>
        <div>
          <Bottom />
          <br />
          <br />
        </div>

        <div className="col offset-.5 footerpage p-0 m-0">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default About;