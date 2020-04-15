import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import img1 from "./slide_2.png"
import img2 from "./slide_3.png"
import img3 from "../photos/yawo.png"
import "./style.scss"

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
      img1,img2,img3
      ],
      title: [
        'What is it like to be a chef in Japan?',
        'A day shadowing an experienced orthodontist',
        'just test'
      ],
      body1:[
          'There is a huge difference between just learning basic skills in school and actually going out there to work with real pros,” said Seo, a student at Hattori Nutrition College in Tokyo. It’s only after you’ve had real working experience that you’ll be able to understand the certain way (Japanese people) act and think.',
          'We went through dental nomenclature, the small business, dental instruments, infection control and dental procedures to name a few.',
          'We went through dental nomenclature, the small business, dental instruments, infection control and dental procedures to name a few.',

      ],
      body2:['As a foreigner aspiring to become a “washoku” (Japanese food) chef, South Korean student Seo Dong-young landed an ideal job after shadowing a Japanese chef through YOLO.',
      'Alyssa went to a dental specialist’s office to observe procedures, learned terminology and techniques, observed different practice environments and asked the dental professional questions about her journey to practicing dentistry.',
      'Alyssa went to a dental specialist’s office to observe procedures, learned terminology and techniques, observed different practice environments and asked the dental professional questions about her journey to practicing dentistry.',

      ],
      currentIndex: 1,
      //translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === 1) {
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
        currentIndex: 1,
        //translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      //translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className=''>
            <div className='row'>
                  <div className='FeatureStoryTitle col-lg-4 col-md-12 col-sm-12 col-12 offset-1 pt-5  '>
                       <h2 className="" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                       > Featured Story </h2>
                       <h2 className=""style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"55px","lineHeight":"67px","color":"#30233D"}}
                       >  {this.state.title[this.state.currentIndex]} </h2>
                       <h3 className=""style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"28px","lineHeight":"29px","color":"#776C82"}}
                       > {this.state.body1[this.state.currentIndex]} </h3>
                       <h3 className=""style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"30px","lineHeight":"29px","color":"#30233D"}}
                       > {this.state.body2[this.state.currentIndex]} </h3>
                       <button class="mt-5 offset-lg-4 learnmore d-flex justify-content-center" onclick="/explore" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#150433'}}>     Learn More   </button>
                  </div>


                  <div className="slider col-lg-4 col-md-12 col-sm-12 col-12 " >

                    <div>

                         <img src={this.state.images[0]}/>

                    </div>


                  </div>

                  <div className=" col-lg-2 col-md-12 col-sm-12 col-12 " style={{background:'#F2C94F',marginTop:'5%', height:'300px'}}>

                  <h3>"some quote stufff ff san ashfoahsf"</h3>


                  </div>



            </div>
            <div className='row mt-5'>
                  <div className='FeatureStoryTitle col-lg-8 col-md-12 col-sm-12 col-12 ' style={{background: '#F2C94C', padding:'5%'}}>
                       <h2 className=" offset-1" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                       > Featured Story </h2>
                       <h2 className="offset-1"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"55px","lineHeight":"67px","color":"#30233D"}}
                       >  {this.state.title[this.state.currentIndex]} </h2>
                       <h3 className="offset-1"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"28px","lineHeight":"29px","color":"#776C82"}}
                       > {this.state.body1[this.state.currentIndex]} </h3>
                       <h3 className="offset-1"style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"30px","lineHeight":"29px","color":"#30233D"}}
                       > {this.state.body2[this.state.currentIndex]} </h3>
                       <button class="mt-5 offset-lg-4 learnmore d-flex justify-content-center" onclick="/explore" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#150433',background:'#F2C94C'}}>     Learn More   </button>
                  </div>


                  <div className="slider col-lg-4 col-md-12 col-sm-12 col-12 ">

                    <div>


                            <Slide key={this.state.currentIndex} image={this.state.images[this.state.currentIndex]}/>


                    </div>


                  </div>



            </div>
            <div className='row'>
              <div className='col-10' style={{height:'100px',background:'#F2C94C'}}>
              </div>
              <div className='col-1' style={{background:'#150433'}}>
                <LeftArrow
                 prevSlide={this.goToPrevSlide}

                />
              </div>
              <div className='col-1' style={{background:'#150433'}}>
                <RightArrow
                 goToNextSlide={this.goToNextSlide}
                />

              </div>
            </div>

      </div>


    );
  }
}
