import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { GameList } from '../videogames-lists/GameList'
import { GenreCard } from './GenreCard'

export const GenresGrid = (  ) => {
  
  const { data, gamesByGenre } = useContext( DataContext )
  debugger
  return (
    <section className="genre__grid animate__animated animate__fadeIn">
        {
          data.map(genre => (
            <GenreCard 
              genre={ genre }
              
            />
          ))
        }
      {/* <div>
      {
        data.map(genre => (
          <GameList key={genre.id} genre={genre}/>
        ))
      }
      </div> */}
    </section>
  )
}
