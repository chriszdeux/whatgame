import React, { useState } from 'react';
import Modal from 'react-modal';
import { useShowModal } from '../../hooks/useShowModal';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';


export const CheckNow = () => {

  const [ openModal, handleOpenModal ] = useShowModal()

  return (
    <div className="check__now">
      <p>Add</p>
      <button 
        type="button"
        className="submit--button"
        onClick={ handleOpenModal }
      > Check Now
      </button>
      <p>Info</p>
      <Modal
        isOpen={ openModal }
        // onAfterOpen={ handleToggleContent }
        onRequestClose={ handleOpenModal }
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <CardContent />
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenModal }
        />
      </Modal>
    </div>
  )
}
