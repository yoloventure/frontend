/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from 'react-helmet';

import Navbar from "../components/navbar";
import CardExpDetail from "../components/cardExpDetail";
import CardExpDetailReview from "../components/cardExpDetailReview";
import Footer from '../components/footer';
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";

import APIExperience from "../api/apiExperience";
import APIHost from "../api/apiHost";

import "./experienceDetail.css";

export default class ExperienceDetail extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        experience: null,
      };
    }

    componentWillMount() {
      try {
        let expId = this.props.match.params.id;
        let experience = APIExperience.getExperienceById(expId)
          .then(data => this.setState({
            experience: data,
          }));
      } catch (error) {
        console.log(error);
      }
    }

    render() {
      if (this.state.experience) {
        return (
            <div>

              <Helmet>
                <title>Shadow an experienced {this.state.experience.host.title} | YoloShadow</title>
              </Helmet>

              <div className="nav pb-5">
                <Navbar textColor={'black'}  />
              </div>


              <div className="container-fluid content">

                <div className='row'>
                    <div className='col-4 offset-1 name'>
                      <img src={this.state.experience.image} />
                      <div className="d-flex pt-5">
                        <h3> {this.state.experience.host.user.fname} </h3>
                      </div>
                      <div className="d-flex pt-2">
                        <button id="btn-message" onclick="#">Message</button>
                      </div>
                    </div>
                    <div className='col-7 overview'>
                        <div className="d-flex pt-5 title">
                          <h1> Shadow an experienced {this.state.experience.host.title} </h1>
                        </div>

                        <div className='d-flex pt-5 location'>
                          <span> {this.state.experience.host.company.city}, {this.state.experience.host.company.state} </span>
                        </div>
                        <div className='d-flex pt-1 params'>
                          <span> {this.state.experience.durationDays} days </span>
                          <span> {this.state.experience.price} </span>
                        </div>

                        <div className='d-flex pt-1 controls'>
                          <button id="btn-reserve" onclick="#">RESERVE NOW</button>
                          <button id="btn-availability" onclick="#">Availability</button>
                        </div>

                    </div>
                </div>


                <div className='row offset-1 subsection'>
                  <h2> Expectations </h2>
                </div>
                <div className='row offset-1 pt-2 pb-5'>
                  <h3> What I Can Offer </h3>
                </div>

                <div className='row offset-1'>
                  {this.state.experience.whatICanOffer.map((item, index) =>
                    <CardExpDetail item={item} key={index} />
                  )}
                </div>

                <div className='container pt-4 quote'>
                    <blockquote>
                      {this.state.experience.quote}
                    </blockquote>
                </div>


                <div className='row offset-1 subsection'>
                  <h2> Reviews </h2>
                </div>
                <div className='row offset-1 pt-2 pb-5'>
                  <h3> What Shadowers Say </h3>
                </div>

                <div className='row offset-1'>
                  {this.state.experience.reviews.map((item, index) =>
                    <CardExpDetailReview item={item} key={index} />
                  )}
                </div>

              </div>


              <div className="footer">
                <Footer/>
              </div>

            </div>
      );
    } else {
      return (
        <div>
          <div className="nav pb-5">
            <Navbar textColor={'black'}  />
          </div>

          // insert loading icon

          <div className="footer">
            <Footer/>
          </div>
        </div>
      );
    }
  }
}
