import React, { useEffect } from 'react'

export const GameDescription = ({ data }) => {
  const { description } = data;
  // console.log('game--description')
  // useEffect(() => {
  // }, [data])
  // debugger
  return (
    <div id="description--game" className="game__description animate__animated animate__fadeIn">
      <h3 className="game--subtitles">Description</h3>
      <p className="game--description">{ description }</p>
    </div>
  )
}
