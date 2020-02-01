/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
import "./NavbarHome.css"
import { BrowserRouter as Router} from 'react-router-dom'

class NavbarHome extends React.Component{

  render(){
  return(

   <div>
      <ul  className="navHome">
              <a className="YOLOHome" href="/">YOLO</a>
              <a className="ExploreHome" href="/explore">Explore</a>
              <a className="StoryHome" href="#">Story</a>
              <a className="AboutHome" href="#">Story</a>
              <a className="HostExpHome" href="#">Host An Experience</a>
              <a className="ContactHome" href="#">Contact</a>
      </ul>
  </div>

  );
}
}

export default NavbarHome
