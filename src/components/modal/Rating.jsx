import React, { useEffect, useState } from 'react'

export const Rating = ({data }) => {

  const [orderingRating, setOrderingRating] = useState()
  const { people_say } = data;
  // const orderRating = people_say.sort((a,b) => {
  //   // return return

  // })
  
  useEffect(() => {
    setOrderingRating( people_say.sort((a,b) => {
      if( a.id < b.id ) return 1
      if( a.id > b.id ) return -1
    }) )
    // console.log(orderingRating)
  }, [ data ])
  // const {}

  // debugger
  return (
      <div className="game__char__rating">
        <h3 className="game--subtitles">What People Say</h3>
        {
          orderingRating !== undefined &&
        <>        
          <ul className="game__char">
            {
              orderingRating.map(rating => (
                <li key={  rating.id } className={ `game--${rating.title}` } style={{width: `${rating.percent}%`}}></li>
              ))
            }

          </ul>
          <ul className="rating__tags">
            {
              orderingRating.map(rating => (
                <li key={rating.id} className="rating--tag"> {rating.title} <div className={ `square--${rating.title}` }></div></li>
              ))
            }
          </ul>
        </>
        }
      </div>
  )
}
