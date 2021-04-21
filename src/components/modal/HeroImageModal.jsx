import React from 'react'
import { RiStarFill as StarIcon} from 'react-icons/ri';

export const HeroImageModal = ({Horizon}) => {
  return (
    <figure className="game__img">
      <img className="card--image" src={ Horizon } alt="resident"/>
      {/* <div className="bottom--fade"></div> */}
      <h2 className="card--title">Videogame name</h2>
    <div className="ratin__stars">
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
      <StarIcon className="star--icon"/>
    </div>
    </figure>
  )
}
