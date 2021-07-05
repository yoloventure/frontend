import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./hostRegister.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Page1 from "../components/regFormComponents/page1";
import Page2 from "../components/regFormComponents/page2";
import Page3 from "../components/regFormComponents/page3";
import Page4 from "../components/regFormComponents/page4";
import Page5 from "../components/regFormComponents/page5";
import Page6 from "../components/regFormComponents/page6";
import Page7 from "../components/regFormComponents/page7";
import APIHost from "../api/apiHost";
import APICompany from "../api/apiCompany";



import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register,loadUser } from '../actions/authActions';


class HostRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: {
        user: "",
        fname: "",
        lname: "",
        gender: "",
        title: "",
        yearsExp: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        isIndividual: null,
        industry: "",
        category: "",
        whatIDo: "",
        twitterProfile: "",
        linkedInProfile: "",
        instagramProfile: "",
        street: "",
        city: "",
        state: "",
        country: "USA",
        zip: "111",
        description: " ",
        offerOne: "",
        offerTwo: "",
        offerThree: "",
        otherAspects: "",
        expertise: "",
        password: "",
        confirmPassword: "",
        errorMessage: "",
        offering: [],
        reservationStack: [],
        reviewStack: [],
        newUser: false,
      },
      counter: 1,
      progress: 0,
      firstLoad: true,
      registered: false,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStateAddress = this.updateStateAddress.bind(this);
  }
  setNextTrue = () => {
    console.log("tt called");
    this.setState(
      { counter: this.state.counter + 1, progress: this.state.progress + 25 },
      () => {
        this.handleSubmit();
      }
    );
  };
  setNextFalse = () => {
    console.log("f called");

    this.setState(
      { counter: this.state.counter - 1, progress: this.state.progress - 25 },
      () => {
        this.handleSubmit();
      }
    );
  };
  handleInputChange(event) {
    let { name, value } = event.target;
    if (value === "BOOL!!true") {
      value = true;
    } else if (value == "BOOL!!false") {
      value = false;
    }
    console.log(typeof value);
    const { host } = this.state;
    this.setState({
      host: {
        ...host,
        [name]: value,
      },
    });
    console.log(this.state.host);
  }

  handleSubmit() {
    if (this.state.counter === 7) {
      //person creating host app was not registered as a user on the website prior to this
      let host = this.state.host;

      let user = {
        fname: host.fname,
        lname: host.lname,
        email: host.email,
        password: host.password,
        job_interests: host.job_interests,
      };
      this.setState({ newUser: true }, this.props.register(user)); //register the person in this case first
    } else if (this.state.counter === 6 && this.props.auth.isAuthenticated) {
      //else proceed with host app
      const offering2 = [
        this.state.host.offerOne,
        this.state.host.offerTwo,
        this.state.host.offerThree,
      ];
      this.setState({
        host: {
          ...this.state.host,
          offering: [...this.state.host.offering, ...offering2],
        },
      });
      APICompany.createCompany({
        name: this.state.host.company ? this.state.host.company : " ",
        website: this.state.host.website,
        street: this.state.host.street,
        city: this.state.host.city,
        state: this.state.host.state,
        country: this.state.host.country,
        zip: this.state.host.zip,
      }).then((response) =>
        this.setState(
          {
            host: {
              ...this.state.host,
              company: response._id,
              user: this.props.auth.user._id,
            },
          },
          () => {
            console.log(this.state.host);
            console.log("offering");
            console.log(this.state.host.offering);
            console.log("more offering");
            console.log(this.state.host.moreOffering);
            APIHost.editOrCreateHost(this.state.host, this.props.auth.user); //if host app was previously submitted then edit current field else create a new one
            this.setState({ firstLoad: false });
          }
        )
      );
    }

    window.scrollTo(0, 0);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.user && prevState.firstLoad) {
      return { registered: true };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.firstLoad && this.state.registered && this.state.newUser) {
      console.log(this.props.auth.user);

      APICompany.createCompany({
        name: this.state.host.company ? this.state.host.company : " ",
        website: this.state.host.website,
        street: this.state.host.street,
        city: this.state.host.city,
        state: this.state.host.state,
        country: this.state.host.country,
        zip: this.state.host.zip,
      }).then((response) =>
        this.setState(
          {
            host: {
              ...this.state.host,
              company: response._id,
              user: this.props.auth.user._id,
            },
            firstLoad: false,
          },
          () => {
            console.log(this.state.host);
            APIHost.createNewHost(this.state.host); //new user reigstered and their host app is also submitted
          }
        )
      );
    }
  }

  updateStateAddress(street, city, state) {
    var host = this.state.host;

    this.setState({
      host: {
        ...host,
        street: street,
        city: city,
        state: state,
      },
    });

  }

  handlePageRender(counter) {
    if (counter == 1) {
      const pageToRender = (
        <Page1
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
      return pageToRender;
    } else if (counter == 2) {
      return (
        <Page2
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          updateStateAddress={this.updateStateAddress}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 3) {
      return (
        <Page3
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 4) {
      return (
        <Page4
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 5) {
      return (
        <Page5
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 6 && !this.props.auth.isAuthenticated) {
      return (
        <Page6
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 6 && this.props.auth.isAuthenticated) {
      return (
        <Page7
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          handleSubmit={this.handleSubmit}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (counter == 7 && !this.props.auth.isAuthenticated) {
      return (
        <Page7
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          handleSubmit={this.handleSubmit}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );
    } else {
      const pageToRender = (
        <Page7
          handleInputChange={this.handleInputChange}
          setNextTrue={this.setNextTrue}
          setNextFalse={this.setNextFalse}
          host={this.state.host}
          handleSubmit={this.handleSubmit}
        />
      );

      return pageToRender;
    }
  }

  render() {
    return (
      <div className="m-0 p-0">
        <div className="nav pb-5">
          <Navbar textColor={"black"} />

        </div>

        <div className="container pt-5 mt-5 mb-5">
          <div className="top row">
            <div className="col-md-4"></div>

            <div className="col apply ml-5">
              <p>Apply To Be A Host</p>
            </div>
          </div>
        </div>

        <div className="main container">
          {/*Progress Bar*/}
          <div className="row mt-5">
            <div
              className="col-sm-2"
              style={{
                fontFamily: "Mplus 1p",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "140%",
                lineHeight: "26px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#F61067",
              }}
            >
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, //item represents the entire state
});

export default connect(mapStateToProps, { register, loadUser })(HostRegister);


