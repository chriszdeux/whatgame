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
import { useFullData } from '../../hooks/useFullData'
import { ShowMoreButton } from '../helpers/ShowMoreButton'

export const SearchPage = () => {
  const { searchGame } = useContext( DataContext )

  const {handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage, loadMoreGames, setLoadMoreGames} = usePagination(  )
  
  useEffect(() => {
    setPage(searchGame)
  }, [ searchGame ])

  const { data, loading } = useGetGamesByName( page )
  const { moreLoad, pagination, fullData, setMoreLoad } = useFullData(data)
  
  const { next } = !!pagination && pagination
  useEffect(() => {
    setMyLoad(loading)
  }, [ data ])

  // useEffect(() => {
    
  // }, [ loading ])

  useEffect(() => {
    // setCurrentPage(1)
    setMyLoad(true)
    setMoreLoad([])
    setLoadMoreGames(false)
  }, [searchGame])

  useEffect(() => {
    setLoadMoreGames(false)
  }, [ fullData ])
  
  // debugger
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

  // const handleLoadingMoreGames = () => {

  // }

  // for(let i = 1; i <=10; i++) {
  //   pages.push(i);
  // }
  // debugger
  
  return (
    
      <>
      {
        myLoad 
          ? <LoadingComponent data={ searchGame }/>
          : <section className="second__container games__list">
          <ResultHeader page={ page }/> 
          <div className="cards__medium__container">
              {
                fullData.map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                ))
              }
            </div>
            <ShowMoreButton className="animate__animated animate__fadeIn" myData={ {next, handleNextPage, loadMoreGames} }/>
            {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
            </section>
      }
            </>
  )
}
