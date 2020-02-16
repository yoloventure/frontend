/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
// import "./Home.css"
import Navbar from "./Navbar"
import midSectionHome from './midSectionHome.js'
import Slider from './components/Slider'
import homeArrow from './homeArrow.png'
import Background from './CoverPhoto.png'


export default class Homepage extends React.Component{

  render(){


  return(




      <div className=''>
            <div style={{backgroundImage: "url(" + Background + ")"}}>
                      <div className='col-12  pt-4 pl-5'>

                          <Navbar textColor={"white"}/>

                      </div>
                      <div className='row '>
                            <div className='offset-1 pt-4'>
                            <h4 className="" style={{color:"white"}}> Are You Ready? </h4>
                            </div>
                      </div>
                      <div className='row '>
                            <div className='offset-1 pt-4'>
                            <h3 className='' style={{fontSize:'600%', color:"white"}}>Your next career<br/><span style={{color:"#F2C94C"}}> starts with an <br/> adventure </span>  </h3>
                            </div>
                      </div>

                      <div className='row '>
                        <div className=' row offset-1 pt-4' style={{background: "rgba(255, 255, 255, 0.31)",border: "5px solid #000000",boxSizing:"border-box"}}>
                           <div className="col-10">
                            <a href="#" className='' style={{color:"#F2F9FC", fontSize:"110%"}} >Where is your next adventure going to be? </a>
                          </div>
                              <div className="col-2 pb-2" >
                              <a href="#">  <img src={homeArrow}></img></a>
                              </div>
                          </div>
                      </div>
              </div>
          <div className='row '>
                <Slider/>
          </div>
              <div className='row ' >
                                        <div> We are amazing </div>
                                        <h2> Why Yolo </h2>
                                        <div>YOLO empowers me to become an adventurer. </div>

                                          <img class = "image1" src="" alt="logo1"/>
                                        <div> Adventurous </div>
                                        <div>Yolo empowers me to be an adventurer </div>



                                          <img class = "image1" src="" alt="logo2"/>
                                        <div> Trustworthy </div>
                                        <div>Learn directly from experts who can inspire you to pursue your passions </div>

                                          <img class = "image1" src="" alt="logo3"/>
                                        <div> Connections </div>
                                        <div> Connect with inspiring professionals across a variety of industries </div>

                                          <img class = "image1" src="" alt="logo3"/>
                                        <div> Resources </div>
                                        <div> Learn directly from experts who can inspire you to pursue your passions</div>

                                          <img class = "image1" src="" alt="logo3"/>
                                        <div> Connections </div>
                                        <div> Connect with inspiring professionals across a variety of industries </div>

                                          <img class = "image1" src="" alt="logo3"/>
                                        <div> Connections </div>
                                        <div> Yolo empowers me to become an explorer</div>
                    </div>



      </div>






  );
}
}
