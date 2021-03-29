/*jshint esversion: 6 */
import React from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Footer from "../components/footer";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import "./explore.css";
import Card from "../components/card";
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExperienceDetail from "../explore/experienceDetail";
import { Button } from "reactstrap";
import Fuse from "fuse.js";

class Explore extends React.Component {
  z;

  componentDidMount() {
    fetch("api/experience/", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        response.json().then((data) => {
          data.forEach((element) => {
            element.availableFrom = element.availableRanges[0]; //set this to first element in available ranges, as we assume array is sorted
            element.availableTill =
              element.availableRanges[element.availableRanges.length - 1];
          });

          this.setState({
            originalData: JSON.parse(JSON.stringify(data)), //store in JSON form the current filtered data to display
            currentDataJSON: JSON.parse(JSON.stringify(data)), //store in HTML form the current filtered data that is being displayed
            data: JSON.parse(JSON.stringify(data)),
            firstAPICallCompleted: true,
          });
        });
      })
      .catch((err) => {
        //console.log(err);
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  constructor(props) {
    super(props);
    this._isMounted = false;
    let cardArray = ["something"];

    const { match, city, history } = this.props;

    this.state = {
      searchValue: "",
      cardArray: cardArray,
      valueFromSearch: "",
      industryFilters: [],
      durationDaysFilters: [],
      startDate: new Date().setDate(new Date().getDate() - 380), //inititalized as today minus 380 days
      endDate: new Date().setDate(new Date().getDate() + 180), //set initital date to be 80 days ahead of today's date
      sortHTML: "Sort By",
      sortSelection: "N",
      match: match,
      firstAPICallCompleted: false,
    };
  }

  handleChangeStartDate = (date) => {
    this.setState(
      {
        startDate: date,
      },
      () => this.refilter()
    );
  };

  handleChangeEndDate = (date) => {
    this.setState(
      {
        endDate: date,
      },
      () => this.refilter()
    );
  };

  refilter = () => {
    let filteredData = this.state.originalData;

    //filter the industries
    if (this.state.industryFilters.length !== 0) {
      console.log(filteredData);
      filteredData = filteredData.filter((dataElement) => {
        let bool = false;
        this.state.industryFilters.forEach((industry) => {
          if (dataElement.host.industry) {
            if (dataElement.host.industry.includes(industry)) {
              bool = true;
            }
          }
        });

        return bool;
      });
    }

    //filter durations
    if (this.state.durationDaysFilters.length !== 0) {
      filteredData = filteredData.filter((dataElement) => {
        let bool = false;
        this.state.durationDaysFilters.forEach((durationDays) => {
          if (durationDays > 2 && dataElement.durationDays > 2) {
            bool = true;
          } else if (dataElement.durationDays == durationDays) {
            bool = true;
          }
        });

        return bool;
      });
    }

    //filter dates
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    filteredData = filteredData.filter((dataElement) => {
      let bool = false;
      let from = new Date(dataElement.availableFrom);
      let to = new Date(dataElement.availableTill);
      if (
        new Date(from).getTime() >= new Date(startDate).getTime() &&
        new Date(endDate).getTime() >= new Date(to).getTime()
      ) {
        bool = true;
      }

      return bool;
    });

    ///finally sort the data
    if (this.state.sortSelection.localeCompare("L") === 0) {
      this.sortByKeyL(filteredData, "price");
    } else if (this.state.sortSelection.localeCompare("H") === 0) {
      this.sortByKeyH(filteredData, "price");
    }

    let filteredDataHTML = []; //temp array to be store HTML elements by processing filteredData
    let match = this.state.match;
    for (var i = 0; i < filteredData.length; i += 2) {
      if (i + 1 < filteredData.length) {
        filteredDataHTML.push(
          <div className="row ">
              <div
                  className="card col-lg-4 offset-lg-1"
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i]._id}>
                    <Card
                      image={filteredData[i].image}
                      id={filteredData[i]._id}
                      city={filteredData[i].city}
                      profession={filteredData[i].profession}
                      price={filteredData[i].price}
                      durationDays={filteredData[i].durationDays}
                    />
                  </Link>
                  
                </div>
                <div
                  className="card col-lg-4  offset-lg-1 "
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i+1]._id}>       

                    <Card
                      image={filteredData[i + 1].image}
                      id={filteredData[i + 1]._id}
                      city={filteredData[i + 1].city}
                      profession={filteredData[i + 1].profession}
                      price={filteredData[i + 1].price}
                      durationDays={filteredData[i + 1].durationDays}
                    />
                    </Link>

                </div>
          </div>

        );
      } else {
        filteredDataHTML.push(
          <Link to={`${match.url}/1`}>
            <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
                <div className="">
                  <Card
                    image={filteredData[i].image}
                    id={filteredData[i]._id}
                    city={filteredData[i].city}
                    profession={filteredData[i].profession}
                    price={filteredData[i].price}
                    durationDays={filteredData[i].durationDays}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }
    // Then we use that to set the state for list
    this.setState({
      cardArray: filteredDataHTML,
      currentDataJSON: filteredData,
    });
  };

  updateIndustryFilters = (e) => {
    if (e.target.classList.contains("disabled")) {
      e.target.classList.remove("disabled");
    } else {
      e.target.classList.add("disabled");
    }

    //check if this filter is already inside the filter array. if found then delete it else add it
    var found = false;
    let tempArr = this.state.industryFilters;
    tempArr.forEach((filter, i) => {
      if (filter.localeCompare(e.target.innerHTML) === 0) {
        found = true;
        tempArr.splice(i, 1);
      }
    });
    if (found === false) {
      tempArr.push(e.target.innerHTML);
    }
    console.log(tempArr)
    this.setState({ industryFilters: tempArr }, () => {
      this.refilter();
    });
  };

  sortByKeyL(array, key) { //helper function for refilter method
    return array.sort(function (a, b) {
      var x = parseInt(a[key].substring(1));
      var y = parseInt(b[key].substring(1));
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  sortLow = () => { //called by onclick function of sort button. Sorts current data without the need to call refilter
    let filteredData = this.state.currentDataJSON;

    this.sortByKeyL(filteredData, "price");

    let filteredDataHTML = [];
    let match = this.state.match;
    for (var i = 0; i < filteredData.length; i += 2) {
      if (i + 1 < filteredData.length) {
        filteredDataHTML.push(
          <div className="row ">
                <div
                  className="card col-lg-4 offset-lg-1"
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i]._id}>
                    <Card
                      image={filteredData[i].image}
                      id={filteredData[i]._id}
                      city={filteredData[i].city}
                      profession={filteredData[i].profession}
                      price={filteredData[i].price}
                      durationDays={filteredData[i].durationDays}
                    />
                  </Link>
                  
                </div>
                <div
                  className="card col-lg-4  offset-lg-1 "
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i+1]._id}>       

                    <Card
                      image={filteredData[i + 1].image}
                      id={filteredData[i + 1]._id}
                      city={filteredData[i + 1].city}
                      profession={filteredData[i + 1].profession}
                      price={filteredData[i + 1].price}
                      durationDays={filteredData[i + 1].durationDays}
                    />
                    </Link>

                </div>
          </div>
        );
      } else {
        filteredDataHTML.push(
          <Link to={`${match.url}/1`}>
            <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
                <div className="">
                  <Card
                    image={filteredData[i].image}
                    id={filteredData[i]._id}
                    city={filteredData[i].city}
                    profession={filteredData[i].profession}
                    price={filteredData[i].price}
                    durationDays={filteredData[i].durationDays}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }

    this.setState({
      cardArray: filteredDataHTML,
      sortHTML: "Price: Low to High",
      sortSelection: "L",
    });
  };

  sortByKeyH(array, key) { //helper function for refilter method
    return array.sort(function (a, b) {
      var x = parseInt(a[key].substring(1));
      var y = parseInt(b[key].substring(1));
      return y < x ? -1 : y > x ? 1 : 0;
    });
  }

  sortHigh = () => { //called by onclick function of sort button. Sorts current data without the need to call refilter
    let filteredData = this.state.currentDataJSON;

    this.sortByKeyH(filteredData, "price");

    let filteredDataHTML = [];
    let match = this.state.match;
    for (var i = 0; i < filteredData.length; i += 2) {
      if (i + 1 < filteredData.length) {
        filteredDataHTML.push(
          <div className="row ">
              <div
                  className="card col-lg-4 offset-lg-1"
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i]._id}>
                    <Card
                      image={filteredData[i].image}
                      id={filteredData[i]._id}
                      city={filteredData[i].city}
                      profession={filteredData[i].profession}
                      price={filteredData[i].price}
                      durationDays={filteredData[i].durationDays}
                    />
                  </Link>
                  
                </div>
                <div
                  className="card col-lg-4  offset-lg-1 "
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i+1]._id}>       

                    <Card
                      image={filteredData[i + 1].image}
                      id={filteredData[i + 1]._id}
                      city={filteredData[i + 1].city}
                      profession={filteredData[i + 1].profession}
                      price={filteredData[i + 1].price}
                      durationDays={filteredData[i + 1].durationDays}
                    />
                    </Link>

                </div>
          </div>
        );
      } else {
        filteredDataHTML.push(
          <Link to={`${match.url}/1`}>
            <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
                <div className="">
                  <Card
                    image={filteredData[i].image}
                    id={filteredData[i]._id}
                    city={filteredData[i].city}
                    profession={filteredData[i].profession}
                    price={filteredData[i].price}
                    durationDays={filteredData[i].durationDays}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }

    this.setState({
      cardArray: filteredDataHTML,
      sortHTML: "Price: High to Low",
      sortSelection: "H",
    });
  };

  sortUndo = () => { //called by onclick function of sort button. Sorts current data without the need to call refilter
    let filteredData = this.state.currentDataJSON;

    let dataToUse = this.state.currentDataJSON;
    this.filterIndustry();


    let filteredDataHTML = [];
    let match = this.state.match;
    for (var i = 0; i < filteredData.length; i += 2) {
      if (i + 1 < filteredData.length) {
        filteredDataHTML.push(
          <Link to={`${match.url}/` + filteredData[i]._id}>
            <div className="row ">
              <div
                className="card col-lg-4 offset-lg-1"
                style={{ padding: "2%" }}
              >
                <Card
                  image={filteredData[i].image}
                  id={filteredData[i]._id}
                  city={filteredData[i].city}
                  profession={filteredData[i].profession}
                  price={filteredData[i].price}
                  durationDays={filteredData[i].durationDays}
                />
              </div>

              <div
                className="card col-lg-4  offset-lg-1 "
                style={{ padding: "2%" }}
              >
                <Card
                  image={filteredData[i + 1].image}
                  id={filteredData[i + 1]._id}
                  city={filteredData[i + 1].city}
                  profession={filteredData[i + 1].profession}
                  price={filteredData[i + 1].price}
                  durationDays={filteredData[i + 1].durationDays}
                />
              </div>
            </div>
          </Link>
        );
      } else {
        filteredDataHTML.push(
          <Link to={`${match.url}/1`}>
            <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
                <div className="">
                  <Card
                    image={filteredData[i].image}
                    id={filteredData[i]._id}
                    city={filteredData[i].city}
                    profession={filteredData[i].profession}
                    price={filteredData[i].price}
                    durationDays={filteredData[i].durationDays}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }

    this.setState({
      cardArray: filteredDataHTML,
      sortHTML: "Sort By",
      sortSelection: "N",
    });
  };


  handleInputChange = (event) => { //for searchbar
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  search = () => {
    var fuse = new Fuse(this.state.originalData, {
      keys: ["industry", "profession", "city"],
    });

    const results = fuse
      .search(this.state.searchValue)
      .map((result) => result.item);

    this.setState({ currentDataJSON: results }, () => {
      this.refilter();
    });
  };

  updateDurationFilters = (e) => {
    if (e.target.classList.contains("disabled")) {
      e.target.classList.remove("disabled");
    } else {
      e.target.classList.add("disabled");
    }

    var found = false;
    let tempArr = this.state.durationDaysFilters;
    tempArr.forEach((filter, i) => {
      if (filter === parseInt(e.target.innerHTML)) {
        found = true;
      }
    });
    if (found === false) {
      tempArr.push(parseInt(e.target.innerHTML));
    }
    console.log(tempArr)
    this.setState({ durationDaysFilters: tempArr }, () => {
      this.refilter();
    });
  };

  displayAll = () => {
    let results = [];
    let filteredData = this.state.originalData;
    let match = this.state.match;
    for (var i = 0; i < filteredData.length; i += 2) {
      if (i + 1 < filteredData.length) {
        results.push(
          <div className="row ">
              <div
                  className="card col-lg-4 offset-lg-1"
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i]._id}>
                    <Card
                      image={filteredData[i].image}
                      id={filteredData[i]._id}
                      city={filteredData[i].city}
                      profession={filteredData[i].profession}
                      price={filteredData[i].price}
                      durationDays={filteredData[i].durationDays}
                    />
                  </Link>
                  
                </div>
                <div
                  className="card col-lg-4  offset-lg-1 "
                  style={{ padding: "2%" }}
                >
                  <Link to={`${match.url}/` + filteredData[i+1]._id}>       

                    <Card
                      image={filteredData[i + 1].image}
                      id={filteredData[i + 1]._id}
                      city={filteredData[i + 1].city}
                      profession={filteredData[i + 1].profession}
                      price={filteredData[i + 1].price}
                      durationDays={filteredData[i + 1].durationDays}
                    />
                    </Link>

                </div>
          </div>

        );
      } else {
        results.push(
          <Link to={`${match.url}/1`}>
            <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
                <div className="">
                  <Card
                    image={filteredData[i].image}
                    id={filteredData[i]._id}
                    city={filteredData[i].city}
                    profession={filteredData[i].profession}
                    price={filteredData[i].price}
                    durationDays={filteredData[i].durationDays}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }

    this.setState({ cardArray: results, currentDataJSON: filteredData });
  };

  render() {
    let results = [];
    if (this.state.cardArray.length === 0) {
      results.push(
        <div className="row h-100 offset-2 pb-5">
          <div
            className="col-sm-12 my-auto"
            style={{
              fontFamily: "Mplus 1p",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "163.35%",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#150433",
            }}
          >
            <p> Oops, we couldn't find any matches </p>
          </div>
          <div
            className="col-sm-12 my-auto"
            style={{
              fontFamily: "Mplus 1p",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "19.8px",
              lineHeight: "32px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#150433",
            }}
          >
            <p> Please try searching with another filter or term </p>
          </div>
          <div className="col-sm-12 my-auto" style={{}}>
            <button
              onClick={this.displayAll}
              style={{
                border: "2px solid #150433",
                boxSizing: "border-box",
                borderRadius: "36px",
                background: "white",
                fontFamily: "Mplus 1p",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "15.5px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "2px",
                color: "#150433",
              }}
            >
              {" "}
              View All Experiences{" "}
            </button>
          </div>
        </div>
      );
    } else if (!this.state.cardArray.includes("something")) {
      results = this.state.cardArray;
    }
    return (
      <div>
        {!this.state.currentDataJSON ? (
          <h1> Loading</h1>
        ) : (
          <div>
            <Navbar className="mb-5" textColor={"black"} />

            <div className="mt-5"> </div>

            <div className=" row mt-3 pt-5 " style={{ marginTop: "10%" }}>
              <div className=" searchArea col-12">
                <div className="search">
                  <h1
                    className="text-center pt-4"
                    style={{
                      color: "white",
                      fontSize: "200%",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    Start Your next Journey{" "}
                  </h1>
                  <div className="d-flex justify-content-center">
                    <div className="input-group pt-2">
                      <input
                        id="addInput"
                        type="text"
                        className="form-control"
                        value={this.state.searchValue}
                        name="searchValue"
                        onChange={this.handleInputChange}
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button
                          class="btn btn-secondary"
                          type="button"
                          onClick={this.search}
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row pt-5 " style={{ paddingLeft: "5%" }}>
                    <p
                      className="col-lg-1 col-3 mt-1 mr-5"
                      style={{
                        fontFamily: "Mplus 1p",
                        fontStyle: "normal",
                        fontWeight: "800",
                        fontSize: "16.6px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#000000",
                        background: "",
                        padding: "0.1%",
                      }}
                    >
                      {" "}
                      Industry{" "}
                    </p>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2"
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateIndustryFilters(e)}
                    >
                      Education
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateIndustryFilters(e)}
                    >
                      Engineering
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateIndustryFilters(e)}
                    >
                      Art and Design
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateIndustryFilters(e)}
                    >
                      Healthcare
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateIndustryFilters(e)}
                    >
                      Food
                    </Button>
                  </div>

                  <div className="row pt-5 " style={{ paddingLeft: "5%" }}>
                    <p
                      className="col-lg-2 col-md-3 col-3 mt-1 mr-2"
                      style={{
                        fontFamily: "Mplus 1p",
                        fontStyle: "normal",
                        fontWeight: "800",
                        fontSize: "16.6px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#000000",
                        background: "",
                        padding: "0.1%",
                      }}
                    >
                      {" "}
                      Duration{" "}
                    </p>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2"
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateDurationFilters(e)}
                    >
                      1 Day
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateDurationFilters(e)}
                    >
                      2 Days
                    </Button>
                    <Button
                      className="col-lg-2 col-md-3 col-3  mr-2 "
                      style={{ background: "#c73abc", height: "40%" }}
                      onClick={(e) => this.updateDurationFilters(e)}
                    >
                      3 Days+
                    </Button>
                  </div>

                  <div className="row pt-4 mt-4">
                    <div className="col-lg-3 offset-1">
                      <label>
                        <p
                          style={{
                            fontFamily: "Mplus 1p",
                            fontStyle: "normal",
                            fontWeight: "800",
                            fontSize: "15.6px",
                            lineHeight: "26px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "#000000",
                            background: "",
                            padding: "0.1%",
                          }}
                        >
                          From:
                        </p>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChangeStartDate}
                        />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-calendar"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </label>
                    </div>

                    <div className="col-lg-3 col-sm-10 offset-sm-1 col-10 offset-1">
                      <label>
                        <p
                          style={{
                            fontFamily: "Mplus 1p",
                            fontStyle: "normal",
                            fontWeight: "800",
                            fontSize: "15.6px",
                            lineHeight: "26px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "#000000",
                            background: "",
                            padding: "0.1%",
                          }}
                        >
                          To:
                        </p>

                        <DatePicker
                          selected={this.state.endDate}
                          onChange={this.handleChangeEndDate}
                        />
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-calendar"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-lg-2" style={{ marginLeft: "4%" }}>
                <div class="btn-group">
                  <button
                    style={{ background: "white", color: "black" }}
                    type="button"
                    id="bvAtt"
                    class="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.sortHTML}
                  </button>
                  <div class="dropdown-menu" id="dd1">
                    <a className="dropdown-item" onClick={this.sortLow}>
                      {" "}
                      Price: Low to High{" "}
                    </a>
                    <a className="dropdown-item" onClick={this.sortHigh}>
                      {" "}
                      Price: High to Low{" "}
                    </a>
                    <a className="dropdown-item" onClick={this.sortUndo}>
                      {" "}
                      Undo Sorting{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">{results}</div>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Explore);
