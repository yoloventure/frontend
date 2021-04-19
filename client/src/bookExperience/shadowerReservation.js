import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./shadowerReservation.css";
import Navbar from "../components/navbar";
import RegistrationFooter from "../components/registrationFooter";
import Page1 from "../components/bookingComponents/page1";
import Page2 from "../components/bookingComponents/page2";
import Page3 from "../components/bookingComponents/page3";
import Page4 from "../components/bookingComponents/page4";
import Page5 from "../components/bookingComponents/page5";
import Page6 from "../components/bookingComponents/page6";
import Page7 from "../components/bookingComponents/page7";
import APIUser from "../api/apiUser";
import APIHost from "../api/apiHost";
import APIExperience from "../api/apiExperience";
import APIReservation from "../api/apiReservation";
import APIBookExp from "../api/apiBookExp";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register,loadUser } from '../actions/authActions';

class ShadowReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        host:null,
        shadower: null,
        experience: null,
        availableRanges: null,
        aspects: {},
        otherAspects: "",
        whatMakesGood: "",
        accomodations: "",
        approval: "pending",
      },
      loaded: false,
      counter: 1,
      progress: 15,
    };

    this.handleDateRange = this.handleDateRange.bind(this);
    this.handleAspectSelect = this.handleAspectSelect.bind(this);
    this.handleOtherAspects = this.handleOtherAspects.bind(this);
    this.handleWhatMakesGood = this.handleWhatMakesGood.bind(this);
    this.handleAccomodations = this.handleAccomodations.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//this.props.match.params.id will return host ID.
  componentWillMount() {
    try {
      APIExperience.getExperienceById(this.props.match.params.id)
          .then(experience => this.setState(prevState => {
            return {
              data: {
                ...prevState.data,
                host:experience.host,
                shadower:this.props.auth.user._id,
                experience: experience
              },
              loaded: true
            }
          }));
    } catch (error) {
      console.log(error);
    }

    toast.configure();
  }

  goNext = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        progress: prevState.progress + 15,
        goNext: false
      }
    }, this.handleSubmit);
  }

  goPrev = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
        progress: prevState.progress - 15,
        goPrev: false
      }
    }, this.handleSubmit);
  }

  handleDateRange(availableRanges) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          availableRanges: availableRanges
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleAspectSelect(aspects) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          aspects: aspects
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleOtherAspects(otherAspects) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          otherAspects: otherAspects
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleWhatMakesGood(whatMakesGood) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          whatMakesGood: whatMakesGood
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleAccomodations(accomodations) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          accomodations: accomodations
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleFileUpload(file, index) {
    this.setState(prevState => {
      prevState.data.files[index] = file;
      return {
        data: {
          ...prevState.data,
        }
      }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleSubmit() {
    if (this.state.counter == 6 && this.formValidation()) {
      console.log("Submit API called");
      let data = this.state.data;
      let availableRanges = [];
      availableRanges.push(data.availableRanges.startDate);
      availableRanges.push(data.availableRanges.endDate);
      data.availableRanges = availableRanges;

      data.shadower = this.props.auth.user._id;

      APIReservation.createReservation(data)
          .then((function (res) {
              var path = "/api/host/" + res.host;
              return fetch(path, {
                  method: 'get',
                  credentials: "include",
                  headers: new Headers({
                  'Content-Type': 'application/json'
              }),
              }).then((response) => {
                console.log('response');
                response.json().then( host=>{
                  console.log(host);
                  var currentReservationStack=host.reservationStack;
                  console.log(res._id);
                  currentReservationStack.push(res._id);
                  console.log(currentReservationStack);
            return fetch("/api/host/"+res.host, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "reservationStack": currentReservationStack,
            }),
            credentials: "include"
            }).then(response => {
               response.json().then( newHost=>{
               console.log(newHost);
                             var path2 = "/api/user/" + data.shadower;
              return fetch(path2, {
                  method: 'get',
                  credentials: "include",
                  headers: new Headers({
                  'Content-Type': 'application/json'
              }),
              }).then((response) => {
                console.log('response');
                response.json().then( user=>{
                  console.log(user);
                  var currentmyreviews=user.myreviews;
                  currentmyreviews.push(res._id);
                  console.log("myreviews");
                  console.log(currentmyreviews);
            return fetch("/api/user/"+data.shadower, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "myreviews": currentmyreviews,
            }),
            credentials: "include"
            }).then(response => {
                            response.json().then( newUser=>{
                  console.log(newUser);
                 
                 
                  
                }); 
            }).catch((err) => {
              console.log(err);
            });
                  
                }); 
              }).catch((err) => {
                  console.log(err);
              });
                 
                 
                  
                }); 
            }).catch((err) => {
              console.log(err);
            });
                  
                }); 
              }).catch((err) => {
                  console.log(err);
              });
            //let currentHost = APIHost.getHostById('5f14aba6e1d046aa0894f3c3');

          }));
    }
  }

  formValidation() {
    const data = this.state.data;
    let success = true;

    if (!data.availableRanges) {
      toast.error("You need to specify your availability", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 5, progress: 75});
      success = false;
    }
    /*
    if (!data.files[0]) {
      toast.error("You need to upload an ID", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 5, progress: 85.7142857143});
      success = false;
    }
    if (!data.files[1]) {
      toast.error("You need to upload a picture of you at work", {position: toast.POSITION.BOTTOM_RIGHT});
      this.setState({counter: 5, progress: 85.7142857143});
      success = false;
    }
    */

    return success;
  }

  handlePageRender(counter) {
    switch(counter) {
      case 1:
        return <Page1 handleDateRange={this.handleDateRange} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 2:
        return <Page2 handleAspectSelect={this.handleAspectSelect} handleOtherAspects={this.handleOtherAspects} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 3:
        return <Page3 handleWhatMakesGood={this.handleWhatMakesGood} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 4:
        return <Page4 handleAccomodations={this.handleAccomodations} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 5:
        return <Page5 goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 6:
        return <Page6 goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 7:
        return <Page7 goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
    }
  }

  render() {
    if (this.state.loaded) {
      return (
          <div className="container-fluid app">

            <Helmet>
              <title>Shadow an experienced {this.state.data.experience.host.title} | YoloShadow</title>
            </Helmet>

            <div className="nav pb-5">
              <Navbar textColor={"black"} />
            </div>

            <div className="container pt-5 mt-5 mb-5">
              <div className="top row">
                <div className="col-md-4">
                </div>
                <div className="col apply ml-5">
                  <p>Shadow an experienced {this.state.data.experience.host.title}</p>
                </div>
              </div>
            </div>

            <div className="main container">
              {/*Progress Bar*/}

              <div onSubmit={this.handleSubmit}>
                <div className="row mt-5">
                  <div className="col-sm-2" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"140%","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
                    <p>PROGRESS</p>
                  </div>

                  <div className="col-sm-10 progress" style={{ height: "2px" }}>
                    <div
                        className={"progress-bar  w-" + this.state.progress}
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/*Components go here: replace with components */}

                <div className="insert">
                  {this.handlePageRender(this.state.counter)}
                </div>
              </div>
            </div>

            <div className="footerpages">
              <RegistrationFooter />
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

            <div className="footerpages">
              <RegistrationFooter/>
            </div>
          </div>
      );
    }
  }
}

ShadowReservation.propTypes = {
  register: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth:state.auth //item represents the entire state
});

export default connect(mapStateToProps,  {register,loadUser})(ShadowReservation)