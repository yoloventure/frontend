import React, { Component } from "react";
import hostbackground from "../photos/hostbackground.jpg";
// import "./about.css";
import Navbar from "../commons/Navbar";
import FooterPage from "../commons/footer";
import Bottom from "../components/bottom";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import quotes from "../photos/quotes.png";
import yawo from "../photos/yawo.png";
import shawn from "../photos/shawn.png";
import carolina from "../photos/carolina.png";
import peiyu from "../photos/peiyu.png";
import may from "../photos/may.png";

class about extends React.Component {
  render() {
    return (
      <div className="container-fluid app">
        <Navbar />

        <figure className="experience-fig">
          <h2>About</h2>
        </figure>
        <div className="container">
          <p className="text-left">
            Yolo is a job shadowing marketplace that connects locals and
            travelers for authentic job shadow experiences. Locals can earn
            extra income for hosting job shadow experiences that are unique to
            their culture and tradition. Travelers get to experience working in
            a new city or a new field for a short period of time (1-3 days).
            Yolo is a job shadowing marketplace for two parties to exchange work
            experience, culture and knowledge. 
          </p>

          <div className="row">
            <div>
              <h3 className="why-yolo">Why Yolo</h3>
            </div>
            <div className="col">
              <h4>WHY HOST</h4>

              <strong>Demonstrate your values</strong>
              <p>
                Show your openness, dedication to diversity & inclusion, and
                willingness to give back.
              </p>

              <strong>Get a new perspective</strong>
              <p>
                Infuse your business with a different point of view and
                innovative ideas.
              </p>

              <strong>Grow your brand</strong>
              <p>
                Bring people along on your business journey and create a
                community of fans and advocates and get rewarded for it.
              </p>
            </div>

            <div className="col">
              <h4>WHY SHADOW</h4>
              <strong>Learn and grow</strong>
              <p>
                Learn directly from experts who can inspire you to pursue your
                passions.
              </p>
              <strong>Try before you commit </strong>
              <p>
                Starting or changing career is daunting, we make it easy to
                sample new industries and companies before committing.
              </p>
              <strong>Grow your brand</strong>
              <p>
                Connect with inspiring professionals across a variety of
                industries.
              </p>
            </div>
          </div>
        </div>

        <div className="team d-flex flex-column container">
          <div className="d-flex justify-content-end">
            <h3 className="our-team">OUR TEAM</h3>
          </div>
          <div className="d-flex row justify-content-around">
            <div className="d-flex justify-content-center">
              <img src={shawn} alt="" className="ellipse" />
            </div>
            <div className="d-flex justify-content-end">
              <img src={carolina} alt="" className="ellipse" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex row justify-content-around">
              <div className="d-flex justify-content-center">
                <img src={peiyu} alt="" className="ellipse" />
              </div>
              <div className="d-flex justify-content-end">
                <img src={yawo} alt="" className="ellipse" />
              </div>
              <div className="d-flex justify-content-end">
                <img src={may} alt="" className="ellipse" />
              </div>
            </div>
          </div>
        </div>

        <Bottom />

        <div className="subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <h6>stay tuned for our adventurous stories</h6>

          <input type="email" placeholder="ENTER EMAIL" />
          <button>
            <a href="#"></a>Subscribe
          </button>
        </div>

        <div className="col offset-.5 footerpage">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default about;
