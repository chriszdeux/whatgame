import React from 'react'
import { RiStarFill as StarIcon} from 'react-icons/ri';

export const RatingStar = () => {
  return (
    <div className="rating--star">
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
    </div>
  )
}
