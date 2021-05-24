import React, { useState } from 'react';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useGetGameDetails } from '../../hooks/useFetchGame';


export const CheckNow = ({ slug }) => {

  const [ openContent, handleOpenContent ] = useShowContent()
  const { detailsData, loading } = useGetGameDetails( slug );
  // debugger
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
        style={{ backgroundImage:`url(${detailsData.image})` }}
      >
        {
          loading 
            ? <h2>LOADING</h2>
            : <CardContent detailsData={ detailsData }/>
        }
        <CloseIcon 
          className="close--icon"
          onClick={ handleOpenContent }
        />
      </Modal>
    </div>
  )
}
