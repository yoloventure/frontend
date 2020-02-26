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
              <h4>Subscribe to Our Newsletter</h4>
            </div>
            <div className="col d-flex justify-content-center">
              <h6>stay tuned for our adventurous stories</h6>
            </div>
            <div className="col d-flex justify-content-center">
              <input type="email" placeholder="ENTER EMAIL" />
              <button>
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
