/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
import "./Home.css"
import NavbarHome from "./NavbarHome"


export default class Homepage extends React.Component{

  render(){


  return(
    <div className='StoryPage'>
     <NavbarHome />

    <div className='StoryCover'>

          <div className="headLine">
                <h3 className="AreYouReady"> Are You Ready </h3>
                <h3 className='nextCareerText'>Your next career<br/> starts with an <br/> adventure</h3>
          </div>


          <div className="adventureButtonFrame">
                <a href="#" className="adventureButton">Where is your next adventure going to be?       </a>
          </div>


    </div>

    </div>

  );
}
}
