/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
import "./Home.css"
import NavbarHome from "./NavbarHome"
import midSectionHome from './midSectionHome'
import Slider from './components/Slider'


export default class Homepage extends React.Component{

  render(){


  return(
    <div>
    <div class='container'>
               <div class='row'>
                         <div class='col '>


                                  <div className='StoryCover'>
                                              <NavbarHome />
                                              <div className="headLine">
                                                    <h3 className="AreYouReady"> Are You Ready </h3>
                                                    <h3 className='nextCareerText'>Your next career<br/> starts with an <br/> adventure</h3>
                                              </div>

                                                  <a href="#" className='adventureButton' >Where is your next adventure going to be?       </a>

                                              <div className='Cover'>
                                                     <div className='CoverPicture'>

                                                      </div>
                                              </div>

                                    </div>

                          </div>
              </div>


       </div>






      <div class='container'>
        <Slider/>
      </div>
      <div class='container'>
        <midSectionHome/>
      </div>
      </div>

  );
}
}
