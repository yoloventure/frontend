import React from 'react'
import svg from "./arrow-left-solid.svg"
const LeftArrow = ({ prevSlide, coolButtons }) => {
  return (
    <div className='left-arrow' onClick={prevSlide}>
      <img src={svg} style={{width:'50%'}} />
    </div>
  )
}

export default LeftArrow
