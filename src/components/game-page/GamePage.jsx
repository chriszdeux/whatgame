import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/UseResultsGamesContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'

export const GamePage = () => {
  // const { loading, data } = useFetchGames();
  // use getGamesByName
  const { resultData, loading } = useContext ( SearchContext )
  // debugger
  useEffect(() => {

  }, [resultData])
  return (
    <section className="second__container games__list">
      <ResultHeader /> 
      {
        loading 
          ? <h2>loading</h2>
          : <div className="cards__medium__container">
              {
                resultData.map( game => (
                  <GameMediumCard game={ game }/>
                ))
              }
            </div>
      }
      
    </section>
  )
}
