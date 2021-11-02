import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoadingComponent } from '../loading/LoadingComponent';

export const GallerySelector = ({ values }) => {
  const { item:{ screenshot }, setCurrentScreenshot, index  } = values
  // const {screenshot, name} = screenshots;
  // debugger
  // debugger
  const handleLoad = () => {
    return <LoadingComponent />
  }
  return (
    <figure className="game__gallery__selection">
      <LazyLoadImage 
        className="selection--image" src={ screenshot } 
        onClick={() => setCurrentScreenshot(index)}
        effect="opacity"
      //  afterLoad={ handleLoad }
      // visibleByDefault={ Image.src === '' }
        />
    </figure>
  )
}
