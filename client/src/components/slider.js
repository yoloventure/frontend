import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import img1 from "../photos/chef.jpg"
import img2 from "../photos/ortho2.png"
import img3 from "../photos/yawo.png"
import "./style.scss"
import bquote from "../photos/bquote.png";
import fquote from "../photos/fquote.png";
import ScrollArrow from '../photos/searchArrow.png'
import  Link  from "react-router-dom";


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
    const Link = require("react-router-dom").Link;

    return (
      <div className='container-fluid'>
            <div className='row'>
                  <div className='FeatureStoryTitle col-lg-4 col-md-12 col-sm-12 col-12 offset-1 ' style={{paddingBottom:"20%"}}>
                       <h2 className="" style={{"fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                       > Featured Story </h2>
                       <h2 className=""style={{"fontStyle":"normal","fontWeight":"500","fontSize":"55px","color":"#30233D"}}
                       >  {this.state.title[0]} </h2>
                       <h3 className="pt-2"style={{"fontStyle":"normal","fontWeight":"500","fontSize":"28px","lineHeight":"29px","color":"#776C82"}}
                       > {this.state.body2[0]} </h3>
                       <h3 className="pt-2"style={{"fontStyle":"normal","fontWeight":"450","fontSize":"26px","lineHeight":"29px","color":"#30233D"}}
                       > {this.state.body1[0]} </h3>
                       <Link to='/explore'>
                       <button className="mt-5  learnmore d-flex justify-content-center" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#150433'}}>     Learn More   </button>
                       </Link>
                  </div>

                  <div className="col-md-3 align-self-center">

                      <img src={this.state.images[0]}
                      alt="photo of a smiling chef"
                      />
                  </div>
                  <div className="col-md-1 quoteContainer">
                    <div className="quotes d-flex flex-column">
                      <img src={fquote} alt="" />
                      <br />
                      <p style={{ width: "50%" }}>
                        YOLOers really inspire me! I’ve got different points of view
                        on the work I do.
                      </p>

                      <br />
                      <img src={bquote} alt="" />
                    </div>
                  </div>



            </div>
            <div className='row'>
                  <div className='FeatureStoryTitle col-lg-6 col-md-12 col-sm-12 col-12 ' style={{background: '#F2C94C', padding:'5%'}}>
                       <h2 className=" offset-1" style={{"fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                       > Featured Story </h2>
                       <h2 className="offset-1"style={{"fontStyle":"normal","fontWeight":"500","fontSize":"55px","lineHeight":"67px","color":"#30233D"}}
                       >  {this.state.title[this.state.currentIndex]} </h2>
                       <h3 className="offset-1 pt-2"style={{"fontStyle":"normal","fontWeight":"500","fontSize":"28px","lineHeight":"29px","color":"#776C82"}}
                       > {this.state.body2[this.state.currentIndex]} </h3>
                       <h3 className="offset-1 pt-2"style={{"fontStyle":"normal","fontWeight":"450","fontSize":"30px","lineHeight":"29px","color":"#30233D"}}
                       > {this.state.body1[this.state.currentIndex]} </h3>
                  </div>


                  <div className="slider col-lg-4 " >

                    <div >
                        <Slide key={this.state.currentIndex} image={this.state.images[this.state.currentIndex]} />
                    </div>


                  </div>



                  <div className='col-lg-2 col-2 pt-4 d-none d-md-block col-lg-2 col-2' id="">

                    <h3 className='' style={{"position":"absolute", top:"50%","width":"272px","height":"28px","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"black","transform":"rotate(90deg)"}}>
                    Scroll For More </h3>


                    <a href="#whyYolo" style={{"position":"absolute", top:"67%", left:'49%', "transform":"rotate(90deg)"}}>  <img src={ScrollArrow}></img></a>

                  </div>


            </div>

            <div className='row' style={{background: '#F2C94C', padding:'0%'}}>
                  <div className='col-2'>
                  <Link to='/explore'>
                  <button className="offset-6  mt-2 learnmore d-flex justify-content-center" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#150433',background:'#F2C94C'}}>     Learn More   </button>
                  </Link>
                  </div>
                  <div className='col-2 offset-8' style={{background:'#150433'}}>
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
