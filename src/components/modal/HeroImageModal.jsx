import React from 'react'
import { RatingStar } from './RatingStar'

export const HeroImageModal = ({Horizon}) => {
  return (
    <>
      {/* <div className="bottom--fade"></div> */}
    <figure className="game__img">
      <img className="card--image" src={ Horizon } alt="resident"/>
      <div className="rating__stars">
        {/* <div className="bottom--fade"></div> */}
        <h2 className="card--title">Videogame name</h2>
        <RatingStar />
      </div>
    </figure>
    </>
  )
}
