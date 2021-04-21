import React from 'react'

export const GallerySelector = ({ Horizon }) => {
  return (
    <figure className="game__gallery__selection">
      <img className="selection--image" src={ Horizon } alt="horizon"/>
      <img className="selection--image" src={ Horizon } alt="horizon"/>
      <img className="selection--image active--selection" src={ Horizon } alt="horizon"/>
      <img className="selection--image" src={ Horizon } alt="horizon"/>
      <img className="selection--image" src={ Horizon } alt="horizon"/>
      <img className="selection--image" src={ Horizon } alt="horizon"/>
    </figure>
  )
}
