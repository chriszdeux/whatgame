import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchGenres } from '../../hooks/useFetchGame'

export const ListDropDown = () => {
  const { data, loading } = useFetchGenres()
  return (
    <ul className="drop__down__list">
      {
        loading
          ? <h2>loading...</h2>
          : data.map(({id, name}) => (
            <li key={id} className="list--item">
              <Link>{ name }</Link>
            </li>
          ) )
      }
    </ul>
  )
}
