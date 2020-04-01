/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import "./Explore.css";
import data from "../explore/data.json";
import Card from "../components/Card";
import mapImage from "../photos/map.png"
import searchArrow from "../photos/searchArrow.png"

export default class Explore extends React.Component{
  constructor(props) {
    super(props)
    let  Cards=[];
    this.state = {
      Cards:Cards
    }

    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        Cards.push(
        <div class="row">
        <div className="card col">
        <Card image={data[i].image} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>
        <div className="card col">
        <Card image={data[i+1].image} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>
        </div>)
        }else{
          Cards.push(
          <div class="row">
          <div className="card col">
          <Card image={data[i].image} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>)
        }
    }
  }

  render(){

    return (
      <div>

        <Navbar textColor={'black'} />

          {/*
          <ul id="subnav">
            <li>
              <a id="industry" href="#">
                {" "}
                Industry{" "}
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Education{" "}
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Engineering
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Arts & Design
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Healthcare
              </a>
            </li>
            <li>
              <a className="subitem" href="#">
                Food
              </a>
            </li>
          </ul>

          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <input
                type="text"
                placeholder="Dates."
                id="myInput"
                onKeyUp="filterFunction()"
              />
              <a href="#about">About</a>
              <a href="#base">Base</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <a href="#custom">Custom</a>
              <a href="#support">Support</a>
              <a href="#tools">Tools</a>
            </div>
          </div> */}



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
