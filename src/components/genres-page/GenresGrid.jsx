import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { GenreCard } from './GenreCard'

export const GenresGrid = () => {
  
  const { dataGenre, seeStateGenre } = useContext( DataContext )
  // debugger
  return (
    <section className="genre__grid">
      {
        dataGenre.map(genre => (
          <GenreCard genre={ genre }/>
        ))
      }
    </section>
  )
}
