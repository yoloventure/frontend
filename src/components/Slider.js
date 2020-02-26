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
      body1:[
          'There is a huge difference between just learning basic skills in school and actually going out there to work with real pros,” said Seo, a student at Hattori Nutrition College in Tokyo. It’s only after you’ve had real working experience that you’ll be able to understand the certain way (Japanese people) act and think.',
          'We went through dental nomenclature, the small business, dental instruments, infection control and dental procedures to name a few.'
      ],
      body2:['As a foreigner aspiring to become a “washoku” (Japanese food) chef, South Korean student Seo Dong-young landed an ideal job after shadowing a Japanese chef through YOLO.',
      'Alyssa went to a dental specialist’s office to observe procedures, learned terminology and techniques, observed different practice environments and asked the dental professional questions about her journey to practicing dentistry.'
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
      <div className=''>
      <div className='row'>
            <div className='FeatureStoryTitle col-lg-6 col-md-4 col-sm-6 col-5 offset-1 offset-lg-1 pt-5  '>
                 <h2 className="text-center" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                 > Featured Story </h2>
                 <h2 className="text-center"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"55px","lineHeight":"67px","color":"#30233D"}}
                 >  {this.state.title[this.state.currentIndex]} </h2>
                 <h3 className="text-center"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"28px","lineHeight":"29px","color":"#776C82"}}
                 > {this.state.body1[this.state.currentIndex]} </h3>
                 <h3 className="text-center"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"30px","lineHeight":"29px","color":"#30233D"}}
                 > {this.state.body2[this.state.currentIndex]} </h3>
                 <button class="offset-lg-4 learnmore" onclick="/explore" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#FCFCFC', whiteSpace:'pre'}}>     Learn More   </button>
            </div>


            <div className="slider col-lg-5 col-md-6 col-sm-6 col-7 ">
              <LeftArrow
               prevSlide={this.goToPrevSlide}
               coolButtons={false}
              />

              <RightArrow
               goToNextSlide={this.goToNextSlide}
               coolButtons= {false}
              />
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


            </div>


      </div>
      </div>


    );
  }
}
