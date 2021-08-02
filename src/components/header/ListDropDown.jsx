import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGenres } from '../../hooks/useFetchGame'
import { LoadingComponent } from '../loading/LoadingComponent'

export const ListDropDown = () => {
  // const { data, loading } = useFetchGenres()
  const { dataGenres, genreLoading } = useContext(DataContext)
  return (
    <ul className="drop__down__list">
      {
        genreLoading
          ? <LoadingComponent />
          : dataGenres.map(({id, name}) => (
            <li key={id} className="list--item">
              <Link>{ name }</Link>
            </li>
          ) )
      }
    </ul>
  )
}
