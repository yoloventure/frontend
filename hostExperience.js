import React, { Component } from "react";
import "./hostExperience.css";
import Navbar from "./Navbar";
import FooterPage from "./footer";
import chef from "./photos/chef.jpg";
import woman from "./photos/woman.jpg";
import faces from "./photos/Faces.png";
import kaixin from "./photos/kaixin.jpg";
import fquote from "./photos/fquote.png";
import quotes from "./photos/quotes.png";
import bquote from "./photos/bquote.png";
import hostbackground from "./photos/hostbackground.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <figure className="experience-fig">
          <h2>Host an Experience</h2>
        </figure>
        <div>
          <figure>
            <h5 className="here1"> HERE WE GO</h5>
            <h3 className="why-host">Why Host</h3>
            <button className="apply-now-1">
              <a href="#">Apply Now</a>
            </button>
            <button className="host-guidelines">
              <a href="#">Host Guidelines</a>
            </button>
          </figure>
          <figure className="fig1">
            <div className="inside">
              <h5>Demonstrate your values</h5>
              <p>
                Show your openness, dedication to diversity & inclusion, and
                willingness to give back.
              </p>
              <h5>Get a new perspective</h5>
              <p>
                Infuse your business with a different point of view and
                innovative ideas.
              </p>
              <h5>Grow your brand Bring </h5>
              <p>
                people along on your business journey and create a community of
                fans and advocates and get rewarded for it.
              </p>
            </div>
          </figure>
          <img
            src={chef}
            alt="photo of a smiling chef"
            className="chef-image"
          />

          <figure className="quote">
            <img src={fquote} alt="" />
            "YOLOers really inspire me! I’ve got different points of view on the
            work I do."
            <img src={bquote} alt="" />
          </figure>
        </div>

        <div>
          <figure>
            <h5 className="here2"> HERE WE GO</h5>
            <h3 className="how-to">How to Become a Host</h3>
            <button className="apply-now-2">
              <a href="#">Apply Now</a>
            </button>
            <button className="host-guidelines-1">
              <a href="#">Host Guidelines</a>
            </button>
          </figure>
          <img className="woman" src={woman} alt="photo of a smiling chef" />
          <figure className="quote1">
            "It means a lot to me to share my insights on my job with young
            talents."
          </figure>
          <figure className="fig2">
            <h5>① Apply to host Express</h5>
            <p>
              your interest through a simple form. It’s less about what you do
              and more about how passionate you are about sharing your mission
              with others.
            </p>
            <h5>② Create your profile</h5>
            <p>
              Once our team reviews and approves your application, you will be
              invited to set set up your host profile.
            </p>
            <h5>③ Start hosting</h5>
            <p>
              Once your profile is live, shadowers will be able to browse and
              request to book your experience immediately.
            </p>
          </figure>
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

export default App;
