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

export default class Explore extends React.Component{
  constructor(props) {
    super(props)
    let  Cards=[];
    this.state = {
      Cards:Cards,
      valueFromSearch:'',
      valueFromStartDate: '',
      valueFromEndDate: ''
    }

    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        Cards.push(
        <div class="row">
        <div className="card col">
        <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>
        <div className="card col">
        <Card image={data[i+1].image} id={data[i+1].id} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>
        </div>)
        }else{
          Cards.push(
          <div class="row">
          <div className="card col">
          <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>)
        }
    }
  }

  render(){

    return (
      <div>

        <Navbar textColor={'black'} />


          <div className="row">
                <div className="col">
                    <div className="search">
                        <h1 className="pl-5 pt-2" style={{color:"white", fontSize:"200%"}}>Start Your next Journey </h1>
                        <div class="input-group pt-2">
                            <input type="text" class="form-control" placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button">
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
                                        <a className='dropdown-item' onclick='filterIndustry(event)'> Low to High </a>
                                        <a className='dropdown-item' onclick='filterIndustry(event)'> High to Low </a>


                                    </div>
                                  </div>
                              </div>
                              <div className='col-lg-2'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter By Industry
                                  </button>
                                  <div class="dropdown-menu" id="dd1">
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Education </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Engineering </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Art & Design </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Healthcare </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Food </a>

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
                                  <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text" id="inputGroup-sizing-default">From</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                </div>

                                <div className='col-lg-3'>
                                  <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text" id="inputGroup-sizing-default">To</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                </div>





                            </div>
                    </div>
                    {this.state.Cards}
                </div>
                <div className="col offset-4">
                     <img src={mapImage}/>
                </div>
          </div>





      </div>

    );



}
}
