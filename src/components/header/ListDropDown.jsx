import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchGenres } from '../../hooks/useFetchGame'
import { LoadingComponent } from '../loading/LoadingComponent'

export const ListDropDown = () => {
  const { data, loading } = useFetchGenres()
  return (
    <ul className="drop__down__list">
      {
        loading
          ? <LoadingComponent />
          : data.map(({id, name}) => (
            <li key={id} className="list--item">
              <Link>{ name }</Link>
            </li>
          ) )
      }
    </ul>
  )
}
