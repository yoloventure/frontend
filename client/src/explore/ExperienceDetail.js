/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from 'react-helmet';

import Navbar from "../components/Navbar";
import CardExpDetail from "../components/CardExpDetail";
import CardExpDetailReview from "../components/CardExpDetailReview";
import Footer from '../components/Footer';
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";

import APIExperience from "../api/APIExperience";

import "./ExperienceDetail.css";

export default class ExperienceDetail extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        expId: this.props.match.params.id,
        experience: {
          fname: "",
          lname: "",
          durationDays: null,
          city: "",
          profession: "",
          price: "",
          image: "",
          industry: "",
          availableFrom: null,
          availableTill: null,
          whatICanOffer: [],
          perks: [],
          reviews: [],
        },
      };

    }

    componentDidMount() {
      console.log(this.props);

      try {
        let expId = this.state.expId;
        let experience = APIExperience.getExperienceById(expId)
          .then(data => this.setState({
            experience: data,
          }));
        } catch (error) {
          console.log(error);
        }
    }

    render() {
      return (
          <div>

            <Helmet>
              <title>Shadow an experienced {this.state.experience.profession} | YoloShadow</title>
            </Helmet>

            <div className="nav pb-5">
              <Navbar textColor={'black'}  />
            </div>


            <div className="container-fluid content">

              <div className='row'>
                  <div className='col-4 offset-1 name'>
                    <img src={this.state.experience.image} />
                    <div className="d-flex pt-5">
                      <h3> {this.state.experience.fname} </h3>
                    </div>
                    <div className="d-flex pt-2">
                      <button id="btn-message" onclick="#">Message</button>
                    </div>
                  </div>
                  <div className='col-7 overview'>
                      <div className="d-flex pt-5 title">
                        <h1> Shadow an experienced {this.state.experience.profession} </h1>
                      </div>

                      <div className='d-flex pt-5 location'>
                        <span> {this.state.experience.city} </span>
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
                    "I am Dr. Gail Schupak, and I look forward to meeting you if you want to learn more about our practice and the techniques we use to treat patients. We will be discussing your career goals and be your shadowing host for 2 days. But first let me tell you about my practice and how we can help you.
                    <br />
                    I’ve been practicing and teaching orthodontics in Manhattan for over 30 years. During that time, my top priority has been to provide patients with the highest quality orthodontic care in a relaxed and upbeat environment.
                    <br />
                    Dr. Movahedian and I recognize that every patient has different orthodontic requirements. We both listen very carefully to our patients to make sure they will be satisfied with their smile. We utilize the latest and most efficient technological advances, such as high-tech wires from SureSmile®, clear braces, Invisalign®, and the latest computer technology, such as digital imaging and advanced computer graphics, to ensure that our patients receive the most effective care possible.”
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
  }
}
