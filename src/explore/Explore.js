/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import "./Explore.css";
import data from "../explore/data.json";
import Card from "../components/Card";
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";
import  Link  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Explore extends React.Component{
  // componentDidMount() {
  //   this._isMounted=true
  //   this.setState
  // }
  // componentWillUnmount() {
  //   this._isMounted=false
  //
  // }
  constructor(props) {
    super(props)
    this._isMounted=false
    let  Cards=[];
    this.state = {
      Cards:Cards,
      valueFromSearch:'',
      valueFromStartDate: '',
      valueFromEndDate: '',
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterIndustry = this.filterIndustry.bind(this);

    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        Cards.push(
        <div className="row " >

        <div className="card col-lg-4 col-sm-6" style={{padding:'2%'}}>
        <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>


        <div className="card col-lg-4 col-sm-6 offset-1 " style={{padding:'2%'}}>
        <Card image={data[i+1].image} id={data[i+1].id} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>

        </div>);

        }else{
          Cards.push(
          <div className="row ">
          <div className="card col ">
          <div className=''>
          <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>

          </div>)
        }
    }
  }

  handleChange = date => {
  this.setState({
    startDate: date
  });
  };
  // displayCards(e){
  //     // Prevent button click from submitting form
  //    e.preventDefault();
  //
  //    // Create variables for our list, the item to add, and our form
  //    let Cards = this.state.Cards;
  //    const newItem = document.getElementById("addInput");
  //    const form = document.getElementById("addItemForm");
  //
  //    // If our input has a value
  //    if (newItem.value != "") {
  //      // Add the new item to the end of our list array
  //      list.push(newItem.value);
  //      // Then we use that to set the state for list
  //      this.setState({
  //        list: list
  //      });
  //      // Finally, we need to reset the form
  //      newItem.classList.remove("is-danger");
  //      form.reset();
  //    } else {
  //      // If the input doesn't have a value, make the border red since it's required
  //      newItem.classList.add("is-danger");
  //    }
  // }

  filterIndustry(e){
    //Prevent button click from submitting form
    //  e.preventDefault();
      console.log("i was called")
      // Create variables for our list, the item to add, and our form

      const targetId = e.target.id;
      let newItem=document.getElementById(targetId).innerHTML
      console.log(newItem)
      console.log(data)
      let filteredData=(data.filter(dataElement => dataElement.industry.includes(newItem)))
      let Cards2=[]
      for(var i=0; i<filteredData.length;i+=2){
          if(i+1<filteredData.length){
          Cards2.push(
          <div className="row " >

          <div className="card col-lg-4 col-sm-6" style={{padding:'2%'}}>
          <Card image={filteredData[i].image} id={filteredData[i].id} location={filteredData[i].location} profession={filteredData[i].profession} price={filteredData[i].price} duration={filteredData[i].duration}/>
          {console.log(filteredData[i].image)}
          </div>


          <div className="card col-lg-4 col-sm-6 offset-1 " style={{padding:'2%'}}>
          <Card image={filteredData[i+1].image} id={filteredData[i+1].id} location={filteredData[i+1].location} profession={filteredData[i+1].profession} price={filteredData[i+1].price} duration={filteredData[i+1].duration}/>
          </div>

          </div>);

          }else{
            Cards2.push(
            <div className="row ">
            <div className="card col ">
            <div className=''>
            <Card image={filteredData[i].image} id={filteredData[i].id} location={filteredData[i].location} profession={filteredData[i].profession} price={filteredData[i].price} duration={filteredData[i].duration}/>
            </div>
            </div>

            </div>)
          }
      }
          console.log(Cards2)
        // Then we use that to set the state for list
        this.setState({
          Cards: Cards2
        });

  }

  render(){

    return (
      <div>

        <Navbar textColor={'black'} auth={this.props.auth}/>


          <div className=" row mt-3 pt-5">
                <div className=" searchArea col-12" >
                    <div className="search">
                        <h1 className="pl-5 pt-4" style={{color:"white", fontSize:"200%"}}>Start Your next Journey </h1>
                        <div class="input-group pt-2">
                            <input id="addInput" type="text" class="form-control" placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button" onClick="this.displayCards">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                        </div>
                        <div className='row pt-5'>
                              <div className='col-lg-2 offset-1'>
                                  <div class="btn-group">
                                    <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Sort By Price
                                    </button>
                                    <div class="dropdown-menu" id="dd1">
                                        <a className='dropdown-item' onClick='this.filterIndustry'> Low to High </a>
                                        <a className='dropdown-item' onClick='this.filterIndustry'> High to Low </a>


                                    </div>
                                  </div>
                              </div>
                              <div className='col-lg-2'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter By Industry
                                  </button>
                                  <div class="dropdown-menu" id="dd1">
                                      <a id='i1' className='dropdown-item' onClick={this.filterIndustry}>Education</a>
                                      <a id='i2' className='dropdown-item' onClick={this.filterIndustry}>Engineering</a>
                                      <a id='i3' className='dropdown-item' onClick={this.filterIndustry}>Art and Design</a>
                                      <a id='i4' className='dropdown-item' onClick={this.filterIndustry}>Healthcare</a>
                                      <a id='i5' className='dropdown-item' onClick={this.filterIndustry}>Food</a>

                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id='bsAtt' class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Filter By Duration
                                  </button>
                                  <div class="dropdown-menu" id="dd2">
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Less than 3 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 3 to 5 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 5 to 7 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 7 to 9 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Greater than 9 days </a>
                                  </div>
                                </div>
                              </div>


                          </div>
                          <div className='row pt-4'>
                                <div className='col-lg-1 offset-1'>
                                  <h3 style={{fontSize:"160%"}} className='pt-1 pr-5'>Date:</h3>

                                </div>
                                <div className='col-lg-3'>
                                    <button type="button">From:</button>
                                      <DatePicker
                                       selected={this.state.startDate}
                                       onChange={this.handleChange}
                                     />
                                </div>

                                <div className='col-lg-3'>
                                      <button type="button">To:</button>
                                      <DatePicker
                                       selected={this.state.startDate}
                                       onChange={this.handleChange}
                                     />
                                </div>





                            </div>

                    </div>

                </div>


                <div className='pt-5' style={{paddingLeft:'10%'}}>
                {this.state.Cards}
                </div>

          </div>





      </div>

    );



}
}
