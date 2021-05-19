import React from 'react'
import Horizon from '../../assets/horizon.jpg'
import { useGetGameDetails } from '../../hooks/useFetchGame';
import { GameDescription } from './GameDescription';
import { GameGallery } from './GameGallery';
import { GeneralInfo } from './GeneralInfo';
import { HeroImageModal } from './HeroImageModal';
import { useShowModal } from '../../hooks/useShowModal';
import { Rating } from './Rating';
import { Platforms } from './Platforms';


export const CardContent = ( { slug } ) => {
  const { detailsData, loading } = useGetGameDetails( slug );
  const { platforms } = detailsData
  const [ openModal, handleOpenModal ] = useShowModal();
  // debugger
  return (
    <div className="card__info">
        {
          loading
          ? <h2>loading</h2>
          : <div className="card__hero">
              <div className="card__main__content">
                <HeroImageModal detailsData={ detailsData }/>
                {/* <div className="bottom--fade"></div> */}
                <GeneralInfo detailsData={ detailsData }/>
              </div>
              <button 
                className="submit--button"
                onClick={ handleOpenModal }
              >Read more </button>
              {
                openModal && <GameDescription detailsData={ detailsData }/>
              }
              
              <GameGallery detailsData={ detailsData } />
              <Rating detailsData={ detailsData }/>
              <Platforms platforms={ platforms }/>
              {/* remember to split platform and people say component then implement them right here   */}
            </div>
        }
    </div>
  )
}
