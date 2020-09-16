import React from 'react'


const Slide = ({ image }) => {
  const stylesImg = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  return(

    <div className="slide" >

     <img src={image}/>

  </div>
)
}

export default Slide
