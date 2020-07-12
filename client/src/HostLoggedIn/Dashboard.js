import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";
import {Button} from "reactstrap"
import PropTypes from "prop-types";
import shadowRequests from './shadowRequests.json'
import reviewNotifications from './reviewNotifications.json'
// import './Dashboard.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import {MDBIcon, MDBBtn} from 'mdbreact'


class Dashboard extends React.Component{


  constructor(props){
    super(props)
    const { match, location, history } = this.props;


      let tempArray=[]
        shadowRequests.forEach(request=>{
          tempArray.push(
            <div className='row mt-3' style={{"boxShadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                      <div className='col-9 offset-1'>
                            <h3 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"600","fontSize":"100%","lineHeight":"22px","letterSpacing":"0.01em"}}> {request.fname} sent you a shadowing request </h3>
                      </div>
                      <div className='col-1'>
                            <p> {request.timeStamp}</p>
                      </div>
                        <div className='col-1 offset-1' style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>
                              <h5> {request.fname} </h5>
                        </div>
                        <div className='col-3 offset-2'>


                              <button style={{"background":"#2ED47A","borderRadius":"4px"}}> Accept </button>

                        </div>
                        <div className='col-3'>


                              <button style={{"background":"#F7685B","borderRadius":"4px"}}> Reject </button>

                       </div>
            </div>
          )
        })
        let tempArray2=[]
        reviewNotifications.forEach(notification=>{
          tempArray2.push(
            <div className='row mt-3' style={{"boxShadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                      <div className='col-6 offset-1'>
                            <h3 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"600","fontSize":"100%","lineHeight":"22px","letterSpacing":"0.01em"}}> {notification.fname} wrote me a review </h3>
                      </div>
                      <div className='col-5'>
                            <p> {notification.reviewDate}</p>
                      </div>
                        <div className='col-2 offset-1' >
                              <h5 style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>Shadowing Dates: </h5>
                        </div>
                        <div className='col-4 offset-1'>


                              <h5 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}> {notification.shadowStartDate} - </h5>

                        </div>
                        <div className='col-4'>


                              <h5 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}> {notification.shadowEndDate} </h5>

                       </div>
            </div>
          )
        })

        let currentTemp=[]
        let currentTemp2=[]
        try{
          currentTemp=tempArray.slice(0,1)
        }catch(e){

        }
        try{
          currentTemp2=tempArray2.slice(0,1)
        }catch(e){

        }
        try{
          currentTemp2=tempArray2.slice(0,2)
        }catch(e){

        }
        try{
          currentTemp2=tempArray2.slice(0,3)
        }catch(e){

        }
        this.state={
          counter:1,
          selectionRange:{
              startDate: new Date(),
              endDate: new Date(),
              key: 'selection'
            },
            rangeTextboxes: new Array(100),
            rangeObjects:new Array(100),
            textboxIdCount:0,
            rangeEditDisabled:true,
            shadowRequests:tempArray,
            currentShadowRequests:currentTemp,
            reviewNotifications:tempArray2,
            currentReviewNotifications:currentTemp2


        }
  }


  handleSelect=(ranges)=>{
    if(this.state.counter===1){
     this.setState({selectionRange: {
       startDate: ranges.selection.startDate,
       endDate: ranges.selection.startDate,
         key: 'selection'
     }})
   }else{
     this.setState({selectionRange: {
       startDate: ranges.selection.startDate,
       endDate: ranges.selection.endDate,
         key: 'selection'
     }})
   }

    if(this.state.counter===1){
     this.setState({counter:0})
   }else{
     this.setState({counter:1})
   }


   }


   addRange=()=>{
     let rangesUpdated=this.state.rangeTextboxes
     let rangesObjectsUpdated=this.state.rangeObjects
     let textId='textbox'+this.state.textboxIdCount
     let startDateArray=this.state.selectionRange.startDate.toString().split(" ")
     let endDateArray=this.state.selectionRange.endDate.toString().split(" ")

     let htmlForTextbox= startDateArray[0]+ " " +startDateArray[1]+" "+startDateArray[2]+" "+startDateArray[3] + " - " + endDateArray[0]+ " "+endDateArray[1]+" "+endDateArray[2]+" "+endDateArray[3]
     rangesUpdated[this.state.textboxIdCount]=(
       <div className='row'>
           <button id={textId} className='col-2 mt-4 close' type="button" aria-label="Close" onClick={this.deleteRange.bind(this,textId )}>
             <span aria-hidden="true">&times;</span>
           </button>
           <div className='col-10 mt-4'>
           <textarea   class="sm-textarea form-control" rows="3">{htmlForTextbox}</textarea>
           </div>
       </div>
     )
     rangesObjectsUpdated[this.state.textboxIdCount]={startDate: this.state.selectionRange.startDate, endDate: this.state.selectionRange.endDate}

     this.setState({
       rangeTextboxes: rangesUpdated,
       textboxIdCount: this.state.textboxIdCount+1,
       rangeObjects: rangesObjectsUpdated
     });

   }

   deleteRange(id){
     let rangesUpdated=this.state.rangeTextboxes
     let rangesObjectsUpdated=this.state.rangeObjects

     let idToDelete=id.charAt(7);
     rangesUpdated[idToDelete]=null
     rangesObjectsUpdated[idToDelete]=null

     this.setState({
       rangeTextboxes: rangesUpdated,
       rangeObjects: rangesObjectsUpdated

     });
   }

   enableRangeEdit=()=>{
     this.setState(prevState => ({
        rangeEditDisabled: !prevState.rangeEditDisabled
      }));
   }

   confirmRanges=()=>{
     //will send rangeObjects to database then clear state.rangeObjects and state.rangeTextboxes
   }

   changeCards=()=>{
     if(this.state.shadowRequests.length>this.state.currentShadowRequests.length){
       this.setState(prevState=>{return {...prevState,currentShadowRequests:prevState.shadowRequests} } )
     }else if(this.state.shadowRequests.length!==0){

       this.setState(prevState=>{return {...prevState,currentShadowRequests:prevState.shadowRequests.slice(0,1)} } )

     }
     if(this.state.reviewNotifications.length>this.state.currentReviewNotifications.length){
       this.setState(prevState=>{return {...prevState,currentReviewNotifications:prevState.reviewNotifications} } )
     }else{

       this.setState(prevState=>{
             let currentTemp2=[]

             try{
               currentTemp2=prevState.reviewNotifications.slice(0,1)
             }catch(e){

             }
             try{
               currentTemp2=prevState.reviewNotifications.slice(0,2)
             }catch(e){

             }
             try{
               currentTemp2=prevState.reviewNotifications.slice(0,3)
             }catch(e){

             }
             return { ...prevState,currentReviewNotifications:currentTemp2  }
        });

     }
   }

  render() {


    let todayDate=  new Date(moment().format("MM-DD-YYYY"))
  //  todayDate.push( moment().format("MM-DD-YYYY"))
  var distantDate =  new Date(moment().add(20, 'year').calendar());
  console.log(distantDate)

  return(
    <div>
    <Navbar className='mb-5' textColor={"black"} />

    <div className='pt-5 mt-5 mr-5'>
                <div className='row' >
                        <div className='col-4  offset-1 mt-2'>
                            <div className='row p-3' style={{background: '#FFFFFF',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                <div className='col-12 ' >
                                  <h5 className='' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Hosting History</h5>
                                </div>
                                <div className='col-12' >
                                  {this.state.currentShadowRequests}
                                  {this.state.currentReviewNotifications}
                                </div>
                                <div className='col-12 mt-5 d-flex justify-content-center' >
                                  <button onClick={this.changeCards} style={{color:'#109CF1', background:'none', border:'none'}}> Show More </button>
                                </div>
                            </div>

                        </div>
                        <div className='col-5 offset-1'>
                            <div className='row' >
                                                  <div className='col-8 ' style={{background: '#00000',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                                      <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}>{this.state.rangeEditDisabled? 'My Availability (click icon to activate calendar)': 'My Availability'} <button onClick={this.enableRangeEdit}><MDBIcon  icon="edit" fixed /></button></h5>
                                                        <DateRange
                                                         ranges={[this.state.selectionRange]}
                                                         onChange={this.handleSelect}
                                                         moveRangeOnFirstSelection={true}
                                                         minDate={this.state.rangeEditDisabled ? distantDate: todayDate}
                                                         scroll={{enabled:true}}
                                                         // maxDate={this.state.rangeEditDisabled? todayDate: new Date()}


                                                       />


                                                  </div>
                                              <div className='col-4 mt-5' style={{background: '#00000',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                                            <MDBBtn color={this.state.rangeEditDisabled? "primary disabled":'primary'} onClick={this.addRange}>Add Range </MDBBtn>

                                                            <div style={{height:'350px', width:'110%',overflowY:'auto', overflowX:'hidden'}}>
                                                            {this.state.rangeTextboxes}
                                                            </div>
                                                            <MDBBtn color={this.state.rangeEditDisabled? "primary disabled":'primary'} onClick={this.confirmRanges}>Confirm and Submit </MDBBtn>


                                              </div>

                                              <div className='col-12 mt-5' style={{background: '#FFFFFF',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                                    <div className='col-12' >

                                                        <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Experience Page <MDBIcon icon="edit" fixed /></h5>

                                                    </div>
                                                    <div className='row m-1 mt-3'>
                                                          <div className='col-4 ' >
                                                                <h5 style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>What Can I Offer: </h5>
                                                          </div>
                                                          <div className='col-8'>


                                                                <h5 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>Dentistry, Medicine </h5>

                                                          </div>
                                                          <div className='col-2 ' >
                                                                <h5 style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>Perks: </h5>
                                                          </div>
                                                          <div className='col-10'>


                                                                <h5 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"100%","lineHeight":"19px","letterSpacing":"0.01em"}}>Coffee Shop, Career handbook </h5>

                                                          </div>
                                                    </div>


                                              </div>
                                              <div className='col-12'>

                                              </div>
                              </div>
                            </div>

                </div>
    </div>

    </div>

  );
}
}
export default withRouter(Dashboard)
