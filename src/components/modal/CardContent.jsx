import React, { useContext } from 'react'
import Horizon from '../../assets/horizon.jpg'
import { useGetGameDetails } from '../../hooks/useFetchGame';
import { GameDescription } from './GameDescription';
import { GameGallery } from './GameGallery';
import { GeneralInfo } from './GeneralInfo';
import { HeroImageModal } from './HeroImageModal';
import { useShowContent } from '../../hooks/useShowContent';
import { Rating } from './Rating';
import { Platforms } from './Platforms';
import { DataContext } from '../../context/DataFetchContext';
import { LoadingComponent } from '../loading/LoadingComponent';


export const CardContent = ( { slug } ) => {
  const { data, loading } = useGetGameDetails( slug );
  const { platforms } = data
  // const { openContent, handleOpenModal } = useContext(DataContext)
const  [openContent, handleOpenModal] = useShowContent()
  // debugger
  return (
    <div className="card__info">
        {
          loading
          ? <LoadingComponent />
          : <div className="card__hero animate__animated animate__fadeIn">
              <div className="card__main__content">
                <HeroImageModal data={ data }/>
                {/* <div className="bottom--fade"></div> */}
                <GeneralInfo data={ data }/>
              </div>
              <button 
                className="submit--button"
                onClick={ handleOpenModal }
              > {
                !openContent ? 'Read More' : 'Read Less'
              } </button>
              {
                openContent && <GameDescription data={ data }/>
              }
              
              <GameGallery data={ data } />
              <Rating data={ data }/>
              <Platforms platforms={ platforms }/>
              {/* remember to split platform and people say component then implement them right here   */}
            </div>
        }
    </div>
  )
}
