import React from "react";
import "./bottom.css";
import yawo from "../photos/yawo.png";
import kaixin from "../photos/kaixin.jpg";
import quotes from "../photos/quotes.png";
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Slide from './Slide'
class Bottom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
      kaixin,yawo
      ],

      currentIndex: 0,
      //translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1 ,
        //translateValue: -(this.state.images.length-1)*(this.slideWidth())
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    //  translateValue: prevState.translateValue + (this.slideWidth())
    }));
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        //translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      //translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  render() {
    return (
      <div className="">
        <div className="row " style={{paddingTop:'15%'}}>

              <div className="col-4 " style={{paddingLeft:"20%", paddingTop:'10%'}}>
                <LeftArrow
                 prevSlide={this.goToPrevSlide}
                 coolButtons={false}
                />
              </div>

              <div className='col-4'>
                  <Slide key={this.state.currentIndex} image={this.state.images[this.state.currentIndex]}/>
              </div>

              <div className="col-4" style={{paddingLeft:"10%", paddingTop:'10%'}}>
                <RightArrow
                 goToNextSlide={this.goToNextSlide}
                 coolButtons= {false}
                />
              </div>
        </div>
        <div className='row ' style={{paddingTop:'10%'}}>
          <div className="col-2 offset-1">
              <img className="openQuote " src={quotes} alt="" />
          </div>
            <div className="col-6 ">
              <p className="aside ">YOLO empowers me to be an adventurer </p>
            </div>
        </div>

        <div className="container-fluid subscriber " style={{paddingTop:'16%'}}>
          <div className="row d-flex flex-column">
            <div className="col d-flex justify-content-center">
              <h3 className="newsletter">Subscribe to Our Newsletter</h3>
            </div>
            <br />
            <div className="col d-flex justify-content-center">
              <h6 className="stay-tuned">
                stay tuned for our adventurous stories
              </h6>
            </div>
            <br />
            <br />
            <div className="col d-flex justify-content-center pb-5">
              <input
                className="enter-email"
                type="email"
                placeholder="ENTER EMAIL"
              />
              <button className="subscribe">
                <a href="#"></a>Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
