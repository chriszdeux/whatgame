import React from 'react'

export const MainImageGallery = ( {values} ) => {
  // debugger
  const { screenshotData, currentScreenshot } = values
  const { screenshot, name } = !!screenshotData && screenshotData[currentScreenshot]
  // debugger
  return (
    <figure className="main__image__gallery animate__animated animate__fadeIn">
      <img className="main--gallery--image" src={ screenshot } alt={ name }/>
    </figure>
  )
}
