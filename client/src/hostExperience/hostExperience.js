  
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import hostbackground from "../photos/hostbackground.jpg";
import "./hostExperience.css";
import Navbar from "../components/navbar";
import Bottom from "../components/bottom";
import FooterPage from "../components/footer";
import mark_photo from "../photos/mark.png";
import woman from "../photos/woman.jpg";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import fquote from "../photos/fquote.png";
import quotes from "../photos/quotes.png";
import bquote from "../photos/bquote.png";

class HostExperience extends React.Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">
        <Helmet>
          <title>Host an experience | YoloShadow</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} />
        </div>

        <div className="p-3">
          <div className="experience-fig1 row align-items-center ">
          <div className="host-an-experience col-md-2"></div>
          <h2>Host An Experience</h2>
          </div>
          <div className = "row" style ={ {background: "white", height: "4rem", wiedth: "100%"}}> </div>
          <br />
          <br />
          <br />


          <div className="container-fluid">
            <div className="row">

            
            <div className="row align-items-center" >
              <figure>
                <div className="col-md-10 align-self-start"  >
                <div className = "row" style ={ {background: "white", height: "4rem", wiedth: "100%"}}> </div>
                  <div className = "container why-host"  >
                  <h5 className="here10"> GETTING STARTED</h5>
                  <h3 className="whyHost">Why Host</h3>
                </div>
                <div className="row why-host">
                  <button className="applyButton" style={{background:"#5e239d",color:"#fcfcfc"}}>
                      <a href="/hostregister" style={{background:"#5e239d",color:"#fcfcfc", textAlign:"center", margin:"auto"}}>Apply Now</a>
                    </button>

                    <button className="hostGuideButton ml-5" style={{color:"#5e239d",background:"#fcfcfc"}}>
                      <a href="/hostguidelines" style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto" }}>Host Guidelines</a>
                   </button>
                
                </div>
                <div className = "row" style ={ {background: "white", height: "4rem", wiedth: "100%"}}> </div>
                <div className="fig10  align-self-end row">
                  
                <div className="insider row">
                  <div className="container  align-self-center" >
                    <h5>Small business, big impact</h5>
                    <p>
                      Unveil your impact to curious minds, reach more customers
                      and collaborators, and show your dedication to the diverse
                      business world.
                    </p>
                    <h5>Exchange perspectives</h5>
                    <p>
                      Infuse your growing business with a different point of
                      view and innovative ideas.
                    </p>
                    <h5>Grow your brand </h5>
                    <p>
                      Bring people along on your business journey and create a
                      community of fans and advocates and get rewarded for it.
                    </p>
                  </div>
                </div>
              </div>
                </div>
              </figure>
              <div className="col-md-3 ">
                <img
                  src={mark_photo}
                  alt="photo of a smiling chef"
                  className=""
                  // style={{height:"100%", width:"100%"}}
                />
              </div>
          </div>
              
            <div className=" col-md-1 quoteContainer">
              <div className="quotes quote1Inside Td-flex flex-column">
                  <img className="mt-5" src={fquote} alt="" />
                  <br />
                  <p style={{display:"flex",width: "50%", fontFamily: "Noticia Text",fontStyle: "italic",fontWeight: "normal",fontSize: "20px",lineHeight: "177.42%",display: "flex",alignItems: "center" }}>
                  YOLOers really inspire me! I’ve got different points of view on the work I do.
                  </p>{" "}
                  <br />
                  <img src={bquote} alt="" />
                </div>
              </div>
               
             </div>
            </div>
            
          {/* </div> */}

          <div className="container-md-fluid d-flex justify-content-end row mb-10">
            <div className=" d-flex flex-column align-items-end mt-5 mb-5">
              <figure className="col align-self-end">
                <h5 className="here20"> GETTING STARTED</h5>
                <h3 className="howTo">How to Become a Host</h3>
                <div className="row">
                  <button className="applyButton" style={{background:"#5e239d",color:"#fcfcfc"}}>
                      <a href="/hostregister" style={{background:"#5e239d",color:"#fcfcfc", textAlign:"center", margin:"auto"}}>Apply Now</a>
                    </button>


                    <button className="hostGuideButton ml-5" style={{color:"#5e239d",background:"#fcfcfc"}}>
                      <a href="/hostguidelines" style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto"}}>Host Guidelines</a>
                   </button>
                </div>
              </figure>
            </div>
            <div className="container-fluid row">
            
              <div className="woman-smiling align-self-center">
              <div className = "row" style ={ {background: "white", height: "4rem", wiedth: "100%"}}> </div>
                <img src={woman} alt="photo of a smiling woman" />
              </div>
              {/* <div className="quote1 col-md-3 align-items-end"> */}
              <div className ="quotes  col-md-3 d-flex justify-content-center" >
                <div className="quote1Inside d-flex flex-column align-items-center" >
                <img className="mt-5" src={fquote} alt="" />
                  <br />
                  <p style={{display:"flex",width: "50%", fontFamily: "Noticia Text",fontStyle: "italic",fontWeight: "normal",fontSize: "20px",lineHeight: "177.42%",display: "flex",alignItems: "center" }}>
                  It means a lot to me to share my insights on my job with young talents.                  </p>{" "}
                  <br />
                  <img src={bquote} alt="" />
                </div>
              </div>

              
              <div className=" col-md-30">
              <div className = "row " style ={ {background: "white", height: "4rem", width: "100%"}}> </div>
              <div className="fig10  mt-0 pt-0 align-self-end row insider justify-content-center" styles = {{ zIndex: "30"}}>
             
                  <div className="container align-self-center  d-flex flex-column" >
                    
                <h5>① Apply to host</h5>
                <p>
                  Express your interest through a simple form. It’s less about what you do and more about how passionate you are about sharing your mission with others.
                </p>
                <h5>② Create your profile</h5>
                <p>
                  Once our team reviews and approves your application, you will
                  be invited to set set up your host profile.
                </p>
                <h5>③ Start hosting</h5>
                <p>
                  Once your profile is live, shadowers will be able to browse
                  and request to book your experience immediately.
                </p>
                
                </div>
                </div>
                
              </div>
            </div>
          </div>
          <div> <Bottom />
          </div>
        </div>

        <div className="footerpages p-0 m-0"><FooterPage /></div>
      </div>
    );
  }
}

export default HostExperience;
