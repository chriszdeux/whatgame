import React from 'react'
import { GallerySelector } from './GallerySelector'
import { MainImageGallery } from './MainImageGallery'
import { Platforms } from './Platforms'

export const GameGallery = ({ Horizon }) => {
  return (
    <div className="game__gallery">
      <h3 className="game--subtitles">Gallery</h3>
      <MainImageGallery Horizon={ Horizon } />
      <div className="carousel__item">
        <GallerySelector Horizon={ Horizon } />
        <GallerySelector Horizon={ Horizon } />
        <GallerySelector Horizon={ Horizon } />
        <GallerySelector Horizon={ Horizon } />
        <GallerySelector Horizon={ Horizon } />
        <GallerySelector Horizon={ Horizon } />
      </div>
      <Platforms />
      <div className="game__char__rating">
        <h3 className="game--subtitles">What People Say</h3>
        <ul className="game__char">
          <li className="game--exceptional"></li>
          <li className="game--recommended"></li>
          <li className="game--meh"></li>
          <li className="game--skip"></li>
        </ul>
        <ul className="rating__tags">
          <li className="rating--tag">Exceptional <div className="square--exceptional"></div></li>
          <li className="rating--tag">Recommended <div className="square--recommended"></div></li>
          <li className="rating--tag">Meh <div className="square--meh"></div></li>
          <li className="rating--tag">Skip <div className="square--skip"></div></li>
        </ul>
      </div>
    </div>
  )
}
