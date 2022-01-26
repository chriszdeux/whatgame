import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { useGetGameDetails } from '../../hooks/useFetchGame';
import { LoadingComponent } from '../loading/LoadingComponent';
import { DataContext } from '../../context/DataFetchContext';
import { FavSubmit } from '../helpers/FavSubmit';


export const CheckNow = ({ slug }) => {
  const { dispatch, handleOpenGameModal } = useContext( DataContext )
  // const [ openContent, handleOpenContent, animation ] = useShowContent()
  const { data, loading } = useGetGameDetails( slug );
  const { handleAdd, handleRemove, addToggle} = FavSubmit(data, dispatch)
  // debugger
  return (
    <div className="check__now animate__animated animate__fadeInUp">
      {
        !addToggle
        ?  <p onClick={ handleAdd }>Add</p>
        :  <p onClick={ handleRemove }>Remove</p>
        
      }
      <button 
        type="button"
        className="submit--button"
        onClick={ () => handleOpenGameModal({slug}) }
      > Check Now
      </button>
      <p>Info</p>
      
    </div>
  )
}
