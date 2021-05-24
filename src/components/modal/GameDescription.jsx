import React from 'react'

export const GameDescription = ({ detailsData }) => {
  const { description } = detailsData;
  // debugger
  return (
    <div className="game__description animate__animated animate__fadeIn">
      <h3 className="game--subtitles">Description</h3>
      <p className="game--description">{ description }</p>
    </div>
  )
}
