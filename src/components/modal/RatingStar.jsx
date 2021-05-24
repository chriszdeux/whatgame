import React from 'react'
import { RiStarFill as StarIcon} from 'react-icons/ri';

export const RatingStar = ({ rating, index }) => {
  const ratingStars = []
  // const myRating = 
  if( rating ) {
    for(let i = 0; i < Math.round(rating); i++) {
     ratingStars.push(<StarIcon key={index} className="star--icon"/>)
     }
  }
  // return ratingStars
  // debugger
  return (
    <div className="rating--star">
      {
        ratingStars
      }
    </div>
  )
}
