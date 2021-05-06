import React from 'react'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import Horizon from '../../assets/horizon.jpg'
import { GameDescription } from './GameDescription';
import { GameGallery } from './GameGallery';
import { GeneralInfo } from './GeneralInfo';
import { HeroImageModal } from './HeroImageModal';
export const CardContent = () => {
  return (
    <div className="card__info">
        <div className="card__hero">
          <div className="card__main__content">
            <HeroImageModal Horizon={ Horizon }/>
            <GeneralInfo />
          </div>
          <button className="submit--button">Read more</button>
          <GameDescription />
          <GameGallery Horizon={ Horizon } />
        </div>
        <CloseIcon className="close--icon"/>
    </div>
  )
}
