import React from 'react';
import Modal from 'react-modal';
import Horizon from '../../assets/horizon.jpg';
import { useShowModal } from '../../hooks/useShowModal';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';


export const GameSmallCard = ({}) => {
  const [openModal, handleOpenModal] = useShowModal()
  return (
    <article className="game__small__card">
      <figure 
        className="game__small__container"
      >
        <img 
          className="game--image--small" 
          src={Horizon} 
          alt="videogame"
          onClick={ handleOpenModal } 
        />

        <Modal
          isOpen={ openModal }
          onRequestClose={ handleOpenModal }
          ariaHideApp={false}
          className="Modal "
          overlayClassName="Overlay"
          
        >
          <CardContent />
          <CloseIcon 
            className="close--icon animate__animated animate__fadeOut"
            onClick={ handleOpenModal }
          />
        </Modal>
      </figure>
    </article>
  )
}
