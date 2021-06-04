import React from 'react'
import { RiStarFill as StarIcon} from 'react-icons/ri';

export const RatingStar = ({ rating_star, index }) => {
  let ratingStars = []
  // const myRating = 
  if( rating_star ) {
    for(let i = 0; i < Math.round(rating_star); i++) {
     ratingStars.push(<StarIcon key={i} className="star--icon"/>)
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
