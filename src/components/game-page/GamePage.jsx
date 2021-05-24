import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'

export const GamePage = () => {
  // const { resultData, loading } = useContext ( DataContext )
  // debugger
  const { searchGame } = useContext( DataContext )
  const { resultData, loading } = useGetGamesByName( searchGame )
  // debugger
  useEffect(() => {
    // setFilterData( resultData.filter(game => {
    //   return game.rating > 0
    // }) )
  }, [ searchGame ])

  let orderByReleasedDate = []
  if(resultData) {
    orderByReleasedDate = resultData.sort((a, b) =>  {
      if(a.released < b.released) return 1
      if(a.released > b.released) return -1
    })
  }

  const cleanedGames = orderByReleasedDate.filter(game => {
    return game.rating >= 1 
  })
  // debugger
  return (
    <section className="second__container games__list">
      <ResultHeader /> 
      {
        loading 
          ? <h2 className="loading">loading</h2>
          : <div className="cards__medium__container">
              {
                cleanedGames.map( game => (
                  <GameMediumCard  className="animate__animated animate__fadeIn" game={ game }/>
                ))
              }
            </div>
      }
      
    </section>
  )
}
