import React from "react";
import svg from "./arrow-right-solid.svg";
const RightArrow = ({ goToNextSlide, coolButtons }) => {
  return (
    <div className="right-arrow" onClick={goToNextSlide}>
      <img src={svg} style={{ width: "50%" }} />
    </div>
  );
};

export default RightArrow;
