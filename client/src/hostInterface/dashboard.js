import React, { createRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import shadowRequests from "./shadowRequests.json";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ShowMoreText from "react-show-more-text";
import "./dashboard.css";
import { connect } from "react-redux";
import reviewNotifications from "./reviewNotifications.json";
// import './Dashboard.css'

import Review from './Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import { MDBBtn } from "mdbreact";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.Ref = createRef();
    const { match, location, history } = this.props;

    //setup shadow requests
    let tempArray = [];
    shadowRequests.forEach((request) => {
      tempArray.push(
        <div
          className="row mt-3"
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
            borderRadius: "4px",
          }}
        >
          <div className="col-9 offset-1">
            <h3
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "80%",
                lineHeight: "22px",
                letterSpacing: "0.01em",
              }}
            >
              {" "}
              {request.fname} sent you a shadowing request{" "}
            </h3>
          </div>
          <div className="col-2">
            <p> {request.timeStamp}</p>
          </div>
          <div className="col-1 offset-1">
            <img
              src="http://via.placeholder.com/30x30"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-3">
            <p>{request.fname}</p>
          </div>
          <div className="col-3 offset-1">
            <button
              style={{
                background: "#2ED47A",
                borderRadius: "4px",
                border: "transparent",
                fontSize: "90%",
              }}
            >
              {" "}
              Accept{" "}
            </button>
          </div>
          <div className="col-3">
            <button
              style={{
                background: "#F7685B",
                borderRadius: "4px",
                border: "transparent",
                fontSize: "90%",
              }}
            >
              {" "}
              Reject{" "}
            </button>
          </div>
        </div>
      );
    });

    //setup review notifications
    let tempArray2 = [];
    reviewNotifications.forEach((notification) => {
      tempArray2.push(
        <div
          className="row mt-3"
          style={{
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
            borderRadius: "4px",
          }}
        >
          <div className="col-6 offset-1">
            <h3
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "80%",
                lineHeight: "22px",
                letterSpacing: "0.01em",
              }}
            >
              {" "}
              {notification.fname} wrote me a review{" "}
            </h3>
          </div>
          <div className="col-4 offset-1">
            <p> {notification.reviewDate}</p>
          </div>
          <div className="col-4 offset-1">
            <h5
              style={{
                color: "#707683",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "80%",
                lineHeight: "10px",
                letterSpacing: "0.01em",
              }}
            >
              Shadowing Dates:{" "}
            </h5>
          </div>
          <div className="col-6 ">
            <h5
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "80%",
                lineHeight: "10px",
                letterSpacing: "0.01em",
              }}
            >
              {" "}
              {notification.shadowStartDate} - {notification.shadowEndDate}{" "}
            </h5>
          </div>

          <div className="col-11 offset-1">
            <ShowMoreText
              /* Default options */
              lines={1}
              more="+more"
              less="-less"
              anchorClass="moreClass"
              onClick={this.executeOnClick}
              expanded={false}
              width={280}
              color="black"
            >
              <p>{notification.reviewContent}</p>
            </ShowMoreText>
          </div>
          <div className="col-1 offset-1">
            <img
              src="http://via.placeholder.com/30x30"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-3">
            <p> {notification.fname}</p>
          </div>
          <div className="col-3 offset-4">
            <button
              style={{
                color: "#C4C4C4",
                borderRadius: "4px",
                border: "1px solid #C4C4C4",
              }}
            >
              Completed
            </button>
          </div>
        </div>
      );
    });



    let currentTemp = [];
    let currentTemp2 = [];

    try {
      currentTemp = tempArray.slice(0, 1);
    } catch (e) {}
    try {
      currentTemp2 = tempArray2.slice(0, 1);
    } catch (e) {}
    try {
      currentTemp2 = tempArray2.slice(0, 2);
    } catch (e) {}

    this.state = {
      counter: 1,
      selectionRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      rangeTextboxes: new Array(100),
      rangeObjects: new Array(100),
      textboxIdCount: 0,
      rangeEditDisabled: true,
      editExperience: false,
      shadowRequests: tempArray,
      currentShadowRequests: currentTemp,
      reviewNotifications: tempArray2,
      currentReviewNotifications: currentTemp2,
      myHistoryButton: "Show More",
      myReviewsAll: [],
      myReviewsCurrent: [],
      myReviewButton: "Show More",
      imgNames: [],
      selectedImages: [],
      showRequests: true,
      showCompleted: true,
      notificationFilters: [],
      whatICanOfferTitles: [],
      whatICanOfferBodies: [],
      perks: [],

      reviewsForShadowers: [],
      rating: "",
      body: "",
      author: "",
      host: "",

      bodyToSend: {},
      tempBody: [],
    };

    let tempArray3 = [];
    let currentTemp3 = [];
    console.log(this.props.auth)
    fetch('/api/review/host/5f14aba6e1d046aa0894f3c3' ,{
    // fetch(`/api/review/host/${this.props.auth.user.hostId}`, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        response.json().then((reviewsData) => {
          console.log(this.props.auth.user._id)
        
          
          //setup my myReviews
          
          reviewsData.forEach((review) => {
            let todayDate = new Date(review.publishDate);
            let todayDateArr = todayDate.toDateString().split(" ");
            tempArray3.push(
              <React.Fragment>
                <div className="col-11 ml-2 mb-2">
                <h3
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "19px",
                  letterSpacing: "0.01em"
                }}
              >
                
                 <div>{todayDateArr[1]} {' '}
                 {todayDateArr[3]}</div>
                   
                    {/* <div>{review.publishDate}</div> */}
                    </h3>
                  
                  <ShowMoreText
                    /* Default options */
                    lines={1}
                    more="+more"
                    less="-less"
                    anchorClass="moreClass"
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={280}
                    color="black"
                  >
                    <p style={{ fontSize: "80%" }}>{review.body}</p>
                  </ShowMoreText>
                </div>
              </React.Fragment>
            );
          });
          try {
            currentTemp3 = tempArray3.slice(0, 1);
          } catch (e) {}


          this.setState({
            myReviewsAll: tempArray3,
            myReviewsCurrent: currentTemp3,
          });
          
        });
      })
      .catch((err) => {
        console.log(err);
      });

    
      // {this.state.reviewsForShadowers.forEach((review) => {
      //   this.state.tempArray.push(
      //     <div className=" m-1 mt-1">
      //       <div className="content1">
      //         <h3
      //           style={{
      //             fontFamily: "Poppins",
      //             fontStyle: "normal",
      //             fontWeight: "600",
      //             fontSize: "13px",
      //             lineHeight: "19px",
      //             letterSpacing: "0.01em"
      //           }}
      //         >
             
                
               
      //        <div className= "">{review.publishDate}</div>
      //         </h3>
      //       </div>
            
      //       <div className="">
      //         <ShowMoreText
              
      //           lines={1}
      //           more="+more"
      //           less="-less"
      //           anchorClass="moreClass"
      //           onClick={this.executeOnClick}
      //           expanded={false}
      //           width={380}
      //           color="black"
      //         >
      //           <div 
      //           style = {{fontFamily: "Poppins",
      //           fontStyle: "normal",
      //           fontWeight: "normal",
      //           fontSize: "13px",
      //           lineHeight: "19px",
      //           letterSpacing: "0.01em",
      //           color: "#4C5862"}}>
      //           <p>{review.body}</p></div>
                
      //         </ShowMoreText>
      //       </div>
      //     </div>
      //   );
      // })} 

    console.log(tempArray3);
    console.log(currentTemp3);

    //fetch relevant experience for this host and set up initial states
    fetch('/api/experience/host/5f14aba6e1d046aa0894f3c3' ,{
    // fetch(`/api/experience/host/${this.props.auth.user.hostId}`, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        console.log(response);

        response.json().then((experience) => {
          console.log(experience);
          let tempPerks = [];
          let tempWhatICanOffer = [];
          let tempWhatICanOfferBodies = [];
          experience.perks.forEach((perk, i) => {
            tempPerks.push(perk);
          });
          experience.whatICanOffer.forEach((offer, i) => {
            tempWhatICanOffer.push(offer.title);

            tempWhatICanOfferBodies.push(offer.body);
          });
          this.setState({
            perks: tempPerks,
            whatICanOfferTitles: tempWhatICanOffer,
            whatICanOfferBodies: tempWhatICanOfferBodies,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });


      fetch('/api/user/5ed390d9f49cf627001cb8b4', {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => {
          response.json().then((reviewsData) => {
            console.log(reviewsData)
            reviewsData.review.forEach((oneReview) => {
              console.log(oneReview)
              this.state.tempBody.push(oneReview)
             } );
           
          });
        })
        .catch((err) => {
          console.log(err);
        });
      }





  

   
  postReviewsForShadower = () => {
  
    let test1 = {}
    var i =  this.state.reviewsForShadowers.length-1; 
   
      test1.shadower = "5f14aba6e1d046aa0894f3c3"
      test1.author = "5ef660a01c7b54239095e6c5"
      test1.body = this.state.reviewsForShadowers[i].body
      test1.publishDate = new Date(moment().format("MM-DD-YYYY"))
      test1.rating = this.state.reviewsForShadowers[i].rating
   
      fetch('/api/review/shadower/5f14aba6e1d046aa0894f3c3', {
  
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
       
        body: JSON.stringify(test1),
  
      })
        .then((response) => { 
          response.json().then((reviewsData) => { 
          this.state.tempBody.push(reviewsData._id)
          this.setState({bodyToSend: this.state.tempBody}, ()=>this.postReviewsToShadower() )  
        })
      })
        .catch((err) => {
          console.log(err);
        });
  }

  postReviewsToShadower = () => {
    let test1 = {}
     test1.review =  this.state.bodyToSend;
  
     fetch('/api/user/5ed390d9f49cf627001cb8b4', {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(test1),
    })
    .then((response) => {
      response.json().then((reviewsData) => {
        console.log(reviewsData)}
    )})
      .catch((err) => {
        console.log(err);
      });
  }



  


  confirmExperienceEdit = () => {
    let bodyToSend = {};
    bodyToSend["perks"] = this.state.perks;
    let whatCanIOfferArray = new Array(this.state.whatICanOfferBodies.length);
    for (let i = 0; i < whatCanIOfferArray.length; ++i) {
      //initial each element as a json
      whatCanIOfferArray[i] = {};
    }
    this.state.whatICanOfferTitles.forEach((titleToAdd, i) => {
      whatCanIOfferArray[i].title = titleToAdd;
    });

    this.state.whatICanOfferBodies.forEach((bodyToAdd, i) => {
      whatCanIOfferArray[i]["body"] = bodyToAdd;
    });
    bodyToSend["whatICanOffer"] = whatCanIOfferArray;
    //update database
    // fetch(`/api/experience/host/${this.props.auth.user.hostId}`, {
      fetch('/api/experience/host/5f14aba6e1d046aa0894f3c3', {
     
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(bodyToSend),
    })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
    this.setState({ editExperience: false });
  };


  handleSelect = (ranges) => {
    if (this.state.counter === 1) {
      this.setState({
        selectionRange: {
          startDate: ranges.selection.startDate,
          endDate: ranges.selection.startDate,
          key: "selection",
        },
      });
    } else {
      this.setState({
        selectionRange: {
          startDate: ranges.selection.startDate,
          endDate: ranges.selection.endDate,
          key: "selection",
        },
      });
    }

    if (this.state.counter === 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: 1 });
    }
  };

  addRange = () => {
    let rangesUpdated = this.state.rangeTextboxes;
    let rangesObjectsUpdated = this.state.rangeObjects;
    let textId = "textbox" + this.state.textboxIdCount;
    let startDateArray = this.state.selectionRange.startDate
      .toString()
      .split(" ");
    let endDateArray = this.state.selectionRange.endDate.toString().split(" ");

    let htmlForTextbox =
      startDateArray[0] +
      " " +
      startDateArray[1] +
      " " +
      startDateArray[2] +
      " " +
      startDateArray[3] +
      " - " +
      endDateArray[0] +
      " " +
      endDateArray[1] +
      " " +
      endDateArray[2] +
      " " +
      endDateArray[3];
    rangesUpdated[this.state.textboxIdCount] = (
      <div className="row">
        <div
          className="col-2 mt-4"
          onClick={this.deleteRange.bind(this, textId)}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-trash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>

        <div className="col-10 mt-4">
          <p>{htmlForTextbox}</p>
        </div>
      </div>
    );
    rangesObjectsUpdated[this.state.textboxIdCount] = {
      startDate: this.state.selectionRange.startDate,
      endDate: this.state.selectionRange.endDate,
    };

    this.setState({
      rangeTextboxes: rangesUpdated,
      textboxIdCount: this.state.textboxIdCount + 1,
      rangeObjects: rangesObjectsUpdated,
    });
  };

  deleteRange(id) {
    let rangesUpdated = this.state.rangeTextboxes;
    let rangesObjectsUpdated = this.state.rangeObjects;

    let idToDelete = id.charAt(7);
    rangesUpdated[idToDelete] = null;
    rangesObjectsUpdated[idToDelete] = null;

    this.setState({
      rangeTextboxes: rangesUpdated,
      rangeObjects: rangesObjectsUpdated,
    });
  }

  enableRangeEdit = () => {
    this.setState((prevState) => ({
      rangeEditDisabled: !prevState.rangeEditDisabled,
    }));
  };
  toggleExperienceEdit = () => {
    this.setState((prevState) => ({
      editExperience: !prevState.editExperience,
    }));
  };
  confirmRanges = () => {
  
    //will send rangeObjects to database then clear state.rangeObjects and state.rangeTextboxes

    let test1 ={}
  
    test1.availability = []
    for(var i = 0; i < this.state.rangeObjects.length; i++){
    
      if(this.state.rangeObjects[i]){
        test1.availability.push(this.state.rangeObjects[i].startDate)
        test1.availability.push(this.state.rangeObjects[i].endDate)
      }
    }
   

    fetch('/api/host/5f19ae6cb21fedd6cfee46b9', {
      method: "put",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
     
      body: JSON.stringify(test1),

    })
    .then((response) => {
      response.json().then((reviewsData) => {
        console.log(reviewsData)}
     
    )})
      .catch((err) => {
        console.log(err);
      });

      this.state.rangeObjects = []
      this.state.rangeTextboxes = []

  }




  changeCards = () => {
    let changeTo = 1;
    if (this.state.myHistoryButton.localeCompare("Show More") === 0) {
      changeTo = 0;
    }
    if (
      this.state.shadowRequests.length > this.state.currentShadowRequests.length
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          currentShadowRequests: prevState.shadowRequests,
        };
      });
    } else if (this.state.shadowRequests.length !== 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          currentShadowRequests: prevState.shadowRequests.slice(0, 1),
        };
      });
    }
    if (
      this.state.reviewNotifications.length >
      this.state.currentReviewNotifications.length
    ) {
      this.setState((prevState) => {
        if (changeTo === 0) {
          return {
            ...prevState,
            currentReviewNotifications: prevState.reviewNotifications,
            myHistoryButton: "Show Less",
          };
        } else {
          return {
            ...prevState,
            currentReviewNotifications: prevState.reviewNotifications,
            myHistoryButton: "Show More",
          };
        }
      });
    } else {
      this.setState((prevState) => {
        let currentTemp2 = [];

        try {
          currentTemp2 = prevState.reviewNotifications.slice(0, 1);
        } catch (e) {}
        try {
          currentTemp2 = prevState.reviewNotifications.slice(0, 2);
        } catch (e) {}

        if (changeTo === 0) {
          return {
            ...prevState,
            currentReviewNotifications: currentTemp2,
            myHistoryButton: "Show Less",
          };
        } else {
          return {
            ...prevState,
            currentReviewNotifications: currentTemp2,
            myHistoryButton: "Show More",
          };
        }
      });
    }
  };

  changeMyReviewCards = () => {
    let changeTo = 1;
    if (this.state.myReviewButton.localeCompare("Show More") === 0) {
      changeTo = 0;
    }

    if (this.state.myReviewsAll.length > this.state.myReviewsCurrent.length) {
      this.setState((prevState) => {
        if (changeTo === 0) {
          return {
            ...prevState,
            myReviewsCurrent: prevState.myReviewsAll,
            myReviewButton: "Show Less",
          };
        } else {
          return {
            ...prevState,
            myReviewsCurrent: prevState.myReviewsAll,
            myReviewButton: "Show More",
          };
        }
      });
    } else if (this.state.myReviewsAll.length !== 0) {
      this.setState((prevState) => {
        if (changeTo === 0) {
          return {
            ...prevState,
            myReviewsCurrent: prevState.myReviewsAll.slice(0, 1),
            myReviewButton: "Show Less",
          };
        } else {
          return {
            ...prevState,
            myReviewsCurrent: prevState.myReviewsAll.slice(0, 1),
            myReviewButton: "Show More",
          };
        }
      });
    }
  };

  getNextDay = (day) => {
    if (day.localeCompare("Sun") === 0) {
      return "Mon";
    } else if (day.localeCompare("Mon") === 0) {
      return "Tue";
    } else if (day.localeCompare("Tue") === 0) {
      return "Wed";
    } else if (day.localeCompare("Wed") === 0) {
      return "Thurs";
    } else if (day.localeCompare("Thurs") === 0) {
      return "Fri";
    } else if (day.localeCompare("Fri") === 0) {
      return "Sat";
    } else {
      return "Sun";
    }
  };

  handleFileUpload = (event) => {
    if (event === null) {
      this.Ref.current.value = "";
      return;
    }
    let tempNames = this.state.imgNames;
    let tempSelectedImages = this.state.selectedImages;
    if (tempNames.length !== 0) {
      tempNames.push(" , ");
    }
    console.log("called");
    console.log(event.target.files[0].name);
    console.log(this.state.imgNames);
    tempNames.push(event.target.files[0].name);
    tempSelectedImages.push(event.target.files[0]);
    this.setState({
      selectedImages: tempSelectedImages,
      imgNames: tempNames,
    });
  };

  handleInputChange = (event) => {
    //generic input change method for all input text boxes. Updates the state.
    const { name, value } = event.target;
    console.log(name + ">>" + value);
    if (
      name.localeCompare("whatICanOfferTitles") == 0 ||
      name.localeCompare("perks") == 0
    ) {
      let valueArr = value.split(",");
      this.setState((prevState) => {
        return {
          ...prevState,
          [name]: valueArr,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  updateNotificationFilters = (e) => {
    if (e.target.classList.contains("disabled")) {
      console.log(e.target.classList);
      e.target.classList.remove("disabled");
    } else {
      e.target.classList.add("disabled");
    }

    if (e.target.innerHTML.localeCompare("Requests") === 0) {
      this.setState((prevState) => ({
        ...prevState,
        showRequests: !prevState.showRequests,
      }));
    }
    if (e.target.innerHTML.localeCompare("Completed") === 0) {
      this.setState((prevState) => ({
        ...prevState,
        showCompleted: !prevState.showCompleted,
      }));
    }
    let found = false;
    let temp = this.state.notificationFilters;
    temp.forEach((notification, i) => {
      if (notification.localeCompare(e.target.innerHTML) === 0) {
        temp[i] = "";
        found = true;
      }
    });
    if (!found) {
      temp.push(e.target.innerHTML);
    }
    this.setState({ notificationFilters: temp });
  };

  callbackFunction = (childData) => {
    this.setState({
      rating: childData[0],
      body: childData[1],
      author:childData[2],
      host: childData[3]}
      
      )
}

  render() {
    let showRequests = false;
    let showCompleted = false;
    let filterSelected = false;
    this.state.notificationFilters.forEach((notification) => {
      if (notification.localeCompare("") !== 0) {
        filterSelected = true;
        if (notification.localeCompare("Requests") === 0) {
          showRequests = true;
        } else if (notification.localeCompare("Completed") === 0) {
          showCompleted = true;
        }
      }
    });
    if (!filterSelected) {
      showRequests = true;
      showCompleted = true;
    }

    let todayDate = new Date(moment().format("MM-DD-YYYY"));
    let todayDateArr = todayDate.toDateString().split(" ");
    let weekDaysToDisplay = [];
    let weekNumsToDisplay = [];
    weekNumsToDisplay[0] = parseInt(todayDateArr[2]);
    weekDaysToDisplay.push(todayDateArr[0]);
    for (var i = 1; i < 7; i++) {
      weekDaysToDisplay[i] = this.getNextDay(weekDaysToDisplay[i - 1]);
    }
    for (var i = 1; i < 7; i++) {
      weekNumsToDisplay[i] = weekNumsToDisplay[i - 1] + 1;
    }
    //  todayDate.push( moment().format("MM-DD-YYYY"))
    var distantDate = new Date(moment().add(20, "year").calendar());

    let styleViewPort = {
      height: window.innerHeight + "px",
      width: window.innerWidth + "px",
    };
    let styleDateSection = {
      boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
      borderRadius: "4px",
      height: window.innerHeight / 2.2 + "px",
    };

    return (
      <div style={styleViewPort}>
        <Navbar className="mb-5" textColor={"black"} />

        <div className="pt-5 mt-5 mr-5">
          <div className="row">
            <div className="col-5  offset-1 mt-2">
              <div
                className="row p-3"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
                  borderRadius: "4px",
                }}
              >
                <div className="col-12 ">
                  <h5
                    className=""
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontStyle: "normal",
                      color: "#334D6E",
                      fontSize: "100%",
                    }}
                  >
                    {" "}
                    My Hosting Progress
                  </h5>
                </div>
                <div style={{ height: "150px", marginLeft: "4%" }}>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      color: "#192A3E",
                      fontWeight: "700",
                    }}
                  >
                    {todayDateArr[2]} {todayDateArr[1]},{" "}
                    <span style={{ color: " #707683" }}>{todayDateArr[0]}</span>
                  </p>

                  <div className="row">
                    <p className="col-1">{weekDaysToDisplay[0]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[1]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[2]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[3]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[4]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[5]}</p>
                    <p className="col-1 ml-3">{weekDaysToDisplay[6]}</p>
                  </div>
                  <div className="row">
                    <p
                      className="col-1"
                      style={{ background: " #109CF1", borderRadius: "60%" }}
                    >
                      {weekNumsToDisplay[0]}
                    </p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[1]}</p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[2]}</p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[3]}</p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[4]}</p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[5]}</p>
                    <p className="col-1 ml-3">{weekNumsToDisplay[6]}</p>
                  </div>
                </div>

                <div className="row ">
                  <p
                    className="col-lg-2 col-3 "
                    style={{
                      whiteSpace: "pre",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      color: "#6A707E",
                    }}
                  >
                    Show :
                  </p>
                  <Button
                    className="col-lg-2 col-3  mr-2"
                    style={{
                      height: "70%",
                      fontSize: "80%",
                      background: "#2ED47A",
                      color: "white",
                    }}
                    onClick={(e) => this.updateNotificationFilters(e)}
                  >
                    Requests
                  </Button>
                  <Button
                    className="col-lg-2 col-3  mr-2 pr-4"
                    style={{
                      height: "70%",
                      fontSize: "80%",
                      background: "#FFFFFF",
                      color: "#FE8D86",
                    }}
                    onClick={(e) => this.updateNotificationFilters(e)}
                  >
                    Upcoming
                  </Button>
                  <Button
                    className="col-lg-2 col-3  mr-2 pr-2"
                    style={{
                      height: "70%",
                      fontSize: "80%",
                      background: "#FFFFFF",
                      color: "#5E239D",
                    }}
                    onClick={(e) => this.updateNotificationFilters(e)}
                  >
                    Ongoing
                  </Button>
                  <Button
                    className="col-lg-2 col-3  mr-2 pr-5"
                    style={{
                      height: "70%",
                      fontSize: "80%",
                      background: "#6C7B8A",
                      color: "#FFFFFF",
                    }}
                    onClick={(e) => this.updateNotificationFilters(e)}
                  >
                    Completed
                  </Button>
                </div>

                <div className="col-12">
                  {showRequests ? this.state.currentShadowRequests : null}
                  {showCompleted ? this.state.currentReviewNotifications : null}
                </div>
                <div className="col-12 mt-2 d-flex justify-content-center">
                  <button
                    onClick={this.changeCards}
                    style={{
                      color: "#109CF1",
                      background: "none",
                      border: "none",
                    }}
                  >
                    {" "}
                    {this.state.myHistoryButton}{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-5 offset-1">
              <div className="row">
                <div
                  className="col-12 "
                  style={{
                    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  <div className="row">
                    <h5
                      className="m-4"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "90%",
                      }}
                    >
                      My Availability
                      <button
                        onClick={this.enableRangeEdit}
                        style={{
                          outline: "none",
                          border: "transparent",
                          background: "#ffffff",
                        }}
                      >
                        <span className="fas fa-edit"></span>
                      </button>
                    </h5>

                    {!this.state.rangeEditDisabled ? (
                      <React.Fragment>
                        <MDBBtn
                          color={
                            this.state.rangeEditDisabled
                              ? " disabled ml-3"
                              : "ml-5"
                          }
                          size="sm"
                          style={{ background: "#109CF1", height: "50%" }}
                          onClick={this.addRange}
                        >
                          Add Range{" "}
                        </MDBBtn>
                        <MDBBtn
                          color={
                            this.state.rangeEditDisabled
                              ? " disabled ml-3"
                              : " ml-3"
                          }
                          size="sm"
                          style={{ background: "#109CF1", height: "50%" }}
                          onClick={this.confirmRanges}
                        >
                          Confirm and Submit{" "}
                        </MDBBtn>
                        <DateRange
                          ranges={[this.state.selectionRange]}
                          onChange={this.handleSelect}
                          moveRangeOnFirstSelection={true}
                          minDate={
                            this.state.rangeEditDisabled
                              ? distantDate
                              : todayDate
                          }
                          showDateDisplay={false}
                          showMonthArrow={false}
                          showSelectionPreview={false}
                          scroll={{
                            enabled: true,
                            calendarWidth: 100,
                            calendarHeight: 100,
                          }}
                          // maxDate={this.state.rangeEditDisabled? todayDate: new Date()}
                        />
                      </React.Fragment>
                    ) : null}

                    <div className="col-12">
                      <p
                        className="mt-2"
                        style={{
                          color: "#4C5862",
                          opacity: "0.5",
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          fontStyle: "normal",
                        }}
                      >
                        Selected Dates:
                      </p>
                      <div
                        style={{
                          height: "100px",
                          overflowY: "scroll",
                          overflowX: "hidden",
                        }}
                      >
                        {this.state.rangeTextboxes}
                      </div>
                    </div>
                  </div>
                </div>

                <Review 
                parentCallback = {this.callbackFunction}
                reviewsForShadowers = {this.state.reviewsForShadowers}
                 postReviewsForShadower = {this.postReviewsForShadower}
                 >
                </Review>
                
               

                <div
                  className="col-12 mt-2"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  <div className="col-12">
                    <div className="row">
                      <h5
                        className="mt-2 col-5"
                        style={{
                          fontSize: "90%",
                          fontFamily: "Poppins",
                          fontWeight: "700",
                          fontStyle: "normal",
                        }}
                      >
                        My Experience Page
                        <button
                          onClick={this.toggleExperienceEdit}
                          style={{
                            outline: "none",
                            border: "transparent",
                            background: "#ffffff",
                          }}
                        >
                          <span className="fas fa-edit"></span>
                        </button>
                      </h5>
                      <div className="col-6">
                        <Link>
                          <p style={{ color: "black", fontSize: "100%" }}>
                            {" "}
                            <span className="far fa-question-circle"></span>{" "}
                            What makes a great one?
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row m-1 mt-1">
                    <div className="col-4 ">
                      <h5
                        style={{
                          color: "#707683",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "80%",
                          lineHeight: "15px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        What Can I Offer:
                      </h5>
                    </div>
                    <div className="col-8">
                      {this.state.editExperience ? (
                        <input
                          type="text"
                          name="whatICanOfferTitles"
                          placeholder=""
                          value={this.state.whatICanOfferTitles}
                          onChange={this.handleInputChange}
                        />
                      ) : (
                        <h5
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "80%",
                            lineHeight: "15px",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {this.state.whatICanOfferTitles.map((title) => {
                            return title + ",";
                          })}
                        </h5>
                      )}
                    </div>
                    <div className="col-2 ">
                      <h5
                        style={{
                          color: "#707683",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "80%",
                          lineHeight: "10px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Perks:
                      </h5>
                    </div>
                    <div className="col-10">
                      {this.state.editExperience ? (
                        <input
                          type="text"
                          name="perks"
                          placeholder=""
                          value={this.state.perks}
                          onChange={this.handleInputChange}
                        />
                      ) : (
                        <h5
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "80%",
                            lineHeight: "10px",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {this.state.perks.map((perk) => {
                            return perk + ",";
                          })}
                        </h5>
                      )}
                    </div>

                    <div className="col-2 ">
                      <h5
                        style={{
                          color: "#707683",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "80%",
                          lineHeight: "10px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Photos:
                      </h5>
                    </div>
                    <div className="col-2">
                      <label className="imgSubmit">
                        <input
                          type="file"
                          ref={this.Ref}
                          name="file_photoId"
                          accept="image/*"
                          onChange={(e) => this.handleFileUpload(e)}
                        />
                        <div
                          className="box m-1 p-1"
                          style={{ height: "5rem", width: "5rem" }}
                        >
                          <div className="hl"></div>
                          <div className="vl"></div>
                        </div>
                      </label>
                      <p>{this.state.imgNames}</p>
                    </div>
                    <div className="col-12 pb-1">
                      {this.state.imgNames.length !== 0 ? (
                        <a
                          onClick={() => {
                            this.setState(
                              { imgNames: [], selectedImages: [] },
                              this.handleFileUpload(null)
                            );
                          }}
                        >
                          Clear Image Selections
                        </a>
                      ) : null}
                    </div>
                    {
                      //edit expereience confirm/submit button
                      this.state.editExperience ? (
                        <div className="col-12">
                          <button onClick={this.confirmExperienceEdit}>
                            {" "}
                            Confirm Changes{" "}
                          </button>
                        </div>
                      ) : null
                    }
                  </div>
                </div>

                <div
                  className="col-12 mt-2"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.08)",
                    borderRadius: "4px",
                  }}
                >
                  <div className="row">
                    <div className="col-2 mt-2 ml-1">
                      <h5
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "700",
                          fontStyle: "normal",
                          fontSize: "90%",
                        }}
                      >
                        {" "}
                        My Review{" "}
                      </h5>
                    </div>
                    <div className="col-6 mt-2">
                      <Link>
                        <p style={{ color: "black", fontSize: "100%" }}>
                          {" "}
                          <span className="far fa-question-circle"></span> How
                          to get better reviews?
                        </p>
                      </Link>
                    </div>
                    <div className="col-3 mt-2">
                      <a
                        class="btn btn-primary dropdown-toggle mr-4"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sort
                      </a>

                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Latest
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row m-1">
                    <div className="col-4 mt-2">
                      <p
                        style={{
                          color: "#707683",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "80%",
                          lineHeight: "10px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        My Review Score:
                      </p>
                    </div>
                    <div
                      className="col-1"
                      style={{
                        borderRadius: "15px",
                        opacity: "0.6",
                        background: "#192A3E",
                        fontSize: "80%",
                      }}
                    >
                      <p
                        className="text-center d-flex justify-content-center mt-2"
                        style={{ color: "white" }}
                      >
                        4.8
                      </p>
                    </div>
                    {this.state.myReviewsCurrent}
                    
                    {/* no need to show reviewsForShadowers in the host dashboard unless needed */}
                    {/* {this.state.tempArray = []}
                  {this.state.reviewsForShadowers.forEach((review) => {
              this.state.tempArray.push(
                <React.Fragment>
                  <div className="col-11 ml-2 mb-2">
                  <h3
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: "0.01em"
                  }}
                >
                    
                    <div>{review.publishDate}</div>
                    </h3>
                  
                  <ShowMoreText
                    lines={1}
                    more="+more"
                    less="-less"
                    anchorClass="moreClass"
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={280}
                    color="black"
                  >
                    <p style={{ fontSize: "80%" }}>{review.body}</p>
                  </ShowMoreText>
                </div>
              </React.Fragment>
            );
          })} */}


            

        


                    

                    <div className="col-12 d-flex justify-content-center">
                      <button
                        onClick={this.changeMyReviewCards}
                        style={{
                          color: "#109CF1",
                          background: "none",
                          border: "none",
                        }}
                      >
                        {this.state.myReviewButton}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Dashboard);