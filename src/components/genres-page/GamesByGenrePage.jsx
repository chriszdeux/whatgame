import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useShowContent } from '../../hooks/useShowContent'

export const GamesByGenrePage = () => {
  const [openContent, handleOpenContent] = useShowContent()
  return (
    <section>
      <h1>Acction</h1>
      <div className="genre__cards__grid">
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
      </div>
    </section>
  )
}
