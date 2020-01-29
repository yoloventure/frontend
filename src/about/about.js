import React, { Component } from "react";
import hostbackground from "../photos/hostbackground.jpg";
import "./about.css";
import Navbar from "../commons/Navbar";
import FooterPage from "../commons/footer";
import chef from "../photos/chef.jpg";
import woman from "../photos/woman.jpg";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import fquote from "../photos/fquote.png";
import quotes from "../photos/quotes.png";
import bquote from "../photos/bquote.png";
import yawo from "../photos/yawo.png";
import shawn from "../photos/shawn.png";
import carolina from "../photos/carolina.png";
import peiyu from "../photos/peiyu.png";
import may from "../photos/may.png";

class about extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <figure className="experience-fig">
          <h2>About</h2>
        </figure>
        <div>
          <p>
            Yolo is a job shadowing marketplace that connects locals and
            travelers for authentic job shadow experiences. Locals can earn
            extra income for hosting job shadow experiences that are unique to
            their culture and tradition. Travelers get to experience working in
            a new city or a new field for a short period of time (1-3 days).
            Yolo is a job shadowing marketplace for two parties to exchange work
            experience, culture and knowledge. 
          </p>

          <div>
            <div className="left">
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

            <div className="right">
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

          <h3 className="why-yolo">Why Yolo</h3>
        </div>

        <div className="team">
          <h3 className="our-team">OUR TEAM</h3>
          <img src={shawn} alt="" className="ellipse" />
          <img src={carolina} alt="" className="ellipse" />
          <img src={peiyu} alt="" className="ellipse" />
          <img src={yawo} alt="" className="ellipse" />
          <img src={may} alt="" className="ellipse" />
        </div>

        <figure className="fig3">
          <aside>YOLO empowers me to be an adventurer </aside>
          <img className="kaixin" src={kaixin} alt="" />
          <img className="faces" src={faces} alt="" />
          <img className="open-quote" src={quotes} alt="" />
        </figure>

        <div className="subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <h6>stay tuned for our adventurous stories</h6>

          <input type="email" placeholder="ENTER EMAIL" />
          <button>
            <a href="#"></a>Subscribe
          </button>
        </div>

        <div className="footerpage">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default about;
