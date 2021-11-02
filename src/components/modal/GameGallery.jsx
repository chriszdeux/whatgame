import React, { useEffect, useRef, useState } from 'react'
import { useGetScreenshots } from '../../hooks/useFetchGame'
import { Slider } from '../helpers/Slider'
import { LoadingComponent } from '../loading/LoadingComponent'
import { LoadingText } from '../loading/LoadingText'
import { GallerySelector } from './GallerySelector'
import { MainImageGallery } from './MainImageGallery'
import { Platforms } from './Platforms'

export const GameGallery = ({ data }) => {
  const { image, image2, name, slug } = data;
  const { screenshotData, loading } = useGetScreenshots( slug )
  const refSlider = useRef()
  // const { screenshot } = loading!== true && screenshotData[0]
  // debugger
  const [currentScreenshot, setCurrentScreenshot] = useState( 0 )
  // useEffect(() => {
  //   setTimeout(() => {
  //     <MainImageGallery />
  //   }, 2000)
  // }, [ currentScreenshot ])
  // debugger
  // console.log('game--gallery')
  // debugger
  return (
    <div className="game__gallery">
      <h3 className="game--subtitles">Gallery</h3>
      {
        !loading && 
          <MainImageGallery values={{ screenshotData, currentScreenshot }} className="animate__animated animate__fadeIn"/>
      }
      <Slider refSlider={ refSlider } />
      {
        loading
          ? <LoadingText />
          : <div className="carousel__item" ref={ refSlider }>
          {
            screenshotData.map( (item, index) => (
              <GallerySelector 
                key={item.id} 
                // screenshots={screenshots}
                // setCurrentScreenshot={setCurrentScreenshot}
                values={{ item, setCurrentScreenshot, index }}
              />
            ))
          }
          </div>  
      }
      
      {/* <Platforms platforms={ platforms }/> */}
      
    </div>
  )
}
