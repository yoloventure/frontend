import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import img1 from "./slide_2.png"
import img2 from "./slide_3.png"
import "./style.scss"

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
      img1,img2
      ],
      title: [
        'What is it like to be a chef in Japan?',
        'A day shadowing an experienced orthodontist'
      ],
      body:[

      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1 ,
        translateValue: -(this.state.images.length-1)*(this.slideWidth())
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }));
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className='FeatureStory'>
      <div className='FeatureStoryTitle'>
          <h2> {this.state.title[this.state.currentIndex]} </h2>
 
      </div>


      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image}/>
              ))
            }
        </div>

        <LeftArrow
         prevSlide={this.goToPrevSlide}
         coolButtons={false}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
         coolButtons= {false}
        />
      </div>


      </div>


    );
  }
}
