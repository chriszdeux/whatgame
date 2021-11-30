import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Horizon from '../../assets/horizon.jpg';
import { useShowContent } from '../../hooks/useShowContent';
import { CardContent } from '../modal/CardContent';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { resizeFile } from '../../data/fetchGames';
import { useResizeImage } from '../../hooks/useFetchGame';
import { DataContext } from '../../context/DataFetchContext';


export const GameSmallCard = React.memo(({item}) => {
  const [openContent, handleOpenModal, animation] = useShowContent()
  const { setHandleModal } = useContext(DataContext)
  const { name, slug, image } = item

  useEffect(() => {
    setHandleModal({
      openContent, name, slug, handleOpenModal, animation
    })
  }, [item])
 
  return (
    // <article className="game__small__card">
      <li className="game__small__container">
    
        <figure 
          className="game__small__container animate__animated animate__fadeIn"
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
            overlayClassName="Overlay--cards"
            
            >
            <CloseIcon 
              className="close--icon animate__animated animate__fadeIn"
              onClick={ handleOpenModal }
              />
            <CardContent values={{ slug, animation }}/>
          </Modal>
          {/* <fgcaption  */}
          <fgcaption className="game--name">{name}</fgcaption>
        </figure>
      </li>
      
    // </article>
  )
}
)