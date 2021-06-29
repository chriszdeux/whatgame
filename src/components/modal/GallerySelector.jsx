import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoadingComponent } from '../loading/LoadingComponent';

export const GallerySelector = ({ screenshots, setCurrentScreenshot }) => {
  const {screenshot, name} = screenshots;
  // debugger
  const handleLoad = () => {
    return <LoadingComponent />
  }
  return (
    <figure className="game__gallery__selection">
      <LazyLoadImage 
        className="selection--image" src={ screenshot } alt={ name }
        onClick={() => setCurrentScreenshot(screenshot)}
        effect="opacity"
      //  afterLoad={ handleLoad }
      // visibleByDefault={ Image.src === '' }
        />
    </figure>
  )
}
