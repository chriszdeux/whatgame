import React from 'react'
import { GallerySelector } from './GallerySelector'
import { MainImageGallery } from './MainImageGallery'

export const GameGallery = ({ Horizon }) => {
  return (
    <div className="game__gallery">
      <h3 className="game--subtitles">Gallery</h3>
      <MainImageGallery Horizon={ Horizon } />
      <GallerySelector Horizon={ Horizon } />
    </div>
  )
}
