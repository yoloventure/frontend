import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./hostRegister.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ortho from "../photos/ortho.png";
import Page1 from "../components/regFormComponents/Page1";
import Page2 from "../components/regFormComponents/Page2";
import Page3 from "../components/regFormComponents/Page3";
import Page4 from "../components/regFormComponents/Page4";
import Page5 from "../components/regFormComponents/Page5";
import Page6 from "../components/regFormComponents/Page6";
import Page7 from "../components/regFormComponents/Page7";
import APIHostApp from "../api/APIHostApp";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register,loadUser } from '../actions/authActions';

class HostRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host : {
        userId: "",
        fname: "",
        lname:"",
        gender: "",
        title: "",
        yearsExp: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        category: "",
        street: "",
        city: "",
        state:"",
        description: "",
        offerOne: "",
        offerTwo: "",
        offerThree: "",
        moreOne: "",
        moreTwo: "",
        moreThree: "",
        otherAspects: "",
        expertise: "",
        password:"",
        confirmPassword:"",
        errorMessage:''
      },
      counter: 6,
      progress: 0,
      registered:false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStateAddress=this.updateStateAddress.bind(this);

  }
  setNextTrue=()=>{
    console.log('tt called')
    this.setState({counter: this.state.counter + 1,progress: this.state.progress + 25},()=>{this.handleSubmit()})
  }
  setNextFalse=()=>{
    console.log('f called')

    this.setState({counter: this.state.counter - 1,progress: this.state.progress - 25},()=>{this.handleSubmit()})
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value)

    const { host } = this.state;
    this.setState({
        host: {
            ...host,
            [name]: value
        }
    });
    console.log(this.state.host);
  }

  handleSubmit() {



    console.log(this.state.counter+'submittsa')
    if(this.state.counter===7){
      console.log('registering host')
      var user = {
        fname: "test",
        lname: "test",
        email: "test@abdul",
        password: "test",
        job_interests: "nil"
      }
      console.log('here')
      var newUser = null;
      this.props.register(user)

      //       this.props.loadUser()
      //
      //
      // }

      // var host = {
      //   user: newUser._id,
      //   gender: host.gender,
      //   phone: host.phone,
      //   title: host.title,
      //   //company: createCompany(), //ref
      //   description: host.description,
      //   //location: createLocation(), //ref
      //   offering: [host.offerOne, host.offerTwo, host.offerThree],
      //   moreOffering: [host.moreOne, host.moreTwo, host.moreThree],
      //   expertise: host.expertise,
      //   //experiences: createExperience(), //ref
      //   approval: 'pending',
      // }

    }

    window.scrollTo(0, 0);

  }
  // static getDerivedStateFromProps(nextProps, prevState){
  //  if(nextProps.auth.isAuthenticated){
  //    return {registered:true}
  // }  else return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.registered) {
  //     this.props.loadUser()
  //     var host = {
  //       user: this.props.auth.user._id,
  //       category: "",
  //       title:"",
  //       street: "",
  //       city: "",
  //       state:"",
  //       description: "",
  //       offering: ["","",""],
  //
  //
  //       expertise:"",
  //       // experiences: createExperience(), //ref
  //       approval: 'pending',
  //     }
  //
  //     APIHost.createNewHost(host);
  //   }
  // }

  updateStateAddress(street, city, state){
    var host = this.state.host;

    this.setState({
        host: {
            ...host,
            street:street,
            city: city,
            state:state
        }
      }
    )
  }

  handlePageRender(counter) {
    if (counter == 1) {
      const pageToRender = <Page1 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}  host={this.state.host} handleSubmit={this.handleSubmit}/>;
      return pageToRender;
    } else if (counter == 2) {
      return <Page2 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}  host={this.state.host} updateStateAddress={this.updateStateAddress} handleSubmit={this.handleSubmit}/>;
    } else if (counter == 3) {
      return <Page3 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}  host={this.state.host} handleSubmit={this.handleSubmit}/>;
    } else if (counter == 4) {
      return <Page4 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}  host={this.state.host} handleSubmit={this.handleSubmit}/>;
    } else if (counter == 5) {
      return <Page5 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}  host={this.state.host} handleSubmit={this.handleSubmit}/>;
    } else if (counter == 6) {
      return <Page6 handleInputChange={this.handleInputChange} setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse} handleSubmit={this.handleSubmit} host={this.state.host} handleSubmit={this.handleSubmit}/>;
    } else {
      const pageToRender = <Page7 handleInputChange={this.handleInputChange}  setNextTrue={this.setNextTrue} setNextFalse={this.setNextFalse}   host={this.state.host} handleSubmit={this.handleSubmit}/>;
      return pageToRender;
    }
  }

  render() {
    return (
      <div className="m-0 p-0">

        <div className="nav pb-5">
          <Navbar textColor={"black"}  />
        </div>

        <div className="container pt-5 mt-5 mb-5">
          <div className="top row">
            <div className="col-md-4">
              <img
                src={ortho}
                alt="photo of orthodontist"
                className="chefimage"
              />
            </div>
            <div className="col apply ml-5">
              <p>Apply To Be A Host</p>
            </div>
          </div>
        </div>

        <div className="main container">
          {/*Progress Bar*/}

            <div className="row mt-5">
                    <div className="col-sm-2" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"140%","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
                      <p>PROGRESS</p>
                    </div>

                    <div className="col-sm-10 progress" style={{ height: "2px" }}>
                      <div
                        className={"progress-bar  w-" + this.state.progress}
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
            </div>
            {/*Components go here: replace with components */}

            <div className="insert">
              {this.handlePageRender(this.state.counter)}
            </div>
          </div>

        <div className="m-0 p-0">
          <Footer />
        </div>
      </div>
    );
  }
}

HostRegister.propTypes = {
    register: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
    auth:state.auth //item represents the entire state
});

export default connect(mapStateToProps,  {register,loadUser})(HostRegister)
