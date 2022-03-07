import React from 'react'

const background = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/whatgame%2Fbackground.png?alt=media&token=6a1a0b57-d43e-4593-aa46-24807f63570b'

export const BackgroundAnimation = () => {
  return (
    <div className="home__animation animate__animated animate__fadeIn">
      <figure className='background__image'>
        <img src={ background } alt="" />
      </figure>
      {/* <div className="home__details">
        <div className="home--detail--1"></div>
        <div className="home--detail--2"></div>
        <div className="home--detail--3"></div>
      </div>
      <div className="home__details__reverse">
        <div className="home--detail--1"></div>
        <div className="home--detail--2"></div>
        <div className="home--detail--3"></div>
      </div> */}
    </div>
  )
}
