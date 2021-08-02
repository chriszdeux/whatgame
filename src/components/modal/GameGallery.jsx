import React, { useEffect, useState } from 'react'
import { useGetScreenshots } from '../../hooks/useFetchGame'
import { LoadingComponent } from '../loading/LoadingComponent'
import { GallerySelector } from './GallerySelector'
import { MainImageGallery } from './MainImageGallery'
import { Platforms } from './Platforms'

export const GameGallery = ({ data }) => {
  const { image, image2, name, slug } = data;
  const { screenshotData, loading } = useGetScreenshots( slug )
  // const { screenshot } = loading!== true && screenshotData[0]
  // debugger
  const [currentScreenshot, setCurrentScreenshot] = useState( image2 )
  // useEffect(() => {
  //   setTimeout(() => {
  //     <MainImageGallery />
  //   }, 2000)
  // }, [ currentScreenshot ])
  return (
    <div className="game__gallery">
      <h3 className="game--subtitles">Gallery</h3>
      <MainImageGallery currentScreenshot={ currentScreenshot } className="animate__animated animate__fadeIn"/>
      <div className="carousel__item">
        {
          screenshotData.map( screenshots => (
            <GallerySelector 
              key={screenshots.id} 
              screenshots={screenshots}
              setCurrentScreenshot={setCurrentScreenshot}
            />
          ))
        }
        </div>  
      
      {/* <Platforms platforms={ platforms }/> */}
      
    </div>
  )
}
