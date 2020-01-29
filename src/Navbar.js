/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
import "./Navbar.css"
import { BrowserRouter as Router} from 'react-router-dom'

class Navbar extends React.Component{

  render(){
  return(

   <div className= "navFrame">
      <ul  className="nav">
              <a className="YOLO" href="/">YOLO</a>
              <a className="Explore" href="/explore">Explore</a>
              <a className="Story" href="#">Story</a>
              <a className="About" href="#">Story</a>
              <a className="HostExp" href="#">Host An Experience</a>
              <a className="Contact" href="#">Contact</a>
      </ul>
  </div>

  );
}
}

export default Navbar
