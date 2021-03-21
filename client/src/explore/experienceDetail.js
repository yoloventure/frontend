/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import CardExpDetail from "../components/cardExpDetail";
import CardExpDetailReview from "../components/cardExpDetailReview";
import Footer from "../components/footer";
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";

import APIExperience from "../api/apiExperience";
import APIHost from "../api/apiHost";

import "./experienceDetail.css";

export default class ExperienceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null,
    };
  }

  componentWillMount() {
    try {
      let expId = this.props.match.params.id;
      let experience = APIExperience.getExperienceById(expId).then((data) =>
        this.setState({
          experience: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
 
    if (this.state.experience) {
      let host=this.state.experience.host;
      return (
        <div>
          <Helmet>
            <title>
              Shadow an experienced {host.title} |
              YoloShadow
            </title>
          </Helmet>

          <div className="nav pb-5">
            <Navbar textColor={"black"} />
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-4 offset-1">
                <img src={this.state.experience.image} />
                <div className="d-flex flex-row pt-5" 
                     style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","letterSpacing":"0em"}}
                >
                  <p
                      style={{"fontSize":"200%","lineHeight":"150%"}}
                  >
                      {host.user.fname} 
                    </p>

                  
                    { (host.company.website!=="" && host.company.website!==undefined)?<a href={"http://"+host.company.website} 
                                              style={{paddingLeft:"6%",paddingTop:"3%","fontSize":"100%","lineHeight":"100%"}}
                                            > Website </a>
                    :null
                    }  
                  
                    { (host.intagramProfile!=="" && host.intagramProfile!==undefined)?<a href={"http://instagram.com/"+host.intagramProfile} 
                                              style={{paddingLeft:"6%",paddingTop:"3%","fontSize":"100%","lineHeight":"100%"}}

                                            > Instagram </a>
                    :null
                    }

                  
                </div>
                <div className="d-flex content">
                  <button id="btn-message" onclick="#">
                    Message
                  </button>
                </div>
              </div>
              <div className="col-7 overview content">

                <div className="d-flex pt-5">

                  <h1 style={{whiteSpace:"pre","fontFamily":"Mplus 1p","fontSize":"24px","fontStyle":"normal","fontWeight":"500","lineHeight":"50px","letterSpacing":"4px","textAlign":"left"}}>
                    
                    Shadow an experienced {
                    host.title
                    }
                  </h1>
                </div>

                <div className="d-flex pt-5" style={{"fontFamily":"Mplus 1p","fontSize":"24px","fontStyle":"normal","fontWeight":"500","lineHeight":"39px","letterSpacing":"0em","textAlign":"left"}}>
                    Remote
                </div>


                <div className="d-flex pt-2" style={{"fontFamily":"Mplus 1p","fontSize":"24px","fontStyle":"normal","fontWeight":"500","lineHeight":"39px","letterSpacing":"0em","textAlign":"left"}}>
                    {" "}
                    {host.company.city},{" "}
                    {host.company.state}{" "}
                </div>
                <div className="d-flex pt-1 " style={{"fontFamily":"Mplus 1p","fontSize":"24px","fontStyle":"normal","fontWeight":"500","lineHeight":"39px","letterSpacing":"0em","textAlign":"left"}}>
                  <span> {this.state.experience.durationDays} days </span>
                  <span> {this.state.experience.price} </span>
                </div>

                <div className="d-flex pt-1 controls">
                  <Link
                    id="btn-reserve"
                    className="btn"
                    to={"/reserve/" + this.props.match.params.id}
                  >
                    RESERVE NOW
                  </Link>
                  <button id="btn-availability" onclick="#">
                    Availability
                  </button>
                </div>
              </div>
            </div>

            <div className="row offset-1 subsection">
              <h2> Expectations </h2>
            </div>
            <div className="row offset-1 pt-2 pb-5">
              <h3> What I Can Offer </h3>
            </div>

            <div className="row offset-1">

              {host.offering.map((item, index) => (
                <CardExpDetail item={item} key={index} />
              ))}
            </div>

            <div className="container pt-4 quote">
              <blockquote>{this.state.experience.quote}</blockquote>
            </div>

            <div className="row offset-1 subsection">
              <h2> Reviews </h2>
            </div>
            <div className="row offset-1 pt-2 pb-5">
              <h3> What Shadowers Say </h3>
            </div>

            <div className="row offset-1">
              {this.state.experience.reviews.map((item, index) => (
                <CardExpDetailReview item={item} key={index} />
              ))}
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav pb-5">
            <Navbar textColor={"black"} />
          </div>
          // insert loading icon
          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
}
