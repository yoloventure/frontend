/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar"
import Slider from "../components/Slider";
import FooterPage from "../components/footer";


export default class FeatureStory extends React.Component {
  render() {
    return (
      <div className="FeatureStory">
          <div className="nav">
            <Navbar textColor={'black'}/>
          </div>
        <div className="pt-5 mt-2">
          <Slider />
        </div>
        <FooterPage />
      </div>
    );
  }
}
