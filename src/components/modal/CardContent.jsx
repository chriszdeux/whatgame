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
          ? <LoadingComponent data={ slug }/>
          : <div className="card__hero animate__animated animate__fadeIn">
              <div className="card__main__content">
                <HeroImageModal data={ data }/>
                <GeneralInfo data={ data }/>
              </div>
              <a
                className="submit--button"
                onClick={ handleOpenModal }
                href="#description--game"
              > {
                !openContent ? 'Read More' : 'Read Less'
              } </a>
              {
                openContent && <GameDescription  data={ data }/>
              }
              
              <GameGallery data={ data } />
              <Rating data={ data }/>
              <Platforms platforms={ platforms }/>
            </div>
        }
    </div>
  )
}
