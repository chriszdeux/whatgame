import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const GallerySelector = ({ screenshots, setCurrentScreenshot }) => {
  const {screenshot, name} = screenshots;
  // debugger
  return (
    <figure className="game__gallery__selection">
      <LazyLoadImage 
        className="selection--image" src={ screenshot } alt={ name }
        onClick={() => setCurrentScreenshot(screenshot)}
        effect="opacity"
        />
    </figure>
  )
}
