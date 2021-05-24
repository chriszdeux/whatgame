import React from 'react'
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useShowContent } from '../../hooks/useShowContent'
import Modal from 'react-modal'

export const GenreCard = ({ genre }) => {
  const [openContent, handleOpenModal] = useShowContent();

  const { image, name } =  genre
  return (
    <article className="genre__card">
      <figure 
        className="gender__img"
      >
        <div className="fade--bottom"></div>
        <LazyLoadImage 
          className="gender--image" 
          src={ image } 
          alt={ name }
          // onClick={ handleOpenModal } 
          effect="opacity"
        />
        
        <Modal
          isOpen={ openContent }
          onRequestClose={ handleOpenModal }
          ariaHideApp={false}
          className="Modal "
          overlayClassName="Overlay"
          
        >
          <CloseIcon 
            className="close--icon animate__animated animate__fadeIn"
            onClick={ handleOpenModal }
          />
          {/* <CardContent slug={ slug }/> */}
        </Modal>
        <caption className="genre--name">{name}</caption>
      </figure>
    </article>
  )
}
