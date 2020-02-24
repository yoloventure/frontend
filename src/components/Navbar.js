/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router} from 'react-router-dom'


class Navbar extends React.Component{


  render(){
    const styles = {
       color: ""
    }

      if (this.props.textColor==="white") {

        styles.color = "white"
      }else{
        styles.color="black"
      }
  return(

    <div className="navbar navbar-expand-lg navbar-dark bg-transparent ">
     <a className="navbar-brand" href="#" style={{color:"#F2C94C"}}>YOLOSHADOW</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <a className="nav-link" style={styles} href="/Explore">Explore <span className="sr-only">(current)</span></a>
         </li>
         <li className="nav-item active">
           <a className="nav-link" style={styles} href="#">Story</a>
         </li>
    {  /*   <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
             <a className="dropdown-item" href="#">Another action</a>
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </li> */}
         <li className="nav-item active">
           <a className="nav-link " style={styles} href="#">Host an Experience</a>
         </li>
         <li className="nav-item active">
           <a className="nav-link " style={styles} href="#">About</a>
         </li>
         <li className="nav-item active">
           <a className="nav-link " style={styles} href="#">Contact Us</a>
         </li>
       </ul>
      {/*} <div className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </div>*/}
     </div>
   </div>

  );
}
}

export default Navbar
