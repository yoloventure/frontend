/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../commons/Navbar";
import "./Explore.css";

class Explore extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="search">
          <h1>Start Your next Journey </h1>
          <input
            type="text"
            id="mySearch"
            placeholder="Search.."
            title="Start Your next Journey"
          />
          <ul id="subnav">
            <li>
              <a id="industry" href="#">
                {" "}
                Industry{" "}
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Education{" "}
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Engineering
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Arts & Design
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Healthcare
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Food
              </a>
            </li>
          </ul>

          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <input
                type="text"
                placeholder="Dates."
                id="myInput"
                onkeyup="filterFunction()"
              />
              <a href="#about">About</a>
              <a href="#base">Base</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <a href="#custom">Custom</a>
              <a href="#support">Support</a>
              <a href="#tools">Tools</a>
            </div>
          </div>
          {/* 
          <a href="sub-page.php">
            <section>
              <img src="images/event1.jpg" alt="event1" />
              <div> New York </div>
              <div>orthodonist </div>
              <div> 21 days </div>
              <div> $56 </div>
            </section>
          </a>

          <a href="sub-page.php">
            <section>
              <img src="images/event1.jpg" alt="event1" />
              <div> New York </div>
              <div>orthodonist </div>
              <div> 21 days </div>
              <div> $56 </div>
            </section>
          </a>

          <a href="sub-page.php">
            <section>
              <img src="images/event1.jpg" alt="event1" />
              <div> New York </div>
              <div>orthodonist </div>
              <div> 21 days </div>
              <div> $56 </div>
            </section>
          </a>

          <a href="sub-page.php">
            <section>
              <img src="images/event1.jpg" alt="event1" />
              <div> New York </div>
              <div>orthodonist </div>
              <div> 21 days </div>
              <div> $56 </div>
            </section>
          </a>
          */}

          <div className="row">
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <footer>
            <section>
              <button class="button1" onClick="location.href='index.html'">
                Go back to the Home Page
              </button>
            </section>
          </footer>
        </section>
      </div>
    );
  }
}

export default Explore;
