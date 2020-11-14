import React from "react";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";
import {MDBBtn} from "mdbreact";
import CardExpDetail from "../cardExpDetail";

class Page1 extends React.Component {


  constructor(props) {
    super(props);



    if (props.data.availableRanges) {
      this.state = {
        selectionRange: props.data.availableRanges
      };
    } else {
      this.state = {
        selectionRange: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        },
        rangeTextboxes: new Array(100),

        rangeObjects:new Array(100),
        textboxIdCount:0,
        rangeEditDisabled:true,
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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

          <div className='col-2 mt-4'    onClick={this.deleteRange.bind(this,textId )}>

            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </div>

          <div className='col-10 mt-4'>
            <p>{htmlForTextbox}</p>
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


  formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }


  render() {
    let todayDate = new Date(moment().format("MM-DD-YYYY"));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  When do you want to shadow {this.props.data.experience.host.user.fname}?
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <h5 className="col-12 text-center"> {this.props.data.experience.host.user.fname}'s availability</h5>
              <div className="col text-center">

                {/*help*/}

                {this.props.data.experience.availableRanges.map((item, index) =>

                  <p>{this.formatDate(item)} </p>

                )}



                <h5>Your Availability</h5>

                <React.Fragment>

                  <DateRange
                      ranges={[this.state.selectionRange]}
                      onChange={this.handleSelect}

                      showDateDisplay={false}
                      showMonthArrow={false}
                      showSelectionPreview={false}
                      scroll={{enabled:true,
                        calendarWidth: 100,
                        calendarHeight:100
                      }}
                      // maxDate={this.state.rangeEditDisabled? todayDate: new Date()}

                  />
                </React.Fragment>
              </div>
              <div className="col-12 text-center mt-3">
                <MDBBtn color={this.state.rangeEditDisabled? " disabled ml-3":'ml-5'} size='sm' style={{background:'#109CF1'}} onClick={this.addRange}>Add Range </MDBBtn>
                <MDBBtn color={this.state.rangeEditDisabled? " disabled ml-3":' ml-3'} size='sm' style={{background:'#109CF1'}} onClick={this.confirmRanges}>Confirm and Submit </MDBBtn>
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col text-center">
                <input
                  className="btn nextBtn"
                  type="submit"
                  value="Next Step"
                  onClick={this.props.goNext}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Page1;
