import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchGenres } from '../../hooks/useFetchGame'

export const ListDropDown = () => {
  const { dataGenre, loading } = useFetchGenres()
  return (
    <ul className="drop__down__list">
      {
        loading
          ? <h2>loading...</h2>
          : dataGenre.map(({id, name}) => (
            <li key={id} className="list--item">
              <Link>{ name }</Link>
            </li>
          ) )
      }
    </ul>
  )
}
