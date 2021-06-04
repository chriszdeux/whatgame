import React, { useRef } from 'react'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
export const ArrowsSelectors = ({ handleRightArrow:handleArrows }) => {
  const {handleRightArrow, handleLeftArrow} = handleArrows
  // debugger
  return (
    <div className="arrrows__selector">
      <LeftArrow 
        className="left--arrow"
        onClick={ () => handleLeftArrow(1000) }
      />
      <RightArrow 
        className="right--arrow"
        onClick={ () => handleRightArrow(1000) }
      />
    </div>
  )
}


