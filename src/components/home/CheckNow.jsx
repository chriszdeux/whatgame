import React, { useState } from 'react';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';


export const CheckNow = ({ slug }) => {

  const [ openContent, handleOpenContent ] = useShowContent()

  return (
    <div className="check__now">
      <p>Add</p>
      <button 
        type="button"
        className="submit--button"
        onClick={ handleOpenContent }
      > Check Now
      </button>
      <p>Info</p>
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
    </div>
  )
}
