import React from 'react'
import { useFetchGames } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'

export const GamePage = () => {
  const { loading, data } = useFetchGames();
  return (
    <section className="second__container games__list">
      <ResultHeader /> 
      {
        loading 
          ? <h2>loading</h2>
          : <div className="cards__medium__container">
              {
                data.map( game => (
                  <GameMediumCard game={ game }/>
                ))
              }
            </div>
      }
      
    </section>
  )
}
