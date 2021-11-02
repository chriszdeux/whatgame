import React from 'react'

export const Platforms = ( { platforms } ) => {
  // debugger
  // console.log('platforms')
  return (
    <div className="game__platforms">
      <h3 className="game--subtitles">Platforms</h3>
      <ul className="platforms">
        {
          platforms.map(({ platform }) => (
            <li key={platform.id} className="platform--item">{ platform.name }</li>
          ))
        }
      </ul>
    </div>
  )
}
