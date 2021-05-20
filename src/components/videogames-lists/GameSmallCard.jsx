import React from 'react';
import Modal from 'react-modal';
import Horizon from '../../assets/horizon.jpg';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const GameSmallCard = ({listGame}) => {
  const [openContent, handleOpenModal] = useShowContent()
  // debugger
  const { image, name, slug } = listGame;
  // debugger
 
  return (
    <article className="game__small__card">
      <figure 
        className="game__small__container"
      >
        <LazyLoadImage 
          className="game--image--small" 
          src={ image } 
          alt={ name }
          onClick={ handleOpenModal } 
          effect="opacity"
        />

        <Modal
          isOpen={ openContent }
          onRequestClose={ handleOpenModal }
          ariaHideApp={false}
          className="Modal "
          overlayClassName="Overlay"
          
        >
          <CardContent slug={ slug }/>
          <CloseIcon 
            className="close--icon animate__animated animate__fadeIn"
            onClick={ handleOpenModal }
          />
        </Modal>
      </figure>
    </article>
  )
}
