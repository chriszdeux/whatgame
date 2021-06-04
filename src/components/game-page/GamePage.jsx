import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'
import { SuggestionsSearch } from './SuggestionsSearch'

export const GamePage = () => {
  // const { resultData, loading } = useContext ( DataContext )
  // debugger
  const { searchGame } = useContext( DataContext )
  const { data, loading } = useGetGamesByName( searchGame )
  // debugger
  // const { name, image, rating, rating_star, slug } = !!data && data
  useEffect(() => {
    // setFilterData( resultData.filter(game => {
      //   return game.rating > 0
      // }) )
    }, [ searchGame ])
    // debugger

  // let orderByReleasedDate = []
  // if(data) {
  //   orderByReleasedDate = data.sort((a, b) =>  {
  //     if(a.metacritic < b.metacritic) return 1
  //     if(a.metacritic > b.metacritic) return -1
  //   })
  // }
  // debugger
  let cleanedGames = [] 
  useEffect(() => {

  }, [ cleanedGames ])
  if(data) {
    // debugger
    cleanedGames = data.filter(game => {
        // console.log(game.slug)
      // debugger
      if (game.slug.includes(searchGame)) return game.rating_star >= 1
    })
  }

  // let calification = []
  // if(rating >= 4) {
  //   calification.push(<h2 className="calification high--rate--color">{ rating }</h2>)
  // } else if ( rating >= 3 && rating < 4 ) {
  //   calification.push(<h2 className="calification medium--rate--color">{ rating }</h2>)
  // } else {
  //   calification.push(<h2 className="calification low--rate--color">{ rating }</h2>)
  // }
  // debugger
  return (
    <section className="second__container games__list">
      <ResultHeader cleanedGames={ cleanedGames } data={ data }/> 
      {
        loading 
          ? <h2 className="loading">loading</h2>
          : <div className="cards__medium__container">
              {
                cleanedGames.map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                ))
              }
            </div>
      }
      
    </section>
  )
}
