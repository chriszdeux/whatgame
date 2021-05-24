import React from 'react'
import { RatingStar } from './RatingStar'

export const HeroImageModal = ( {detailsData} ) => {
  const { slug, name, image, rating_star, rating } = detailsData;
  // debugger
  return (
    <>
    <figure className="game__img">
      <img className="card--image" src={ image } alt={ slug }/>
      <div className="rating__stars">
        <h2 className="card--title">{ name }</h2>
        <RatingStar rating={ rating }/>
      </div>
    </figure>
    </>
  )
}
