/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from 'react-helmet';

import Navbar from "../components/Navbar";
import CardExpDetail from "../components/CardExpDetail";
import CardExpDetailReview from "../components/CardExpDetailReview";
import Footer from '../components/Footer'
import mapImage from "../photos/map.png"
import searchArrow from "../photos/searchArrow.png"
import data from "../explore/expDetailData.json";

import APIExperience from "../api/APIExperience";

import "./ExperienceDetail.css";

export default class ExperienceDetail extends React.Component{
    constructor(props) {
      super(props)
      let  CardsExpDetail=[];
      let CardsReview=[];
      this.state = {
        CardsExpDetail:CardsExpDetail,
        CardsReview: CardsReview,
        experience: null,
      }

      for(var i=0; i<data[0].expDetailTitles.length;i+=3){
          if(i+2<data[0].expDetailTitles.length){
          CardsExpDetail.push(
          <div class="row " style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+2]} body={data[0].expDetailBodies[i+2]} />
          </div>
          </div>)
        }else if(i+1<data[0].expDetailTitles.length){
          CardsExpDetail.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          </div>)
        }else{
        //  console.log("here")
          CardsExpDetail.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          </div>)
        }
      }
      for(var i=0; i<data[0].reviewBodies.length;i+=2){
        if(i+1<data[0].reviewBodies.length){
          CardsReview.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i]} footer={data[0].reviewFooters[i]} />
          </div>
          <div className=" col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i+1]} footer={data[0].reviewFooters[i+1]} />
          </div>
          </div>)
        }else{
        //  console.log("here")
          CardsReview.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className="card col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i]} footer={data[0].reviewFooters[i]} />
          </div>
          </div>)
        }
      }

    }

    componentDidMount() {
      console.log(this.props);

      try {
        let expId = this.props.match.params.id;
        let experience = APIExperience.getExperienceById(expId)
          .then(data => this.setState({
            expId: expId,
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
              <title>Experience title | YoloShadow</title>
            </Helmet>

            <div className="nav pb-5">
              <Navbar textColor={'black'}  />
            </div>


            <div className="container-fluid content">

              <div className='row'>
                  <div className='col-4 offset-1 name'>
                    <img src='http://via.placeholder.com/425x425' />
                    <div className="d-flex pt-5">
                      <h3> Rachel </h3>
                    </div>
                    <div className="d-flex pt-2">
                      <button id="btn-message" onclick="#">Message</button>
                    </div>
                  </div>
                  <div className='col-7 overview'>
                      <div className="d-flex pt-5">
                        <h3> Shadow an experienced Orthodonist </h3>
                      </div>

                      <div className='d-flex pt-5'>
                        <h5> New York </h5>
                      </div>
                      <div className='d-flex pt-1'>
                        <h5> 2 days </h5>
                        <h5> $56 </h5>
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

              {this.state.CardsExpDetail}

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

              {this.state.CardsReview}

            </div>


            <div className="footer">
              <Footer/>
            </div>

          </div>
    );
  }
}
