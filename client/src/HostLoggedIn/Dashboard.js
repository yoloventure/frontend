import React from "react";
import Navbar from "../components/Navbar";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";
import {Button} from "reactstrap"
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";



class Dashboard extends React.Component{
  static propTypes = {
    auth:PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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
        match:match

    }
      this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(ranges){
     console.log(ranges);
     console.log(this.state.counter)
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
       // selection: {
       //   startDate: [native Date Object],
       //   endDate: [native Date Object],
       // }

   }

  render() {



    let todayDate=[]
    todayDate.push( moment().format("YYYY-MM-DD"))

  return(
    <div>
    <Navbar className='mb-5' textColor={"black"} auth={this.props.auth}/>
    <div className='pt-5 mt-5'>
        <div className='row'  style={{background: '#F5F6F8'}}>
          <div className='col-4 offset-1'>
              <div className='row' >
                  <div className='col-12 mt-5' style={{background: '#FFFFFF'}}>
                    <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Hosting History</h5>
                  </div>
              </div>

          </div>
          <div className='col-4 offset-1'>
              <div className='row' >
                  <div className='col-12 mt-5' style={{background: '#FFFFFF'}}>
                      <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Availability</h5>
                        <DateRange
                         ranges={[this.state.selectionRange]}
                         onChange={this.handleSelect}
                         moveRangeOnFirstSelection={true}
                         scroll={{enabled:true}}
                       />

                  </div>
                  <div className='col-12 mt-5' style={{background: '#FFFFFF'}}>
                    <h5 className='mt-2' style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}> My Experience Page</h5>
                    <Link to={`${this.props.match.url}/createhostexp`}>
                      <Button className='mt-4'  color="primary" onClick={(e)=>this.handleClick(e)}>Create Host Experience</Button>

                      </Link>
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
