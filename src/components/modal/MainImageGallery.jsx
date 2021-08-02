import React from 'react'

export const MainImageGallery = ( {currentScreenshot} ) => {
  // debugger
  return (
    <figure className="main__image__gallery animate__animated animate__fadeIn">
      <img className="main--gallery--image" src={ currentScreenshot } alt="horizon"/>
    </figure>
  )
}
