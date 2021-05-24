import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { GenreCard } from './GenreCard'

export const GenresGrid = () => {
  
  const { data, setStateGenre } = useContext( DataContext )
  // debugger
  return (
    <section className="genre__grid">
      {
        data.map(genre => (
          <GenreCard genre={ genre }/>
        ))
      }
    </section>
  )
}
