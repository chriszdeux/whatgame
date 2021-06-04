import React from 'react'

export const Rating = ({data }) => {

  const { people_say } = data;
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
          {
            orderRating.map(rating => (
              <li key={  rating.id } className={ `game--${rating.title}` } style={{width: `${rating.percent}%`}}></li>
            ))
          }

        </ul>
        <ul className="rating__tags">
          {
            orderRating.map(rating => (
              <li key={rating.id} className="rating--tag"> {rating.title} <div className={ `square--${rating.title}` }></div></li>
            ))
          }
        </ul>
      </div>
  )
}
