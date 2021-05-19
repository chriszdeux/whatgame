import React from 'react'

export const MainImageGallery = ( {currentScreenshot} ) => {
  // debugger
  return (
    <figure className="main__image__gallery">
      <img className="main--gallery--image" src={ currentScreenshot } alt="horizon"/>
    </figure>
  )
}
