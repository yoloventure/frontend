import React from "react";
import "./bottom.css";

const Slide = ({ image }) => {
  const stylesImg = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
  };

  return (
    <div className="slide">
      <img className="slidepic" src={image} />
    </div>
  );
};

export default Slide;
