/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";

import Slider from "../components/Slider";
import "./FeatureStory.css";

export default class FeatureStory extends React.Component {
  render() {
    return (
      <div className="FeatureStory">
        <div className="FeatureStoryTitle">
          <h2>
            {" "}
            What is it like to <br />
            be a chef in Japan?{" "}
          </h2>
        </div>
        <div className="FeatureStorySlider">
          <Slider />
        </div>
      </div>
    );
  }
}
