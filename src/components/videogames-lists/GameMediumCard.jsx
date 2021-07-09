import React from 'react'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Horizon from '../../assets/horizon.jpg';
import { RatingStar } from '../modal/RatingStar';
import { InteractiveButtons } from './InteractiveButtons';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LoadingComponent } from '../loading/LoadingComponent';
import { CgArrowsExpandUpRight } from 'react-icons/cg'

export const GameMediumCard = ({data}) => {
  const [ openContent, handleOpenContent ] = useShowContent()
  // debugger
  const { name, image, calification, metacritic, rating_star,  slug } = data
  // debugger
  // debugger
  // debugger
  let gameCalification = []
  if(metacritic >= 90 ) {
    gameCalification.push(<h2 key={1} className="calification high--rate--color">{ metacritic }</h2>)
  } else if ( metacritic >= 70 && metacritic < 90 ) {
    gameCalification.push(<h2 key={2} className="calification medium--rate--color">{ metacritic }</h2>)
  } else if(metacritic < 70){
    gameCalification.push(<h2 key={3} className="calification low--rate--color">{ metacritic }</h2>)
  }
  // debugger
  const handleLoading = () => {
    return <h1>LOADING////</h1>
  }
  return (
    <LazyLoadComponent className="game__medium__card" 
    >
      <figure className="game__medium__container">
        <LazyLoadImage 
          // placeholderSrc="../../assets/horizon.jpg"
          className="game--image--medium animate__animated animate__fadeIn"
          src={ image } alt="videogame"
          effect="opacity" 
          
          // beforeLoad={ () => handleLoading() }
          // visibleByDefault={ image.src === '../../assets/horizon.jpg' }
        />
        
      <div className="game__content animate__animated animate__fadeIn">
        <h2 className="list--title">{ name }</h2>
        <div className="card__medium__info">
          {
            gameCalification
          }
          <RatingStar rating_star={ rating_star }/>
          <CgArrowsExpandUpRight 
            className="dots"
            onClick={ handleOpenContent }
          />
        </div>
      </div>
        
      <div className="game--medium--name animate__animated animate__fadeIn">{ name }</div>

        {/* <InteractiveButtons /> */}
        {/* <div className="bottom--fade"></div> */}
      </figure>
      <Modal
        isOpen={ openContent }
        // onAfterOpen={ handleToggleContent }
        onRequestClose={ handleOpenContent }
        className="Modal"
        overlayClassName="Overlay--cards"
        ariaHideApp={false}
      >
        <CardContent slug={ slug }/>
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal>
    </LazyLoadComponent>
  )
}
