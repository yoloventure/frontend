import React from "react";
import Navbar from "../components/Navbar";


function CreateHostExp(props){
  return(
    <div>
    <Navbar textColor={"black"} auth={props.auth}/>
    </div>
  );
}
export default CreateHostExp;
