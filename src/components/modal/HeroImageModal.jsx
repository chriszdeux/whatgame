import React from 'react'
import { RatingStar } from './RatingStar'

export const HeroImageModal = ({Horizon}) => {
  return (
    <>
    <figure className="game__img">
      <img className="card--image" src={ Horizon } alt="resident"/>
      {/* <div className="bottom--fade"></div> */}
      {/* <div className="bottom--fade"></div> */}
      <div className="ratin__stars">
        <h2 className="card--title">Videogame name</h2>
        <RatingStar />
      </div>
    </figure>
    </>
  )
}
