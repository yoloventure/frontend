import React from 'react'

const RightArrow = ({ goToNextSlide, coolButtons }) => {
  return (
    <div className={coolButtons ? 'right-arrow cool-buttons' : 'right-arrow'} onClick={goToNextSlide}>
        <img src={require("./arrow-right-solid.svg")} style={{width:'50%'}} />
    </div>
  )
}

export default RightArrow
