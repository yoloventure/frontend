/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import FooterPage from "../components/footer";

export default class FeatureStory extends React.Component {
  render() {
    return (
      <div className="FeatureStory p-0 m-0">
        <Helmet>
          <title>Story | YoloShadow</title> // insert dynamic title
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"} />
        </div>
        <div className="pt-5 mt-2">
          <Slider />
        </div>
        <FooterPage p-0 m-0 />
      </div>
    );
  }
}
