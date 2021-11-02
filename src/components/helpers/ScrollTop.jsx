import React from 'react'
import { FaArrowAltCircleUp as GoUp } from 'react-icons/fa';
import { useScrollTop } from '../../hooks/useScrollTop';

export const ScrollTop = () => {
  const { scrollTop } = useScrollTop()
  return (
    <div className="to__up">
      <GoUp 
        className="up--arrow"
        onClick={ scrollTop } 
      />
      <div className="wave"></div>
      <div className="wave2"></div>
      <div className="wave3"></div>
    </div>
  )
}
