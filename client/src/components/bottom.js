import React from "react";
import "./bottom.css";
import yawo from "../photos/yawo.png";
import kaixin from "../photos/kaixin.jpg";
import quotes from "../photos/quotes.png";
import LeftArrow from "./left-arrow";
import RightArrow from "./right-arrow";
import Slide from "./slide";
class Bottom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [kaixin, yawo],
      currentIndex: 0,
      email: "",
      fname: "",
      lname:""
      //translateValue: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {id,value}=event.target
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.fname || !this.state.lname || !this.state.email){
      alert("Please fill all fields before submitting")
      return;

    }
    return fetch("/api/emailList", {
      method: "POST",

      body: JSON.stringify({
        fname: this.state.fname,
        lname:this.state.lname,
        email: this.state.email
      }),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("You have successfully subscribed to our Newsletter.");
          this.setState({ email: "" });
        } else if (response.status === 409) {
          alert("You have already subscribed to our Newsletter. Thank you!");
          this.setState({ email: "" });
        }else{
          alert("Please try again, there was an error in getting you subscribed!");
          
        }
        return response;
      })
      .catch(error => error);
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1
        //translateValue: -(this.state.images.length-1)*(this.slideWidth())
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
      //  translateValue: prevState.translateValue + (this.slideWidth())
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0
        //translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
      //translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  };

  render() {
    return (
      <div className="">
        <div className="row " style={{ paddingTop: "15%" }}>
          <div
            className="col-4 "
            style={{ paddingLeft: "20%", paddingTop: "10%" }}
          >
            <LeftArrow prevSlide={this.goToPrevSlide} coolButtons={false} />
          </div>

          <div className="col-4">
            <Slide
              key={this.state.currentIndex}
              image={this.state.images[this.state.currentIndex]}
            />
          </div>

          <div
            className="col-4"
            style={{ paddingLeft: "10%", paddingTop: "10%" }}
          >
            <RightArrow
              goToNextSlide={this.goToNextSlide}
              coolButtons={false}
            />
          </div>
        </div>
        <div className="row offset-2" style={{ paddingTop: "10%" }}>
          <div className="col-1 offset-2">
            <img className="openQuote " src={quotes} alt="" />
          </div>
          <div className="col-7 ">
            <p className="aside ">YOLO empowers me to be an adventurer </p>
          </div>
        </div>

        <div
          className="container-fluid subscriber "
          style={{ paddingTop: "16%" }}
        >
          <div className="row d-flex flex-column">
            <div className="col d-flex justify-content-center">
              <h3 className="newsletter">Subscribe to Our Newsletter</h3>
            </div>
            <br />
            <div className="col d-flex justify-content-center">
              <h5 className="stay-tuned">
                Stay Tuned for Yoloer's Adventurous Stories!
              </h5>
            </div>
            <br />
            <br />
            {/*
            <div className="col d-flex justify-content-center pb-5">
              <form>
                <div className="pr-2 pt-2">
                  <input
                    className="enter-email"
                    type="email"
                    placeholder="ENTER EMAIL"
                  />
                </div>
                <button className="subscribe">
                  <a href="#"></a>Subscribe
                </button>
              </form>
            </div>*/}
            <div className="mb-2">
              <form action="" onSubmit={this.handleSubmit}>
                <div className="row d-flex justify-content-center mb-2 w-20">
                  <input
                    style={{width:"30%"}}
                    type="text"
                    id="fname"
                    placeholder="Enter First Name"
                    value={this.state.fname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row d-flex justify-content-center mb-2">
                  <input
                    style={{width:"30%"}}
                    type="text"
                    id="lname"
                    placeholder="Enter Last Name"
                    value={this.state.lname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row d-flex justify-content-center mb-2">
                  <input
                    style={{width:"30%"}}
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="row d-flex justify-content-center">
                  <input type="submit" name="Subscribe" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
