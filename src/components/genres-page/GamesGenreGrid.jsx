import React, { useEffect } from 'react'
import { useGamesByGenre } from '../../hooks/useFetchGame'
import { LoadingComponent } from '../loading/LoadingComponent'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'

export const GamesGenreGrid = ({ slug }) => {
  const { data, loading } = useGamesByGenre( slug )
  // debugger
  useEffect(() => {

  },[  slug ])
  return (
    <>
      <h2 className="list--title">{ slug }</h2>
    {
      slug == undefined
        ? <LoadingComponent />
        :
        <section className="genre__games__grid second__container animate__animated animate__fadeIn">
         {
           !loading && data.map(data => (
            <GameMediumCard data={ data }/>
           ))
         }
        </section>
    }
    </>
  )
}
