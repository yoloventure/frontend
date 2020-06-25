import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";
import {Button} from "reactstrap"
import PropTypes from "prop-types";
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
        rangeEditDisabled:true

    }
      this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(ranges){
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

  render() {


    let todayDate=  new Date(moment().format("MM-DD-YYYY"))
  //  todayDate.push( moment().format("MM-DD-YYYY"))
  var distantDate =  new Date(moment().add(20, 'year').calendar());
  console.log(distantDate)

  return(
    <div>

    <Helmet>
        <title>Dashboard | YoloShadow</title>
    </Helmet>

    <Navbar className='mb-5' textColor={"black"} auth={this.props.auth}/>
    <div className='pt-5 mt-5'>
        <div className='row' >
          <div className='col-4 offset-1'>
              <div className='row' >
                  <div className='col-12 mt-5' style={{background: '#FFFFFF'}}>
                    <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Hosting History</h5>
                  </div>
              </div>

          </div>
          <div className='col-5 offset-1'>
              <div className='row' >
                    <div className='col-8 mt-5' style={{background: '#FFFFFF'}}>
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
                    <div className='col-4 mt-5' style={{background: '#FFFFFF'}}>
                        <MDBBtn color={this.state.rangeEditDisabled? "primary disabled":'primary'} onClick={this.addRange}>Add Range </MDBBtn>

                        <div style={{height:'350px', width:'110%',overflowY:'auto', overflowX:'hidden'}}>
                        {this.state.rangeTextboxes}
                        </div>
                        <MDBBtn color={this.state.rangeEditDisabled? "primary disabled":'primary'} onClick={this.confirmRanges}>Confirm and Submit </MDBBtn>


                    </div>

                  <div className='col-12 mt-5' style={{background: '#FFFFFF'}}>

                    <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Experience Page <MDBIcon icon="edit" fixed /></h5>

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
