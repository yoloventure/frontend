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
import Star from '../photos/Star.svg'
import "./experienceDetail.css";

export default class ExperienceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null,
      editDisabled:true
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
  enableEdit = () => {
    this.setState((prevState) => ({
      editDisabled: !prevState.editDisabled,
    }));
  };
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
              <div className="col-lg-3 col-md-11 offset-1 col-sm-11 mt-5 pt-5"  style={{zIndex:2}}>
                <img src={this.state.experience.image[0]} style={{width:'20rem'}}/>
                <div className="d-flex flex-row pt-5" 
                     style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","letterSpacing":"0em"}}
                >
                  <p
                      style={{color:"black","fontSize":"200%","lineHeight":"150%"}}
                  >
                      {host.user.fname} 
                    </p>
                  
                    { (host.company.website!=="" && host.company.website!==undefined)?<a href={"http://"+host.company.website} 
                                              style={{color:"black",paddingLeft:"6rem",paddingTop:"1.5rem","fontSize":"80%","lineHeight":"80%"}}
                                            > Website </a>
                    :null
                    }  
                  
                    { (host.intagramProfile!=="" && host.intagramProfile!==undefined)?<a href={"http://instagram.com/"+host.intagramProfile} 
                                              style={{color:"black",paddingLeft:"1rem",paddingTop:"1.5rem","fontSize":"80%","lineHeight":"80%"}}
                                            > Instagram </a>
                    :null
                    }

                  
                </div>
                <div className="d-flex expDetail-content">
                  <button id="btn-message" onclick="#">
                    Message
                  </button>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 expDetail-overview expDetail-content" style={{height:'65%', width:'100%'}}>
                <div style={{padding:'5rem'}}>
                  <div className="d-flex pt-4">

                    <h1 style={{width:'100%',paddingTop:"2rem",paddingRight:"1.5rem","fontFamily":"Mplus 1p","fontSize":"1.5rem","fontStyle":"normal","fontWeight":"500","lineHeight":"2rem","letterSpacing":"4px","textAlign":"left"}}>
                      
                      Shadow an experienced {
                      host.title
                      }
                    </h1>
                    {<img src={Star} style={{height:"2rem"}}/>}

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
                  {console.log(this.state.experience.durationDays)}
                    {this.state.experience.durationDays!=undefined? (this.state.experience.durationDays>1?  <span> {this.state.experience.durationDays} day  </span> :  <span> {this.state.experience.durationDays} days  </span>) :null}
                    {this.state.experience.durationHours!=undefined?  <span> {this.state.experience.durationHours} hours  </span> : null}
                    <span style={{marginLeft:'2rem'}}> ${this.state.experience.price} </span>
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
            </div>

            <div className="row offset-1 expDetail_subsection">
              <h2> Expectations </h2>
            </div>
            <div className="row offset-1 pt-2">
              <h3> What I Can Offer </h3>
            </div>

            <div className="row offset-1 pt-0">
              {console.log(host)}
              {host.offering.map((item, index) => {
                console.log(index)
                return <CardExpDetail item={item}  index={index}  />
              })
              }
            </div>

            <div className="container pt-0 quote">
              <blockquote>{this.state.host.description}</blockquote>
            </div>

            <div className="row offset-1 expDetail_subsection">
              <h2> Reviews </h2>
            </div>
            <div className="row offset-1 pt-2 pb-5">
              <h3> What Shadowers Say </h3>
            </div>

            <div className="row offset-1">
              {this.state.experience.reviews.map((item, index) => (
                <CardExpDetailReview item={item} index={index} />
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
