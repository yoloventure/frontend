import React from "react";
import "./bottom.css";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import quotes from "../photos/quotes.png";

class Bottom extends React.Component {
  render() {
    return (
      <div className="">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <img className="kaixinn" src={kaixin} alt="" />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <img className="openQuote " src={quotes} alt="" />
            </div>
            <div className="d-flex justify-content-center ">
              <p className="aside ">YOLO empowers me to be an adventurer </p>
            </div>
          </div>
          <div>
            <img className="col faces align-self-center" src={faces} alt="" />
          </div>
        </div>

        <div className="container-fluid subscriber">
          <div className="row d-flex flex-column">
            <div className="col d-flex justify-content-center">
              <h3 className="newsletter">Subscribe to Our Newsletter</h3>
            </div>
            <br />
            <div className="col d-flex justify-content-center">
              <h6 className="stay-tuned">
                stay tuned for our adventurous stories
              </h6>
            </div>
            <br />
            <br />
            <div className="col d-flex justify-content-center">
              <input
                className="enter-email"
                type="email"
                placeholder="ENTER EMAIL"
              />
              <button className="subscribe">
                <a href="#"></a>Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
