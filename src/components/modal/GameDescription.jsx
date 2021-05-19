import React from 'react'

export const GameDescription = ({ detailsData }) => {
  const { description } = detailsData;
  // debugger
  return (
    <div className="game__description">
      <h3 className="game--subtitles">Description</h3>
      <p className="game--description">{ description }</p>
    </div>
  )
}
