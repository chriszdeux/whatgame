import React, { useContext, useEffect, useMemo, useState, memo } from 'react'
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
import { LoadingComponentSmall } from '../loading/LoadingComponentSmall';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';


export const CardContent = React.memo(( ) => {
// debugger
  const { handleAdd , gameModalInfo, animation} = useContext(DataContext)
  // debugger
  const { slug } = !!gameModalInfo && gameModalInfo
  // debugger
  const { data, loading } = useGetGameDetails( slug );
  const { platforms } = data
  useEffect(() => {

  }, [data])
// debugger
  // useEffect(() => {
  //   console.log('card--content--data')
  // }, [data])
  // useEffect(() => {
  //   console.log('card--content--values')
  // }, [values])

  const [handleData, setHandleData] = useState()
  // useMemo(() => handleData(data), input)
  const handleDataMemo = () => {
    setHandleData(data)
  }

  const dataMemo = useMemo(() => handleDataMemo, [ gameModalInfo ])
  // const { openContent, handleOpenModal } = useContext(DataContext)
// const { openContent, handleOpenModal } = useContext(DataContext)

  const [ openContent, handleOpenModal ] = useShowContent()
  // debugger
  return (
    <div className={ `card__info ` }>
        {
          loading
          ? <LoadingComponentSmall data={ slug }/>
          : <div className={ `card__hero ${ animation ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut' }` }>
            
              <div className="card__main__content">
                
                <HeroImageModal data={ data }/>
                <GeneralInfo data={ data }/>
                
              </div>
              <button
                className="submit--button"
                onClick={ handleOpenModal }
                href="#description--game"
              > {
                !openContent ? 'Read More' : 'Read Less'
              } </button>
              {
                openContent && <GameDescription  data={ data }/>
              }
              
              <GameGallery data={ data } />
              <Rating data={ data }/>
              <Platforms platforms={ platforms }/>
              
              {/* <BackgroundAnimation /> */}
            </div>
        }
    </div>
  )
}
)