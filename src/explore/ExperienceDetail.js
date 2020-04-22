/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";


import CardExpDetail from "../components/CardExpDetail";
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

      for(var i=0; i<data.length;i+=3){
          if(i+2<data.length){
          CardsExpDetail.push(
          <div class="row">
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+2]} body={data[0].expDetailBodies[i+2]} />
          </div>
          </div>)
        }else if(i+1<data.length){
          CardsExpDetail.push(
          <div class="row">
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i+1]} body={data[0].expDetailBodies[i+1]} />
          </div>
          </div>)
        }else{
        //  console.log("here")
          CardsExpDetail.push(
          <div class="row">
          <div className="card col">
          <CardExpDetail  id={data[0].id} title={data[0].expDetailTitles[i]} body={data[0].expDetailBodies[i]} />
          </div>
          </div>)
        }
      }

    }


  render(){

    return (
          <div>
              <Navbar textColor={'black'} />

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

                <div className='row offset-1 pt-5'>
                  <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"22.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}> Expectations </h2>
                </div>
                <div className='row offset-1 pt-2'>
                  <h3> What Can I Offer </h3>
                </div>

                {this.state.CardsExpDetail}



          </div>
    );
  }
}
