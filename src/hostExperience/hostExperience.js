import React, { Component } from "react";
import hostbackground from "../photos/hostbackground.jpg";
import "./hostExperience.css";
import Navbar from "../commons/Navbar";
import bottom from "../components/bottom";
import FooterPage from "../commons/footer";
import chef from "../photos/chef.jpg";
import woman from "../photos/woman.jpg";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import fquote from "../photos/fquote.png";
import quotes from "../photos/quotes.png";
import bquote from "../photos/bquote.png";

class hostExperience extends React.Component {
  render() {
    return (
      <div className="container-fluid app">
        <div className="nav">
          <Navbar />
        </div>
        <div className="row align-items-center experience-fig1">
          <h2 className="col">Host an Experience</h2>
        </div>
        <div>
          <div className="row align-items-center">
            <figure>
              <div className="col-10 align-self-start">
                <h5 className="here10"> HERE WE GO</h5>
                <h3 className="whyHost">Why Host</h3>

                <button className="applyNow-1">
                  <a href="#">Apply Now</a>
                </button>
                <button className="hostGuidelines">
                  <a href="#">Host Guidelines</a>
                </button>
              </div>
            </figure>
          </div>
        </div>

        <div className="">
          <div className="row">
            <div className="fig10 col-5 align-self-end row">
              <div className="insider row">
                <div className="container align-self-center">
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
                    people along on your business journey and create a community
                    of fans and advocates and get rewarded for it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 align-self-center">
              <img
                src={chef}
                alt="photo of a smiling chef"
                className="chefimage"
              />
            </div>
            <div className="col-1 align-self-start">
              <figure className="quotes">
                <img src={fquote} alt="" />
                "YOLOers really inspire me! I’ve got different points of view on
                the work I do."
                <img src={bquote} alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div className="container-md-fluid d-flex justify-content-end row mb-10">
          <div className="container-sm d-flex flex-column align-items-end mt-5 mb-4">
            <figure className="col align-self-end">
              <h5 className="here20"> HERE WE GO</h5>
              <h3 className="howTo">How to Become a Host</h3>
              <button className="applyNow-2">
                <a href="#">Apply Now</a>
              </button>
              <button className="host-guidelines1">
                <a href="#">Host Guidelines</a>
              </button>
            </figure>
          </div>
          <div className="container-md-fluid row">
            <img
              className="woman-smiling col-sm-4 align-self-center"
              src={woman}
              alt="photo of a smiling woman"
            />
            <div className="quote1 col-sm-3 align-items-start">
              <div className="quote1Inside">
                <span className="begQuote">"</span>It means a lot to me to share
                my insights on my job with young talents.{" "}
                <span className="endQuote">"</span>
              </div>
            </div>

            <figure className="fig20 col-4">
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
        </div>
        {/* Third part */}
        <bottom />

        <div className="footerpages">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default hostExperience;
