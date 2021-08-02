import React, { useState } from 'react';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useGetGameDetails } from '../../hooks/useFetchGame';
import { LoadingComponent } from '../loading/LoadingComponent';


export const CheckNow = ({ slug }) => {

  const [ openContent, handleOpenContent, animation ] = useShowContent()
  const { data, loading } = useGetGameDetails( slug );
  // debugger
  return (
    <div className="check__now animate__animated animate__fadeInUp">
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
        overlayClassName="Overlay--cards"
        ariaHideApp={false}
        style={{ backgroundImage:`url(${data.image})` }}
      >
        {
          loading 
            ? <LoadingComponent />
            : <CardContent values={{ animation, slug }}/>
        }
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal>
    </div>
  )
}
