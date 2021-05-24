import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Horizon from '../../assets/horizon.jpg';
import { RatingStar } from '../modal/RatingStar';
import { InteractiveButtons } from './InteractiveButtons';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

export const GameMediumCard = ({game}) => {
  const [ openContent, handleOpenContent ] = useShowContent()

  const { name, image, rating, rating_star, slug } = game
  
  // debugger
  let calification = []
  if(rating >= 4) {
    calification.push(<h2 className="calification high--rate--color">{ rating }</h2>)
  } else if ( rating >= 3 && rating < 4 ) {
    calification.push(<h2 className="calification medium--rate--color">{ rating }</h2>)
  } else {
    calification.push(<h2 className="calification low--rate--color">{ rating }</h2>)
  }

  return (
    <article className="game__medium__card">
      <figure className="game__medium__container">
        <LazyLoadImage 
          className="game--image--medium" src={ image } alt="videogame"
          effect="opacity" 
          onClick={ handleOpenContent }
        />
        
        

        {/* <InteractiveButtons /> */}
        {/* <div className="bottom--fade"></div> */}
      <div className="game__content">
        <h2 className="list--title">{ name }</h2>
        <div className="card__medium__info">
          {
            calification
          }
          <RatingStar rating={ rating }/>
        </div>
      </div>
      </figure>
      <Modal
        isOpen={ openContent }
        // onAfterOpen={ handleToggleContent }
        onRequestClose={ handleOpenContent }
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <CardContent slug={ slug }/>
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal>
    </article>
  )
}
