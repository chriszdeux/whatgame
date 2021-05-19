import React from 'react'

export const Rating = ({detailsData }) => {

  const { people_say } = detailsData;
  const orderRating = people_say.sort((a,b) => {
    if( a.id < b.id ) return 1
    if( a.id > b.id ) return -1
  })

  // const {}

  console.log(orderRating)
  // debugger
  return (
    <div className="game__char__rating">
        <h3 className="game--subtitles">What People Say</h3>
        <ul className="game__char">
          <li className="game--exceptional" style={{width: `${orderRating[0].percent}%`}}></li>
          <li className="game--recommended" style={{width: `${orderRating[1].percent}%`}}></li>
          <li className="game--meh" style={{width: `${orderRating[2].percent}%`}}></li>
          <li className="game--skip" style={{width: `${orderRating[3].percent}%`}}></li>
        </ul>
        <ul className="rating__tags">
          <li className="rating--tag">Exceptional <div className="square--exceptional"></div></li>
          <li className="rating--tag">Recommended <div className="square--recommended"></div></li>
          <li className="rating--tag">Meh <div className="square--meh"></div></li>
          <li className="rating--tag">Skip <div className="square--skip"></div></li>
        </ul>
      </div>
  )
}
