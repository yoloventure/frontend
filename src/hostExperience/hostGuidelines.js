import React, { Component } from "react";
import hostbackground from "../photos/hostbackground.jpg";
import "./hostExperience.css";
import Navbar from "../commons/Navbar";
import Bottom from "../components/bottom";
import FooterPage from "../commons/footer";
import chef from "../photos/chef.jpg";
import woman from "../photos/woman.jpg";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import fquote from "../photos/fquote.png";
import quotes from "../photos/quotes.png";
import bquote from "../photos/bquote.png";

class hostGuidelines extends React.Component {
  render() {
    return (
      <div className="container-fluid app">
        <div className="nav">
          <Navbar />
        </div>
        <div className="row align-items-center experience-fig1">
          <h2 className="col">Host an Experience</h2>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="container guide">
          <div>
            <div className="row align-items-center">
              <figure>
                <div className="col-10 align-self-start">
                  <h5 className="here10"> GET STARTED NOW</h5>
                  <br />
                  <h3 className="whyHost">Host Guidelines</h3>
                  <br />

                  <button className="applyNow-1">
                    <a href="#">Apply Now</a>
                  </button>
                  <button className="applyNow-1">
                    <a href="#">Why Host</a>
                  </button>
                </div>
              </figure>
            </div>
          </div>
          <br />
          <p>
            Hosting a job shadow experience is a fantastic way for you to share
            your passion with others and get different perspectives on what you
            do.
          </p>{" "}
          <br />
          {/*-------------One---------------------------- */}
          <strong>
            <p>
              1. Find out what your guest would like to learn from your work
            </p>
          </strong>
          <br />
          <p>
            Before you host a job shadow experience, you may want to have a
            conversation with your guest about what goals he/she wants to
            achieve during the job shadow. You may customize the job shadow
            experience based on what your guest wants to learn. For example, if
            your guest is particularly interested in customer interaction, you
            may want to show how you organize meetings with customers and what
            to prepare before meeting a customer.
          </p>{" "}
          <br />
          {/*-------------Two---------------------------- */}
          <strong>
            <p>2.Let your guest know what to prepare before shadow</p>
          </strong>
          <br />
          <p>
            Let your shadower know in advance important details like dress code,
            transportation and parking options, and what they should bring with
            them, like a laptop, lunch, or other supplies. If you work in a big
            building or campus, let your shadower know where to meet you and at
            what time and give your shadower a tour of the office.
          </p>{" "}
          <br />
          {/*-------------Three---------------------------- */}
          <strong>
            <p>
              3.Offer your guest a seat next to you and showcase what you do at
              work
            </p>
          </strong>
          <br />
          <p>
            Whether you are working in a startup or a big corporation, it is
            important to be attentive when you showcase your work to your
            guests. Your guest wants to know your perspective on your work. Be
            open-minded when your guest brings fresh ideas to your work.
          </p>{" "}
          <br />
          {/*-------------Four---------------------------- */}
          <strong>
            <p>4.Leave some time for Q&A</p>
          </strong>
          <br />
          <p>
            After a day of job shadowing, your guest may have questions about
            the industry, corporate culture or your work. Leave enough time for
            your guest to ask their questions at the end of the day. This will
            help your guest figure out whether they are interested in going into
            your industry or finding a full-time job in your field.
          </p>{" "}
          <br />
          {/*-------------Five---------------------------- */}
          <strong>
            <p>5. Stay connected</p>
          </strong>
          <br />
          <p>
            After the job shadow experience, you can leave a review for your
            guest, and you can rate them on exhibited traits such as
            punctuality, attentiveness, and respectfulness. Keep in touch with
            your guests after the job shadow experience through the YOLO website
            or app. You may refer your guest to your management or human
            resources team.
          </p>{" "}
          <br />
        </div>
        <br />
        <br />
        <br />

        <div>
          <Bottom />
        </div>

        <div className="footerpages">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default hostGuidelines;
