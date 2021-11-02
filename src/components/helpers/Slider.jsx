import React, { useRef } from 'react'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
export const Slider = ( { refSlider } ) => {
  // const ref = useRef( null )

  const handleRightArrow = (  moveToLeft  ) => {
    refSlider.current.scrollLeft += moveToLeft;
  }

  const handleLeftArrow = (  moveToRight  ) => {
    refSlider.current.scrollLeft -= moveToRight;
  }


  return (
    <div className="slider">
      <LeftArrow 
        className="left--arrow"
        onClick={ () => handleLeftArrow(1100) }
      />
      <RightArrow 
        className="right--arrow"
        onClick={ () => handleRightArrow(1100) }
      />
    </div>
  )
}
