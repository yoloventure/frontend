import React from 'react'

const LeftArrow = ({ prevSlide, coolButtons }) => {
  return (
    <div className={coolButtons ? 'left-arrow cool-buttons' : 'left-arrow'} onClick={prevSlide}>
      <img src={require("./arrow-left-solid.svg")} style={{width:'50%'}} />
    </div>
  )
}

export default LeftArrow
