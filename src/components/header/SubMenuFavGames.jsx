import React from 'react'
import { Link } from 'react-router-dom'

export const SubMenuFavGames = ({ favoriteGames }) => {
  return (
    <ul className="fav__games__list">
      {
        favoriteGames.slice(0,6).reverse().map(item => (
          <li className="fav--games--item">
            {item.name}
          </li>
        ))
      }

      <li className="list--item ">
        <Link to="/favorite-games" className="btn__primary">
        View More
        </Link>
      </li>
    </ul>
  )
}
