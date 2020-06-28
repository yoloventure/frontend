/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";


import CardExpDetail from "../components/CardExpDetail";
import CardExpDetailReview from "../components/CardExpDetailReview";
import Footer from '../components/Footer'
import mapImage from "../photos/map.png"
import searchArrow from "../photos/searchArrow.png"
import data from "../explore/expDetailData.json";


export default class ExperienceDetail extends React.Component{
// componentDidMount(){
//   console.log("lora")
//   console.log(this.props.location.profession)
//   const profession=this.props.location.profession
// }
    constructor(props) {
      super(props)
      let  CardsExpDetail=[];
      let CardsReview=[];
      this.state = {
        CardsExpDetail:CardsExpDetail,
        CardsReview: CardsReview
      }

      for(var i=0; i<data[0].expDetailTitles.length;i+=3){
          if(i+2<data[0].expDetailTitles.length){
          CardsExpDetail.push(
          <div class="row " style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+2]} body={data[0].expDetailBodies[i+2]} />
          </div>
          </div>)
        }else if(i+1<data[0].expDetailTitles.length){
          CardsExpDetail.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className=" col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          </div>)
        }else{
        //  console.log("here")
          CardsExpDetail.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          </div>)
        }
      }
      for(var i=0; i<data[0].reviewBodies.length;i+=2){
        if(i+1<data[0].reviewBodies.length){
          CardsReview.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className=" col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i]} footer={data[0].reviewFooters[i]} />
          </div>
          <div className=" col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i+1]} footer={data[0].reviewFooters[i+1]} />
          </div>
          </div>)
        }else{
        //  console.log("here")
          CardsReview.push(
          <div class="row" style={{paddingLeft:'7%'}}>
          <div className="card col">
          <CardExpDetailReview  id={data[0].id} body={data[0].reviewBodies[i]} footer={data[0].reviewFooters[i]} />
          </div>
          </div>)
        }
      }

    }


  render(){


    return (
          <div>
            <Navbar textColor={'black'}  />


                <div className='row'>
                    <div className='col-4 offset-1' style={{width:'50%', height:"40%"}}>
                      <img src='http://via.placeholder.com/425x425' />
                      <div  className="d-flex justify-content-center pt-5">
                      <h3> Rachel <br/></h3>
                      </div>
                      <div  className="d-flex justify-content-center pt-2">
                      <button  onclick="#" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',textTransform: 'uppercase',color: '#150433',background:'#F2C94C'}}>     Message   </button>
                      </div>
                    </div>
                    <div className='col-7' style={{background: 'linear-gradient(216.68deg, #5E239D 0%, #B77FFF 15.81%)'}}>
                        <div className="d-flex justify-content-center pt-5">
                        <h3> Shadow an experienced Orthodonist </h3>
                        </div>

                        <div className='row d-flex justify-content-center pt-5'><h5> New York </h5></div>
                        <div className='row d-flex justify-content-center pt-1' style={{whiteSpace:'pre'}}><h5> 2 days   $56 </h5></div>


                    </div>
                </div>




                <div className='row offset-1 ' style={{paddingTop:'10%'}}>
                  <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"22.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}> Expectations </h2>
                </div>
                <div className='row offset-1 pt-2 pb-5'>
                  <h3 style={{"fontStyle":"normal","fontWeight":"500","fontSize":"45px","lineHeight":"67px"}}> What I Can Offer </h3>
                </div>

                {this.state.CardsExpDetail}

                <div className='container'>
                  <div style={{width:'1000px', height:'700px', background:'#5E239D'}}>
                    <div className='container pt-4'>

                      <h3 style={{"fontFamily":"Noticia Text","fontStyle":"italic","fontWeight":"normal","fontSize":"22.5px","lineHeight":"200%","display":"flex","alignItems":"center","color":"#FCFCFC"}}>" I am Dr. Gail Schupak, and I look forward to meeting you if you want to learn more about our practice and the techniques we use to treat patients. We will be discussing your career goals and be your shadowing host for 2 days. But first let me tell you about my practice and how we can help you. I’ve been practicing and teaching orthodontics in Manhattan for over 30 years. During that time, my top priority has been to provide patients with the highest quality orthodontic care in a relaxed and upbeat environment. Dr. Movahedian and I recognize that every patient has different orthodontic requirements. We both listen very carefully to our patients to make sure they will be satisfied with their smile. We utilize the latest and most efficient technological advances, such as high-tech wires from SureSmile®, clear braces, Invisalign®, and the latest computer technology, such as digital imaging and advanced computer graphics, to ensure that our patients receive the most effective care possible. ”  </h3>
                   </div>

                  </div>
                </div>



                <div className='row offset-1 ' style={{paddingTop:'10%'}}>
                  <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"22.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}> REVIEWS </h2>
                </div>
                <div className='row offset-1 pt-2 pb-5'>
                  <h3 style={{"fontStyle":"normal","fontWeight":"500","fontSize":"45px","lineHeight":"67px"}}> What Shadowers Say </h3>
                </div>

                {this.state.CardsReview}

                <Footer/>

          </div>
    );
  }
}
