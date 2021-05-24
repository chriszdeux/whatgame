import React from 'react'

export const GeneralInfo = ({ detailsData }) => {
  const { publishers, released, metacritic, clasification, genre } = detailsData;
  // if(clasification.name || publishers)
  // debugger
  return (
    <div className="game__info">
      <p className="info--title">Publisher: { publishers.map(publisher => ( 
        publisher.name && <span key={ publisher.id }>{publisher.name}</span> )) }</p>

      <p className="info--title">Release-Date: <span>{ released }</span></p>
      <p className="info--title">Metacritic: <span>{ metacritic }</span></p>
      {
        clasification !== null && <p className="info--title">ESRB: <span>{ clasification.name }</span></p>
      }
      <p className="info--title">Gender: <span>{ genre.map(genre => `${genre.name} `)  }</span></p>
    </div>
  )
}
