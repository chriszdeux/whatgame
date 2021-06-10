import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'
import { SuggestionsSearch } from './SuggestionsSearch'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
import { LoadingComponent } from '../loading/LoadingComponent'
import { Pagination } from '../pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'

export const SearchPage = () => {
  const { searchGame } = useContext( DataContext )

  const {handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage} = usePagination(  )
  
  useEffect(() => {
    setPage(searchGame)
  }, [ searchGame ])

  const { data, loading } = useGetGamesByName( page )
  
  const  next  = !!data &&data[1]
  const  previous  = !!data &&data[2]

  useEffect(() => {
    setMyLoad(loading)
    // setCurrentPage( 1 )
  }, [ data ])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchGame])
  // debugger
  let cleanedGames = [] 
  
  if(data[0]) {
    // debugger
    cleanedGames = data[0].filter(game => {
        // console.log(game.slug)
      // debugger
      if (game.slug.includes(searchGame)) return game.rating_star >= 1
    })
  }

  // for(let i = 1; i <=10; i++) {
  //   pages.push(i);
  // }
  // debugger
  return (
    
      <>
      {
        myLoad 
          ? <LoadingComponent />
          : <section className="second__container games__list">
          <ResultHeader cleanedGames={ cleanedGames } data={ data }/> 
          <div className="cards__medium__container">
              {
                data[0].map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                ))
              }
            </div>
            <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/>
      
    </section>
      }
            </>
  )
}
