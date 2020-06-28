/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar"
import Slider from "../components/Slider";
import FooterPage from "../components/Footer";


export default class FeatureStory extends React.Component {
  render() {
    return (
      <div className="FeatureStory p-0 m-0">
          <div className="nav">
            <Navbar textColor={'black'} />
          </div>
        <div className="pt-5 mt-2">
          <Slider />
        </div>
        <FooterPage p-0 m-0 />
      </div>
    );
  }
}
